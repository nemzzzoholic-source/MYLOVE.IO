
const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const loveScreen = document.getElementById('loveScreen');
const typedText = document.getElementById('typedText');
const music = document.getElementById('music');

const fullText = `Я хотел сказать что Солнышко я тебя так люблю сильно и не за просто так ведь ты лучшая для меня ты хороша слушаешь меня и то что ты единственная с кем я могу чувствовать себя хорошо ты одна к которой я чувствую свою любовь я очень рад и благодарен за эти месяцы которые ты прожила со мной каждый
День минута секунда с тобой были одно счастье с тобой я именно всегда был за все поиграть поговорить и хотя бы что то сделать с тобой главное это быть возле тебя ведь ты лучшая и прекрасна для меня. Ты лучшая во всем ты мила и красива ведь ты есть такая ты прекрасна во всем солнышко ты всегда возле меня когда мне тяжело поддерживаешь любишь и всегда понимаешь меня. Я и хочу с тобой быть ведь это счастье для меня а моё счастье это только ты золотце
Я люблю тебя не просто так. А за то что ты есть у меня такая хорошая
Я люблю тебя Эму моя ❤️`;

function typeEffect(text, i = 0) {
  if (i < text.length) {
    typedText.innerHTML += text.charAt(i);
    setTimeout(() => typeEffect(text, i + 1), 20);
  }
}

function createHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (16 + Math.random()*20) + "px";
    heart.style.animation = "fly 4s linear forwards";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),4000);
 
  }, 200);
window.onload = () => {
  music.play();
  typeEffect(fullText);
  createHearts();
};

const style = document.createElement('style');
style.innerHTML = `
@keyframes fly {
  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
