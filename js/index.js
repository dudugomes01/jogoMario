const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
// const reload = document.querySelector(".massage-button")
const boxReload = document.querySelector(".div-box-btn")


const jump = ()=>{
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}


 const loop = setInterval(() =>{

     const pipePosition = pipe.offsetLeft
     const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")

     if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){


         pipe.style.display = "none"
         pipe.style.left = `${pipePosition}px`

         mario.style.animation = "none"
         mario.style.bottom = `${marioPosition}px`

         mario.src= "img/mario-game-over.webp"
         mario.style.width = "75px"
         mario.style.marginLeft ="50px" 

         boxReload.style.display="flex"
        
         clearInterval(loop)
     }

 },10 )




const meuElemento = document.querySelector(".pipe")

    let velocidade = 3;
    let posicao = window.innerWidth;

 setInterval(function() {

   posicao -= velocidade;
   meuElemento.style.left = posicao + "px";
  
   if (posicao < -meuElemento.offsetWidth) {
     posicao = window.innerWidth;
     velocidade++;
   }


}, 10);



document.addEventListener('keydown',jump)