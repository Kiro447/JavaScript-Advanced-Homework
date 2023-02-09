let regUser = document.getElementById('registerUsername')
let regPass = document.getElementById('registerPassword')
let regBtn = document.getElementById('registerBtn')
let registerForm = document.getElementById('registerForm')


function setData(key, data) {
    localStorage.setItem(key, data);
}

function getData(key) {
    let dataToReturn = localStorage.getItem(key);
    return dataToReturn

}
regBtn.addEventListener('click', function () {
    let accUser = regUser.value;
    let accPass = regPass.value;
    console.log(accUser, accPass);
    if (accUser.length > 5 && accPass.length > 5) {
        setData('username', accUser);
        setData('password', accPass);
        loginForm.removeAttribute('hidden')
        toRegister.removeAttribute('hidden')
        registerForm.setAttribute("hidden", true)
            ;
    } else {
        alert('username and password need to be longer than 5')
    }
});



