window.addEventListener("load", () => {
    console.log("로드완료")

    let anis = document.getElementById("ani");
    let stop = document.getElementById("stop");
    let start = document.getElementById("start");

    function ani() {
        anis.style.animationPlayState = "paused";
        stop.style.display = "none";
        start.style.display = "block";
        console.log("stop");
    }

    function reani() {
        anis.style.animationPlayState = "running";
        start.style.display = "none";
        stop.style.display = "block";
        console.log("start");
    }

    stop.addEventListener('click', ani);
    start.addEventListener('click', reani);

    // href = # 비활성화
    var a = document.getElementsByTagName('a');

    var b = a[2].href;

    for (var i = 0; i < a.length; i++) {
        if (a[i].href == b) {
            a[i].addEventListener("click", () => {
                console.log(a[i], "클릭이벤트");
                preventClick(event);
            });
        };
    };
    function preventClick(e) {
        e.preventDefault()
    };

    // 사진 롤링
    var left_btn = document.getElementsByClassName("btns")[0]
    var right_btn = document.getElementsByClassName("btns")[1]
    var idbtn = document.getElementById('btn')
    console.log(left_btn)
    console.log(right_btn)
    
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
        "https://www.ssg.com/"
    ];
    var values = document.getElementById("familysite");
    var link = values.options[values.selectedIndex].value;

    console.log(values)
    console.log(link)
    console.log(urlList[link])
    console.log(isNaN(link));

    if (urlList[link]){
        window.open(urlList[Number(link)]);
    }
};