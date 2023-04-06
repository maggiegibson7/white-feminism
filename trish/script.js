

var beginButton = document.querySelector("#begin-button");
var trollButton = document.querySelector("#troll-button");
var controButton = document.querySelector("#contro-button");
var dawsonButton = document.querySelector("#dawson-button");
var currentButton = document.querySelector("#current-button");
var home = document.querySelector("#trish-links");
var quoteSticky = document.querySelector("#quote-sticky");
var twitDesc = document.querySelector("#twit-description");
twitDesc.style.display = "none";

function showDevil(){
    var trishaDevil = document.querySelector("#demon-trish");
    var testMe = window.getComputedStyle(trishaDevil, null);
    //console.log(testMe);
    if (testMe.getPropertyValue("display")=='none') {
        trishaDevil.style.display = 'block';
    } else if (testMe.getPropertyValue("display")=='block') {
        trishaDevil.style.display = 'none';
    }
    //console.log('hi!');
};

setInterval(showDevil, 3000);

const icon = document.querySelector("#icon");

const mainArea = document.querySelector("#main-area");
const beginInfo = document.querySelector("#begin");
const trollInfo = document.querySelector("#trolling");
const timeLine = document.querySelector(".timeline");
const progressInd = document.querySelector(".progress-container")
const whiteInfo = document.querySelector("#white-men");
var socialMediaPage = document.querySelector("#social-media");
const trishTwitterProfile = document.querySelector("#trish-twitter-profile");
const roughStart = document.querySelector("#rough-start");
roughStart.style.display = 'none';
socialMediaPage.style.display = "none";
whiteInfo.style.display = "none";
const stickyBankOne = document.querySelector("#sticky-bank-one");
stickyBankOne.style.display = "none";
const stickyBankTwo = document.querySelector("#sticky-bank-two");
trishTwitterProfile.style.display = "none";
quoteSticky.style.display = "none";

function beginTab() {
    mainArea.append(beginInfo);
    document.querySelector("#summary").style.display = "none";
    beginInfo.style.display = "grid";
    trollInfo.style.display = "none";
    controversyContent.style.display = "none";
    mentalHealthContent.style.display = "none";
    attentionContent.style.display = "none";
    bodyImgContent.style.display = "none";
    icon.style.display = "none";
    progressInd.style.display = "none";
    timeLine.style.display = "none";
    home.style.display = "none";
    whiteInfo.style.display = "none";
    stickyBankOne.style.display = "none";
    dawsonSide.style.display = "none";
    starSide.style.display = "none";
    wholeDrama.style.display = "none";
    stickyBankTwo.style.display = "none";
    socialMediaPage.style.display = "none";
    trishTwitterProfile.style.display = "none";
    quoteSticky.style.display = "none";
    twitDesc.style.display = "none";
    dobrikSide.style.display = "none";
    roughStart.style.display = 'none';
};

function trollTab() {
    mainArea.append(trollInfo);
    document.querySelector("#summary").style.display = "none";
    trollInfo.style.display = "block";
    beginInfo.style.display = "none";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
    icon.style.display = "none";
    progressInd.style.display = "none";
    timeLine.style.display = "none";
    home.style.display = "none";
    whiteInfo.style.display = "none";
    stickyBankOne.style.display = "none";
    dawsonSide.style.display = "none";
    starSide.style.display = "none";
    wholeDrama.style.display = "none";
    stickyBankTwo.style.display = "none";
    socialMediaPage.style.display = "none";
    trishTwitterProfile.style.display = "none";
    quoteSticky.style.display = "none";
    twitDesc.style.display = "none";
    dobrikSide.style.display = "none";
    roughStart.style.display = 'none';
};

function whiteTab() {
    mainArea.append(whiteInfo);
    whiteInfo.style.display = "block";
    document.querySelector("#summary").style.display = "none";
    trollInfo.style.display = "none";
    beginInfo.style.display = "none";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
    icon.style.display = "none";
    progressInd.style.display = "none";
    timeLine.style.display = "none";
    home.style.display = "none";
    controversyContent.style.display = "none";
    mentalHealthContent.style.display = "none";
    attentionContent.style.display = "none";
    bodyImgContent.style.display = "none";
    stickyBankOne.style.display = "block";
    wholeDrama.style.display = "block";
    stickyBankTwo.style.display = "none";
    socialMediaPage.style.display = "none";
    trishTwitterProfile.style.display = "none";
    quoteSticky.style.display = "none";
    twitDesc.style.display = "none";
    roughStart.style.display = 'none';
}

function showSocialMedia(){
    mainArea.append(socialMediaPage);
    whiteInfo.style.display = "none";
    document.querySelector("#summary").style.display = "none";
    trollInfo.style.display = "none";
    beginInfo.style.display = "none";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
    icon.style.display = "none";
    progressInd.style.display = "none";
    timeLine.style.display = "none";
    home.style.display = "none";
    controversyContent.style.display = "none";
    mentalHealthContent.style.display = "none";
    attentionContent.style.display = "none";
    bodyImgContent.style.display = "none";
    stickyBankOne.style.display = "none";
    wholeDrama.style.display = "none";
    stickyBankTwo.style.display = "none";
    socialMediaPage.style.display = "block";
    trishTwitterProfile.style.display = "block";
    starSide.style.display = "none";
    dawsonSide.style.display = "none";
    quoteSticky.style.display = "block";
    rightSide.append(twitDesc);
    twitDesc.style.display = "block";
    dobrikSide.style.display = "none";
    roughStart.style.display = 'none';
};

function roughTab(){
    mainArea.append(roughStart);
    roughStart.style.display = 'block';
    whiteInfo.style.display = "none";
    document.querySelector("#summary").style.display = "none";
    trollInfo.style.display = "none";
    beginInfo.style.display = "none";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
    icon.style.display = "none";
    progressInd.style.display = "none";
    timeLine.style.display = "none";
    home.style.display = "none";
    controversyContent.style.display = "none";
    mentalHealthContent.style.display = "none";
    attentionContent.style.display = "none";
    bodyImgContent.style.display = "none";
    stickyBankOne.style.display = "none";
    wholeDrama.style.display = "none";
    stickyBankTwo.style.display = "none";
    socialMediaPage.style.display = "none";
    trishTwitterProfile.style.display = "none";
    quoteSticky.style.display = "none";
    twitDesc.style.display = "none";
}

beginButton.addEventListener("click", beginTab);
trollButton.addEventListener("click", trollTab);
dawsonButton.addEventListener("click", whiteTab);
currentButton.addEventListener("click", showSocialMedia);
controButton.addEventListener('click', roughTab);

const moveText = document.querySelectorAll('.animated-text');

document.addEventListener("mousemove", function(e){
  
    let distance = dist(e.clientX, e.clientY, window.innerWidth/2, window.innerHeight/2);
    let hypotenuse = dist(0, 0, window.innerWidth/2, window.innerHeight/2);
    let newColor = map(distance, 0, hypotenuse, 170, 360);
    moveText[0].style.color = "hsl(" + newColor + ", 57%, 50%)";
    moveText[1].style.color = "hsl(" + newColor + ", 57%, 50%)";
    moveText[2].style.color = "hsl(" + newColor + ", 57%, 50%)";
    moveText[3].style.color = "hsl(" + newColor + ", 57%, 50%)";
});

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

