
var pos = 0;
var pot = 0;
var ava= 0;
var wi=280;
document.getElementsByClassName("button-next")[0].addEventListener("click",next);
document.getElementsByClassName("button-prev")[0].addEventListener("click",prev);
document.getElementById("content-footer-icon-action1").classList.add("mystyle1");
function next(){
  if( ava<2){ ava=ava+1};
  if(ava==1){
    pos=-2*wi-4;
    pot=pos;
    console.log(pos);
    document.getElementsByClassName("content-list")[0].style.marginLeft = -2*wi-4 + "px";
            document.getElementsByClassName("button-prev")[0].classList.remove("mystyle");
            document.getElementById("content-footer-icon-action2").classList.add("mystyle1");
            document.getElementById("content-footer-icon-action1").classList.remove("mystyle1");
  };
  if(ava==2){
            pos=-2.5*wi-4;
            console.log(pos)
            pot=pos;
            document.getElementsByClassName("content-list")[0].style.marginLeft = -2.5*wi-4 +"px";
            document.getElementsByClassName("button-next")[0].classList.add("mystyle");
            document.getElementById("content-footer-icon-action3").classList.add("mystyle1");
            document.getElementById("content-footer-icon-action2").classList.remove("mystyle1");
  };
};
function prev(){
  if( ava>0 ){ ava=ava-1};
  if( ava==1){
    pos=-2*wi-4;
    pot=pos;
            document.getElementsByClassName("content-list")[0].style.marginLeft = -2*wi-4 + "px";
            document.getElementsByClassName("button-next")[0].classList.remove("mystyle");
            document.getElementById("content-footer-icon-action2").classList.add("mystyle1");
            document.getElementById("content-footer-icon-action3").classList.remove("mystyle1");
  };
  if(ava==0) {
    pos=0;
    pot=pos;
            document.getElementsByClassName("content-list")[0].style.marginLeft = 0;
            document.getElementsByClassName("button-prev")[0].classList.add("mystyle");
            document.getElementById("content-footer-icon-action1").classList.add("mystyle1");
            document.getElementById("content-footer-icon-action2").classList.remove("mystyle1");
  }
}

/*
if(ava==0){pos=0};
if(ava==1){pos=2*wi};
if(ava==2) {pos=2.5*wi};
var pot=pos ;
*/
document.getElementsByClassName("button-next")[0].addEventListener("mouseover",mOver);
document.getElementsByClassName("button-next")[0].addEventListener("mouseout",mOut);
function mOver(){
    var elem = document.getElementsByClassName("content-list");
    var id = setInterval(frame, 10);
    if(pos==-2.5*wi-4){clearInterval(id);};
    function frame() {
    
        if (pot==pos-30 ) {
        clearInterval(id);
         } else {
        pot--; 
        elem[0].style.marginLeft = pot + "px"; 
    }
  }    
}
function mOut(){
    var elem = document.getElementsByClassName("content-list");
    var id = setInterval(frame, 10);
    function frame() {
        if (pot == pos) {
        clearInterval(id);
         } else {
        pot++; 
        elem[0].style.marginLeft = pot + "px"; 
    }
  } 

};

document.getElementsByClassName("button-prev")[0].addEventListener("mouseover",mOver1);
document.getElementsByClassName("button-prev")[0].addEventListener("mouseout",mOut1);
function mOver1(){
    var elem = document.getElementsByClassName("content-list");
    var id = setInterval(frame, 10);
    if(pos==0){clearInterval(id);};
    function frame() {
      
        if (pot==pos+30 ) {
        clearInterval(id);
         } else {
        pot++; 
        elem[0].style.marginLeft = pot + "px"; 
    }
  }    
}
function mOut1(){
    var elem = document.getElementsByClassName("content-list");
    var id = setInterval(frame, 10);
    function frame() {
        if (pot == pos) {
        clearInterval(id);
         } else {
        pot--; 
        elem[0].style.marginLeft = pot + "px"; 
    }
  } 

};
console.log(ava);
console.log(pos);

