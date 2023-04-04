const buttons = document.getElementsByTagName('button')
const h1 = document.getElementsByTagName('h1')

let start
let count = 0
let running = false

buttons[0].addEventListener('click', () => { (running == false && buttons[0].innerHTML == 'Start') ? startWatch() : stopWatch() })
buttons[1].addEventListener('click', () => { Pause() })

function startWatch() {
    start = setInterval(() => {
        count++;
        h1[0].innerHTML = count;
    }, 1000)
    running = true
    buttons[0].innerHTML = 'Stop'
    return start
}

function Pause() {
    if (running == true) {
        clearInterval(start)
        buttons[1].innerHTML = 'Start'
        running = false
    } else {
        buttons[1].innerHTML = 'Pause'
        startWatch()
    }
}

function stopWatch() {
    h1[0].innerHTML = 0;
    clearInterval(start)
    count = 0
    running = false
    buttons[0].innerHTML = 'Start'
    buttons[1].innerHTML = 'Pause'
}


