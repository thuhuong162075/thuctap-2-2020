var a=function(id){
	var click=0;
	var next=function(){
		click++;
		console.log(click);
		
	};
	var pre=function(){
		click--;
		console.log(click);	
	};
	var idele=document.getElementById(id);
	var nextele = idele.querySelector(".next");
	nextele.addEventListener("click", next);
};

var b=new a("abc");


/*
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var bullets = document.querySelectorAll("span.pagination-bullet");
var ul = document.getElementById("jsListGroup");

next.addEventListener("click", increase);
prev.addEventListener("click", decrease);


var click = 0;
var pos = -280;

prev.style.pointerEvents = 'none';
prev.style.backgroundColor = 'rgba(90,90,90,0.9)';
bullets[0].style.background = '#e02b2b';

for (let [index, bullet] of bullets.entries()) {
  	bullet.addEventListener('click', () => {
  	click = index;
    ul.style.left = String(click*pos) + 'px';
    background(click);
  });
}

function increase(){
	click++;
	prev.style.display = 'block';
	ul.style.left = String(click*pos) + 'px';
	ul.style.transitionDuration = '1s';
	background(click);
	display(click);
	
}
function decrease(){
	click--;
	ul.style.left = String(click*pos) + 'px';
	ul.style.transitionDuration = '1s';
	background(click);
	display(click);
	
}
function display(click){
	if( click == 3 ) {
		next.style.pointerEvents = 'none';
		next.style.backgroundColor = 'rgba(90,90,90,0.9)';
	}else{
		next.style.pointerEvents = 'auto';
		next.style.backgroundColor = 'rgba(224, 43, 43, 0.9)';
	}
	if( click == 0 ) {
		prev.style.pointerEvents = 'none';
		prev.style.backgroundColor = 'rgba(90,90,90,0.9)';
	}else{
		prev.style.pointerEvents = 'auto';
		prev.style.backgroundColor = 'rgba(224, 43, 43, 0.9)';
	}
}
function background(click){
	for(var i=0 ; i < bullets.length; i++) {
		bullets[i].style.background = '#c4c4c4';
		if(i==click) {
			bullets[i].style.background = '#e02b2b';
		}
	}
}
*/