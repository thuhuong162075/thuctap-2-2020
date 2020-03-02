var step10 = function(idele,option){
    var bt=0;
    var sta=0;
    var wd = option.wd || 700;
    var sli= option.sli ||5;
    var pos= option.pos ||50;
    var wdli=option.wdli || 280;
    var a =option.a || 2;
    var doc= document.getElementById(option.gallery);
    var id= document.getElementById(idele);
    var idlist= id.querySelector(".page-step10-content-list");
    var next = id.querySelector(".button-next");
    var prev = id.querySelector(".button-prev");
    prev.classList.add("button1");
    doc.addEventListener("mouseover",function(){
        sta+=1;
        prev.classList.add("dp-button");
    });
    doc.addEventListener("mouseout",function(){
        prev.classList.remove("dp-button");
    });
    var sbt = Math.ceil(sli/a);
    for(let i=0; i<sbt; i++){
        var cbt = document.createElement("span");
        cbt.setAttribute("data-index",i); //set Att dataindex=i
        cbt.classList.add("icon");
        doc.querySelector(".page-step10-button").appendChild(cbt);
        
    };
    var button = doc.querySelectorAll(".icon");
    button[0].classList.add("icon1");
    
    doc.querySelector(".page-step10-button").addEventListener("click", function(e){
        let old=bt; // lưu lại trạng thái hiện tại
        let index=parseInt(e.target.getAttribute("data-index"));
        if(typeof(index)=='number'&& index>=0){
            bt=index;
            if(bt<(sbt-1)){
                sta=a*wdli*bt;
            } else{ sta=(sli*wdli-wd)}
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
            Color(old,index);
        }
    });
    function Color(old,current){
        button[old].classList.remove("icon1");
        button[current].classList.add("icon1");
        if(old==0){prev.classList.remove("button1")};
        if(old==(sbt-1)){next.classList.remove("button1")};
        if(current==0){prev.classList.add("button1")};
        if(current==(sbt-1)){next.classList.add("button1")};
    };
    next.addEventListener("mouseover",nOver);
    next.addEventListener("mouseout",nOut);
    prev.addEventListener("mouseover",pOver);
    prev.addEventListener("mouseout",pOut)
    function nOver(){
        if(sta<(sli*wdli-wd)){
            sta+=pos;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; 
        }
    }
    function nOut(){
        if(sta<(sli*wdli-wd+pos)){
            sta-=pos;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; 
        }
    }
    function pOver(){
        console.log(sta);
        if( sta>0){
            sta-=pos;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; 
        }
    }
    function pOut(){
        if( sta>0){
            sta+=pos;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; 
        }
    }
    next.addEventListener("click",toNext);
    prev.addEventListener("click",toPrev);
    function toNext(){
        if((sli*wdli-wd-sta)>(a*wdli)){
            bt+=1;
            sta+=a*wdli;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        } else if(sta<(sli*wdli-wd) && (sli*wdli-wd-sta)<(a*wdli)){
            console.log(sta);
            bt+=1;
            sta = (sli*wdli-wd);
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        };
        for(let i=0;i<sbt;i++){
            if(bt==i){
                button[i].classList.add("icon1");
                button[i-1].classList.remove("icon1");
            }
        };
        console.log(bt);
        if(bt==sbt-1){
            next.classList.add("button1");
        }
        if(bt==1){
            prev.classList.remove("button1");
        }
    };
    function toPrev(){
        if(sta>(a*wdli)){
            bt-=1;
            sta-=a*wdli;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        } else if(sta>0){
            bt-=1;
            sta = 0;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        };
        for(let i=0;i<sbt;i++){
            if(bt==i){
                button[i].classList.add("icon1");
                button[i+1].classList.remove("icon1");
            }
        };
        console.log(bt);
        if(bt==0){
            prev.classList.add("button1");
        }
        if(bt==(sbt-2)){
            next.classList.remove("button1");
        }
    }
}
var gallery1 = new step10("step10-content",{wd:700, sli:8,pos:50,wdli:280, a:2, gallery: "step10"});