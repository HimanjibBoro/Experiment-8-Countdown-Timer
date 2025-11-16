let targetDate = new Date("December 31, 2025 00:00:00").getTime();

let timer = setInterval(function () {

    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s";
        
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's Up!";
    }

}, 1000);
