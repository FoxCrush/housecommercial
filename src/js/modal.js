const refs = {
    modalTitleEl: document.querySelector('[data-modal-title]'),
    closeModalBtnEl: document.querySelector('[modal-close-button]'),
    houseSpecsModalContainerEl: document.querySelector('[data-modal-container]'),
    modalView: document.querySelector('[data-modal]'),
    housesListEl: document.querySelectorAll('[data-houses-list-action]' && '[data-open-modal]'),
    bodyEl: document.querySelector('body')
}
function openModalFn(e) {
    e.preventDefault();
    console.log(window.scrollX);
    refs.bodyEl.style.top = `-${window.scrollY}px`;
    refs.bodyEl.style.position = 'fixed';
    console.log(window.scrollY);
    refs.modalView.classList.add('isShown');
    refs.modalTitleEl.innerHTML = ` House #${e.target.id} card`;

}
function closeModalFn(e) {
    if (e.target === e.currentTarget || e.target === refs.closeModalBtnEl) {
        refs.modalView.classList.remove('isShown');
        const scrollY = document.body.style.top;
        refs.bodyEl.style.position = '';
        refs.bodyEl.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

}
refs.housesListEl.forEach(element => {
    element.addEventListener('click', openModalFn);
});
refs.modalView.addEventListener('click', closeModalFn);