function dist(x1, y1, x2, y2){
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.sqrt( a*a + b*b );
};

var familyIcon = document.querySelector("#family-icon");
var religionIcon = document.querySelector("#religion-icon");
var stripperIcon = document.querySelector("#stripper-icon");
var youtubeIcon = document.querySelector("#youtube-icon");
var filmIcon = document.querySelector("#film-icon");

var familyContent = document.querySelector("#family-his-content-card");
var stripperContent = document.querySelector("#stripper-content-card");
var youtubeContent = document.querySelector("#youtube-content-card");
var religionContent = document.querySelector("#religion-content-card");
var filmContent = document.querySelector("#film-content-card");

var rightSide = document.querySelector("#right-sidebar");

function showFamily() {
    rightSide.append(familyContent);
    familyContent.style.display = "block";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
}

familyIcon.addEventListener("click", showFamily);

function showStripper() {
    rightSide.append(stripperContent);
    stripperContent.style.display = "block";
    familyContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
}

stripperIcon.addEventListener("click", showStripper);

function showYoutube() {
    rightSide.append(youtubeContent);
    youtubeContent.style.display = "block";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    religionContent.style.display = "none";
    filmContent.style.display = "none";
}

youtubeIcon.addEventListener("click", showYoutube);

function showReligion() {
    rightSide.append(religionContent);
    religionContent.style.display = "block";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    filmContent.style.display = "none";
}

religionIcon.addEventListener("click", showReligion);

function showFilm() {
    rightSide.append(filmContent);
    filmContent.style.display = "block";
    familyContent.style.display = "none";
    stripperContent.style.display = "none";
    youtubeContent.style.display = "none";
    religionContent.style.display = "none";
}

filmIcon.addEventListener("click", showFilm);

var attentionTag = document.querySelector("#attention-tag");
var mentalHealthTag = document.querySelector("#mental-health-tag");
var controversyTag = document.querySelector("#controversy-tag");
var bodyImgTag = document.querySelector("#body-image-tag");


var attentionContent = document.querySelector("#attention-content-card");
var mentalHealthContent = document.querySelector("#mental-health-content-card");
var controversyContent = document.querySelector("#controversy-content-card");
var bodyImgContent = document.querySelector("#body-img-content-card");


function showAttention() {
    rightSide.append(attentionContent);
    attentionContent.style.display = "block";
    mentalHealthContent.style.display = "none";
    controversyContent.style.display = "none";
    bodyImgContent.style.display = "none";
}

attentionTag.addEventListener("click", showAttention);

function showMentalHealth() {
    rightSide.append(mentalHealthContent);
    mentalHealthContent.style.display = "block";
    attentionContent.style.display = "none";
    controversyContent.style.display = "none";
    bodyImgContent.style.display = "none";
}

mentalHealthTag.addEventListener("click", showMentalHealth);

function showControversy() {
    rightSide.append(controversyContent);
    controversyContent.style.display = "block";
    mentalHealthContent.style.display = "none";
    attentionContent.style.display = "none";
    bodyImgContent.style.display = "none";
}

controversyTag.addEventListener("click", showControversy);

function showBodyImg() {
    rightSide.append(bodyImgContent);
    bodyImgContent.style.display = "block";
    mentalHealthContent.style.display = "none";
    controversyContent.style.display = "none";
    attentionContent.style.display = "none";
}

bodyImgTag.addEventListener("click", showBodyImg);

mainArea.onscroll = function() {progressBar()};

function progressBar(){
    var winScroll = mainArea.scrollTop || mainArea.scrollTop;
    var height = mainArea.scrollHeight - mainArea.clientHeight;
    var scrolled = (winScroll / height) * 100;
    //console.log(scrolled);
    document.getElementById("myBar").style.height = scrolled + "%";
};

rightSide.onscroll = function() {progressBarTwo()};

function progressBarTwo() {
    var winScroll = rightSide.scrollTop || rightSide.scrollTop;
    var height = rightSide.scrollHeight - rightSide.clientHeight;
    var scrolled = (winScroll/height) * 100;
    //console.log(scrolled);
    document.getElementById("myBarTwo").style.height = scrolled + "%";
};

var dawsonIcon = document.querySelector("#dawson-icon");
var dawsonMain = document.querySelector("#dawson-main");
var dawsonLabel = document.querySelector("#dawson-label");
var dawsonSide = document.querySelector("#dawson-side");
dawsonMain.style.display = "none";
dawsonSide.style.display = "none";

let dawsonActive = 0;
let starActive = 0;
let dobrikActive = 0;

function showDawson() {
    if (dawsonActive == 0) {
        dawsonActive = 1;
        dawsonMain.style.display = "block";
        dawsonIcon.setAttribute("class", "active-icon");
        dawsonLabel.style.textDecoration = "underline";
        rightSide.append(dawsonSide);
        dawsonSide.style.display = "block";
        starActive = 0;
        starMain.style.display = "none";
        starIcon.classList.remove("active-icon");
        starIcon.setAttribute("class", "icon-butt");
        starLabel.style.textDecoration = "none";
        starSide.style.display = "none";
        dobrikActive = 0;
        dobrikMain.style.display = "none";
        dobrikIcon.classList.remove("active-icon");
        dobrikIcon.setAttribute("class", "icon-butt");
        dobrikLabel.style.textDecoration = "none";
        dobrikSide.style.display = "none";
    } else if (dawsonActive == 1) {
        dawsonActive = 0;
        dawsonMain.style.display = "none";
        dawsonIcon.classList.remove("active-icon");
        dawsonIcon.setAttribute("class", "icon-butt");
        dawsonLabel.style.textDecoration = "none";
        dawsonSide.style.display = "none";
    }
};
dawsonIcon.addEventListener("click", showDawson);

var starIcon = document.querySelector("#star-icon");
var starMain = document.querySelector("#star-main");
var starLabel = document.querySelector("#star-label");
var starSide = document.querySelector("#star-side");
starMain.style.display = "none";
starSide.style.display = "none";
function showStar() {
    if (starActive == 0) {
        starActive = 1;
        starMain.style.display = "block";
        starIcon.setAttribute("class", "active-icon");
        starLabel.style.textDecoration = "underline";
        rightSide.append(starSide);
        starSide.style.display = "block";
        dawsonActive = 0;
        dawsonMain.style.display = "none";
        dawsonIcon.classList.remove("active-icon");
        dawsonIcon.setAttribute("class", "icon-butt");
        dawsonLabel.style.textDecoration = "none";
        dawsonSide.style.display = "none";
        dobrikActive = 0;
        dobrikMain.style.display = "none";
        dobrikIcon.classList.remove("active-icon");
        dobrikIcon.setAttribute("class", "icon-butt");
        dobrikLabel.style.textDecoration = "none";
        dobrikSide.style.display = "none";
    } else if (starActive == 1) {
        starActive = 0;
        starMain.style.display = "none";
        starIcon.classList.remove("active-icon");
        starIcon.setAttribute("class", "icon-butt");
        starLabel.style.textDecoration = "none";
        starSide.style.display = "none";
    }
};
starIcon.addEventListener("click", showStar);

