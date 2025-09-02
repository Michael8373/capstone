document.addEventListener("DOMContentLoaded", () => {
    const appointmentList = document.getElementById("upcoming-appointments");
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    appointmentList.innerHTML = "";

    if (appointments.length === 0) {
        appointmentList.innerHTML = "<li>No appointments scheduled.</li>";
    } else {
        appointments.forEach(appt => {
            let li = document.createElement("li");
            li.textContent = `${appt.date} - ${appt.time} | ${appt.service} with ${appt.barber} for ${appt.name}`;
            appointmentList.appendChild(li);
        });
    }
});
