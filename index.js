function randomInt() {
    return Math.ceil(Math.random()*100)
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const guess = getUserGuess()
        console.log(guess)
        
    }
})

function getUserGuess() {
    const stringNum = document.getElementById('userInput').value
    return parseInt(stringNum)

}
console.log(randomInt())