var dobrikIcon = document.querySelector("#dobrik-icon");
var dobrikLabel = document.querySelector("#dobrik-label");
var dobrikMain = document.querySelector("#dobrik-main");
var dobrikSide = document.querySelector("#dobrik-side");
dobrikMain.style.display = "none";
dobrikSide.style.display = "none";

function showDobrik(){
    if (dobrikActive == 0){
        dobrikActive = 1;
        dobrikMain.style.display = "block";
        dobrikIcon.setAttribute("class", "active-icon");
        dobrikLabel.style.textDecoration = "underline";
        rightSide.append(dobrikSide);
        dobrikSide.style.display = "block";
        dawsonActive = 0;
        dawsonMain.style.display = "none";
        dawsonIcon.classList.remove("active-icon");
        dawsonIcon.setAttribute("class", "icon-butt");
        dawsonLabel.style.textDecoration = "none";
        dawsonSide.style.display = "none";
        starActive = 0;
        starMain.style.display = "none";
        starIcon.classList.remove("active-icon");
        starIcon.setAttribute("class", "icon-butt");
        starLabel.style.textDecoration = "none";
        starSide.style.display = "none";
    } else if (dobrikActive == 1){
        dobrikActive = 0;
        dobrikMain.style.display = "none";
        dobrikIcon.classList.remove("active-icon");
        dobrikIcon.setAttribute("class", "icon-butt");
        dobrikLabel.style.textDecoration = "none";
        dobrikSide.style.display = "none";
    }
};
dobrikIcon.addEventListener("click", showDobrik);

var stickyButtonOne = document.querySelectorAll(".open-me-one");
stickyOpenOne = 0;
function moveStickyOne() {
    var stickyOne = document.querySelector("#sticky-one");
    var stickyOneTwo = document.querySelector("#sticky-one-two");
    if (stickyOpenOne == 0){
        stickyOpenOne = 1;
        stickyOne.style.marginTop = "68vh";
        stickyOne.style.animation = "interact 2s ease-in-out";
        stickyOne.style.animationIterationCount = "infinite";
        stickyOne.style.animationDirection = "alternate";
        stickyButtonOne[0].innerHTML = "▼"
        stickyButtonOne[1].innerHTML = "▼"
        stickyOneTwo.style.marginTop = "68vh";
        stickyOneTwo.style.animation = "interact 2s ease-in-out";
        stickyOneTwo.style.animationIterationCount = "infinite";
        stickyOneTwo.style.animationDirection = "alternate";
    } else if (stickyOpenOne == 1){
        stickyOpenOne = 0;
        stickyOne.style.marginTop = "96vh";
        stickyOne.style.animation = "none";
        stickyOneTwo.style.marginTop = "96vh";
        stickyOneTwo.style.animation = "none";
        stickyButtonOne[0].innerHTML = "▲";
        stickyButtonOne[1].innerHTML = "▲";
    }
};
stickyButtonOne[0].addEventListener("click", moveStickyOne);
stickyButtonOne[1].addEventListener("click", moveStickyOne);

var stickyButtonTwo = document.querySelectorAll(".open-me-two");
stickyOpenTwo = 0;
function moveStickyTwo() {
    var stickyTwo = document.querySelector("#sticky-two");
    var stickyTwoTwo = document.querySelector("#sticky-two-two")
    if (stickyOpenTwo == 0){
        stickyOpenTwo = 1;
        stickyTwo.style.marginTop = "68vh";
        stickyTwo.style.animation = "interact 2s ease-in-out";
        stickyTwo.style.animationIterationCount = "infinite";
        stickyTwo.style.animationDirection = "alternate";
        stickyButtonTwo[0].innerHTML = "▼"
        stickyTwoTwo.style.marginTop = "68vh";
        stickyTwoTwo.style.animation = "interact 2s ease-in-out";
        stickyTwoTwo.style.animationIterationCount = "infinite";
        stickyTwoTwo.style.animationDirection = "alternate";
        stickyButtonTwo[1].innerHTML = "▼"
    } else if (stickyOpenTwo == 1){
        stickyOpenTwo = 0;
        stickyTwo.style.marginTop = "96vh";
        stickyTwo.style.animation = "none";
        stickyButtonTwo[0].innerHTML = "▲";
        stickyTwoTwo.style.marginTop = "96vh";
        stickyTwoTwo.style.animation = "none";
        stickyButtonTwo[1].innerHTML = "▲";
    }
};
stickyButtonTwo[0].addEventListener("click", moveStickyTwo);
stickyButtonTwo[1].addEventListener("click", moveStickyTwo);

var stickyButtonThree = document.querySelectorAll(".open-me-three");
stickyOpenThree = 0;
function moveStickyThree() {
    var stickyThree = document.querySelector("#sticky-three");
    var stickyThreeTwo = document.querySelector("#sticky-three-two");
    if (stickyOpenThree == 0){
        stickyOpenThree = 1;
        stickyThree.style.marginTop = "68vh";
        stickyThree.style.animation = "interact 2s ease-in-out";
        stickyThree.style.animationIterationCount = "infinite";
        stickyThree.style.animationDirection = "alternate";
        stickyButtonThree[0].innerHTML = "▼"
        stickyOpenThree = 1;
        stickyThreeTwo.style.marginTop = "68vh";
        stickyThreeTwo.style.animation = "interact 2s ease-in-out";
        stickyThreeTwo.style.animationIterationCount = "infinite";
        stickyThreeTwo.style.animationDirection = "alternate";
        stickyButtonThree[1].innerHTML = "▼"
    } else if (stickyOpenThree == 1){
        stickyOpenThree = 0;
        stickyThree.style.marginTop = "96vh";
        stickyThree.style.animation = "none";
        stickyButtonThree[0].innerHTML = "▲";
        stickyThreeTwo.style.marginTop = "96vh";
        stickyThreeTwo.style.animation = "none";
        stickyButtonThree[1].innerHTML = "▲";
    }
};
//console.log(stickyButtonThree[1].innerHTML);
stickyButtonThree[0].addEventListener("click", moveStickyThree);
stickyButtonThree[1].addEventListener("click", moveStickyThree);

var stickyButtonFour = document.querySelector(".open-me-four");
stickyOpenFour = 0;
function moveStickyFour() {
    var stickyFour = document.querySelector("#sticky-four");
    var stickyFourTwo = document.querySelector("#sticky-four-two");
    if (stickyOpenFour == 0){
        stickyOpenFour = 1;
        stickyFour.style.marginTop = "68vh";
        stickyFour.style.animation = "interact 2s ease-in-out";
        stickyFour.style.animationIterationCount = "infinite";
        stickyFour.style.animationDirection = "alternate";
        stickyButtonFour.innerHTML = "▼"
        stickyFourTwo.style.marginTop = "68vh";
        stickyFourTwo.style.animation = "interact 2s ease-in-out";
        stickyFourTwo.style.animationIterationCount = "infinite";
        stickyFourTwo.style.animationDirection = "alternate";
    } else if (stickyOpenFour == 1){
        stickyOpenFour = 0;
        stickyFour.style.marginTop = "96vh";
        stickyFour.style.animation = "none";
        stickyButtonFour.innerHTML = "▲";
        stickyFourTwo.style.marginTop = "96vh";
        stickyFourTwo.style.animation = "none";
    }
};
stickyButtonFour.addEventListener("click", moveStickyFour);
//stickyButtonFour[1].addEventListener("click", moveStickyFour);

