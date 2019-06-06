function hide($element$1){
	$($element$1).style.opacity="0";
	setTimeout(function (){$($element$1).style.display="none";},300);
}
function show($element$1){
	$($element$1).style.display="block";
	setTimeout(function (){$($element$1).style.opacity="1";},50);
}