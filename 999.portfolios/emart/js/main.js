window.addEventListener("load", () => {
    console.log("로드완료")
    // txt 슬리이드
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
    var ATags = document.getElementsByTagName('a');

    var ATrue = ATags[2].href;

    for (let i = 0; i < ATags.length; i++) {
        if (ATags[i].href == ATrue) {
            ATags[i].addEventListener("click", () => {
                console.log(ATags[i], "클릭이벤트");
                preventClick(event);
            });
        };
    };

    function preventClick(e) {
        e.preventDefault();
    };

    // 이미지 슬라이드 
    var left_btn = document.getElementsByClassName("btns")[0];
    var right_btn = document.getElementsByClassName("btns")[1];
    var slideImg = document.querySelector(".changeImg img");
    var dot_on = document.getElementsByClassName('dot');
    var stopInterval = document.getElementsByClassName('stop')
    var startInterval = document.getElementsByClassName('start')

    dot_on[0].classList.add("dot_on");
    stopInterval[0].style.display = "block"
    
    stopInterval[0].onclick = () => imgInterval(0)
    startInterval[0].onclick = () => imgInterval(1)

    
    var ImgList = [
        "./imgs/20211202_0818009_002.jpg",
        "./imgs/20211202_1543008_040.jpg",
        "./imgs/20211215_2032024_380.jpg",
    ];
    slideImg.src = ImgList[0];
    let NumUp = 0;
    
    right_btn.onclick = () => num(0);
    left_btn.onclick = () => num(1);
    dot_on[0].onclick = () =>dotSliden(0)
    dot_on[1].onclick = () =>dotSliden(1)
    dot_on[2].onclick = () => dotSliden(2)
    // dot 함수
    function dotSliden(n){
        console.log(n);
        for(let i = 0; i <dot_on.length; i ++){
            dot_on[i].classList.remove('dot_on');
        };
        dot_on[n].classList.add("dot_on");
        slideImg.src = ImgList[n];
        NumUp = n;
    };
    // 이미지 함수
    const num = num => {
        dot_on[NumUp].classList.remove("dot_on");
        if (num) {
            NumUp--;
            if (NumUp === -1) NumUp = ImgList.length - 1;
        } else {
            NumUp++;
            if (NumUp === ImgList.length) NumUp = 0;
        };
        slideImg.src = ImgList[NumUp];
        dot_on[NumUp].classList.add("dot_on");
    };
    // 인터벌 함수
    var ImgInterval =setInterval(function(){num(0)},4000)
    const imgInterval = n =>{
        
        if(n){
            stopInterval[0].style.display = "block"
            startInterval[0].style.display = "none"
            ImgInterval = setInterval(function(){num(0)},4000)
        }else{
            stopInterval[0].style.display = "none"
            startInterval[0].style.display = "block"
            clearInterval(ImgInterval);
        };
    };
    //setInterval(imgInterval(1),2000);



});

// 사이트 바로가기 
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

    if (urlList[link]) {
        window.open(urlList[Number(link)]);
    }
};