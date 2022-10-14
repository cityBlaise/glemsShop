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
const product_items = document.querySelectorAll('.product-item')
const data_show_product_close = document.querySelectorAll('[data-show-product-close]')
const shop_cart_items = document.querySelectorAll('.items-wrapper .item')

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

product_items.forEach(element => {
    element.addEventListener('click',(e)=>{ 
        if( !element.classList.contains('show')){ 
            element.classList.toggle('show')

            if(element.classList.contains('normal')){
                element.classList.toggle('normal')
            }

        } 
    }) 
    element.querySelector('.back-btn').addEventListener('click',(e)=>{  
        e.currentTarget.parentElement.classList.remove('show')
        e.currentTarget.parentElement.classList.toggle('normal')
        e.stopPropagation()
    })
});

shop_cart_items.forEach(element => {
    element.querySelector('.btn-remove').addEventListener('click',(e)=>{  
        console.log('item cart removed')
        e.currentTarget.parentElement.classList.toggle('remove') 
        e.stopPropagation()
    })
});