var dramaButton = document.querySelector("#open-me-drama");
var dramaContent = document.querySelector("#drama-main-content");
var wholeDrama = document.querySelector("#drama-sticky");

dramaContent.style.display = "none";
wholeDrama.style.height = "4vh";
dramaOpen = 0;

function openDrama() {
    if (dramaOpen == 0){
        dramaOpen = 1;
        wholeDrama.style.height = "70vh";
        wholeDrama.style.animation = "interact 2s ease-in-out";
        wholeDrama.style.animationIterationCount = "infinite";
        wholeDrama.style.animationDirection = "alternate";
        dramaContent.style.display = "block";
        dramaButton.innerHTML = "▲";
    } else if (dramaOpen == 1){
        dramaOpen = 0;
        dramaContent.style.display = "none";
        wholeDrama.style.height = "4vh";
        wholeDrama.style.animation = "none";
        dramaButton.innerHTML = "▼";
    }
};
//console.log(dramaOpen);
dramaButton.addEventListener("click", openDrama);
wholeDrama.style.display = "none";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95b5d8ed01msha02b9d913ce6c05p170e68jsn7c8cf00a38c6',
		'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
	}
};
kaoArray = new Array();
kaoArray[0] = "(⊃｡•́‿•̀｡)⊃"
kaoArray[1] = "ヾ(=`ω´=)ノ”"
kaoArray[2] = "ʕ·ᴥ·　ʔ"
kaoArray[3] = "(๑´• .̫ •ू`๑)"
kaoArray[4] = "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡"
kaoArray[5] = "｡ﾟ(*´□`)ﾟ｡"
kaoArray[6] = "(^.~)☆"
kaoArray[7] = "	°˖✧◝(⁰▿⁰)◜✧˖°"
kaoArray[8] = "(๑˘︶˘๑)"
kaoArray[9] = "	(´｡• ω •｡`)"



