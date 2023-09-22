const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phoneNum');
const country = document.getElementById('country');
const terms = document.getElementById('check');
const openPopUp = document.getElementById('openPopUp');
const pop_up = document.getElementById('pop_up');
const confirm = document.getElementById('confirm');
const noConfirm = document.getElementById('noConfirm');



form.addEventListener('submit', (e) =>{
    e.preventDefault();


    checkInputs();
});

function checkInputs(){
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneNumValue = phoneNum.value.trim();
    const countryValue = country.value.trim();

    var flag1, flag2, flag3, flag4 = 0;

// Validate Name
    if (nameValue == '') {
        setWrongFor(name, 'Name must be filled');
    }else {
        setRightFor(name);
        flag1 = 1;
    }

// Validate Email
    if (emailValue == ''){
        setWrongFor(email, 'Email must be filled')
    }else if(!formatEmail(emailValue)){
        setWrongFor(email, 'Email is not valid')
    }else{
        setRightFor(email);
        flag2 = 1;
    }

// Validate Phone Number
    if (phoneNumValue == ''){
        setWrongFor(phoneNum, 'Phone number must be filled')
    }else if(isNaN(phoneNumValue)){
        setWrongFor(phoneNum, 'Enter number only')
    }else{
        setRightFor(phoneNum);
        flag3 = 1;
    }

// Validate Country
    if (countryValue == '') {
        setWrongFor(country, 'Country must be filled');
    }else{
        setRightFor(country);
        flag4 = 1;
    }

// Validate Terms
    if (!terms.checked){
        boxNotChecked();
    }else if(terms.checked){
        boxChecked();
        if(flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1){
            popUp();
        }
    }

}

function setWrongFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
   

    // add error message 
    small.innerText = message;

    // add error class
    formControl.className = 'form-control wrong';

}

function setRightFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control right'
}

function boxNotChecked(){
    document.getElementById("lol").className ='terms wrong'
}

function boxChecked(){
    document.getElementById("lol").className ='terms'
}

function popUp(){
    openPopUp.addEventListener('click', () =>{
        pop_up.classList.add('show');
    });
    
    confirm.addEventListener('click', () =>{
        pop_up.classList.remove('show');
    });

    noConfirm.addEventListener('click', () =>{
        pop_up.classList.remove('show');
    });
}

function formatEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validatePhoneNum(phoneNum){
    return /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    ;
}









