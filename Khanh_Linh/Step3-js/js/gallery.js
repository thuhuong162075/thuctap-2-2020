var gallery = function(idele,option){
    var a= option.a || 2; 
    var wd= option.wd || 700;
    var sli= option.sli || 5; // tổng số li
    var wdli = option.wdli || 280 //wd của  1 li
    var bt =0; // trạng thái nút
    var pos= option.pos || 50;
    var sta=0;
    var doc= document.getElementById(option.gallery_1)
    var id= document.getElementById(idele);
    var idlist = id.querySelector(".page-gallery-content-list");
    var next= id.querySelector(".button-next");
    var prev= id.querySelector(".button-prev");
    prev.classList.add("button1");
    doc.addEventListener("mouseover",function(){
        prev.classList.add("dp-button");
    });
    doc.addEventListener("mouseout",function(){
        prev.classList.remove("dp-button");
    });
    //Hàm tạo các nút
    var sbt = Math.ceil(sli/a);
    for(let i=0; i<sbt; i++){
        var cbt = document.createElement("span");
        cbt.setAttribute("data-index",i); //set Att dataindex=i
        cbt.classList.add("icon");
        doc.querySelector(".page-gallery-button").appendChild(cbt);
        
    };
    //Tạo màu cho nút đàu tiên
    var button = doc.querySelectorAll(".icon");
    button[0].classList.add("icon1");
    // Dịch chuyển khi click nút
    doc.querySelector(".page-gallery-button").addEventListener("click", function(e){
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
    //Màu cho các nút khi click
    function Color(old,current){
        button[old].classList.remove("icon1");
        button[current].classList.add("icon1");
        if(old==0){prev.classList.remove("button1")};
        if(old==(sbt-1)){next.classList.remove("button1")};
        if(current==0){prev.classList.add("button1")};
        if(current==(sbt-1)){next.classList.add("button1")};
    };
    //Hàm dịch chuyển khi trỏ
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
        if(sta<(sli*wdli-wd+30)){
            sta-=pos;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; 
        }
    }
    function pOver(){
        if( sta>0){
            sta-=pos;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; 
        }
    }
    function pOut(){
        if( sta>-30){
            sta+=pos;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; 
        }
    }
    //Hàm chuyển khi click
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
var gallery1 = new gallery("gallery-content",{wd:700, sli:5,pos:50,wdli:280, a:2, gallery_1: "gallery"});