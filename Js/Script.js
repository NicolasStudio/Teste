// Atualizar a idade
function anos(){

    let ano = '1967';
    let date = new Date();
    let anoAtual = date.getFullYear();
    var resultAno = anoAtual - ano;

    window.localStorage.setItem('idade', resultAno);
}

anos();

// Scroll Behavior
const menulink = document.querySelectorAll('.navbarMenu a[href^="#"]');

function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(getDistanceFromTheTop){
    window.scroll({
        top: getDistanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event){
        event.preventDefault();
        const distanceFromTheTop = getDistanceFromTheTop(event.target)  - 140;
        nativeScroll(distanceFromTheTop);
}       

menulink.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

// Esconder as mensagens de habilidades
function esconde1() {
    var display = document.querySelector('.mensagem1').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem1').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem1').style.display = 'block';
    }
}

function esconde2() {
    var display = document.querySelector('.mensagem2').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem2').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem2').style.display = 'block';
    }
}

function esconde3() {
    var display = document.querySelector('.mensagem3').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem3').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem3').style.display = 'block';
    }
}

function esconde4() {
    var display = document.querySelector('.mensagem4').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem4').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem4').style.display = 'block';
    }
}

function esconde5() {
    var display = document.querySelector('.mensagem5').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem5').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem5').style.display = 'block';
    }
}

function esconde6() {
    var display = document.querySelector('.mensagem6').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem6').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem6').style.display = 'block';
    }
}

function esconde7() {
    var display = document.querySelector('.mensagem7').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem7').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem7').style.display = 'block';
    }
}

function esconde8() {
    var display = document.querySelector('.mensagem8').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem8').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem8').style.display = 'block';
    }
}

function esconde9() {
    var display = document.querySelector('.mensagem9').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem9').style.display = 'none';
    }                    
    else{
        document.querySelector('.mensagem9').style.display = 'block';
    }
}

function esconde10() {
    
    var display = document.querySelector('.mensagem10').style.display;

    if(display == 'block'){
        document.querySelector('.mensagem10').style.display = 'none';
        display.show();
    }                    
    else{
        document.querySelector('.mensagem10').style.display = 'block';
    }
}

// Primerio
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides1(n) {
  showSlides(slideIndex += n);
}

function currentSlide1(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  
}

// Segundo
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex2-1].style.display = "block"; 
    
}

// Terceiro
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex3-1].style.display = "block"; 
    
}

// Quarto
let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    if (n > slides.length) {slideIndex4 = 1}    
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex4-1].style.display = "block"; 
    
}

// Quinto
let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    if (n > slides.length) {slideIndex5 = 1}    
    if (n < 1) {slideIndex5 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex5-1].style.display = "block"; 
    
}

// Sexto
let slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides6");
    if (n > slides.length) {slideIndex6 = 1}    
    if (n < 1) {slideIndex6 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex6-1].style.display = "block"; 
}

// Setimo
let slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides7");
    if (n > slides.length) {slideIndex7 = 1}    
    if (n < 1) {slideIndex7 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex7-1].style.display = "block"; 
    
}

// Oitavo
let slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides8");
    if (n > slides.length) {slideIndex8 = 1}    
    if (n < 1) {slideIndex8 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex8-1].style.display = "block"; 
    
}

// Nono
let slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}

function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}

function showSlides9(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides9");
    if (n > slides.length) {slideIndex9 = 1}    
    if (n < 1) {slideIndex9 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex9-1].style.display = "block"; 
    
}

// Décimo
let slideIndex10 = 1;
showSlides10(slideIndex10);

function plusSlides10(n) {
  showSlides10(slideIndex10 += n);
}

function currentSlide10(n) {
  showSlides10(slideIndex10 = n);
}

function showSlides10(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides10");
    if (n > slides.length) {slideIndex10 = 1}    
    if (n < 1) {slideIndex10 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex10-1].style.display = "block"; 
}

// Décimo Primeiro
let slideIndex11 = 1;
showSlides11(slideIndex11);

function plusSlides11(n) {
  showSlides11(slideIndex11 += n);
}

function currentSlide11(n) {
  showSlides11(slideIndex11 = n);
}

function showSlides11(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides9");
    if (n > slides.length) {slideIndex11 = 1}    
    if (n < 1) {slideIndex11 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex11-1].style.display = "block"; 
}

// Décimo Segundo
let slideIndex12 = 1;
showSlides12(slideIndex12);

function plusSlides12(n) {
  showSlides12(slideIndex12 += n);
}

function currentSlide12(n) {
  showSlides12(slideIndex12 = n);
}

function showSlides12(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides9");
    if (n > slides.length) {slideIndex12 = 1}    
    if (n < 1) {slideIndex12 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex12-1].style.display = "block"; 
}

// Fechar as imagens
function fecharImagem(){

    var display = document.querySelector('.lightBox').style.display;

    if(display == 'block'){
        document.querySelector('.lightBox').style.display = 'none';
        document.querySelector('.slideshow-container1').style.display = 'none';
        document.querySelector('.slideshow-container2').style.display = 'none';
        document.querySelector('.slideshow-container3').style.display = 'none';
        document.querySelector('.slideshow-container4').style.display = 'none';
        document.querySelector('.slideshow-container5').style.display = 'none';
        document.querySelector('.slideshow-container6').style.display = 'none';
        document.querySelector('.slideshow-container7').style.display = 'none';
        document.querySelector('.slideshow-container8').style.display = 'none';
        document.querySelector('.slideshow-container9').style.display = 'none';
        document.querySelector('.slideshow-container10').style.display = 'none';
        document.querySelector('.slideshow-container11').style.display = 'none';
        document.querySelector('.slideshow-container12').style.display = 'none';
    }                    
    else{
        document.querySelector('.lightBox').style.display = 'block';
    }
}

// Abrir a imagem
$(function(){
    $('.boxClick1').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container1').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container1').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container1').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick2').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container2').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container2').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container2').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick3').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container3').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container3').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container3').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick4').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container4').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container4').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container4').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick5').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container5').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container5').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container5').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick6').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container6').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container6').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container6').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick7').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container7').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container7').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container7').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick8').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container8').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container8').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container8').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick9').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container9').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container9').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container9').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick10').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container10').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container10').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container10').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick11').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container11').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container11').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container11').style.display = 'block';

        }
        
    });
});

$(function(){
    $('.boxClick12').click(function(){

        var display = document.querySelector('.lightBox').style.display;
        var displayCarrossel1 = document.querySelector('.slideshow-container12').style.display;

        if(display == 'block' && displayCarrossel1 == 'block'){
            document.querySelector('.lightBox').style.display = 'none';
            document.querySelector('.slideshow-container12').style.display = 'none';
        }                    
        else{
            document.querySelector('.lightBox').style.display = 'block';
            document.querySelector('.slideshow-container12').style.display = 'block';

        }
        
    });
});