fetch('https://twitter135.p.rapidapi.com/UserTweets/?id=27252380&count=40', options)
	.then(function (response) {
        return response.json();
    })
	.then(function (data) {
        //console.log(data);
        var twitterTrish = data;
        //console.log(twitterTrish);
        var trishTweets = twitterTrish.data.user.result.timeline.timeline.instructions[1].entries;
        
        function printTweets() {
            trishTweets.forEach((tweet) => {
                console.log(tweet);
            });
        };
        printTweets();
        
        function userData(){
            var tweetType = trishTweets[0].content.entryType;
            if (tweetType == 'TimelineTimelineModule'){
                var profileDisplay = document.createElement('div');
                var displayName = document.createElement("h2");
                var displayNameConsole = trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.name;
                displayName.innerText = displayNameConsole;
                profileDisplay.appendChild(displayName);
                displayName.id = "display-name";

                //load @ once
                var twitterHandle = document.createElement("p");
                var twitterHandleConsole = trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.screen_name;
                twitterHandle.innerText = `@${twitterHandleConsole}`;
                profileDisplay.appendChild(twitterHandle);
                twitterHandle.id = "twitter-handle"

                //load follower count once
                var followerCount = document.createElement("p");
                var followerCountConsole = trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.followers_count;
                followerCount.innerText = `(⌒‿⌒)♡→ followed by ${followerCountConsole}`;
                profileDisplay.appendChild(followerCount);
                followerCount.id = "follower-count";

                //load tweet count once
                var tweetCount = document.createElement("p");
                var tweetCountConsole = trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.statuses_count;
                tweetCount.innerText = `(⌒‿⌒)♡→ tweeted ${tweetCountConsole} times`;
                profileDisplay.appendChild(tweetCount);
                tweetCount.id = "tweet-count";

                //load link in bio once
                var urlBio = trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.entities.url.urls[0].expanded_url;
                var a = document.createElement("a");
                var p1 = (trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.description);
                var linkText = document.createTextNode(p1);
                a.appendChild(linkText);
                a.href = urlBio;
                a.title = linkText;
                profileDisplay.appendChild(a);
                a.id = "link-bio";
                //console.log(a);

                //load banner img once
                var bannerPicture = document.createElement("img");
                bannerPicture.src = trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.profile_banner_url;
                profileDisplay.appendChild(bannerPicture);
                bannerPicture.id = "banner-picture";

                //load profile pic once
                var profilePic = document.createElement("img");
                profilePic.src = trishTweets[0].content.items[0].item.itemContent.tweet_results.result.core.user_results.result.legacy.profile_image_url_https;
                profileDisplay.appendChild(profilePic);
                profilePic.id = "profile-picture";

                trishTwitterProfile.appendChild(profileDisplay); 
                return;
            };
            retweetTest = trishTweets[0].content.itemContent.tweet_results.result;
            var profileDisplay = document.createElement('div');
            if (retweetTest.hasOwnProperty('tweet')){//if its a retweet
                //load display name once
                var displayName = document.createElement("h1");
                var displayNameConsole = trishTweets[0].content.itemContent.tweet_results.result.core.tweet.user_results.result.legacy.name;
                displayName.innerText = displayNameConsole;
                profileDisplay.appendChild(displayName);
                displayName.id = "display-name";

                //load @ once
                var twitterHandle = document.createElement("p");
                var twitterHandleConsole = trishTweets[0].content.itemContent.tweet_results.result.tweet.core.user_results.result.legacy.screen_name;
                twitterHandle.innerText = `@${twitterHandleConsole}`;
                profileDisplay.appendChild(twitterHandle);
                twitterHandle.id = "twitter-handle"

                //load follower count once
                var followerCount = document.createElement("p");
                var followerCountConsole = trishTweets[0].content.itemContent.tweet_results.result.tweet.core.user_results.result.legacy.followers_count;
                followerCount.innerText = `(⌒‿⌒)♡→ followed by ${followerCountConsole}`;
                profileDisplay.appendChild(followerCount);
                followerCount.id = "follower-count";

                //load tweet count once
                var tweetCount = document.createElement("p");
                var tweetCountConsole = trishTweets[0].content.itemContent.tweet_results.result.tweet.core.user_results.result.legacy.statuses_count;
                tweetCount.innerText = `(⌒‿⌒)♡→ tweeted ${tweetCountConsole} times`;
                profileDisplay.appendChild(tweetCount);
                tweetCount.id = "tweet-count";

                //load link in bio once
                var urlBio = trishTweets[0].content.itemContent.tweet_results.result.tweet.core.user_results.result.legacy.entities.url.urls[0].expanded_url;
                var a = document.createElement("a");
                var p1 = (trishTweets[0].content.itemContent.tweet_results.result.tweet.core.user_results.result.legacy.description);
                var linkText = document.createTextNode(p1);
                a.appendChild(linkText);
                a.href = urlBio;
                a.title = linkText;
                profileDisplay.appendChild(a);
                a.id = "link-bio";
                //console.log(a);

                //load banner img once
                var bannerPicture = document.createElement("img");
                bannerPicture.src = trishTweets[0].content.itemContent.tweet_results.result.tweet.core.user_results.result.legacy.profile_banner_url;
                profileDisplay.appendChild(bannerPicture);
                bannerPicture.id = "banner-picture";

                //load profile pic once
                var profilePic = doucment.createElement("img");
                profilePic.src = trishTweets[0].content.itemContent.tweet_results.result.tweet.core.user_results.result.legacy.profile_image_url_https;
                profileDisplay.appendChild(profilePic);
                profilePic.id = "profile-picture";

                trishTwitterProfile.appendChild(profileDisplay);
            } else {//not a retweet
                //load display name once
                var displayName = document.createElement("h1");
                var displayNameConsole = trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.name;
                displayName.innerText = displayNameConsole;
                profileDisplay.appendChild(displayName);
                displayName.id = "display-name";
                displayName.classList.add("animated-text");

                //load @ once
                var twitterHandle = document.createElement("p");
                var twitterHandleConsole = trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.screen_name;
                twitterHandle.innerText = `@${twitterHandleConsole}`;
                profileDisplay.appendChild(twitterHandle);
                twitterHandle.id = "twitter-handle"

                //load banner img once
                var bannerPicture = document.createElement("img");
                bannerPicture.src = trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.profile_banner_url;
                profileDisplay.appendChild(bannerPicture);
                bannerPicture.id = "banner-picture";

                //load profile pic once
                var profilePic = document.createElement("img");
                profilePic.src = trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.profile_image_url_https;
                profileDisplay.appendChild(profilePic);
                profilePic.id = "profile-picture";

                //load follower count once
                var followerCount = document.createElement("p");
                var followerCountConsole = trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.followers_count;
                followerCount.innerText = `(⌒‿⌒)♡→ followed by ${followerCountConsole} people`;
                profileDisplay.appendChild(followerCount);
                followerCount.id = "follower-count";

                //load tweet count once
                var tweetCount = document.createElement("p");
                var tweetCountConsole = trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.statuses_count;
                tweetCount.innerText = `(⌒‿⌒)♡→ has tweeted ${tweetCountConsole} times`;
                profileDisplay.appendChild(tweetCount);
                tweetCount.id = "tweet-count";

                //load link in bio once
                var urlBio = trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.entities.url.urls[0].expanded_url;
                var a = document.createElement("a");
                var p1 = (trishTweets[0].content.itemContent.tweet_results.result.core.user_results.result.legacy.description);
                var linkText = document.createTextNode(p1);
                a.appendChild(linkText);
                a.href = urlBio;
                a.title = linkText;
                profileDisplay.appendChild(a);
                a.id = "link-bio";
                //console.log(a);

                trishTwitterProfile.appendChild(profileDisplay);
            };
        };
        //trishTweets.forEach(element => {

        //})
       // console.log(dataFilter);
        userData(); //check API tomorrow and see if documentation is correct; issue with void entries appearing; stopping at tweeter.content.tweet_results
        function appendTweets(){
            trishTweets.forEach((tweeter)=> {
                const myDiv = document.createElement("div");
                socialMediaPage.append(myDiv);
                myDiv.classList.add("tweets");
                var tweetType = tweeter.content.entryType;
                var voidTest = tweeter.entryId;
                //console.log(tweeter.content.itemContent);
                var voidTesting = tweeter.content.itemContent;
                //console.log(voidTest.hasOwnProperty('tweet_results') == false);
                //console.log(voidTesting);
                const index = trishTweets.indexOf(tweeter);
                
                
                if (tweetType == 'TimelineTimelineCursor'){
                    console.log('caught it!')
                    return;
                }
                
                const adult = tweeter.content.itemContent.itemType;
                if (tweetType == 'TimelineTimelineItem'){
                    function contentLoad() {
                        if (voidTesting != undefined){
                        if (voidTest == "tweet-1637451754022518784" ||voidTest =="tweet-1637451515345666048" || voidTest=="tweet-1637116632408682498"|| voidTest == "tweet-1636939562483322880" || voidTest == "tweet-1636939994375012357"||adult == "TimelineTombstone") {
                        fetch('./text-based-data-trish.json')
                        .then((response) => response.json())
                        .then(function (response) {
                            console.log(voidTest);
                            //console.log(response);
                            //console.log(response[0].Author);
                            console.log('is this working');
                            kaoArray = new Array();
                            kaoArray[0] = "(⊃｡•́‿•̀｡)⊃"
                            kaoArray[1] = "ヾ(=`ω´=)ノ”"
                            kaoArray[2] = "ʕ·ᴥ·　ʔ"
                            kaoArray[3] = "(๑´• .̫ •ू`๑)"
                            kaoArray[4] = "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡"
                            kaoArray[5] = "｡ﾟ(*´□`)ﾟ｡"
                            kaoArray[6] = "(^.~)☆"
                            kaoArray[7] = "	°˖✧◝(⁰▿⁰)◜✧˖°"
                            kaoArray[8] = "(๑˘︶˘๑)"
                            kaoArray[9] = "	(´｡• ω •｡`)"

                            var labelDom = document.createElement("p");
                            var randomKao = kaoArray[Math.floor(Math.random()*kaoArray.length)];
                            labelDom.innerText = `quote deck entry ${randomKao}`;
                            labelDom.classList.add('label-quote');
                            myDiv.append(labelDom);
                            //console.log(labelDom);

                            var randomBox = Math.floor(Math.random() * response.length);
                            
                            var authorName = response[randomBox].Author;
                            var yearPub = response[randomBox].Date;
                            var credits = document.createElement("p");
                            credits.innerText = `${authorName}, ${yearPub}`
                            credits.classList.add("credits");
                            myDiv.append(credits);

                            var quoteText = document.createElement("h2");
                            var quoteTextConsole = response[randomBox].Evidence;
                            quoteText.innerText = `"${quoteTextConsole}"`;
                            myDiv.appendChild(quoteText);
                            quoteText.classList.add("quotes");
                            
                            var workTitle = document.createElement("p");
                            workTitle.innerText = `${response[randomBox].Title}`;
                            workTitle.classList.add("work-title");
                            myDiv.append(workTitle);

                            var linkTitle = document.createTextNode("source link◜✧˖°");
                            var a = document.createElement("a");
                            a.appendChild(linkTitle);
                            a.href = response[randomBox].Link;
                            a.title = linkTitle;
                            //console.log(a);
                            myDiv.append(a);
                            a.classList.add("source-link");
                            
                            return null;
                        }); return;

                    };
                        var reTweetTest = tweeter.content.itemContent.tweet_results.result;
                        if (reTweetTest.hasOwnProperty('tweet')){ //Retweeted from someone else
                            var randomKao = kaoArray[Math.floor(Math.random()*kaoArray.length)];
                            var tweetLabel = document.createElement("p");
                            tweetLabel.innerText = `trish tweet ${randomKao}`;
                            myDiv.append(tweetLabel);
                            tweetLabel.classList.add("tweet-label");
                            //load date and time
                            var dateAndTime = document.createElement("p");
                            var dateAndTimeConsole = tweeter.content.itemContent.tweet_results.result.tweet.legacy.created_at;
                            var removeZeros = dateAndTimeConsole.replace("+0000","");
                            var weekDay = removeZeros.substr(0,3);
                            if (weekDay == "Mon"){
                                weekDayFinal = "Monday,";
                            } else if (weekDay == "Tue"){
                                weekDayFinal = "Tuesday,";
                            } else if (weekDay == "Wed") {
                                weekDayFinal = "Wednesday,";
                            } else if (weekDay == "Thu") {
                                weekDayFinal = "Thursday,";
                            } else if (weekDay == "Fri") {
                                weekDayFinal = "Friday,";
                            } else if (weekDay == "Sat") {
                                weekDayFinal = "Saturday";
                            } else if (weekDay == "Sun") {
                                weekDayFinal = "Sunday,";
                            };

                            var month = removeZeros.substr(3,4);
                            if (month == " Jan") {
                                monthFinal = "January";
                            } else if (month == " Feb"){
                                monthFinal = "February";
                            } else if (month == " Mar"){
                                monthFinal = "March";
                            } else if (month == " Apr"){
                                monthFinal = "April";
                            } else if (month == " May"){
                                monthFinal = "May";
                            } else if (month == " Jun"){
                                monthFinal = "June";
                            } else if (month == " Jul"){
                                monthFinal = "July";
                            } else if (month == " Aug"){
                                monthFinal = "August";
                            } else if (month == " Sep"){
                                monthFinal = "September";
                            } else if (month == " Oct"){
                                monthFinal = "October";
                            } else if (month == " Nov"){
                                monthFinal = "November";
                            } else if (month == " Dec"){
                                monthFinal = "December";
                            };
                            var day = removeZeros.substr(6,6);
                            var dayFinal = day.substr(2,2);
                            var time = removeZeros.substr(10,11);
                            var year = dateAndTimeConsole.substr(26);
                            dateAndTime.innerText = `Retweeted at ${time} on ${weekDayFinal} ${monthFinal} ${dayFinal}, ${year}`;
                            myDiv.append(dateAndTime);
                            dateAndTime.classList.add("date-time");
                            
                            const pp = document.createElement("h2");
                            var tweetContent = tweeter.content.itemContent.tweet_results.result.tweet.legacy.full_text;
                            var a = tweetContent.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
                            //console.log(a);
                            pp.innerText = a;
                            myDiv.append(pp);
                            pp.classList.add("tweet-content");

                            var likesConsole = tweeter.content.itemContent.tweet_results.result.tweet.legacy.favorite_count;
                            var likes = document.createElement("p");
                            likes.innerText = `☆ﾐ(*x_x)liked by ${likesConsole}`;
                            myDiv.appendChild(likes);
                            likes.classList.add("likes");
                        
                            var retweetsConsole = tweeter.content.itemContent.tweet_results.result.tweet.legacy.retweet_count;
                            var quoteTweetsConsole = tweeter.content.itemContent.tweet_results.result.tweet.legacy.quote_count;
                            var retweetsTotal = retweetsConsole + quoteTweetsConsole;
                            //console.log(retweetsTotal);
                            var retweets = document.createElement("p");
                            retweets.innerText = `･:*:･ﾟ’☆retweeted and quote tweeted by ${retweetsTotal}`;
                            myDiv.appendChild(retweets);
                            retweets.classList.add("retweets");


                            var imagePath = tweeter.content.itemContent.tweet_results.result.tweet.legacy.entities;
                            if (imagePath.hasOwnProperty('media')){ //determine if there is media attached
                                var images = tweeter.content.itemContent.tweet_results.result.tweet.legacy.extended_entities.media;
                                images.forEach((image)=> { //determine what type of media it is
                                    //console.log(image.type);
                                    if (image.type == "photo") {
                                        imageBox = document.createElement('img');
                                        imageBox.src = image.media_url_https;
                                        imageBox.classList.add("image-box");
                                        myDiv.append(imageBox);
                                        //console.log(imageBox);
                                    } else if (image.type == "video") {
                                        videoBox = document.createElement('video');
                                        videoBox.src = image.expanded_url;
                                        myDiv.append(videoBox);
                                        //console.log(videoBox);
                                    }
                                    return null;
                                });
                            } else {
                                return null;
                            }; 
                        
                        } else { //normal tweet
                            //loading tweeter and user data
                            var randomKao = kaoArray[Math.floor(Math.random()*kaoArray.length)];
                            var tweetLabel = document.createElement("p");
                            tweetLabel.innerText = `trish tweet ${randomKao}`;
                            myDiv.append(tweetLabel);
                            tweetLabel.classList.add("tweet-label");
                            //load date and time
                            var dateAndTime = document.createElement("p");
                            var dateAndTimeConsole = tweeter.content.itemContent.tweet_results.result.legacy.created_at;
                            var removeZeros = dateAndTimeConsole.replace("+0000","");
                            var weekDay = removeZeros.substr(0,3);
                            if (weekDay == "Mon"){
                                weekDayFinal = "Monday,";
                            } else if (weekDay == "Tue"){
                                weekDayFinal = "Tuesday,";
                            } else if (weekDay == "Wed") {
                                weekDayFinal = "Wednesday,";
                            } else if (weekDay == "Thu") {
                                weekDayFinal = "Thursday,";
                            } else if (weekDay == "Fri") {
                                weekDayFinal = "Friday,";
                            } else if (weekDay == "Sat") {
                                weekDayFinal = "Saturday";
                            } else if (weekDay == "Sun") {
                                weekDayFinal = "Sunday,";
                            };

                            var month = removeZeros.substr(3,4);
                            if (month == " Jan") {
                                monthFinal = "January";
                            } else if (month == " Feb"){
                                monthFinal = "February";
                            } else if (month == " Mar"){
                                monthFinal = "March";
                            } else if (month == " Apr"){
                                monthFinal = "April";
                            } else if (month == " May"){
                                monthFinal = "May";
                            } else if (month == " Jun"){
                                monthFinal = "June";
                            } else if (month == " Jul"){
                                monthFinal = "July";
                            } else if (month == " Aug"){
                                monthFinal = "August";
                            } else if (month == " Sep"){
                                monthFinal = "September";
                            } else if (month == " Oct"){
                                monthFinal = "October";
                            } else if (month == " Nov"){
                                monthFinal = "November";
                            } else if (month == " Dec"){
                                monthFinal = "December";
                            };
                            var day = removeZeros.substr(6,6);
                            var dayFinal = day.substr(2,2);
                            var time = removeZeros.substr(10,11);
                            var hours = time.substr(0,3);
                            var minutes = time.substr(3,4);
                            var seconds = time.substr(7,7);
                            
                            if (hours > 12){
                                finalHours = (hours - 12)+ minutes + seconds+"PM";
                            } else {
                                finalHours = hours + minutes + seconds+"AM";
                            };
                            finalFinalHours = finalHours.replace("  ", " ");
                            
                            var year = dateAndTimeConsole.substr(26);
                            dateAndTime.innerText = `Tweeted at ${finalFinalHours} on ${weekDayFinal} ${monthFinal} ${dayFinal}, ${year}`;
                            myDiv.append(dateAndTime);
                            dateAndTime.classList.add("date-time");

                            var textContent = tweeter.content.itemContent.tweet_results.result.legacy.full_text;
                            var b = textContent.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
                            //console.log(b);
                            const p = document.createElement("h2");
                            p.innerText = b;
                            p.classList.add("tweet-content");
                            myDiv.append(p);

                            var likesConsole = tweeter.content.itemContent.tweet_results.result.legacy.favorite_count;
                            var likes = document.createElement("p");
                            likes.innerText = `☆ﾐ(*x_x)liked by ${likesConsole}`;
                            myDiv.appendChild(likes);
                            likes.classList.add("likes");
                        
                            var retweetsConsole = tweeter.content.itemContent.tweet_results.result.legacy.retweet_count;
                            var quoteTweetsConsole = tweeter.content.itemContent.tweet_results.result.legacy.quote_count;
                            var retweetsTotal = retweetsConsole + quoteTweetsConsole;
                            var retweets = document.createElement("p");
                            retweets.innerText = `･:*:･ﾟ’☆retweeted and quote tweeted by ${retweetsTotal}`;
                            myDiv.appendChild(retweets);
                            retweets.classList.add("retweets");


                            var imagePath = tweeter.content.itemContent.tweet_results.result.legacy.entities;
                            if (imagePath.hasOwnProperty('media')){ //determine if there is media attached
                                var images = tweeter.content.itemContent.tweet_results.result.legacy.extended_entities.media;
                                boxActive = 0;
                                
                                images.forEach((image)=> { 
                                    //console.log(image.type);
                                    if (image.type == "photo") { //determine what type of media it is
                                        var imageBox = document.createElement('img');
                                        imageBox.src = image.media_url_https;
                                        imageBox.classList.add("image-box");
                                        myDiv.append(imageBox);
                                    } else if (image.type == "video") {
                                        videoBox = document.createElement('video');
                                        videoBox.controls = true;
                                        videoBox.muted = false;
                                        videoBox.type = image.video_info.variants[0].content_type;
                                        videoBox.src = image.video_info.variants[0].url;
                                        videoBox.classList.add("video-box");
                                        myDiv.append(videoBox);
                                        
                                    }
                                });
                            } else {
                                return;
                            };
                            
                            
                        
                        };
                         
                    } else {
                                            
                        fetch('./text-based-data-trish.json')
                        .then((response) => response.json())
                        .then(function (response) {
                            //console.log(response);
                            //console.log(response[0].Author);

                            kaoArray = new Array();
                            kaoArray[0] = "(⊃｡•́‿•̀｡)⊃"
                            kaoArray[1] = "ヾ(=`ω´=)ノ”"
                            kaoArray[2] = "ʕ·ᴥ·　ʔ"
                            kaoArray[3] = "(๑´• .̫ •ू`๑)"
                            kaoArray[4] = "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡"
                            kaoArray[5] = "｡ﾟ(*´□`)ﾟ｡"
                            kaoArray[6] = "(^.~)☆"
                            kaoArray[7] = "	°˖✧◝(⁰▿⁰)◜✧˖°"
                            kaoArray[8] = "(๑˘︶˘๑)"
                            kaoArray[9] = "	(´｡• ω •｡`)"

                            var labelDom = document.createElement("p");
                            var randomKao = kaoArray[Math.floor(Math.random()*kaoArray.length)];
                            labelDom.innerText = `quote deck entry ${randomKao}`;
                            labelDom.classList.add('label-quote');
                            myDiv.append(labelDom);

                            var randomBox = Math.floor(Math.random() * response.length);
                            
                            var authorName = response[randomBox].Author;
                            var yearPub = response[randomBox].Date;
                            var credits = document.createElement("p");
                            credits.innerText = `${authorName}, ${yearPub}`
                            credits.classList.add("credits");
                            myDiv.append(credits);

                            var quoteText = document.createElement("h2");
                            var quoteTextConsole = response[randomBox].Evidence;
                            quoteText.innerText = `"${quoteTextConsole}"`;
                            myDiv.appendChild(quoteText);
                            quoteText.classList.add("quotes");
                            
                            var workTitle = document.createElement("p");
                            workTitle.innerText = `${response[randomBox].Title}`;
                            workTitle.classList.add("work-title");
                            myDiv.append(workTitle);

                            var linkTitle = document.createTextNode("source link◜✧˖°");
                            var a = document.createElement("a");
                            a.appendChild(linkTitle);
                            a.href = response[randomBox].Link;
                            a.title = linkTitle;
                            //console.log(a);
                            myDiv.append(a);
                            a.classList.add("source-link");
                            return;
                        });
                    };
                }; contentLoad();
                    
                } else {
                    fetch('./text-based-data-trish.json')
                        .then((response) => response.json())
                        .then(function (response) {
                            //console.log(response);
                            //console.log(response[0].Author);

                            kaoArray = new Array();
                            kaoArray[0] = "(⊃｡•́‿•̀｡)⊃"
                            kaoArray[1] = "ヾ(=`ω´=)ノ”"
                            kaoArray[2] = "ʕ·ᴥ·　ʔ"
                            kaoArray[3] = "(๑´• .̫ •ू`๑)"
                            kaoArray[4] = "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡"
                            kaoArray[5] = "｡ﾟ(*´□`)ﾟ｡"
                            kaoArray[6] = "(^.~)☆"
                            kaoArray[7] = "	°˖✧◝(⁰▿⁰)◜✧˖°"
                            kaoArray[8] = "(๑˘︶˘๑)"
                            kaoArray[9] = "	(´｡• ω •｡`)"

                            var labelDom = document.createElement("p");
                            var randomKao = kaoArray[Math.floor(Math.random()*kaoArray.length)];
                            labelDom.innerText = `quote deck entry ${randomKao}`;
                            labelDom.classList.add('label-quote');
                            myDiv.append(labelDom);

                            var randomBox = Math.floor(Math.random() * response.length);
                            
                            var authorName = response[randomBox].Author;
                            var yearPub = response[randomBox].Date;
                            var credits = document.createElement("p");
                            credits.innerText = `${authorName}, ${yearPub}`
                            credits.classList.add("credits");
                            myDiv.append(credits);

                            var quoteText = document.createElement("h2");
                            var quoteTextConsole = response[randomBox].Evidence;
                            quoteText.innerText = `"${quoteTextConsole}"`;
                            myDiv.appendChild(quoteText);
                            quoteText.classList.add("quotes");
                            
                            var workTitle = document.createElement("p");
                            workTitle.innerText = `${response[randomBox].Title}`;
                            workTitle.classList.add("work-title");
                            myDiv.append(workTitle);

                            var linkTitle = document.createTextNode("source link◜✧˖°");
                            var a = document.createElement("a");
                            a.appendChild(linkTitle);
                            a.href = response[randomBox].Link;
                            a.title = linkTitle;
                            //console.log(a);
                            myDiv.append(a);
                            a.classList.add("source-link");

                        });
                }; 
            });
        };
        appendTweets();
    })
	.catch(function (err) {
        console.log("Something went wrong!", err);
    });

