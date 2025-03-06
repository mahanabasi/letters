document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('input');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/;
    const formElement = document.querySelector('form');
    const button = document.querySelector('button');
    let validemail = true;
    const showError = (formvalid) => {

        if (formvalid == false || !formvalid) {
            const error = document.querySelector('.error');
            error.classList.remove('hidden');
        }
    };
    const removeError = (formvalid) => {
        if (formvalid == true || formvalid) {
            const error = document.querySelector('.error');
            error.classList.add('hidden');
        }
    }

    formElement.addEventListener('submit', event => {
        event.preventDefault();
        if (isNaN(emailInput) || emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
            validemail = false;
            if (!validemail) {
                showError(validemail);
            }
        }
        else {
            validemail = true;
            removeError(validemail);
            formElement.submit();

        }
    })
})