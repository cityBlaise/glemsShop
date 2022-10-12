const data_modal_overlay = document.querySelector('[data-modal-overlay]')
const data_modal_close = document.querySelector('[data-modal-close]')
const data_modal = document.querySelector('[data-modal]')
const main_container = document.querySelector('.main-container')
function closeModal(){
    data_modal_overlay.remove('active')
    data_modal.classList.remove('active')
    main_container.classList.remove('blur')
}

data_modal_overlay.addEventListener('click',()=>{
    console.log('data_modal_overlay');

    console.log('data-modal-overlay has benn clicked');
    closeModal()
})


data_modal_close.addEventListener('click',(e)=>{
    console.log('data-modal-close has benn clicked');
    closeModal()
})