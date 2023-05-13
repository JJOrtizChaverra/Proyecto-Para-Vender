const arrowLeft = document.getElementById("arrow-left");
const arrowRigth = document.getElementById("arrow-rigth");
const arrowConfiguration = document.getElementById("arrow-configuration");
const arrowConfiguration2 = document.getElementById("arrow-configuration2");
const arrowConfig1 = document.getElementById("arrow-config");
const arrowConfig2 = document.getElementById("arrow-config2");

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
const divs = document.getElementsByTagName("div");
const arrowBottomP = document.getElementById("arrow-bottom-p");

const iconSetting = document.getElementById("icon-setting");
const arrowBottom = document.getElementById("arrow-bottom");
const arrowTop = document.getElementById("arrow-top");
const arrow2Left = document.getElementById("arrow2-left");
const arrow2rigth = document.getElementById("arrow2-rigth");

const buttonDarkMode = document.getElementById("btn-dark-mode");
const buttonShadows = document.getElementById("btn-shadows");
const buttonAnimations = document.getElementById("btn-animations");
const buttonBoxFloat = document.getElementById("btn-box-float");
const buttonTransitios = document.getElementById("btn-transitions");
const buttonModoXeY = document.getElementById("btn-other-mode");

let acumArrowLeft = 1;
let acumArrowRigth = 1;
let acumbuttonDarkMode = 1;
let acumbuttonShadows = 1;
let acumbuttonAnimations = 1;
let acumButtonBoxFloat = 1;
let acumButtonTransitions = 1;
let acumbuttonModoXeY = 1;
let acumArrowTop = 1;
let acumArrowBottom = 1;
let acumArrow2Left = 1;
let acumArrow2Rigth = 1;
let acumDisplayArrow = 0;

arrowConfiguration.addEventListener ("click", function() {

    if (acumButtonTransitions == 2) {
        arrowConfiguration.style.display = 'none';

        contConfiguration.style.transform = "translateY(0)";
        contPresent.style.opacity = '0';
        contSuma.style.opacity = '0';
        contResta.style.opacity = '0';
        contMultiplicacion.style.opacity = '0';
        contDivision.style.opacity = '0';
        arrowLeft.style.display = "none";
        arrowRigth.style.display = "none";
        arrowConfiguration.style.opacity = '0';
        arrowConfiguration2.style.display = "block";
        arrowConfiguration2.style.opacity = '0';

        setTimeout(function() {
            arrowConfiguration2.style.opacity = "1";
        }, 1500);

    } else {
        
        contConfiguration.style.transform = "translateY(0)";
        contPresent.style.opacity = '0';
        contSuma.style.opacity = '0';
        contResta.style.opacity = '0';
        contMultiplicacion.style.opacity = '0';
        contDivision.style.opacity = '0';
        arrowLeft.style.display = "none";
        arrowRigth.style.display = "none";
        arrowConfiguration.style.display = "none"
        arrowConfiguration2.style.display = "block";
        arrowConfiguration2.style.opacity = '1';


        
    }
    
})

arrowConfiguration2.addEventListener ("click", function() {

    if (acumButtonTransitions == 2) {

        contConfiguration.style.transform = "translateY(-500px)";
        contPresent.style.opacity = '1';
        contSuma.style.opacity = '1';
        contResta.style.opacity = '1';
        contMultiplicacion.style.opacity = '1';
        contDivision.style.opacity = '1';
        arrowConfiguration.style.display = "block";
        arrowConfiguration.style.opacity = '0';
        arrowConfiguration2.style.opacity = '0';

        setTimeout(function() {
            arrowConfiguration.style.opacity = '1';
            arrowConfiguration2.style.display ="none";
        }, 1000)

    } else {
        contConfiguration.style.transform = "translateY(-500px)";
        contPresent.style.opacity = '1';
        contSuma.style.opacity = '1';
        contResta.style.opacity = '1';
        contMultiplicacion.style.opacity = '1';
        contDivision.style.opacity = '1';
        arrowConfiguration.style.display = "block";
        arrowConfiguration.style.opacity = '1';
        arrowConfiguration2.style.display = "none"
        arrowConfiguration2.style.opacity = '0';
    }

    

    if (acumDisplayArrow == 0) {
        arrowRigth.style.display = "block";
    } else {
        arrowLeft.style.display = "block";
        arrowRigth.style.display = "block";
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
            main.style.boxShadow = "-15px 15px 20px 20px rgb(65, 65, 65)";
            contConfiguration.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contPresent.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contSuma.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contResta.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contMultiplicacion.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";
            contDivision.style.boxShadow = "-10px 10px 10px 7px rgb(77, 77, 77)";

            for (var i = 0; i < buttons.length; i++) {

                if (i >= 4) {
                    buttons[i].style.boxShadow = "-3px 3px 5px 1px rgb(65, 65, 65)";
                }
                inputs[i].style.boxShadow = "-3px 3px 5px 1px rgb(65, 65, 65)";
            }
            
            acumbuttonShadows++;
            break;

        case 2:
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
            acumbuttonShadows--;
            break;
    }

})

