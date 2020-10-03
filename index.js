var profile = document.querySelector(".mypro");
var notifies = document.querySelector(".bell");
var exit  = document.querySelector(".exit");
var exit1 = document.querySelector(".exit1");

//To display Profile Bar when profile icon at top-right corner is clicked.

profile.addEventListener("click",function(){
    console.log("clicked");
    var x = document.querySelector(".profile").style.transform;
    if(x=="" || x=="translateY(-100%)")
    document.querySelector(".profile").style.transform="translateY(0)";
    else
    document.querySelector(".profile").style.transform="translateY(-100%)";
})

//To display Notifications Bar when profile icon at top-right corner is clicked.

notifies.addEventListener("click",function(){
    console.log("clicked");
    var x = document.querySelector(".notifications").style.transform;
    if(x=="" || x=="translateY(-100%)")
    document.querySelector(".notifications").style.transform="translateY(0)";
    else
    document.querySelector(".notifications").style.transform="translateY(-100%)";
})

//To Exit from Profile Bar and Notifications Bar when X at top-left corner  is clicked.

exit.addEventListener("click",function(){
    var x2 = document.querySelector(".notifications");
    x2.style.transform="translateY(-100%)";
})
exit1.addEventListener("click",function(){
    var x1 = document.querySelector(".profile");
    x1.style.transform="translateY(-100%)";
})

//Special thumbnail to display video page.

document.querySelector(".special").addEventListener("click",function(){
    document.querySelector(".home").style.display="none";
    document.querySelector(".vidpage").style.display="unset";
})

//Showmore or Showless functionality for video description .

document.querySelector(".showmore").addEventListener("click",function(){
    var x = document.querySelector(".description").style.height;
    if(x!="unset"){
        document.querySelector(".description").style.height="unset";
        document.querySelector(".showmore").innerHTML="SHOW LESS";
    }else{
        document.querySelector(".description").style.height="16vh";
        document.querySelector(".showmore").innerHTML="SHOW MORE";
    }
})

//To navigate back to Home page from video page.

document.querySelector(".navbar-brand").addEventListener("click",function(){
    document.querySelector(".home").style.display="unset";
    document.querySelector(".vidpage").style.display="none";
})