//控制台
$("#cmdInput").on("keypress",function (e){
if(e.keyCode==13&&this.value.length){
try{
var rtn=eval(this.value);
if(typeof(rtn)=="object"){
log("<div class=\"logs\">"+this.value+"</div>");
log("<div class=\"logs\">>>>> Object:"+JSON.stringify(rtn)+"</div>")
}else if(this.value.indexOf("console.log")==-1){
log("<div class=\"logs\">"+this.value+"</div>");
log("<div class=\"logs\">>>>> "+rtn+"</div>");
}
}catch(err){
log("<div class=\"error\">ERROR: "+err.message+"</div>");
}
this.value="";
}
});
function log(msg){
$("#log").innerHTML+=msg;
}
console.log=function (msg){
log("<div class=\"logs\">"+msg+"</div>");
}
onerror=function (msg){
log("<div class=\"error\">ERROR: "+msg+"</div>");
}