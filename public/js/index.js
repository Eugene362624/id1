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
document.querySelector('.fixed-ad').style.display = 'none'
document.querySelector('.fixed-ad').addEventListener('click', () => showAd())
document.querySelector('.ad-upper > #fourth').innerHTML

const showAd = () => {
    document.querySelector('.ad').style.display = 'flex'
    document.querySelector('.ad > .ad-content-wrap').addEventListener('click', (e) => e.stopPropagation())
    document.querySelector('.ad').addEventListener('click', () => closeAd())
}

const closeAd = () => {
    document.querySelector('.ad').style.display = 'none'
    document.querySelector('.fixed-ad').style.display = 'flex'
}

document.querySelector('.ad-content-wrap > button').addEventListener('click', () => closeAd())


setTimeout(() => showAd(), 1000);

const onlyOneTime = () => {
    let one_hour = (new Date().getTime() + 3660000)
    let fifth = document.getElementById('fifth')
    fifth.innerHTML = Math.random().toString(36).substring(2, 8);
    localStorage.setItem('promoCode', `${fifth.innerHTML}, ${one_hour}`)
}

const promoCode = localStorage.getItem('promoCode')
if (promoCode) document.getElementById('fifth').innerHTML = promoCode.split(',')[0]
if (!promoCode) onlyOneTime();

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let one_hour = (new Date().getTime() + 3660000),
        countDown = promoCode ? new Date(Number(promoCode.split(',')[1])).getTime() : new Date(one_hour).getTime(),
        x = setInterval(function () {


            let now = new Date().getTime(),
            distance = countDown - now;

            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown")

                headline.innerText = "Увы. Десятипроцентная скидка кончилась... Но это не беда! Скажите или напишите нам свой промокод и мы сделаем Вам поощрительную скидку в 3%";
                countdown.style.display = "none";

                clearInterval(x);
            }
        }, 0)
}());