var stickArray = new Array();
stickArray[0] = document.querySelector("#quote-stick-five");
stickArray[1] = document.querySelector("#quote-stick-four");
stickArray[2] = document.querySelector("#quote-stick-three");
stickArray[3] = document.querySelector("#quote-stick-two");
stickArray[4] = document.querySelector("#quote-stick-one");

console.log(quoteSticky);
fetch('./text-based-data-trish.json')
.then((response) => response.json())
.then(function (response) {
    function loadTextContent(){
    stickArray.forEach((myDiv) => {
            myDiv.classList.add("indiv-quote-stick");
            //console.log(response);
            kaoArray = new Array();
            kaoArray[0] = "(⊃｡•́‿•̀｡)⊃"
            kaoArray[1] = "ヾ(=`ω´=)ノ”"
            kaoArray[2] = "ʕ·ᴥ·　ʔ"
            kaoArray[3] = "(๑´• .̫ •ू`๑)"
            kaoArray[4] = "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡"
            kaoArray[5] = "｡ﾟ(*´□`)ﾟ｡"
            kaoArray[6] = "(^.~)☆"
            kaoArray[7] = "	°˖✧◝(⁰▿⁰)◜✧˖°"
            kaoArray[8] = "(๑˘︶˘๑)"
            kaoArray[9] = "	(´｡• ω •｡`)"

            var labelDom = document.createElement("p");
            var randomKao = kaoArray[Math.floor(Math.random()*kaoArray.length)];
            labelDom.innerText = `quote deck entry ${randomKao}`;
            labelDom.classList.add('label-quote-stick');
            myDiv.append(labelDom);

            var randomBox = Math.floor(Math.random() * response.length);
            
            var authorName = response[randomBox].Author;
            var yearPub = response[randomBox].Date;
            var credits = document.createElement("p");
            credits.innerText = `${authorName}, ${yearPub}`
            credits.classList.add("credits-stick");
            myDiv.append(credits);

            var quoteText = document.createElement("p");
            var quoteTextConsole = response[randomBox].Evidence;
            quoteText.innerText = `"${quoteTextConsole}"`;
            myDiv.appendChild(quoteText);
            quoteText.classList.add("quotes-stick");
            
            var workTitle = document.createElement("p");
            workTitle.innerText = `${response[randomBox].Title}`;
            workTitle.classList.add("work-title-stick");
            myDiv.append(workTitle);

            var linkTitle = document.createTextNode("source link◜✧˖°");
            var a = document.createElement("a");
            a.appendChild(linkTitle);
            a.href = response[randomBox].Link;
            a.title = linkTitle;
            //console.log(a);
            myDiv.append(a);
            a.classList.add("source-link-stick");
        });
    }; loadTextContent();
    });

