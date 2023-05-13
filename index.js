const arrowLeft = document.getElementById("arrow-left");
const arrowRigth = document.getElementById("arrow-rigth");
const arrowConfiguration = document.getElementById("arrow-configuration");

const contPresent = document.getElementById("cont-present");
const contConfiguration = document.getElementById("cont-configuration");
const contSuma = document.getElementById("cont-suma");
const contResta = document.getElementById("cont-resta");
const contMultiplicacion = document.getElementById("cont-multiplicacion");
const contDivision = document.getElementById("cont-division");

const link = document.getElementById("link");
const main = document.getElementById("main");
const buttons = document.getElementsByTagName("button");
const inputs = document.getElementsByTagName("input")

const buttonDarkMode = document.getElementById("btn-dark-mode");
const buttonShadows = document.getElementById("btn-shadows");
const buttonAnimations = document.getElementById("btn-animations");

let acumArrowLeft = 1;
let acumArrowRigth = 1;
let acumArrowConfiguration = 1;
let acumbuttonDarkMode = 1;
let acumbuttonShadows = 1;
let acumbuttonAnimations = 1;
let acumDisplayArrow = 0;

arrowConfiguration.addEventListener ("click", function() {

    switch (acumArrowConfiguration) {
        case 1:
            contConfiguration.style.transform = "translateY(0)";
            contPresent.style.opacity = '0';
            contSuma.style.opacity = '0';
            contResta.style.opacity = '0';
            contMultiplicacion.style.opacity = '0';
            contDivision.style.opacity = '0';
            arrowConfiguration.style.opacity = '0';
            arrowLeft.style.display = "none";
            arrowRigth.style.display = "none";
            acumArrowConfiguration++
            setTimeout(function() {
                arrowConfiguration.innerHTML = '&#8743;<br>Ocultar';
                arrowConfiguration.style.opacity = '1';
            }, 1500);
            break;

        case 2:
            contConfiguration.style.transform = "translateY(-500px)";
            contPresent.style.opacity = '1';
            contSuma.style.opacity = '1';
            contResta.style.opacity = '1';
            contMultiplicacion.style.opacity = '1';
            contDivision.style.opacity = '1';
            arrowConfiguration.style.opacity = '0';

            if (acumDisplayArrow == 0) {
                arrowRigth.style.display = "block";
            } else {
                arrowLeft.style.display = "block";
                arrowRigth.style.display = "block";
            }

            acumArrowConfiguration--;
            setTimeout(function() {
                arrowConfiguration.innerHTML = 'Configuraciones<br>&#8744;';
                arrowConfiguration.style.opacity = '1';
            }, 1100);
            break;
    }

})

buttonDarkMode.addEventListener("click", function() {
    
    switch(acumbuttonDarkMode) {
        case 1:
            link.href = "./style-dark.css";
            acumbuttonDarkMode++;
            break;

        case 2:
            link.href = "./style.css"
            acumbuttonDarkMode--;
    }

})

buttonShadows.addEventListener("click", function() {
    
    switch(acumbuttonShadows) {
        case 1:
            main.style.boxShadow = "0px 0px 0px 0px rgb(65, 65, 65)";
            contConfiguration.style.boxShadow = "none";
            contPresent.style.boxShadow = "none";
            contSuma.style.boxShadow = "none";
            contResta.style.boxShadow = "none";
            contMultiplicacion.style.boxShadow = "none";
            contDivision.style.boxShadow = "none";
            
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.boxShadow = "none";
                inputs[i].style.boxShadow = "none";
            }
            acumbuttonShadows++;
            break;

        case 2:
            main.style.boxShadow = "-15px 15px 20px 20px rgb(65, 65, 65)";
            contConfiguration.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contPresent.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contSuma.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contResta.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contMultiplicacion.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contDivision.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";

            for (var i = 0; i < buttons.length; i++) {

                if (i >= 3) {
                    buttons[i].style.boxShadow = "-3px 3px 5px 1px rgb(65, 65, 65)";
                }
                inputs[i].style.boxShadow = "-3px 3px 5px 1px rgb(65, 65, 65)";
            }
            
            acumbuttonShadows--;

    }

})

buttonAnimations.addEventListener ("click", function(){
    
    switch(acumbuttonAnimations) {
        case 1:
            main.style.animation = "float 3s ease 0s infinite normal";
            arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
            arrowRigth.style.animation = "move 3s ease 0s infinite normal";
            // arrowConfiguration.style.animation = "move3 3s ease-in-out 0s infinite normal";
    }

})

arrowRigth.addEventListener ("click", function(){

    switch(acumArrowRigth) {
        case 1:
            contPresent.style.transform = "translateX(-900px)";
            contPresent.style.opacity = '0';
            contSuma.style.transform = "translateX(0)";
            contSuma.style.opacity = '1';
            arrowLeft.style.display = "block";
            acumArrowRigth++;
            acumDisplayArrow++

            if (acumArrowLeft == 2) {
                acumArrowLeft--;
            } 
            break;

        case 2:
            contSuma.style.transform = "translateX(-900px)";
            contSuma.style.opacity = '0';
            contResta.style.transform = "translateX(0)";
            contResta.style.opacity = '1';
            acumArrowRigth++;
            acumArrowLeft++;
            acumDisplayArrow++;
            break;

        case 3:
            contResta.style.transform = "translateX(-900px)";
            contResta.style.opacity = '0';
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.opacity = '1';
            acumArrowRigth++;
            acumArrowLeft++;
            acumDisplayArrow++;
            break;

        case 4:
            contMultiplicacion.style.transform = "translateX(-900px)";
            contMultiplicacion.style.opacity = '0';
            contDivision.style.transform = "translateX(0)";
            contDivision.style.opacity = '1';
            arrowRigth.style.display = "none";
            acumArrowRigth++;
            acumArrowLeft++;
            acumDisplayArrow++;
            break;
    }

})

arrowLeft.addEventListener ("click", function(){

    switch(acumArrowLeft) {
        case 1:
            contPresent.style.transform = "translateX(0)";
            contPresent.style.opacity = '1';
            contSuma.style.transform = "translateX(900px)";
            contSuma.style.opacity = '0';
            arrowLeft.style.display = "none";
            acumArrowLeft++;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;

        case 2:
            contSuma.style.transform = "translateX(0)";
            contSuma.style.opacity = '1';
            contResta.style.transform = "translateX(900px)";
            contResta.style.opacity = '0';
            acumArrowLeft--;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;

        case 3:
            contResta.style.transform = "translateX(0)";
            contResta.style.opacity = '1';
            contMultiplicacion.style.transform = "translateX(900px)";
            contMultiplicacion.style.opacity = '0';
            acumArrowLeft--;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;

        case 4:
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.opacity = '1';
            contDivision.style.transform = "translateX(900px)";
            contDivision.style.opacity = '0';
            arrowRigth.style.display = "block";
            acumArrowLeft--;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;

    }

})