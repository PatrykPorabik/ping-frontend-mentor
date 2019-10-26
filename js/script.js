let formEmail = document.getElementById('newsletter-form'),
    msg = document.querySelector('.success'),
    errormsg = document.querySelector('.none');

function validateEmail(field) {
    const regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (field === "") {
        return false;
    } else if (regex.test(field)) {
        return true;
    } else {
        return false;
    }
}

function isValidEmail(field) {
    if (field === "") return false;

    if (validateEmailField(field.value)) {
        field.classList.add('newsletter__input--valid');
        field.classList.remove('newsletter__input--invalid');
        errormsg.classList.add('none');
        return true;
    } else {
        field.classList.add('newsletter__input--invalid');
        field.classList.remove('newsletter__input--valid');
        errormsg.classList.add('newsletter__alert');
        errormsg.classList.remove('none');
        return false;
    }
}

formEmail.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById('button');
    if (isValidEmail(email)) {
       //todo
    } else {
         //todo
    }
});