//stickArray[0].style.backgroundColor = "black";

function doubleScroll(){
    var winScroll = mainArea.scrollTop;
    var height = mainArea.scrollHeight - mainArea.clientHeight;
    var scrolled = (winScroll / height) * 100;
    //console.log(scrolled);
    let newScrollDistance = map(scrolled, 0, 100, 0, quoteSticky.scrollHeight);
    //console.log(newScrollDistance);
    stickArray[0].style.marginTop = `calc(100vh - ${newScrollDistance}px)`;
    stickArray[1].style.marginTop = `calc(180vh - ${newScrollDistance}px)`;
    stickArray[2].style.marginTop = `calc(260vh - ${newScrollDistance}px)`;
    stickArray[3].style.marginTop = `calc(340vh - ${newScrollDistance}px)`;
    stickArray[4].style.marginTop = `calc(420vh - ${newScrollDistance}px)`;
    console.log(stickArray[0].style.marginTop);
};
mainArea.onscroll = function() {doubleScroll()};

var racismContent = document.querySelector("#racism-open-content");
var showRacismButton = document.querySelector("#racism-button");
var racismRightSide = document.querySelector("#racism-right-side");

let racismShowing = 0;
racismContent.style.display = 'none';
rightSide.appendChild(racismRightSide);
racismRightSide.style.display = 'none';

