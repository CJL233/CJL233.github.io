$("th").on("click",function (){
$("th",note).attr("style"," ");
note=parseInt(this.getAttribute("data-num"));
$("#frame").src=$("#linkList").querySelectorAll("li")[note].innerHTML;
this.attr("style","background:rgba(255,255,255,0.3);");
$("#notes").style.left=(10*note+1.5)+"vw";
$transform();
});
$("#musicSwitch").on("change",function (){
if(this.checked){
show("#musicBoard");
flex("#musicBoard");
}else{
hide("#musicBoard");
}
});
function flex(element){
$(element).style.display="flex";
}
$(".menuSwitch").on("change", function (){
if(this.checked){
$("#leftMenu").style.left="0";
$(".menuIcon1").style.top="3.5vh";
$(".menuIcon3").style.top="3.5vh";
$(".menuIcon1").style.transform="rotate(135deg)";
$(".menuIcon2").style.transform="rotate(225deg)";
$(".menuIcon3").style.transform="rotate(135deg)";
}else{
$("#leftMenu").style.left="-40vw";
$(".menuIcon1").style.top="1.5vh";
$(".menuIcon3").style.top="5.5vh";
$(".menuIcon1").style.transform="rotate(0deg)";
$(".menuIcon2").style.transform="rotate(0deg)";
$(".menuIcon3").style.transform="rotate(0deg)";
}
});
function $transform(){
if(!shrink){
$("#marquee").style.display="none";
$("#header").style.height="8vh";
$("#body").style.height="92vh";
$("#navigation").style.top="-8vh";
$("#userMsg").style.height="0";
setTimeout(function (){
$("#userHeadBg").style.height="0vh";
$("#userHeadBg").style.margin="0vw";
$("#userHead").appendChild($("#userHeadBg"));
$("#userHeadBg").style.transition="height 0.3s,margin 0.3s";
},350);
setTimeout(function (){
$("#userHeadBg").style.height="12vh";
$("#userHeadBg").style.margin="2vw";
},400);
shrink=true;}
}
function pageLoad(){
$("#frame").src="pages/aboutMe.html";
}
$("th",2).on("click", function (){
tip("&emsp;&emsp;这些脚本是我在学会插入元素后做的，有的完工了，有的还没有完工，还有的有bug，甚至有的已经失效(比如学习通的这学期用完就废了，要等我下学期再改)，但是现在我懒得修，这些脚本需要配合那些能注入脚本的浏览器食用！");
});
function tip(msg){
var elem=document.createElement("div");
elem.id="tip";
elem.innerHTML="<div id=\"tipMsg\">"+msg+"<div id=\"tipClose\" onclick=\"document.body.removeChild(this.parentNode.parentNode);\">确认</div></div>";
document.body.appendChild(elem);
}
pageLoad();