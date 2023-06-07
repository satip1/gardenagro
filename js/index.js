// определение глобальных переменных
// const wrapper = document.querySelector('.wrapper');
const shipment = document.querySelector('.header__shipment');
const nav = document.querySelector('.header__nav');
const subMenu = document.querySelector('.header__submenu');
const menuInstrum = document.querySelectorAll('.menu__instrum');
const greyWin = document.querySelector('.greywin');



// обработчик нажатия на кнопку условия в разрешении 320px
shipment.addEventListener('click', () => {
    // console.log(shipment);
    const ship = document.querySelector('.header__ship');
    if (ship.classList.contains('header__ship_display')) ship.classList.remove('header__ship_display')
    else ship.classList.add('header__ship_display')
})


// обработчик события клика по меню инструментов
nav.addEventListener('click', (evt) => {
    evt.preventDefault();
    const instrum = evt.target.dataset.instrum;
    if (!instrum) return
    greyWin.classList.add('greywin_active');
    subMenu.classList.add('header__submenu_active');
    menuInstrum.forEach((item) => {
        if (item.dataset.instrum === instrum) item.classList.add('menu__instrum_active')
        else item.classList.remove('menu__instrum_active')
    })

})

// обработчики события клика серого блокирующего фона
greyWin.addEventListener('click', (evt) => {
    menuInstrum.forEach((item) => { item.classList.remove('menu__instrum_active') })
    greyWin.classList.remove('greywin_active');
    subMenu.classList.remove('header__submenu_active');
})

document.body.addEventListener('keydown', (evt) => {
    if (evt.key == 'Escape')
        if (greyWin.classList.contains('greywin_active')) {
            greyWin.classList.remove('greywin_active');
            subMenu.classList.remove('header__submenu_active');
            menuInstrum.forEach((item) => {
                item.classList.remove('menu__instrum_active')
            })
        }
})

// обработчик наведения на картинки в галереи карточки товара

    const gallery = document.querySelector('.itemcard__gallery');
    if (gallery) {
        const foto = document.querySelector('.itemcard__foto');
        gallery.addEventListener('mouseover', (evt) => {            
            if (!evt.target.dataset.foto == "") {
                foto.src = evt.target.dataset.foto;
            }

        });
    }









