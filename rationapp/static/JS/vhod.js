const inputPass = document.getElementById('password');
const inputUsername = document.getElementById('FIO');
const iconPass = document.getElementById('pass-icon');
const modal = document.querySelector('.Modal');
const closeModalButton = document.getElementById('close-modal');
const loginButton = document.querySelector('.button-blue');

iconPass.addEventListener('click', () => {
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
    } else {
        inputPass.setAttribute('type', 'password');
    }
});

loginButton.addEventListener('click', () => {
        const username = inputUsername.value.trim();
        const password = inputPass.value.trim();

        if (username === '' || password === '') {
            modal.style.display = 'block';
        } else {
            window.location.href = 'maint';
        }
    });

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});