// DOM

const form = document.getElementById("form")

const userData = {
    name: "User",
    email: "kuti@gmail.com",
    nikName: "kuti.007",
    password: "873707",
}

form.onsubmit = (e) => { 
    e.preventDefault()
    console.log(e.target, '-----?------')
    const formData = e.target
    const formEmail = formData.email.value
    console.log("formEmail: ", formEmail );
    const formPassword = formData.password.value
    console.log("formPassword: " , formPassword);
    if(userData.email === formEmail && userData.password === formPassword) {
        alert("welcom " + userData.name)
        window.location.href =  "https://www.instagram.com/rysaliev.xs/" 
        window.location.href =  "https://www.instagram.com/rysaliev.xs/" 

    }else {
        alert("wrong email or password")
    }
}


const btnMin = document.getElementById('min')
const btnPlus = document.getElementById('plus')
const pText = document.getElementById('text-count')
const price = document.getElementById("price")

btnPlus.onclick = () => {
    pText.innerText = parseInt(pText.innerText) + 1
   
    price.innerText = 500 * parseInt(pText.innerText) + "  $"
  
}

btnMin.onclick = () => {
    if(parseInt(pText.innerText) > 0){
        pText.innerText = parseInt(pText.innerText) - 1
        price.innerText = 500 * parseInt(pText.innerText) + "  $"
    } 
   
}

