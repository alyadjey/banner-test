'use strict'
document.addEventListener('DOMContentLoaded', () => {
    let price = document.querySelector('#currency')
    let sneakerModel = document.querySelector('#sneakerModel')
    let link = document.querySelector('#sneakerLink')
    const url = 'https://solovey.com.ua/test/data.json'
    let time = 2000
    let i = 0
    fetch(url).then((resp) => resp.json()).then((data) => {
        let sneakers = data.sneakers
        let currency = data.currency

        function bannerInfo() {
            document.slide.src = sneakers[i].image_url
            price.innerHTML = `${currency} ${sneakers[i].price}`
            sneakerModel.innerHTML = `${sneakers[i].model}`
            link.href = sneakers[i].link
        }
        bannerInfo()

        function changeInfo() {
            bannerInfo()
            if (i < sneakers.length - 1) {
                i++
            } else {
                i = 0
            }
            document.querySelector('.button').classList.toggle('button-animation')
        }
        setInterval(changeInfo, time)
    }).catch((error) => {
        console.log(error)
    })

})