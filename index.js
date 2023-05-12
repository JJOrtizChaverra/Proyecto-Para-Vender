const arrowLeft = document.getElementById("arrow-left");
const arrowRigth = document.getElementById("arrow-rigth");
const arrowConfiguration = document.getElementById("arrow-configuration");

const contPresent = document.getElementById("cont-present");
const contConfiguration = document.getElementById("cont-configuration");
const contSuma = document.getElementById("cont-suma");
const contResta = document.getElementById("cont-resta");
const contMultiplicacion = document.getElementById("cont-multiplicacion");
const contDivision = document.getElementById("cont-division");

const main = document.getElementsByTagName("main");
const Inputs = document.input
const body = document.body

const buttonDarkMode = document.getElementById("btn-dark-mode");

let acumArrowLeft = 1;
let acumArrowRigth = 1;
let acumArrowConfiguration = 1;
let acumbuttonDarkMode = 1;

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
            body.style.backgroundColor = "rgb(41, 41, 41)";
            main.style.backgroundColor = "rgb(41, 41, 41)";
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
            break;

        case 3:
            contResta.style.transform = "translateX(-900px)";
            contResta.style.opacity = '0';
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.opacity = '1';
            acumArrowRigth++;
            acumArrowLeft++;
            break;

        case 4:
            contMultiplicacion.style.transform = "translateX(-900px)";
            contMultiplicacion.style.opacity = '0';
            contDivision.style.transform = "translateX(0)";
            contDivision.style.opacity = '1';
            arrowRigth.style.display = "none";
            acumArrowRigth++;
            acumArrowLeft++;
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
            break;

        case 2:
            contSuma.style.transform = "translateX(0)";
            contSuma.style.opacity = '1';
            contResta.style.transform = "translateX(900px)";
            contResta.style.opacity = '0';
            acumArrowLeft--;
            acumArrowRigth--;
            break;

        case 3:
            contResta.style.transform = "translateX(0)";
            contResta.style.opacity = '1';
            contMultiplicacion.style.transform = "translateX(900px)";
            contMultiplicacion.style.opacity = '0';
            acumArrowLeft--;
            acumArrowRigth--;
            break;

        case 4:
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.opacity = '1';
            contDivision.style.transform = "translateX(900px)";
            contDivision.style.opacity = '0';
            arrowRigth.style.display = "block";
            acumArrowLeft--;
            acumArrowRigth--;
            break;

    }

})