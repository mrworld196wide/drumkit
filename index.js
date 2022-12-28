//document.querySelectorAll("button").addEventListener("event",function to be called);
document.querySelectorAll("button").addEventListner("click",handleClick);

// document.querySelectorAll("button").addEventListener("click",handleClick);
function handleClick(){
    alert("clicked");
}