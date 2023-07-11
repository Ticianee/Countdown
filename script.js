/**
 * Countdown
 * @author Ticiane França
 */

let check = false;

function xequeMate () {
    if (check == false) {
        let timer1 = setInterval(function() {start()}, 1000);
        let timer2 = setTimeout(function() {end()}, 13200);
        let count = 10;
        function start () {
            soundBeep();
            document.getElementById("time").innerHTML = count;
            if (count == 0) {
                clearInterval(timer1);
                soundThunder();
                document.getElementById("fire").src = "Images/explosion.gif";
                document.getElementById("time").innerHTML = "GAME OVER";
            }
            count --;
        }
        check = true;
    }
}

function soundThunder () {
    let beep = new Audio ();
    beep.src = "Audio/Thunder_Crack.mp3";
    beep.play();
}

function soundBeep () {
    let beep = new Audio ();
    beep.src = "Audio/Beep_Short.mp3";
    beep.play();
}

function end () {
    document.getElementById("fire").src = "Images/clean.png";
}
