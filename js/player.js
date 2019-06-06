$(".switch",0).on("change",function (){
if(this.checked){
show("#mList");
this.parentNode.style.backgroundImage="url('img/icons/ic_right_white.png')";
}else{
hide("#mList");
this.parentNode.style.backgroundImage="url('img/icons/ic_music_list_white.png')";
}
});
$(".switch",1).on("click", function (){
if(playing>1){
$(".musics",--playing).click();
}else{
alert("没有上一首了");
}
});
$(".switch",2).on("click",function (){
if(player.paused){
this.parentNode.style.backgroundImage="url('img/icons/ic_pause_white.png')";
$("#musicIcon1").style.animation="musicRotate 4s linear infinite";
$("#musicIcon2").style.animation="musicShake 4s linear infinite";
player.play();
progress();
}else{
player.pause();
window.clearInterval(timer);
this.parentNode.style.backgroundImage="url('img/icons/ic_play_white.png')";
$("#musicIcon1").style.animation="none";
$("#musicIcon2").style.animation="none";
}
});
$(".switch",3).on("click", function (){
if(playing<$(".musics").length-1){
window.clearInterval(timer);
$(".musics",++playing).click();
}else{
if(player.ended){
window.clearInterval(timer);
$(".switch",2).parentNode.style.backgroundImage="url('img/icons/ic_play_white.png')";
$("#musicIcon1").style.animation="none";
$("#musicIcon2").style.animation="none";
}else
alert("没有下一首了");
}
});
$(".switch",4).on("change",function (){
if(this.checked){
show("#volBoard");
}else{
hide("#volBoard");
}
});
$(".switch",5).on("change",function (){
if(this.checked){
mute=false;
player.volume=0;
$(".musicIcons",4).style.backgroundImage="url('img/icons/ic_volume_off_white.png')";
$(".musicIcons",5).style.backgroundImage="url('img/icons/ic_volume_off_black.png')";
}else{
mute=true;
if($("#volume input").value==0){
vol(50);
md_range_change($("#volume"),50,50);
$("#volume input").value="50";
}else
vol(parseInt($("#volume input").value));
}
});
/*播放器加载*/
function playerLoad(){
player=document.createElement("audio");
player.volume="0.5";
/*player.controls="controls";*/
player.autoplay="autoplay";
if(!localStorage.musicList)localStorage.musicList=preM;
mList= eval ("(" +localStorage.musicList+ ")");
for(var i=0;i<mList.musics.length;i++){
$("#mList a + div").innerHTML+="<div class=\"musics\" data-id=\""+(i+1)+"\" data-src=\""+mList.musics[i].src+"\"><img src=\"img/icons/ic_add_black.png\" class=\"mDelete\">"+mList.musics[i].name+"</div>";
}
$(".musics").on("click",function (){playing=parseInt(this.getAttribute("data-id"));play(this.getAttribute("data-src"))});
player.src=mList.musics[0].src;
$("#musicBoard").appendChild(player);
$(".mDelete").on("click", function (event){
event.stopPropagation();
if(confirm("确认删除？")){
mList.musics.splice(parseInt(this.getAttribute("data-id"))-1,1);
localStorage.musicList=JSON.stringify(mList);
mReload();
}
});
setTimeout(function (){
$(".switch",2).parentNode.style.backgroundImage="url('img/icons/ic_pause_white.png')";
$("#musicIcon1").style.animation="musicRotate 4s linear infinite";
$("#musicIcon2").style.animation="musicShake 4s linear infinite";
player.play();
progress();
},5000);
}
function play(src){
player.pause();
player.src=src;
$(".switch",2).parentNode.style.backgroundImage="url('img/icons/ic_pause_white.png')";
$("#musicIcon1").style.animation="musicRotate 4s linear infinite";
$("#musicIcon2").style.animation="musicShake 4s linear infinite";
setTimeout("progress()",1000);
}
//进度条
function progress(){
window.clearInterval(timer);
var total=parseInt(player.duration);
$("#progress input").max=total;
timer=self.setInterval(function (){
var now=parseInt(player.currentTime);
md_range_change($("#progress"),(now/total)*100,now);
$("#progress input").value=now;
$("#time").innerHTML=calc1(now)+"/"+calc1(total);
if(player.ended)$(".switch",3).click();
},1000);
}
$("#progress input").on("change",function (){
player.currentTime=this.value;
});
//音量调节
$("#volume input").on("change",function (){
vol(parseInt(this.value));
});
function vol(input){
if(mute)player.volume=input*0.01;
if(mute&&input>0&&input<30){
$(".musicIcons",4).style.backgroundImage="url('img/icons/ic_volume_0_white.png')";
$(".musicIcons",5).style.backgroundImage="url('img/icons/ic_volume_0_black.png')";
}else if(mute&&input>=30&&input<70){
$(".musicIcons",4).style.backgroundImage="url('img/icons/ic_volume_30_white.png')";
$(".musicIcons",5).style.backgroundImage="url('img/icons/ic_volume_30_black.png')";
}else if(mute&&input>=70){
$(".musicIcons",4).style.backgroundImage="url('img/icons/ic_volume_70_white.png')";
$(".musicIcons",5).style.backgroundImage="url('img/icons/ic_volume_70_black.png')";
}else{
$(".musicIcons",4).style.backgroundImage="url('img/icons/ic_volume_off_white.png')";
$(".musicIcons",5).style.backgroundImage="url('img/icons/ic_volume_off_black.png')";
}
}
function calc1(input){
return parseInt(input/60)+":"+(""+(100+input%60)).slice(1,3);
}
function addMusic(){
var newMusic=new Object();
while(!newMusic.name)newMusic.name=prompt("请输入歌曲名");
while(!newMusic.src)newMusic.src=prompt("请输入歌曲链接");
if(confirm("确认加入歌曲?:\n歌名: "+newMusic.name+"\n歌曲链接: "+newMusic.src)){
mList.musics.push(newMusic);
localStorage.musicList=JSON.stringify(mList);
mReload();
}
}
function mReload(){
$("#mList a + div").innerHTML="<div class=\"musics\">歌曲列表</div>";
for(var i=0;i<mList.musics.length;i++){
$("#mList a + div").innerHTML+="<div class=\"musics\" data-id=\""+(i+1)+"\" data-src=\""+mList.musics[i].src+"\"><img src=\"img/icons/ic_add_black.png\" class=\"mDelete\">"+mList.musics[i].name+"</div>";
}
$(".musics").on("click",function (){playing=parseInt(this.getAttribute("data-id"));play(this.getAttribute("data-src"))});
$(".mDelete").on("click", function (event){
event.stopPropagation();
if(confirm("确认删除？")){
mList.musics.splice(parseInt(this.getAttribute("data-id"))-1,1);
localStorage.musicList=JSON.stringify(mList);
mReload();
}
});
}