function $($_$,$__$){
if($__$){
return document.querySelectorAll($_$)[$__$];
}else if(document.querySelectorAll($_$).length===1||$__$==0){
return document.querySelector($_$);
}else{
return document.querySelectorAll($_$);
}
}
Object.prototype.on=function ($_$,$__$){
if(this  instanceof NodeList){
[].forEach.call(this, function ($$_$){$$_$.addEventListener($_$,$__$,false);});
}else{
this.addEventListener($_$,$__$);
}}
Object.prototype.attr=function ($_$,$__$){
if(this  instanceof NodeList){
[].forEach.call(this, function ($$_$){$$_$.setAttribute($_$,$__$);});
}else{
this.setAttribute($_$,$__$);
}}