// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
// header gamburger
const gamburgerItem = document.querySelector('#menu__toggle')
const headerInfo = document.querySelector('.header_info')

gamburgerItem.addEventListener('change', (e) => {
  if(e.target.checked) {
    headerInfo.style.top = '40%'
  } else headerInfo.style.top = '0'
})

//form steps
const goNextForm = document.querySelectorAll('.formBtn')
const email = document.querySelector('.email')
const email2 = document.querySelector('.email2')
const lastName = document.querySelector('.lastName')
const lastName2 = document.querySelector('.lastName2')
const name = document.querySelector('.name')
const name2 = document.querySelector('.name2')
const steps = document.querySelectorAll('.step')
const errorText = document.querySelector('.errorText')
const errorText2 = document.querySelector('.errorText2')
const descr1 = document.querySelector('.form_descr')
const descr2 = document.querySelector('.form_descr-step2')
const descr3 = document.querySelector('.form_descr-step3')
const formInp1 = document.querySelector('.form_items')
const formInp2 = document.querySelector('.form_items-step2')
const formInp3 = document.querySelector('.form_items-step3')


goNextForm.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if(e.target.innerText === 'NEXT' && steps[0].classList.contains('activeStep')) {
      if((name.value == '') || (lastName == '') || (email == '')) {
        errorText.style.opacity = 1
      } else {
        steps[0].classList.remove('activeStep')
        steps[1].classList.add('activeStep')
        descr1.style.display = 'none'
        formInp1.style.display = 'none'
        descr2.style.display = 'flex'
        formInp2.style.display = 'flex'
      }
    } else if(e.target.innerText === 'NEXT' && steps[1].classList.contains('activeStep')) {
      if((name2.value == '') || (lastName2 == '') || (email2 == '')) {
        errorText2.innerText = 'заполните все поля корректно'
      } else {
        steps[1].classList.remove('activeStep')
        steps[2].classList.add('activeStep')
        descr2.style.display = 'none'
        formInp2.style.display = 'none'
        descr3.style.display = 'flex'
        formInp3.style.display = 'flex'
      }
    } else {
      if((name.value == '') || (lastName == '') || (email == '')) {
        errorText.innerText = 'заполните все поля корректно'
      } else {
        steps[2].classList.remove('activeStep')
        steps[3].classList.add('activeStep')
        descr2.style.display = 'none'
        formInp2.style.display = 'none'
        descr3.style.display = 'flex'
        formInp3.style.display = 'flex'
      }
    }
  })
});