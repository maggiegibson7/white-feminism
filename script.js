var erikaHeart = document.querySelectorAll(".heart-frame");

function showDevil(){
    var erikaDevil = document.querySelector("#erika-devil");
    var chayaDevil = document.querySelector("#chaya-devil");
    var trishaDevil = document.querySelector("#trisha-devil");
    var testMe = window.getComputedStyle(erikaDevil, null);
    //console.log(testMe);
    if (testMe.getPropertyValue("display")=='none') {
        erikaDevil.style.display = 'block';
        chayaDevil.style.display = 'block';
        trishaDevil.style.display = 'block';
    } else if (testMe.getPropertyValue("display")=='block') {
        erikaDevil.style.display = 'none';
        chayaDevil.style.display = 'none';
        trishaDevil.style.display = 'none';
    }
    //console.log('hi!');
};

setInterval(showDevil, 3000);

const moveText = document.querySelector('.animated-text');

document.addEventListener("mousemove", function(e){
  
    let distance = dist(e.clientX, e.clientY, window.innerWidth/2, window.innerHeight/2);
    let hypotenuse = dist(0, 0, window.innerWidth/2, window.innerHeight/2);
    let newColor = map(distance, 0, hypotenuse, 170, 360);
    moveText.style.color = "hsl(" + newColor + ", 57%, 50%)";
});

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

function dist(x1, y1, x2, y2){
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.sqrt( a*a + b*b );
};

var exploitButton = document.querySelector("#exploit-tag");
var queerButton = document.querySelector("#queer-tag");
var victimButton = document.querySelector("#victim-tag");

var exploitInfo = document.querySelector("#exploit-info-notactive");
var queerInfo = document.querySelector("#queer-info-notactive");
var victimInfo = document.querySelector("#victim-info-notactive");

var instru = document.querySelector("#instruc");

exploitActive = 0;
function showExploit() {
    if (exploitActive == 0){
        console.log("click");
        exploitActive = 1;
        exploitInfo.removeAttribute('id');
        exploitInfo.id = "exploit-info-active";
        instru.style.display = 'none';

        victimInfo.removeAttribute('id');
        victimInfo.id = "victim-info-notactive";

        queerInfo.removeAttribute('id');
        queerInfo.id = "queer-info-notactive";
    } else if (exploitActive == 1){
        exploitActive = 0;
        exploitInfo.removeAttribute('id');
        exploitInfo.id = "exploit-info-notactive";
        instru.style.display = 'block';
    }
};
exploitButton.addEventListener("click", showExploit);

victimActive = 0;
function showVictim() {
    if (victimActive == 0){
        victimActive = 1;
        victimInfo.removeAttribute('id');
        victimInfo.id = "victim-info-active";

        queerInfo.removeAttribute('id');
        queerInfo.id = "queer-info-notactive";

        exploitInfo.removeAttribute('id');
        exploitInfo.id = "exploit-info-notactive";

        instru.style.display = 'none';
    } else if (victimActive == 1){
        victimActive = 0;
        victimInfo.removeAttribute('id');
        victimInfo.id = "victim-info-notactive";
        instru.style.display = 'block';
    }
};
victimButton.addEventListener("click", showVictim);

queerActive = 0;
function showQueer() {
    if (queerActive == 0){
        queerActive = 1;
        queerInfo.removeAttribute('id');
        queerInfo.id = "queer-info-active";

        victimInfo.removeAttribute('id');
        victimInfo.id = "victim-info-notactive";
        instru.style.display = 'none';

        exploitInfo.removeAttribute('id');
        exploitInfo.id = "exploit-info-notactive";

    } else if (queerActive == 1){
        queerActive = 0;
        queerInfo.removeAttribute('id');
        queerInfo.id = "queer-info-notactive";
        instru.style.display = 'block';
    }
};
queerButton.addEventListener("click", showQueer);

