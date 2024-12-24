// toggle modal <dialog>s. example here: /Accelerator/Components/ViewComponents/Carousel/_Carousel.cshtml 
(function () {
    const modalTogglers = [...document.querySelectorAll("[data-modal-toggle]")];

    if (modalTogglers.length !== 0) {
        modalTogglers.forEach(toggle => {
            const toggleAttribute = toggle.getAttribute("data-modal-toggle");
            const modalTarget = document.getElementById(toggleAttribute);
            const modalCloseBtn = modalTarget.querySelector('[data-close-modal]')

            // if there's an iframe in the modal, remove its src to stop it from playing after the modal is closed and then attach it back when the modal is opened once more.
            const iframeElement = modalTarget.querySelector('[data-modal-iframe]');
            const iframeSrc = iframeElement?.src;

            toggle.addEventListener("click", e => {
                modalTarget.showModal();

                if (iframeElement && iframeSrc) {
                    iframeElement.setAttribute('src', iframeSrc);
                }
            })

            modalTarget.addEventListener('click', e => {
                if(e.target.nodeName === 'DIALOG')
                {
                    modalCloseBtn.click();
                }
            }) 
            
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape' && modalTarget.hasAttribute('open')) {
                    closeModal();
                }
            })

            modalCloseBtn.addEventListener("click", e => {
                closeModal();
            })

            function closeModal()
            {
                modalTarget.setAttribute("data-modal-close", "");
                modalTarget.addEventListener('animationend', e => { 
                    modalTarget.removeAttribute('data-modal-close')
                    modalTarget.close();
                }, {once: true})

                if (iframeElement && iframeSrc) {
                    iframeElement.removeAttribute('src');
                }
            }
        })
    }
})(); 