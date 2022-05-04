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
    var urlList = [
    "https://company.emart.com/ko/main.do",
    "https://www.shinsegaepoint.com/",
    "https://emart.ssg.com/?ckwhere=emart",
    "http://www.traders.co.kr/index.jsp",
    "http://www.emarteveryday.co.kr/",
    "https://www.emart24.co.kr/",
    "https://www.shinsegaegroupnewsroom.com/",
    "https://www.shinsegae.com/index.do",
    "http://www.sikorea.co.kr/main",
    "http://www.shinsegaefood.com/main.sf",
    "https://www.shinsegae-enc.com/",
    "http://www.sinc.co.kr/main.do",
    "https://www.starbucks.co.kr/index.do",
    "https://www.josunhotel.com/intro.do",
    "https://www.premiumoutlets.co.kr/main/ko",
    "https://www.ssg.com/"];
    var value = document.getElementById("familysite");
    var link = value.options[value.selectedIndex].value;
    console.log(isNaN(link));
    if(isNaN(link)){
    
    }else{
    window.open(urlList[Number(link)]);
    }
};

const a = document.getElementsByTagName("a");

console.log(a);