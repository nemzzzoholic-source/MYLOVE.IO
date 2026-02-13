
let message = `Я хотел сказать что Солнышко я тебя так люблю сильно...
Я люблю тебя Эму моя ❤️`;

let i=0;
function typeText(){
 if(i<message.length){
  document.getElementById("text").innerHTML += message.charAt(i);
  i++;
  setTimeout(typeText,45);
 }
}

function startLove(){
document.getElementById("start").style.display="none";
document.getElementById("main").classList.remove("hidden");
document.getElementById("music").play();
typeText();
setInterval(makeHeart,300);
}

function makeHeart(x=null,y=null){
 let h=document.createElement("span");
 h.innerHTML="💖";
 h.style.left=(x?x:Math.random()*window.innerWidth)+"px";
 h.style.top=(y?y:window.innerHeight)+"px";
 document.getElementById("hearts").appendChild(h);
 setTimeout(()=>h.remove(),6000);
}

function photoHearts(e){
 for(let i=0;i<20;i++){
   makeHeart(e.clientX+Math.random()*50, e.clientY+Math.random()*50);
 }
}

function goTG(){
 window.location.href = "https://t.me/Sqvnix";
}
