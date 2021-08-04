const refs = {
    modalButton: document.querySelector('[data-open-modal]'),
}
function testFn() {
    console.log('specs button pushed');
}
refs.modalButton.addEventListener('click', testFn);