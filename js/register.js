document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const registerButton = document.getElementById('register-button');
    const errorMessages = {
        username: document.getElementById('username-error'),
        email: document.getElementById('email-error'),
        password: document.getElementById('password-error'),
        age: document.getElementById('age-error'),
        gender: document.getElementById('gender-error')
};
       
Object.values(errorMessages).forEach(msg => {
    msg.style.color = 'red';
    msg.style.fontSize = '10px';
    msg.style.marginTop = '2px';
    msg.style.backgroundColor = 'white';
});
    
function validateUsername() {
    if (usernameInput.value.trim() === '') {
        errorMessages.username.textContent = 'Username tidak boleh kosong!';
        return false;
    } else {
        errorMessages.username.textContent = '';
        return true;
    }
}
    
function validateEmail() {
    if (!emailInput.value.endsWith('.com')) {
        errorMessages.email.textContent = 'Email harus diakhiri dengan .com!';
        return false;
    } else {
        errorMessages.email.textContent = '';
        return true;
    }
}
    
function validatePassword() {
    if (passwordInput.value.length < 8) {
        errorMessages.password.textContent = 'Password minimal 8 karakter!';
        return false;
    } else if (!/[A-Z]/.test(passwordInput.value.charAt(0))) {
        errorMessages.password.textContent = 'Password harus diawali huruf kapital!';
        return false;
    } else {
        errorMessages.password.textContent = '';
        return true;
    }
}
    
function validateAge() {
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 0 || !Number.isInteger(age)) {
        errorMessages.age.textContent = 'Age harus bilangan bulat positif!';
        return false;
    } else {
        errorMessages.age.textContent = '';
        return true;
    }
}
    
function validateGender() {
    const isSelected = Array.from(genderInputs).some(input => input.checked);
    if (!isSelected) {
        errorMessages.gender.textContent = 'Pilih salah satu gender!';
        return false;
    } else {
        errorMessages.gender.textContent = '';
        return true;
    }
}
    
usernameInput.addEventListener('input', validateUsername);
usernameInput.addEventListener('blur', validateUsername);
    
emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);
    
passwordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('blur', validatePassword);
    
ageInput.addEventListener('input', validateAge);
ageInput.addEventListener('blur', validateAge);
    
genderInputs.forEach(input => {
    input.addEventListener('change', validateGender);
});
    
registerButton.addEventListener('click', function(e) {
    e.preventDefault();
        
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isAgeValid = validateAge();
    const isGenderValid = validateGender();
        
    if (isUsernameValid && isEmailValid && isPasswordValid && isAgeValid && isGenderValid) {
        alert('Registrasi berhasil!');
        
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    } else {
        alert('Registrasi gagal! Silakan periksa kembali data Anda.');
    }
});});