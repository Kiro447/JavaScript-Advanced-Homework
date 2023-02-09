let main = document.getElementById('main')
let inputUsername = document.getElementById('loginUsername');
let inputPassword = document.getElementById('loginPassword');
let loginBtn = document.getElementById('loginBtn');
let loginForm = document.getElementById('loginForm')
let toRegister = document.getElementById('toRegister')
loginBtn.addEventListener('click',()=>{
    
    let savedUsername = getData('username');
    let savedPassword = getData('password');
    let loginUsername = inputUsername.value;
    let loginPassword = inputPassword.value;
    console.log(loginUsername,loginPassword);
    console.log(savedUsername,savedPassword);
    console.log(loginUsername === savedUsername);
    console.log(loginPassword === savedPassword);

    if(loginUsername === savedUsername && loginPassword === savedPassword){
        main.removeAttribute('hidden')
        loginForm.setAttribute('hidden',true)
        toRegister.setAttribute('hidden',true)
    }else{
        console.log('Username or Password Wrong. Create new account if you dont have one');

    }

})

let toRegisterBtn = document.getElementById('toRegisterBtn')
toRegisterBtn.addEventListener('click',()=>{
    loginForm.setAttribute('hidden',true)
    toRegister.setAttribute('hidden',true)
    registerForm.removeAttribute('hidden')
})

let logoutBtn = document.getElementById('logoutBtn')

logoutBtn.addEventListener('click',()=>{
    main.setAttribute('hidden',true)
    loginForm.removeAttribute('hidden')
    toRegister.removeAttribute('hidden')
})