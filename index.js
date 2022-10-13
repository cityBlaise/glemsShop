const data_modal_overlay = document.querySelector('[data-modal-overlay]')
const data_overlay = document.querySelector('[data-overlay]')
const data_modal_close = document.querySelector('[data-modal-close]')
const data_modal = document.querySelector('[data-modal]')
const main_container = document.querySelector('.main-container')
const data_mobile_sidebar = document.querySelector('[data-mobile-sidebar]')
const data_mobile_menu_open_btn = document.querySelector('[data-mobile-menu-open-btn]')
const data_sidebar_menu_close_btn = document.querySelector('[data-sidebar-menu-close-btn]')
const data_mobile_bottom_menu = document.querySelector('[data-mobile-bottom-menu]')
const data_cart_btn = document.querySelector('[data-cart-btn]')
const data_cart_list = document.querySelector('[data-cart-list]')
const data_cart_close = document.querySelector('[data-cart-close]')

function closeModal(){
    data_modal_overlay.remove('active')
    data_modal.classList.remove('active')
    main_container.classList.remove('blur')
}

function toggleSidebar(){
    data_overlay.classList.toggle('active')
    data_mobile_sidebar.classList.toggle('active') 
    data_mobile_bottom_menu.classList.toggle('disabled')
    main_container.classList.toggle('blur')
}

function toggleCart(){
    data_overlay.classList.toggle('active')
    data_cart_list.classList.toggle('active') 
    data_mobile_bottom_menu.classList.toggle('disabled')
    main_container.classList.toggle('blur')
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

data_mobile_menu_open_btn.addEventListener('click',(e)=>{
    console.log('data_mobile_menu_open_btn has benn clicked'); 
    toggleSidebar()
})

data_sidebar_menu_close_btn.addEventListener('click',(e)=>{
    console.log('data_mobile_menu_open_btn has benn clicked'); 
    toggleSidebar()
})

data_cart_btn.addEventListener('click',(e)=>{
    console.log('data_mobile_menu_open_btn has benn clicked'); 
    toggleCart()
})

data_cart_close.addEventListener('click',(e)=>{
    console.log('data_mobile_menu_open_btn has benn clicked'); 
    toggleCart()
})