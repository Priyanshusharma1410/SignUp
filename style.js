let signUpBtn = document.querySelector('.signupbtn');
let signIpBtn = document.querySelector('.signinbtn');
let underline = document.querySelector('.underline');
let tittle = document.querySelector('.tittle');
let nameField = document.querySelector('.namefield');
let text = document.querySelector('.text');


signIpBtn.addEventListener('click', ()=>{
    nameField.style.maxHeight = '0';
    tittle.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signIpBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});
signUpBtn.addEventListener('click', ()=>{
    nameField.style.maxHeight = '60px';
    tittle.innerHTML = 'Sign Up';
    text.innerHTML = 'Password suggestions';
    signUpBtn.classList.remove('disabled');
    signIpBtn.classList.add('disabled');
    underline.style.transform = 'translateX(0)';
});