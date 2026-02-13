
let message = `Я хотел сказать что Солнышко я тебя так люблю сильно...
Я люблю тебя Эму моя ❤️`;

let i=0;
function typeText(){
 if(i<message.length){
  document.getElementById("text").innerHTML += message.charAt(i);
  i++;
  setTimeout(typeText,50);
 }
}

function startLove(){
document.getElementById("start").style.display="none";
document.getElementById("main").classList.remove("hidden");
document.getElementById("music").play();
typeText();
setInterval(makeHeart,300);
}

function makeHeart(){
 let h=document.createElement("span");
 h.innerHTML="💖";
 h.style.left=Math.random()*100+"vw";
 document.getElementById("hearts").appendChild(h);
 setTimeout(()=>h.remove(),6000);
}
