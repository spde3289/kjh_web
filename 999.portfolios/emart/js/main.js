window.addEventListener("load",() => {
    let anis = document.getElementById("ani");
    let stop = document.getElementById("stop");

    function ani() {
        anis.classList.remove("ani");
        console.log("stop");
    }
    
    stop.addEventListener('click', ani);
});

