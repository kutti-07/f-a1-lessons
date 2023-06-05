//----------------------------1--------------------------- 
const balance = document.getElementById("balance") //30      //getelementbyid айдини чакырат 
const btnPlus = document.getElementById('plus') 
const inputAdd = document.getElementById('add-input') 
 
 
const btnMinus = document.getElementById('get-balance') 
const inputMinus = document.getElementById('minus-inp') 
const h1Textout = document.getElementById('textout')
const btnVyiti = document.getElementById('vyiti')
 
 
 
//------------------------2-------------------- 
// onclick onchange onsumbit (DOM собития) 
btnPlus.onclick = () => { 
    const newBalance = Number(inputAdd.value) //500 
    balance.innerText = Number(balance.innerText) + newBalance 
    inputAdd.value = '' 
}

btnVyiti.onclick = () => {
    
}

btnMinus.onclick = () => { 
    if(inputMinus.value >  Number(balance.innerText)){
        alert('Недостаточно средств на счету' + "Ваш баланс:" + balance.innerText+" $")
        inputMinus.value = '' 
        }else {
            const newBalance = Number(inputMinus.value) //500 
        balance.innerText = Number(balance.innerText) - newBalance 
        inputMinus.value = '' 
    }
} 

 










//------------------3-----------------------

const user1 = {
    name: 'kutman',
    lastName: "Rysaliev",
    status: "vip",
    // date: `0${date.}`
}
// dom
// const userName = document.getElementById('user-name')
// const userDate = document.getElementById('user-date')
// const userStatus = document.getElementById('user-status')
// const userLastName = document.getElementById('user-lastName')

function renderUser(user) {
    userName.innerText = user.name
    userDate.innerText = user.date
    userStatus.innerText = user.status
    userLastName.innerText = user.lastName
}
// renderUser(user1)

//---------------4-------------------

const btnLogut = document.getElementById('log0ut')
const divUserInfo = document.getElementById('user-info')
const pop = document.getElementsByClassName('.pop')
const btnLogin = document.getElementById('login')

btnLogut.onclick = () => {
    btnLogin.style.display ='block'
    btnLogut.style.display = 'none'
    divUserInfo.style.display = 'none'
    btnLogut.innerText = "Log-in"
}

btnLogin.onclick = () => {
    divUserInfo.style.display = 'block'
    divUserInfo.style.display = 'flex'
    btnLogin.innerText = "LOGOUT"
}