var homophobiaContent = document.querySelector("#homophobia-open-content");
var showHomoButton = document.querySelector("#homophobia-button");
var homophobiaRightSide = document.querySelector("#homophobia-right-side");

let homophobiaShowing = 0;
homophobiaContent.style.display = 'none';
rightSide.appendChild(homophobiaRightSide);
homophobiaRightSide.style.display = 'none';

function showRacism(){
    if (racismShowing == 0){
        racismShowing = 1;
        racismContent.style.display = 'block';
        racismRightSide.style.display = 'block';
        showRacismButton.innerHTML = "☆ｏ(＞＜；)○ ↓";
        showRacismButton.style.fontSize = '4em';
        showRacismButton.style.border = 'none';
        showRacismButton.classList.add('tag-active');
        showRacismButton.classList.remove('closed-content');
        showRacismButton.style.color = '#8A42AF';
        showRacismButton.style.textDecoration = 'underline';
    } else if (racismShowing == 1){
        racismShowing = 0;
        racismContent.style.display = 'none';
        racismRightSide.style.display = 'none';
        showRacismButton.innerHTML = 'Racism';
        showRacismButton.style.fontSize = '2em';
        showRacismButton.style.border = '1px solid #8A42AF';
        showRacismButton.classList.remove('tag-active');
        showRacismButton.classList.add('closed-content');
        showRacismButton.style.textDecoration = 'none';
    }
}

showRacismButton.addEventListener('click', showRacism);

function showHomophobia(){
    if (homophobiaShowing == 0){
        homophobiaShowing = 1;
        homophobiaContent.style.display = 'block';
        homophobiaRightSide.style.display = 'block';
        showHomoButton.innerHTML = "☆ｏ(＞＜；)○ ↓";
        showHomoButton.style.fontSize = '4em';
        showHomoButton.style.border = 'none';
        showHomoButton.classList.add('tag-active');
        showHomoButton.classList.remove('closed-content');
        showHomoButton.style.color = '#8A42AF';
        showHomoButton.style.textDecoration = 'underline';
    } else if (homophobiaShowing == 1){
        homophobiaShowing = 0;
        homophobiaContent.style.display = 'none';
        homophobiaRightSide.style.display = 'none';
        showHomoButton.innerHTML = 'Homophobia';
        showHomoButton.style.fontSize = '2em';
        showHomoButton.style.border = '1px solid #8A42AF';
        showHomoButton.classList.remove('tag-active');
        showHomoButton.classList.add('closed-content');
        showHomoButton.style.textDecoration = 'none';
    }
}

showHomoButton.addEventListener('click', showHomophobia);