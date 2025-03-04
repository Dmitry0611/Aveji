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

})