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
        userData(); //check API tomorrow and see if documentation is correct; issue with void entries appearing; stopping at tweeter.content.tweet_results
        function appendTweets(){
            trishTweets.forEach((tweeter)=> {
                const myDiv = document.createElement("div");
                socialMediaPage.append(myDiv);
                myDiv.classList.add("tweets");
                var tweetType = tweeter.content.entryType;
                var voidTest = tweeter.entryId;
                if (tweetType == 'TimelineTimelineItem'){
                    if (voidTest == "tweet-1637116155692453889"||voidTest == "tweet-1636939562483322880"){
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
                        return; 
                    };
                    function contentLoad() {
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
                            //load number of likes and number of retweets
                            

                        };

                    };
                    contentLoad();
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



console.log(quoteSticky);
fetch('./text-based-data-trish.json')
.then((response) => response.json())
.then(function (response) {
    function loadTextContent(){
    const n=5;
    for (let i=1; i<=n; i++) {
            console.log(i);
            var myDiv = document.createElement('div');
            quoteSticky.appendChild(myDiv);
            myDiv.classList.add("indiv-quote-stick");
            if (i=1){
            myDiv.id = "quote-stick-one";
            }
            else if (i=2){
                myDiv.id = "quote-stick-two";
            }
            else if (i=3){
                myDiv.id = "quote-stick-three";
            }
            else if (i=4){
                myDiv.id = "quote-stick-four";
            }
            else if (i=5){
                myDiv.id = "quote-stick-five";
            };
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
        };
    }; loadTextContent();
    });

var stickArray = new Array();
stickArray[0] = document.querySelector("#quote-stick-five");
stickArray[1] = document.querySelector("#quote-stick-four");
stickArray[2] = document.querySelector("#quote-stick-three");
stickArray[3] = document.querySelector("#quote-stick-two");
stickArray[4] = document.querySelector("#quote-stick-one");

function doubleScroll(){
    var winScroll = mainArea.scrollTop;
    var height = mainArea.scrollHeight - mainArea.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    let newScrollDistance = map(scrolled, 0, 100, 0, quoteSticky.scrollHeight);
    console.log(newScrollDistance);
    stickArray[0].style.marginTop = `calc(50vh - ${newScrollDistance})`;
    stickArray[1].style.marginTop = `calc(100vh - ${newScrollDistance})`;
    stickArray[2].style.marginTop = `calc(150vh - ${newScrollDistance})`;
    stickArray[3].style.marginTop = `calc(200vh - ${newScrollDistance})`;
    stickArray[4].style.marginTop = `calc(250vh - ${newScrollDistance})`;
};
//mainArea.onscroll = function() {doubleScroll()};