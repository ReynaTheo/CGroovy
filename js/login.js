rBtnMale = document.getElementById("male")
loginBtn = document.getElementById("login-button")

loginBtn.addEventListener("click", () => {
    validateGender()
})

const validateGender = () => {
    if (rBtnMale.checked) {
        console.log("Selected Gender:", rBtnMale.value);
        return rBtnMale.value; // Mendapatkan nilai dari radio button
    } else {
        alert("gender is not selected")
        console.log("Gender not selected");
        return null;
    }    
}