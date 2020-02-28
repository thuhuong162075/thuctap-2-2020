var gallery=function (id,option){
	var idParentBullets = option.idParentBullets || id;
	var idParentBullets=document.getElementById(idParentBullets);
	var hover = option.hover || 20;
	var wli = option.wli;
	var nli = option.nli;
	var wd = option.wd;
	var pos = option.pos || 280;
	var click = 0;
	var bg1 = 'rgba(90,90,90,0.9)';
	var bg2 = 'rgba(224, 43, 43, 0.9)';
	var pot = click*pos;

	var idele=document.getElementById(id);
	var ul=idele.querySelector(".jsListGroup");

	var next=idele.querySelector(".next");
	var prev=idele.querySelector(".prev");

	next.addEventListener("click",nextPos);
	prev.addEventListener("click",prevPos);

	next.addEventListener("mouseover",mOver);
	next.addEventListener("mouseout",mOut);
	prev.addEventListener("mouseover",mOver);
	prev.addEventListener("mouseout",mOut);

	
	//create tag span bullets
	for(let j=0; j <= Math.ceil((wli*nli-wd)/pos); j++){
		var span = document.createElement("span");
		span.classList.add("pg-bullet");
		var pagi = idParentBullets.querySelector('div.pagination');
		pagi.appendChild(span);
	}
	var bullets=idParentBullets.querySelectorAll("span.pg-bullet");

	//setup status begin
	prev.style.pointerEvents = 'none';
	prev.style.backgroundColor = bg1;
	bullets[0].style.background = "#e02b2b";

	//function when click span bullets
	for (let [index, bullet] of bullets.entries()){
		bullet.addEventListener('click', function(){
			click=index;
			changeleft();
			bgBullet();
			check();
		});
	}
	//function click next
	function nextPos(){
		click++;	
		changeleft();
		check();
		bgBullet();
	}
	//function click prev
	function prevPos(){
		click--;
		changeleft();
		check();
		bgBullet();
	}
	//function list left change 
	function changeleft(){
		if(click*pos-(wli*nli-wd) > 0 ){
			ul.style.left = String(wd-wli*nli) + 'px';
		}else{
			ul.style.left = String(-click*pos) + 'px';
		}
	}
	//function check condition status begin/end
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
	//function change background bullet
	function bgBullet(){
		for(var i=0; i<bullets.length; i++){
			bullets[i].style.background = '#c4c4c4';
			if(i==click){
				bullets[i].style.background = "#e02b2b";
			}
		}
	}
	//function mouseover button 
	function mOver(){
		pot+=hover;		
		ul.style.transform = 'translate3d(-'+(pot)+'px, 0px, 0px)';
	}
	//function mouseout button
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
		  	idParentBullets: "photostory",
		  	hover: "20",
		  });
var gallery2 = new gallery("gallery1",
		 {
		 	wli: 280,
		 	nli: 5,
		 	wd: 700,
		 	pos: 300,
		  	idParentBullets: "photostory1",
		  	hover: "20",
		  });