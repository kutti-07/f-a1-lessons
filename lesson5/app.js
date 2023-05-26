// functions
// let const (var)


// const number = "+996 500 255 155"
// let kanat = checkNamber(number, "+996 500 255 155")

// const number2 = "+996 222 222 666"
// let kanat2 = checkNamber(number2, "+996 222 222 666")


// console.log(kanat2)
// console.log(kanat)

// function checkNamber (num, phone){
//     if(num === phone){
//     return  true
//     }
// }

// dom documentt object model
// find elemen (h1-h6,p, div)
// getElementByNagName()
// getElementById()
// getElementByNameClass()
// querySelector() div.text-center
// querySelectorAll() div button imd


const h1Tag = document.querySelectorAll('h1')

 for (let i = 0; i< h1Tag.length; i++){
    if ( i <2){
        h1Tag[i].style.background = "red"
    }else if(i<4){
        h1Tag[i].style.background = "yellow"
    }
    h1Tag[i].innerText = h1Tag[i].innerText + " world"
    h1Tag[i].style.color = "blue"
    h1Tag[i].style.fontSize = "46px"
    // h1Tag[i].style.background = "blue"
    h1Tag[i].style.textAlign = "center"
 }
 const cars = [{
    model:"Audi",
    price: 2220,
    color: 'black',
    img: "https://avatars.mds.yandex.net/get-verba/216201/2a0000017f6e15f4368df3112afb695baac4/cattouchret"
  },
                {
    model:"BMW",
    price: 4220,
    color: 'blue',
    img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-performance-automobile/i7-m70-xdrive/bmw-i7-m70-stage-teaser.png.asset.1681387862051.png"
  },       
]

const div = document.querySelector("#list")

for (const car of cars) {
    div.innerHTML += ` 
    <div class='card'>
    <div>
        <img src=${car.img} width="200px" />
    </div>
    <div>
    <h1>${car.model}</h1>
    <p>${car.price} $ </p>  
    <p>${car.color}</p>
    </div>
    </div>
    `
}