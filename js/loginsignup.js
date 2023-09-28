const forms = document.querySelector(".container-forms"),
    pw = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pw.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".pass");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                // The classList property returns the CSS classnames of an element. 
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})



// links.forEach(link => {
//     link.addEventListener("click", e => {
//         e.preventDefault(); //preventing form submit
//         // forms.classList.toggle("show-signup");
//     })
// })