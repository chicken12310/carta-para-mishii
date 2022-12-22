const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('sabia q dirias q cii <333, por donde puedo empezar hay tantas cosas bomnitas q t quiero decir y dedicarte pq vos t mereces todo lo bomnito, no puedo dejar de pensar en vos eres lo mas bomnito q m ha pasado en toda la vida a tu lado todo a sido musho mejor y m encantas mishii m gusta todo de tii, tambien queria recordarte lo mushoo pero mushoo q t amoo las palabras m quedan cortas a comparacion de lo q siento por vos, pero t amoo pq llegaste ami vida como a una estrella fugaz a mejorar todo, t amo pq llegaste a darle color ami vida, t amoo pq m aceptas tal cual soy, t amoo pq eres amable, sincera, empatica, t amo pq m completas mis dias, pq haces de mis madrugadas algo especial t amoo pq contigo m siento como en casa, por eso y mas eres el amor de mi vida <333')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})