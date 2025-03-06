window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    // Behavior Smooth
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Modal

    const modalOpen = document.querySelector('.order_project');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal_close');
    const modalTimerId = setTimeout(openModal,3000);


    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        clearInterval(modalTimerId);
    };

    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }

    modalOpen.addEventListener('click', openModal);

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });


    // Valid Form

    const formModal = document.querySelector('.modal_form');
    const formFooter = document.querySelector('.footer_form');

    let nameError, emailError, phoneError, successMessage;
    let form, name, email, phone;

    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegEx = /^\+?[0-9]{1,15}$/;

    function validateForm(form) {

        let isValid = true;

        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';

        // Name check
        if (!name.trim()) {
            nameError.textContent = 'Пожалуйста, введите ваше имя';
            isValid = false;
        } else if (/\d/.test(name)) {
            nameError.textContent = 'Имя не может содержать цифры';
            isValid = false;
        }

        // Email check
        if (!emailRegEx.test(email)) {
            emailError.textContent = 'Пожалуйста, введите правильный email';
            isValid = false;
        }

        //Phone check
        if(!phoneRegEx.test(phone)) {
            phoneError.textContent = 'Пожалуйста, введите номер телефона корректно!';
            isValid = false;
        }

        return isValid;
    };

    function showMessage() {
        successMessage.textContent = 'Форма успешно отправлена!'
        successMessage.classList.add('show');
    };

    function formSubmit(event) {

        event.preventDefault();
        form = event.target;

        name = form.querySelector('.name')
        phone = form.querySelector('.phone');
        email = form.querySelector('.email');

        nameError = form.querySelector('#footerNameError') || form.querySelector('#modalNameError');
        emailError = form.querySelector('#footerEmailError') || form.querySelector('#modalEmailError');
        phoneError = form.querySelector('#footerPhoneError') || form.querySelector('#modalPhoneError');
        successMessage = form.querySelector('.success-message');

        if (validateForm) {
            form.reset();
            showMessage();
        };
    };

    formFooter.addEventListener('submit', formSubmit);
    formModal.addEventListener('submit', formSubmit);
})