

const btnMin = document.getElementById('min')
const btnPlus = document.getElementById('plus')
const h1Text = document.getElementById('text-aout')


btnPlus.onclick = () => {
    h1Text.innerText = parseInt(h1Text.innerText) + 5
}

btnMin.onclick = () => {
    if(parseInt(h1Text.innerText) > -1){
        h1Text.innerText = parseInt(h1Text.innerText) - 2
    }
}