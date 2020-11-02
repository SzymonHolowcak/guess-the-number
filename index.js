function randomInt() {
    return Math.ceil(Math.random()*100)
}
const randomNumber = randomInt()
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (randomNumber == getUserGuess()){
            setMessage("You got it!")
        } else if (randomNumber < getUserGuess()){
            setMessage("Too high!")
        }
        else{
            setMessage("Too low!")
        }
    }
}
    )
    console.log(randomNumber)
function getUserGuess() {
    const stringNum = document.getElementById('userInput').value
    return parseInt(stringNum)
}
function setMessage (str){
    document.getElementById('message').innerText = str
}