buttonBoxFloat.addEventListener ("click", function(){

    switch (acumButtonBoxFloat) {
        case 1:
            main.style.animation = "float 3s ease 0s infinite normal";
            acumButtonBoxFloat++;
            break;

        case 2:
            main.style.animation = "none";
            acumButtonBoxFloat--;
            break;
    }

})


buttonAnimations.addEventListener ("click", function(){
    
    switch(acumbuttonAnimations) {
        case 1:
            arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
            arrowRigth.style.animation = "move 3s ease 0s infinite normal";       
            arrowConfig1.style.animation = "move3 3s ease 0s infinite normal";
            arrowConfig2.style.animation = "move4 3s ease 0s infinite normal";
            acumbuttonAnimations++;
            break;

        case 2:
            arrowLeft.style.animation = "none";
            arrowRigth.style.animation = "none";       
            arrowConfig1.style.animation = "none";
            arrowConfig2.style.animation = "none";
            acumbuttonAnimations--;
            break;
    }

})

buttonTransitios.addEventListener ("click", function() {

    switch (acumButtonTransitions) {
        case 1:
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.transition = "all 1s, transform 2s, opacity 1.5s";
            }

            arrowLeft.style.transition = "all 1s";
            arrowRigth.style.transition = "all 1s";
            arrowConfig1.style.transition = "all 1s"
            arrowConfig2.style.transition = "all 1s"
            arrowTop.style.transition = "all 1s";
            arrowBottom.style.transition = "all 1s";
            arrow2Left.style.transition = "all 1s";
            arrow2rigth.style.transition = "all 1s";

            acumButtonTransitions++;
            break;

        case 2:
        
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.transition = "none";
        }
        arrowLeft.style.transition = "none";
        arrowRigth.style.transition = "none";
        arrowConfig1.style.transition = "none"
        arrowConfig2.style.transition = "none"

        acumButtonTransitions--;
        break;
            

            
    }

})

buttonModoXeY.addEventListener ("click", function(){

    switch (acumbuttonModoXeY) {
        case 1:
        iconSetting.style.display = "block";
        arrowConfig1.style.display = "none";
        arrowConfig2.style.display = "none";
        arrowConfiguration.style.display = "none"
        arrowConfiguration2.style.display = "none"

        contConfiguration.style.transform = "translateY(-500px)"
        contPresent.style.opacity = "1";
        arrowLeft.style.display = "none";
        arrowRigth.style.display = "none";
        arrowBottom.style.display = "block";
        arrowTop.style.display = "block";
        arrow2Left.style.display = "block";
        arrow2rigth.style.display = "block";

        contSuma.style.transform = "translateX(0)"
        contSuma.style.transform = "translateY(-500px)";
        contResta.style.transform = "translateX(-900px)";
        contMultiplicacion.style.transform = "translateX(500px)";
        contMultiplicacion.style.transform = "translateY(500px)";
        contDivision.style.transform = "translateX(900px)";
    }

})

arrowTop.addEventListener("click", function(){

    switch (acumArrowTop) {
        case 1:
            contPresent.style.opacity = '0';
            contSuma.style.opacity = '1';
            contSuma.style.transform = "translateY(0)";
            arrowTop.style.transform = "translateY(-200px)";

            arrow2Left.style.transform = "translateX(-200px)"
            arrow2rigth.style.transform = "translateX(200px)"
            arrowBottom.style.transform = "translateY(200px)"

            setTimeout (function(){
                arrowTop.innerHTML = 'Inicio<p>&#8744;</p>';
                arrowTop.style.transform = "translatey(0)";
            }, 1000)
            acumArrowTop++;
            break;

        case 2:
            contPresent.style.opacity = '1';
            contSuma.style.opacity = '0';
            contSuma.style.transform = "translateY(-500px)";
            arrowTop.style.transform = "translateY(-200px)";

            arrow2Left.style.transform = "translateX(0)"
            arrow2rigth.style.transform = "translateX(0)"
            arrowBottom.style.transform = "translateY(0)"
            
            setTimeout (function (){
                arrowTop.innerHTML = 'Suma<p>&#8744;</p>';
                arrowTop.style.transform = "translateY(0)";
            }, 310)

            
            acumArrowTop--;
            break;

    }

})

