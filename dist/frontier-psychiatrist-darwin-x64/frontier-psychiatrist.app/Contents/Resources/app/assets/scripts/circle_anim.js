/*
function circle_animate_enlarge(on,num) {
	var circle = document.getElementById('circle');
	circle.style['transform'] = on ? 'scale(1)' : 'scale('+num.toString()+')';
}

function circle_animate_decrease(on,num) {
	var circle = document.getElementById('circle');
	circle.style['transform'] = on ? 'scale(1.4)' : 'scale('+num.toString()+')';
}

function circle_animate(time,num1,num2){
	setTimeout(function(){circle_animate_enlarge(true,num1)},time);
	setTimeout(function(){circle_animate_decrease(true,num2);},time);
}

window.onload = function(){
	circle_animate(2000,1.4,.6);
}
*/