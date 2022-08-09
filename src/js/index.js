'use strict'
//Menú en Barra

//Carrusel
const d = document;
const grande = d.querySelector('.grande')
const punto = d.querySelectorAll('.punto')

punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener('click', ()=>{
        let posicion = i
        let operacion = posicion * -33.4
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach((cadaPunto, i) =>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})
// Video
const video = document.querySelector(".vid")
const btnPlay = document.querySelector(".play")
const btnReplay = document.querySelector(".replay");
const btnVolume = document.querySelector(".volume");

let inicio = ()=>{
    btnPlay.addEventListener("click" ,play);
    video.addEventListener("click", play);
    btnVolume.addEventListener("click", sonido);
    btnReplay.addEventListener("click", replay);
}
function play(){
    if(video.paused){
        video.play();
        btnPlay.src = "https://img.icons8.com/material-outlined/24/000000/pause--v1.png"
    }
    else{
        video.pause();
        btnPlay.src = "https://img.icons8.com/fluency-systems-filled/48/000000/play.png"
    } 
}
function sonido(){
    if(video.volume ==1){
        video.volume =0;
        btnVolume.src = "https://img.icons8.com/material-sharp/24/000000/no-audio.png"
    }
    else{
        video.volume = 1;
        btnVolume.src = "https://img.icons8.com/material-rounded/24/000000/medium-volume.png"
    }
}
function replay(){
    video.currentTime="0"
}
sonido();
inicio();
replay();