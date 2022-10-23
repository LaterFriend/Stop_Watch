const startstopBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerID;

function stopWatch() {
    seconds++;

    if(seconds/60===1){
        seconds = 0;
        minutes++;
        if(minutes/60===1){
            minutes = 0;
            hours++;
        }
    }

    document.getElementById('timer').innerText
    = `${hours<10?"0"+hours : hours}\
:${minutes<10?"0"+minutes : minutes}\
:${seconds<10?"0"+seconds : seconds}`;
}
startstopBtn.addEventListener('click',function() {
    this.classList.toggle('stop');
    if(this.classList.contains('stop')){
        document.querySelector('.start').innerHTML = 
        "<i class='fa-solid fa-pause'</i>";
        timerID = window.setInterval(stopWatch,1000);
        // volá danou funkci ve specifikovaném intervalu (každou vteřinu volá funkci stopWatch)
        // vrací ID pro danou funkci kterou voláme v intervalu
    } else {
        document.querySelector('.start').innerHTML = 
        "<i class='fa-solid fa-play'</i>";
        window.clearInterval(timerID);
        // zastavujeme opakované volání funkce
    };
});

resetBtn.addEventListener('click',function() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
});

