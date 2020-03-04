var step12 = function(idele,option){
var hg= option.hg||167 ;
var sli=option.sli||3;
var sta=0;
var bt=1;
var id= document.getElementById(idele); // trỏ đến cục cha li
var button = document.getElementById(option.step12_1);
var idlist= id.querySelector(".page-step12-content-list");
var up = button.querySelector(".page-step12-menu-up");
var down = button.querySelector(".page-step12-menu-down");
//Hàm tạo chỉ số
if(sli>1){
        var cnum = document.createElement("p");
        var t= "1/"+sli
        cnum.innerHTML=t;
        cnum.classList.add("num");
        button.querySelector(".page-step12-menu-num").appendChild(cnum)
    }
//Dịch chuyển khi click nút
up.addEventListener("click",toUp);
down.addEventListener("click",toDown);
function toDown(){
    console.log(bt);
    if (bt<sli){
        bt+=1;
        sta+=hg;
        console.log(sta);
        idlist.style.transform='translate3d(0px, -'+(sta)+'px, 0px)';
        if(bt==2){
            button.querySelector(".page-step12-menu-num").removeChild(cnum)
            t="2/"+sli;
            cnum.innerHTML=t;
            button.querySelector(".page-step12-menu-num").appendChild(cnum)
        }
        if(bt==3){
            button.querySelector(".page-step12-menu-num").removeChild(cnum)
            t="3/"+sli;
            cnum.innerHTML=t;
            button.querySelector(".page-step12-menu-num").appendChild(cnum)
        }
    }
}
function toUp(){
    if (bt>1){
        bt-=1;
        sta-=hg;
        idlist.style.transform='translate3d(0px,-'+(sta)+'px,0px)';
        if(bt==2){
            button.querySelector(".page-step12-menu-num").removeChild(cnum)
            t="2/"+sli;
            cnum.innerHTML=t;
            button.querySelector(".page-step12-menu-num").appendChild(cnum)
        }
        if(bt==1){
            button.querySelector(".page-step12-menu-num").removeChild(cnum)
            t="1/"+sli;
            cnum.innerHTML=t;
            button.querySelector(".page-step12-menu-num").appendChild(cnum)
        }
    }
}
}

var step12_1 = new step12("step12-content",{hg: 167, sli:3,step12_1:"step12-menu"});