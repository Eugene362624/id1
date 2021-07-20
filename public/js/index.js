window.addEventListener('scroll', () => actionHandler())
const actionHandler = () => {

    if (window.pageYOffset > 100) {
        document.getElementById('name').style.display = 'none'
        document.getElementById('type').style.display = 'none'
        document.getElementById('logo').style.marginBottom = '0px'
        document.querySelector('.header-content-wrap').style.cssText = 'position: fixed; height: 100px; box-shadow: 0 0 10px 1px gray'
    } else {
        document.querySelector('.header-content-wrap').style.cssText = 'position: inherit; height: 200px'
        document.getElementById('logo').style.marginBottom = '1rem'
        document.getElementById('name').style.display = 'inherit'
        document.getElementById('type').style.display = 'inherit'
    }
}
actionHandler()

const clickHandler = (e) => {
    if (e.children[0].children[1].classList.contains('fa-chevron-down')) {
        e.children[0].children[1].classList.remove('fa-chevron-down')
        e.children[1].children[0].removeAttribute('hidden')
        e.children[1].children[0].style.marginTop = '2rem'
        e.children[0].children[1].classList.add('fa-chevron-up')
    } else {
        e.children[0].children[1].classList.remove('fa-chevron-up')
        e.children[1].children[0].setAttribute('hidden', 'hidden')
        e.children[1].children[0].style.marginTop = '0'
        e.children[0].children[1].classList.add('fa-chevron-down')
    }
}
document.querySelectorAll('.offer').forEach(e => e.addEventListener('click', () => clickHandler(e)))