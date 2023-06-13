const logregBox = document.querySelector('.logreg-box'); // variable box sizing
const loginLink = document.querySelector('.login-link'); // variable login tap
const registerLink = document.querySelector('.register-link'); // variable register tap

registerLink.addEventListener('click', ( )=>{ // func for tap register link
    logregBox.classList.add('active');
} );

loginLink.addEventListener('click', ( )=>{ // func for tap login link
    logregBox.classList.remove('active');
} );

