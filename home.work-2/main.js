document.getElementById('check').onclick = function () {
    let login = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    window.location.href  =  "./index.htm"

    if (login == 'kuti@gmail.com' && password == 'kutman00.7')
        alert('далее')
    else  alert('не правилный логин или пароль')
}