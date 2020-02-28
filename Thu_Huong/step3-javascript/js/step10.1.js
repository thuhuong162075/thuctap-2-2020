var gallery=function (id,option){
	var idparentbullets = option.idparentbullets || id;
	var idparentbullets=document.getElementById(idparentbullets);
	var idele=document.getElementById(id);
	var hover = option.hover || 20;
	var wli = option.wli;
	var nli = option.nli;
	var wd = option.wd;
	var ul=idele.querySelector(".jsListGroup");
	var click = 0;
	var pos = option.pos || -280;
	var bg1 = 'rgba(90,90,90,0.9)';
	var bg2 = 'rgba(224, 43, 43, 0.9)';
	var pot = click*pos;
	var next=idele.querySelector(".next");
	var prev=idele.querySelector(".prev");

	next.addEventListener("click",nextPos);
	prev.addEventListener("click",prevPos);

	next.addEventListener("mouseover",mOver);
	next.addEventListener("mouseout",mOut);
	prev.addEventListener("mouseover",mOver);
	prev.addEventListener("mouseout",mOut);

	prev.style.pointerEvents = 'none';
	prev.style.backgroundColor = bg1;
	

	for(let j=0; j <= Math.ceil((wli*nli-wd)/pos); j++){
		var span = document.createElement("span");
		span.classList.add("pg-bullet");
		var pagi = idparentbullets.querySelector('div.pagination');
		pagi.appendChild(span);
	}

	var bullets=idparentbullets.querySelectorAll("span.pg-bullet");
	bullets[0].style.background = "#e02b2b";

	for (let [index, bullet] of bullets.entries()){
		bullet.addEventListener('click', function(){
			click=index;
			ul.style.left = String(-click*pos) + 'px';
			bgBullet();
			check();
		});
	}
	function nextPos(){
		click++;	
		if(click*pos-(wli*nli-wd) > 0 ){
			ul.style.left = String(wd-wli*nli) + 'px';
		}else{
			ul.style.left = String(-click*pos) + 'px';
		}
		check();
		bgBullet();

	}
	function prevPos(){
		click--;
		ul.style.left = String(-click*pos) + 'px';
		check();
		bgBullet();
	}
	function check(){
		if(click==Math.ceil((wli*nli-wd)/pos)){
			next.style.pointerEvents = 'none';
			next.style.backgroundColor = bg1;
		}
		else {
			next.style.pointerEvents = 'auto';
			next.style.backgroundColor = bg2;
		}
		if(click==0){
			prev.style.pointerEvents = 'none';
			prev.style.backgroundColor = bg1;
		}else{
			prev.style.pointerEvents = 'auto';
			prev.style.backgroundColor = bg2;
		}
	}
	function bgBullet(){
		for(var i=0; i<bullets.length; i++){
			bullets[i].style.background = '#c4c4c4';
			if(i==click){
				bullets[i].style.background = "#e02b2b";
			}
		}
	}
	function mOver(){
		pot+=hover;		
		ul.style.transform = 'translate3d(-'+(pot)+'px, 0px, 0px)';
	}
	function mOut(){
		pot-=hover;
		ul.style.transform = 'translate3d(-'+(pot)+'px, 0px, 0px)';
	}
}

var gallery1 = new gallery("gallery",
		 {
		 	wli: 280,
		 	nli: 5,
		 	wd: 700,
		 	pos: 200,
		  	idparentbullets: "photostory",
		  	hover: "20",
		  });
var gallery2 = new gallery("gallery1",
		 {
		 	wli: 280,
		 	nli: 5,
		 	wd: 700,
		 	pos: 300,
		  	idparentbullets: "photostory1",
		  	hover: "20",
		  });