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
$("marquee").style.display="none";
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