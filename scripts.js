const body = document.querySelector('.body')
const nav = document.querySelector('nav')
const btn = document.querySelector('.gg-sun')
const span = document.querySelector('.span')
const list = document.querySelectorAll('.nav-link')
let count = 0;




btn.addEventListener('click', Dark = () => {
    if (count % 2 == 0) {
        body.style.background = 'black'
        nav.style.background = 'rgba(255,255,255,0.9)'
        btn.style.color = 'black'
        span.style.color = 'white'
        list[0].style.color = 'black'
        list[1].style.color = 'black'
        list[2].style.color = 'black'
        count++;

    } else {
        body.style.background = '#6F61C0'
        nav.style.background = 'rgba(213, 255, 228, .9)'
        btn.style.color = 'orange'
        span.style.color = 'black'
        
        list[0].style.color = '#7c56dc'
        list[1].style.color = '#7c56dc'
        list[2].style.color = '#7c56dc'
        count++;
        btn.classList.add('.btn');
    }
});