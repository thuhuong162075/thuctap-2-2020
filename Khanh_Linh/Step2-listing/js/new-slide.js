
function gallery(idele,option){
  var ava=0;
  var pos=0;
  var wd=option ||280;
  var id=document.getElementById(idele);
  var idlist=id.querySelector('.content-list');
  var next=id.querySelector('.button-next'); // get the first element by the class button-next in id
  var prev=id.querySelector('.button-prev');
  next.addEventListener("click",function(){
    if(ava<3){ava+=1}
    if (ava==1 || ava==2){
    pos+=(wd); console.log(pos);
    idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)'; }
    if (ava==3){
      pos+=(0.5*wd); console.log(pos);
      idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)';
      next.classList.add("mystyle1"); }   
  });
  prev.addEventListener("click",function(){
    if(ava>0){ava-=1} ;console.log(ava);
    if (ava==1 || ava==2){
    pos-=(wd); console.log(pos);
    idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)'; }
    if (ava==0){
      pos-=(0.5*wd); console.log(pos);
      idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)';
      next.classList.add("mystyle1"); }   
  });
 
  
  next.addEventListener("mouseover",function(){
        pos+=30;
        idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)';
    });
  next.addEventListener("mouseout",function(){
  pos-=30;
      idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)';
    });
  
  prev.addEventListener("mouseover",function(){
    pos-=30;
    idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)'
  });
  prev.addEventListener("mouseout",function(){
    pos+=30;
    idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)'
  });
  
};

gallery('gallery');


/*
function gallery(idele,option){
  var pos=0;
  var wd=option.wd ||280; // nếu option ko truyền giá trị vào thì wd nhận gt 280
  var id=document.getElementById(idele);
  var idlist=id.querySelector('.content-list');
  var next=id.querySelector('button-next');
  next.addEventListener("mouseover", function(){
    pos+=30;
    idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)';
  });
  next.addEventListener("mouseout",function(){
    pos-=30;
        idlist.style.transform='translate3d(-'+(pos)+'px, 0px, 0px)'
  })
}
*/
/*
var pos = 0;
var pot = 0;
var ava= 0;
var wi=280;
document.getElementById("content-footer-icon-action1").addEventListener("click",button1);
document.getElementById("content-footer-icon-action2").addEventListener("click",button2);
document.getElementById("content-footer-icon-action3").addEventListener("click",button3);
function button1(){
document.getElementsByClassName("content-list")[0].style.marginLeft = 0;
document.getElementById("content-footer-icon-action1").classList.add("mystyle1");
document.getElementById("content-footer-icon-action2").classList.remove("mystyle1");
document.getElementById("content-footer-icon-action3").classList.remove("mystyle1");
ava=0;
}
function button2(){
  document.getElementsByClassName("content-list")[0].style.marginLeft = -2*wi-4 +"px";
  document.getElementById("content-footer-icon-action2").classList.add("mystyle1");
document.getElementById("content-footer-icon-action1").classList.remove("mystyle1");
document.getElementById("content-footer-icon-action3").classList.remove("mystyle1");
  ava=1;
  }
function button3(){
  document.getElementsByClassName("content-list")[0].style.marginLeft = -2.5*wi-4 +"px";
  document.getElementById("content-footer-icon-action3").classList.add("mystyle1");
document.getElementById("content-footer-icon-action2").classList.remove("mystyle1");
document.getElementById("content-footer-icon-action1").classList.remove("mystyle1");
  ava=2;
  }
document.getElementsByClassName("button-next")[0].addEventListener("click",next);
document.getElementsByClassName("button-prev")[0].addEventListener("click",prev);
document.getElementById("content-footer-icon-action1").classList.add("mystyle1");
function next(){
  if( ava<2){ ava=ava+1};
  if(ava==1){
    pos=-2*wi-4;
    pot=pos;
    document.getElementsByClassName("content-list")[0].classList.add("margin1");
    
            document.getElementsByClassName("button-prev")[0].classList.remove("mystyle");
            document.getElementById("content-footer-icon-action2").classList.add("mystyle1");
            document.getElementById("content-footer-icon-action1").classList.remove("mystyle1");
  };
  if(ava==2){
            pos=-2.5*wi-4;
            console.log(pos)
            pot=pos;
            document.getElementsByClassName("content-list")[0].classList.add("margin2");
            document.getElementsByClassName("content-list")[0].classList.remove("margin1");
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
    document.getElementsByClassName("content-list")[0].classList.add("margin1");
    document.getElementsByClassName("content-list")[0].classList.remove("margin2");
            document.getElementsByClassName("button-next")[0].classList.remove("mystyle");
            document.getElementById("content-footer-icon-action2").classList.add("mystyle1");
            document.getElementById("content-footer-icon-action3").classList.remove("mystyle1");
  };
  if(ava==0) {
    pos=0;
    pot=pos;
    document.getElementsByClassName("content-list")[0].classList.add("margin0");
    document.getElementsByClassName("content-list")[0].classList.remove("margin1");
            document.getElementsByClassName("button-prev")[0].classList.add("mystyle");
            document.getElementById("content-footer-icon-action1").classList.add("mystyle1");
            document.getElementById("content-footer-icon-action2").classList.remove("mystyle1");
  }
}


document.getElementsByClassName("button-next")[0].addEventListener("mouseover",mOver);
document.getElementsByClassName("button-next")[0].addEventListener("mouseout",mOut);
function mOver(){
  if(pos==0){
    document.getElementsByClassName("content-list")[0].classList.add("mv0");
  }
  if(pos==-564){
    document.getElementsByClassName("content-list")[0].classList.add("mv1");
  }     
}
function mOut(){
  if(pos==0){
    document.getElementsByClassName("content-list")[0].classList.remove("mv0");
  }
  if(pos==-564){
    document.getElementsByClassName("content-list")[0].classList.add("margin1");
  }  
};

document.getElementsByClassName("button-prev")[0].addEventListener("mouseover",mOver1);
document.getElementsByClassName("button-prev")[0].addEventListener("mouseout",mOut1);
function mOver1(){
     
}
function mOut1(){
    
};
*/