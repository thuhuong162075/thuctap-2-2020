var gallery= function(idele,option) //idele là id, option chứa những giá trị thay đổi nhằm tái sử dụng
{   var bt=0; //quy định trạng thái nút
    var a=option.a || 2 ; // a là số li dịch trong 1 lần click
    var nli=option.nli;
    var wi=option.wi;
    var sta=0; // biến trạng thái căn lề trái của ul
    var pos=option.pos;
    var wili=option.wili || 280; 
    var id=document.getElementById(idele);
    var idlist=id.querySelector(".content-list");//trỏ đến ul 
    var next=id.querySelector(".button-next");//trỏ đến nút next
    var prev=id.querySelector(".button-prev");//trỏ đến nút prev
 //thiết lập màu ban đầu   
    prev.classList.add("button1");
//tính số nút và hiển thị 
var nspan= Math.ceil(nli/a); 
for(let i=0;i<nspan; i++){ 
    var footer_span = document.createElement("span");
    footer_span.setAttribute("data-index",i);
    footer_span.classList.add("icon");
    console.log(id.querySelector(".content-footer"))
    id.querySelector(".content-footer").appendChild(footer_span);
};
//màu nút đầu tiên
var footer_button = id.querySelectorAll(".icon");
footer_button[0].classList.add("icon1");
//Dịch chuyển khi click nút
console.log(footer_button);
id.querySelector(".content-footer").addEventListener("click",function(e){
      let old=bt;
      let index=parseInt(e.target.getAttribute("data-index"));
      if(typeof(index)=='number' && index>=0){
        bt=index;
        if (bt<(footer_button.length-1)){
            sta=a*wili*bt
        } else{ sta=(nli*wili -wi) }
        idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
       //Hàm thay đổi màu
       Color(old,index);
      }
      
    });
/*footer_button.forEach(function(button,index){
  console.log(button,index);
  id.querySelector(".content-footer").addEventListener("click",function(e){
      console.log(e,this,this.currentTarget)
        console.log(button,index);
        console.log(bt);
        bt=index;
        if (bt<footer_button.length){
            sta=a*wili*bt
        } else{ sta=nli*wili }
        Color();
    });
});
*/
/*
for (let [index, button] of footer_button){   
        button.addEventListener("click",function(){
            console.log(index);
            console.log(bt);
            bt=index;
            if (bt<footer_button.length){
                sta=a*wili*bt
            } else{ sta=nli*wili }
            Color();
        });  
};*/
function Color(old,current){
       footer_button[current].classList.add("icon1");
       footer_button[old].classList.remove("icon1");
       if(old==0) {prev.classList.remove("button1")};
       if(old==(nspan-1)) {next.classList.remove("button1")};
       if(current==0) {prev.classList.add("button1")};
       if(current==(nspan-1)) {next.classList.add("button1")};
    }
    
    /*
      
    for(let i=0;i<nspan;i++){
        footer_button[i].style.background= "#000";
        footer_button[i].style.opacity="0.2";
        if (i==bt) { footer_button[i].style.background= "rgba(251,108,39,1)";
        footer_button[i].style.opacity="1";}
    }
} */
 
//Dịch chuyển khi click và màu nút thay đổi
    next.addEventListener("click",toNext);
    prev.addEventListener("click",toPrev);
    function toNext(){
        if (sta<(nli*wili-wi) && (nli*wili-wi-sta)>(a*wili) ){
            bt+=1;
            sta+=a*wili;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        } else if(sta<(nli*wili-wi) && (nli*wili-wi-sta)<(a*wili)){
            bt+=1;
            sta+=(nli*wili-wi-sta);
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        };
        for(let i=0;i<nspan; i++){
            if (bt==i){footer_button[i].classList.add("icon1");
            footer_button[(i-1)].classList.remove("icon1");
            }
        };
        if(bt==nspan-1){
            next.classList.add("button1");
        }
        if(bt==1){
            prev.classList.remove("button1")
        }
    };
    function toPrev(){
        if (sta>0 && sta>(a*wili)){
            bt-=1;
            sta-=a*wili;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        } else if(sta>0 && sta<(a*wili)){
            bt-=1;
            sta-=sta;
            idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';
        };
        for(let i=0;i<nspan; i++){
            if (bt==i){footer_button[i].classList.add("icon1");
            footer_button[(i+1)].classList.remove("icon1");
            }
        };
        if(bt==nspan-2){
            next.classList.remove("button1");
        }
        if(bt==0){
            prev.classList.add("button1");
        }
    };
// Dịch chuyển khi di chuột 
    next.addEventListener("mouseover",nOver);
    next.addEventListener("mouseout",nOut);
    prev.addEventListener("mouseover",pOver);
    prev.addEventListener("mouseout",pOut);
    function nOver(){
        if (sta<(nli*wili-wi)){
        sta+=pos;
        idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; }
    };
    function nOut(){
        if (sta<(nli*wili-wi)){
        sta-=pos;
        idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; }
    };
    function pOver(){
        if(sta>0){
        sta-=pos;
        idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)';}
    };
    function pOut(){
        if (sta>0){
        sta+=pos;
        idlist.style.transform='translate3d(-'+(sta)+'px, 0px, 0px)'; }
    };
    

}
       
var gallery1 = new gallery("gallery",{wi:700, nli:5,pos:50,wili:280, a:2});
 