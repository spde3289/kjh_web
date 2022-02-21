window.addEventListener("load",() => {
    let anis = document.getElementById("ani");
    let stop = document.getElementById("stop");
    let start = document.getElementById("start");

    function ani() {
        document.getElementById("ani").style.animationPlayState="paused";
        document.getElementById("stop").style.display="none";
        document.getElementById("start").style.display="block";
        console.log("stop");
    }

    function reani() {
        document.getElementById("ani").style.animationPlayState="running";
        document.getElementById("start").style.display="none";
        document.getElementById("stop").style.display="block";
        console.log("start");
    }

    stop.addEventListener('click', ani);
    start.addEventListener('click', reani);
});

