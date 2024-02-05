var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu1=document.getElementById("sidemenu");
function openmenu(){
    sidemenu1.style.right = "0";
}
function closemenu(){
    // event.preventDefault();
    sidemenu1.style.right = "-200px";
}



