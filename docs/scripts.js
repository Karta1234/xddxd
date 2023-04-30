let imgArr = ['1.png','2.png', '3.png']
let img = document.querySelector('.menu-img')
document.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON') {
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        img.setAttribute('src', imgArr[e.target.dataset.id])

    }
})