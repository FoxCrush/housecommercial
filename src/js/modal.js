const refs = {
    modalTitleEl: document.querySelector('[data-modal-title]'),
    closeModalBtnEl: document.querySelector('[modal-close-button]'),
    houseSpecsModalContainerEl: document.querySelector('[data-modal-container]'),
    modalView: document.querySelector('[data-modal]'),
    housesListEl: document.querySelectorAll('[data-houses-list-action]'&& '[data-open-modal]')
}
function openModalFn(e) {
    refs.modalView.classList.add('isShown')
    refs.modalTitleEl.innerHTML = ` House #${e.target.id} card`;
}
function closeModalFn(e) {
    if (e.target === e.currentTarget || e.target === refs.closeModalBtnEl) {
        refs.modalView.classList.remove('isShown')
    }
}
refs.housesListEl.forEach(element => {
    element.addEventListener('click', openModalFn);
});
refs.modalView.addEventListener('click', closeModalFn);