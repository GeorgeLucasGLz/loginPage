const register = document.querySelector('#register')
const container = document.querySelector('#container')
const loginBtn = document.getElementById('login')
const registerBtn = document.getElementById('register')

registerBtn.addEventListener('click', () => {

    container.classList.add('active')
})

loginBtn.addEventListener('click', () => {

    container.classList.remove('active')
})