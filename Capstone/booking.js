document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;
        const barber = document.getElementById("barber").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push({ name, service, barber, date, time });
        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Appointment booked successfully!");
        bookingForm.reset();
    });
});
