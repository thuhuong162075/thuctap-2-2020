window.gallery = function(id,option){
	idParentBullets = option.idParentBullets || id;
	var hover = option.hover || 20;
	var pos = option.pos || 200;
	var wli = option.wli;
	var nli = option.nli;
	var wd = option.wd;
	var bg1 = 'rgba(90,90,90,0.9)';
	var bg2 = 'rgba(224, 43, 43, 0.9)';
	var click = 0;
	var pot = click*pos;

	idParentBullets = document.getElementById(idParentBullets);
	idele = document.getElementById(id);
	var ul = idele.querySelector(".jsListGroup");

	var prev = idele.querySelector(".prev");
	var next = idele.querySelector(".next");

	//create tag span 
	for(let i=0; i<=Math.ceil((wli*nli-wd)/pos); i++){
		var span = document.createElement("SPAN");
		span.classList.add("pg-bullet");
		pagi = idParentBullets.querySelector(".pagination");
		pagi.appendChild(span);
	}
	var bullets = idParentBullets.querySelectorAll(".pg-bullet");
	//setup status begin 
	prev.style.pointerEvents = 'none';
	prev.style.backgroundColor = bg1;
	bullets[0].style.background = bg2;

	//events
	next.addEventListener('click',nextPos);
	prev.addEventListener('click',prevPos);

	next.addEventListener("mouseover",mOver);
	next.addEventListener("mouseout",mOut);
	prev.addEventListener("mouseover",mOver);
	prev.addEventListener("mouseout",mOut);
	

	//click span bullets
	for(let [index, bullet] of bullets.entries()){
		bullet.addEventListener("click", function(){
			click=index;
			changeLeft();
			bgBullets();
			check();
		})
	}

	//function click next
	function nextPos(){
		click++;
		changeLeft();
		check();
		bgBullets();
	}

	//function click prev
	function prevPos(){
		click--;
		changeLeft();
		check();
		bgBullets();
	}

	//function left list change 
	function changeLeft(ctrl){
		// console.log(ctrl);
		if(click*pos-(wli*nli-wd) > 0 ){
			ul.style.left = String(wd-wli*nli) + 'px';
		}else{
			ul.style.left = String(-click*pos) + 'px';
		}
	}

	//function background span bullet change
	function bgBullets(){
		for(let i=0; i<bullets.length;i++){
			bullets[i].style.background=bg1;
			if(i==click){
				bullets[i].style.background=bg2;
			}
		}
	}
	
	//function mouse over button
	function mOver(){
		pot+=hover;		
		ul.style.transform = 'translate3d(-'+(pot)+'px, 0px, 0px)';
	}
	//function mouse out button
	function mOut(){
		pot-=hover;
		ul.style.transform = 'translate3d(-'+(pot)+'px, 0px, 0px)';
	}

	//check condition status begin, end
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
}
var galleryEmagazine = gallery("gallery-emagazine",
								{wli: 280,
								 nli: 4, 
								 wd: 700, 
								 pos: 280, 
								 idParentBullets: "emagazine",
								 hover: 30,
								});
var galleryEmagazine1 = gallery("gallery-emagazine1",
								{wli: 280,
								 nli: 4, 
								 wd: 700, 
								 pos: 200, 
								 idParentBullets: "emagazine1",
								 hover: 20,
								});