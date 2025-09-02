
document.addEventListener("DOMContentLoaded", () => {
    const profileForm = document.getElementById("profileForm");

    
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
        document.getElementById("name").value = savedProfile.name || "";
        document.getElementById("email").value = savedProfile.email || "";
        document.getElementById("phone").value = savedProfile.phone || "";
        document.getElementById("preferences").value = savedProfile.preferences || "";
    }

   
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const userProfile = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            preferences: document.getElementById("preferences").value.trim()
        };

        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        alert("Profile saved successfully!");
    });
});
