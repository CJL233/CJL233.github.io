function md_range_check(md_element){var md_range_max=md_element.querySelector(".md_range_2").max;var md_range_min=md_element.querySelector(".md_range_2").min;var md_range_value=md_element.querySelector(".md_range_2").value;var md_range=(md_range_value-md_range_min)/(md_range_max-md_range_min)*100;var md_color=md_element.getAttribute("data-md-color");md_element.querySelector(".md_range_5").style.background=md_color;md_element.querySelector(".md_range_6").style.background=md_color;md_element.querySelector(".md_range_7").style.background=md_color;md_element.querySelector(".md_range_8").style.background=md_color;md_element.querySelector(".md_range_8").innerHTML=md_range_value;md_element.querySelector(".md_range_5").style.left=md_range+"%";md_element.querySelector(".md_range_6").style.left=md_range-100+"%";}
function md_range_start(md_element){md_element.querySelector(".md_range_7").style.opacity="0.27";md_element.querySelector(".md_range_8").style.display="block";}
function md_range_change(md_element,md_range,md_range_value){md_element.querySelector(".md_range_8").innerHTML=md_range_value;md_element.querySelector(".md_range_5").style.left=md_range+"%";md_element.querySelector(".md_range_6").style.left=md_range-100+"%";}
function md_range_end(md_element){setTimeout(function (){md_element.querySelector(".md_range_7").style.opacity="0";md_element.querySelector(".md_range_8").style.display="none";},400);}
window.onload=function (){
var md_range=document.querySelectorAll(".md_range_1");
for(var i=0;i<md_range.length;i++)md_range_check(md_range[i]);
playerLoad();
pageLoad();
}