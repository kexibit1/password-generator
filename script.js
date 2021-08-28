const range = document.getElementById('rangeInput');
const password = document.getElementById('password')

const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

range.addEventListener('input', () => {
    randomPassword(range.value)
})



function randomPassword(length) {
    let text = '';
    for (let i = 0; i < length; i++) {
        text += symbols[Math.floor(Math.random() * symbols.length)]
    }
    password.value = text
    console.log(text)
}