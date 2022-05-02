window.addEventListener("load",() => {
    let anis = document.getElementById("ani");
    let stop = document.getElementById("stop");
    let start = document.getElementById("start");

    function ani() {
        anis.style.animationPlayState="paused";
        stop.style.display="none";
        start.style.display="block";
        console.log("stop");
    }

    function reani() {
        anis.style.animationPlayState="running";
        start.style.display="none";
        stop.style.display="block";
        console.log("start");
    }

    stop.addEventListener('click', ani);
    start.addEventListener('click', reani);

});

function goFamilySite() {
    var urlList = ["https://company.emart.com/ko/main.do","https://www.shinsegaepoint.com/","https://emart.ssg.com/?ckwhere=emart"];
    var value = document.getElementById("familysite");
    var link = value.options[value.selectedIndex].value;
    window.open(urlList[Number(link)]);
};