arrow2Left.addEventListener ("click", function(){

    switch (acumArrow2Left) {
        case 1:

        contPresent.style.opacity = '0';
        contResta.style.opacity = '1';
        contResta.style.transform = "translateX(0)";
        arrow2Left.style.opacity = '0'
        arrow2Left.style.display = "block"

        arrowTop.style.transform = "translateY(-200px)"
        arrow2rigth.style.transform = "translateX(200px)"
        arrowBottom.style.transform = "translateY(200px)"

        setTimeout (function(){
            arrow2Left.innerHTML = 'Inicio<p>&#62;</p>';
            arrow2Left.style.opacity = '1';
        }, 1500)

        acumArrow2Left++;
        break;

        case 2:
            contPresent.style.opacity = '1';
            contResta.style.opacity = '0';
            contResta.style.transform = "translateX(-900px)";
            arrow2Left.style.opacity = '0'
            arrow2Left.style.display = "block"

            arrowTop.style.transform = "translateY(0)"
            arrow2rigth.style.transform = "translateX(0)"
            arrowBottom.style.transform = "translateY(0)"

            setTimeout (function(){
                arrow2Left.innerHTML = 'Resta<p>&#62;</p>';
                arrow2Left.style.opacity = '1';
            }, 1500)

            acumArrow2Left--;
            break;
    }

})

arrowBottom.addEventListener ("click", function(){

    switch (acumArrowBottom) {
        case 1:
            contPresent.style.opacity = '0';
            contMultiplicacion.style.opacity = '1';
            contMultiplicacion.style.transform = "translateY(0)";
            arrowBottom.style.opacity = '0'
            arrowBottom.style.display = "block"
            

            arrowTop.style.transform = "translateY(-200px)"
            arrow2rigth.style.transform = "translateX(200px)"
            arrow2Left.style.transform = "translateX(-200px)"

            setTimeout (function(){
                arrowBottom.innerHTML = '<p id="arrow-bottom-p">&#8743;</p>Inicio';
                arrowBottom.style.opacity = '1';
            }, 1500)

            acumArrowBottom++;
            break;

        case 2:
            contPresent.style.opacity = '1';
            contMultiplicacion.style.opacity = '0';
            contMultiplicacion.style.transform = "translateY(500px)";
            arrowBottom.style.opacity = '0'
            arrowBottom.style.display = "block"

            arrowTop.style.transform = "translateY(0)"
            arrow2rigth.style.transform = "translateX(0)"
            arrow2Left.style.transform = "translateX(0)"

            setTimeout (function(){
                arrowBottom.innerHTML = '<p>&#8743;</p>Multiplicacion';
                arrowBottom.style.opacity = '1';
            }, 1000)

            acumArrowBottom--;
            break;
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

arrow2rigth.addEventListener ("click", function(){

    switch (acumArrow2Rigth) {
        case 1:
            contPresent.style.opacity = '0';
            contDivision.style.opacity = '1';
            contDivision.style.transform = "translateX(0)";
            arrow2rigth.style.opacity = '0'
            arrow2rigth.style.display = "block"

            arrowTop.style.transform = "translateY(-200px)"
            arrow2Left.style.transform = "translateX(-200px)"
            arrowBottom.style.transform = "translateY(200px)"

            setTimeout (function(){
                arrow2rigth.innerHTML = 'Inicio<p>&#60;</p>';
                arrow2rigth.style.opacity = '1';
            }, 1500)

            acumArrow2Rigth++;
        break;

        case 2:
            contPresent.style.opacity = '1';
            contDivision.style.opacity = '0';
            contDivision.style.transform = "translateX(900px)";
            arrow2rigth.style.opacity = '0'
            arrow2rigth.style.display = "block"

            arrowTop.style.transform = "translateY(0)"
            arrow2Left.style.transform = "translateX(0)"
            arrowBottom.style.transform = "translateY(0)"

            setTimeout (function(){
                arrow2rigth.innerHTML = 'Division<p>&#60;</p>';
                arrow2rigth.style.opacity = '1';
            }, 1500)

            acumArrow2Rigth--;
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