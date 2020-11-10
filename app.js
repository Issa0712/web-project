const input = document.querySelector('#mobile-nav')
const li = document.querySelector('footer ul.footer__menu')

const footerInput1 = document.querySelector('#footer_nav1')
const footerInput2 = document.querySelector('#footer_nav2')
const footerInput3 = document.querySelector('#footer_nav3')

const burger = document.querySelector('.header_nav_burger')

burger.addEventListener('click', function(){
    input.checked = true

    

    
})

const arrow = document.querySelector('footer .title span #one')
arrow.addEventListener('click', (() => {
   if (footerInput1.checked == true) {
       footerInput1.checked = false 
   }else {
       footerInput1.checked = true
   }

}))

document.querySelector('footer .title span #two').addEventListener('click', (() => {
    if (footerInput2.checked == true) {
        footerInput2.checked = false 
    }else {
        footerInput2.checked = true
    }
 
}))

document.querySelector('footer .title span #three').addEventListener('click', (() => {
    if (footerInput3.checked == true) {
        footerInput3.checked = false 
    }else {
        footerInput3.checked = true
    }
 
}))


