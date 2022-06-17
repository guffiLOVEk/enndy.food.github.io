document.addEventListener('DOMContentLoaded', function(){
    // number shopping
    let shoppingNum = document.querySelector('.shopping__num')
    if (shoppingNum.textContent.length > 1) {
        shoppingNum.classList.add('lenght2')
    }
    if (shoppingNum.textContent.length > 2) {
        shoppingNum.classList.add('lenght3')
    }
    if (shoppingNum.textContent.length > 3) {
        shoppingNum.textContent = 0
        shoppingNum.classList.remove('lenght2')
        shoppingNum.classList.remove('lenght3')
    }
    // loader
    document.body.onload = function(){
        setTimeout(() => {
            let loader = document.querySelector('.bg-loader').classList
            let body = document.querySelector('.global-body')
            if(!loader.contains('done')){
                loader.add('done')
            }
            if(body.classList.contains('overflow-hidden')){
                body.classList.remove('overflow-hidden')
            }			
        }, 1000);
    }
    // burger
    let header__burger = document.querySelector('.header__burger-main')
    header__burger.addEventListener('click', () => {
        header__burger.classList.toggle('active')
    })
    // navbar-scrolled
    let navbar = document.getElementById('header').classList,
    active_class = "navbar_scrolled"

    window.addEventListener('scroll', _e => {
        if(pageYOffset > 1) navbar.add(active_class)
        else navbar.remove(active_class)
    })
});
