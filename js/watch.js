let intervalId = null;

let number = document.getElementById('number');

function start() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            number.innerText = parseInt(number.innerText) + 1;
        }, 1000)
    }
}

document.getElementById('start-btn').addEventListener('click', function(){
    start()
    console.log(intervalId);
})

document.getElementById('repeat').addEventListener('click', function(){
    number.innerText = 0;
    start();
})

document.getElementById('stop-btn').addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null;
})
