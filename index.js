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
const arrowBottom2 = document.getElementById("arrow-bottom2");
const arrowTop2 = document.getElementById("arrow-top2");
const arrow2Left2 = document.getElementById("arrow2-left2");
const arrow2Rigth2 = document.getElementById("arrow2-rigth2");

const iconSetting = document.getElementById("icon-setting");
const iconSetting2 = document.getElementById("icon-setting2");
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
let acumButtonConfiguration = 1;
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
        arrowLeft.style.transform = "translateX(-200px)";
        arrowRigth.style.transform = "translateX(200px)";
        arrowConfiguration.style.opacity = '0';
        arrowConfiguration2.style.opacity = '0';

        if (acumbuttonAnimations == 2) {
            arrowLeft.style.animation = "none";
            arrowRigth.style.animation = "none";
        }

        setTimeout(function() {
            arrowConfiguration2.style.display = "block";

            setTimeout(() => {
                arrowConfiguration2.style.opacity = "1";
            }, 100);
        }, 1400);

    } else {
        
        contConfiguration.style.transform = "translateY(0)";
        contPresent.style.opacity = '0';
        contSuma.style.opacity = '0';
        contResta.style.opacity = '0';
        contMultiplicacion.style.opacity = '0';
        contDivision.style.opacity = '0';
        arrowLeft.style.transform = "translateX(-200px)";
        arrowRigth.style.transform = "translateX(200px)";
        arrowConfiguration.style.display = "none"
        arrowConfiguration2.style.display = "block";
        arrowConfiguration2.style.opacity = '1';

        if (acumbuttonAnimations == 2) {
            arrowLeft.style.animation = "none";
            arrowRigth.style.animation = "none";
        }
    }
    acumButtonConfiguration = 1;
})

arrowConfiguration2.addEventListener ("click", function() {

    if (acumButtonTransitions == 2) {

        contConfiguration.style.transform = "translateY(-500px)";
        contPresent.style.opacity = '1';
        contSuma.style.opacity = '1';
        contResta.style.opacity = '1';
        contMultiplicacion.style.opacity = '1';
        contDivision.style.opacity = '1';
        arrowConfiguration.style.opacity = '0';
        arrowConfiguration2.style.display = 'none';            

        
        if (acumDisplayArrow == 0) {
            arrowRigth.style.transform = "translateX(0)";
            if (acumbuttonAnimations == 2) {
            
                setTimeout(() => {
                    arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
                    arrowRigth.style.animation = "move 3s ease 0s infinite normal";
                }, 900);
            }
        } else {
            arrowLeft.style.transform = "translateX(0)";
            arrowRigth.style.transform = "translateX(0)";
            if (acumbuttonAnimations == 2) {
            
                setTimeout(() => {
                    arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
                    arrowRigth.style.animation = "move 3s ease 0s infinite normal";
                }, 900);
            }
        }

        setTimeout(function() {
            arrowConfiguration.style.display = "block";
            
            setTimeout(() => {
                arrowConfiguration.style.opacity = '1';
            }, 100);

        }, 900)

    } else {
        arrowLeft.style.transform = "translateX(0)";
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

        if (acumDisplayArrow == 0) {
            arrowRigth.style.transform = "translateX(0)";
            if (acumbuttonAnimations == 2) {
                arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
                arrowRigth.style.animation = "move 3s ease 0s infinite normal";
        }
        } else {
            arrowLeft.style.transform = "translateX(0)";
            arrowRigth.style.transform = "translateX(0)";
            if (acumbuttonAnimations == 2) {
                arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
                arrowRigth.style.animation = "move 3s ease 0s infinite normal";
            }
        }

    }
    acumButtonConfiguration = 1;
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
            }

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].style.boxShadow = "-3px 3px 5px 1px rgb(65, 65, 65)";
            }
            
            acumbuttonShadows++;
            break;

        case 2:
            main.style.boxShadow = "none";
            contConfiguration.style.boxShadow = "none";
            contPresent.style.boxShadow = "none";
            contSuma.style.boxShadow = "none";
            contResta.style.boxShadow = "none";
            contMultiplicacion.style.boxShadow = "none";
            contDivision.style.boxShadow = "none";
            
            for (var i = 0; i < buttons.length; i++) {

                if (i >= 4) {
                    buttons[i].style.boxShadow = "none";
                }
            }

            for (var i = 0; i < inputs.length; i++) {
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

            arrowConfig1.style.animation = "move3 3s ease 0s infinite normal";
            arrowConfig2.style.animation = "move4 3s ease 0s infinite normal";
            iconSetting2.style.animation = "rotateIcon 2s ease 0s infinite normal";
            arrowBottom2.style.animation = "move6 3s ease 0s infinite normal";
            arrowTop2.style.animation = "move4 3s ease 0s infinite normal";
            arrow2Left2.style.animation = "move5 3s ease 0s infinite normal";
            arrow2Rigth2.style.animation = "move7 3s ease 0s infinite normal";
            acumbuttonAnimations++;
            break;

        case 2:  
            arrowConfig1.style.animation = "none";
            arrowConfig2.style.animation = "none";
            iconSetting2.style.animation = "none";
            arrowBottom2.style.animation = "none";
            arrowTop2.style.animation = "none";
            arrow2Left2.style.animation = "none";
            arrow2Rigth2.style.animation = "none";
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

            main.style.transition = "all 1s";
            arrowLeft.style.transition = "all 1s";
            arrowRigth.style.transition = "all 1s";
            arrowConfig1.style.transition = "all 1s"
            arrowConfig2.style.transition = "all 1s"
            arrowTop.style.transition = "all 1s";
            arrowBottom.style.transition = "all 1s";
            arrow2Left.style.transition = "all 1s";
            arrow2rigth.style.transition = "all 1s";

            arrowTop2.style.transition = "all 1s";
            arrowBottom2.style.transition = "all 1s";
            arrow2Left2.style.transition = "all 1s";
            arrow2Rigth2.style.transition = "all 1s";

            arrowConfiguration.style.transition = "all 1s";
            arrowConfiguration2.style.transition = "all 1s";
            iconSetting2.style.transition = "all 1s";

            images.style.

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
        arrowTop.style.transition = "none";
        arrowBottom.style.transition = "none";
        arrow2Left.style.transition = "none";
        arrow2rigth.style.transition = "none";

        arrowTop2.style.transition = "none";
        arrowBottom2.style.transition = "none";
        arrow2Left2.style.transition = "none";
        arrow2Rigth2.style.transition = "none";

        arrowConfiguration.style.transition = "none";
        arrowConfiguration2.style.transition = "none";
        iconSetting2.style.transition = "none";

        acumButtonTransitions--;
        break;
            

            
    }

})

buttonModoXeY.addEventListener ("click", function(){

    switch (acumbuttonModoXeY) {
        case 1:

        if (acumButtonTransitions == 1) {
            contPresent.style.transform = "translateX(0)";
            arrowConfig1.style.display = "none";
            arrowConfiguration.style.display = "none";
            arrowConfiguration2.style.transform = "translateX(400px)";
            arrowConfiguration2.style.opacity = "0";
            iconSetting.style.display = "block";
            iconSetting.style.opacity = '0';

            arrowConfiguration2.style.display = "none";
            iconSetting.style.opacity = '1';

            contConfiguration.style.transform = "translateY(-500px)"
            contPresent.style.opacity = "1";
            arrowLeft.style.transform = "translateX(-200px)";
            arrowRigth.style.transform = "translateX(200px)";

        
            arrowBottom.style.transform = "translateY(0)";
            arrowTop.style.transform = "translateY(0)";
            arrow2Left.style.transform = "translateX(0)";
            arrow2rigth.style.transform = "translateX(0)"
        

            contSuma.style.transform = "translateX(0)"
            contSuma.style.transform = "translateY(-500px)";
            contResta.style.transform = "translateX(-900px)";
            contMultiplicacion.style.transform = "translateX(500px)";
            contMultiplicacion.style.transform = "translateY(500px)";
            contDivision.style.transform = "translateX(900px)";

        } else {
            contPresent.style.transform = "translateX(0)";
        arrowConfig1.style.display = "none";
        arrowConfiguration.style.display = "none";
        arrowConfiguration2.style.transform = "translateX(400px)";
        arrowConfiguration2.style.opacity = "0";
        iconSetting.style.display = "block";
        iconSetting.style.opacity = '0';
        
        setTimeout(() => {
            arrowConfiguration2.style.display = "none";
            iconSetting.style.opacity = '1';
        }, 700);

        contConfiguration.style.transform = "translateY(-500px)"
        contPresent.style.opacity = "1";
        arrowLeft.style.transform = "translateX(-200px)";
        arrowRigth.style.transform = "translateX(200px)";

        

        setTimeout (function(){
            arrowBottom.style.transform = "translateY(0)";
            arrowTop.style.transform = "translateY(0)";
            arrow2Left.style.transform = "translateX(0)";
            arrow2rigth.style.transform = "translateX(0)"
        }, 400)

        contSuma.style.transform = "translateX(0)"
        contSuma.style.transform = "translateY(-500px)";
        contResta.style.transform = "translateX(-900px)";
        contMultiplicacion.style.transform = "translateX(500px)";
        contMultiplicacion.style.transform = "translateY(500px)";
        contDivision.style.transform = "translateX(900px)";
        }
        acumbuttonModoXeY++;
        break;

        case 2:
            contPresent.style.opacity = "1";
            contConfiguration.style.transform = "translateY(-500px)";

            arrowConfiguration2.style.transform = "translateX(0)";
            arrowConfiguration2.style.opacity = '1';
            arrowConfiguration.style.display = "block";
            arrowConfiguration.style.opacity = '1';
            arrowConfig1.style.display = "flex";

            arrowBottom.style.transform = "translateY(200px)";
            arrowTop.style.transform = "translateY(-200px)";
            arrow2Left.style.transform = "translateX(-200px)";
            arrow2rigth.style.transform = "translateX(200px)"

            arrowRigth.style.transform = "translateX(0)";

            contSuma.style.transform = "translateX(1000px)"
            contSuma.style.transform = "translateX(1000px)";
            contResta.style.transform = "translateX(1000px)";
            contMultiplicacion.style.transform = "translateX(1000px)";
            contMultiplicacion.style.transform = "translateX(1000px)";
            contDivision.style.transform = "translateX(1000px)";

            if (acumArrowRigth == 4) {
                arrowRigth.style.transform = "translateX(0)";
                
            } else {
                arrowRigth.style.display = "block"
                arrowRigth.style.transform = "translateX(200px)";

                setTimeout(() => {
                    arrowRigth.style.transform = "translateX(0)";
                }, 200);
            }

            if (acumButtonTransitions == 1) {
                if (acumbuttonAnimations == 2) {
                    arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
                    arrowRigth.style.animation = "move 3s ease 0s infinite normal";
                }
            }

            if (acumbuttonAnimations == 2) {
            
                setTimeout(() => {
                    arrowLeft.style.animation = "move2 3s ease 0s infinite normal";
                    arrowRigth.style.animation = "move 3s ease 0s infinite normal";
                }, 1100);
            } 

            acumArrowRigth = 1;
            acumArrowLeft = 1;

            arrowLeft.style.display = "none";

            iconSetting.style.opacity = '0';
            setTimeout(() => {
                iconSetting.style.display = "none";
            }, 1500);

            acumbuttonModoXeY--;

            break;
    }

})

arrowTop.addEventListener("click", function(){

    switch (acumArrowTop) {
        case 1:

            if (acumButtonTransitions == 1) {

                iconSetting.style.display = "none";

                contPresent.style.opacity = '0';
                contSuma.style.opacity = '1';
                contSuma.style.transform = "translateY(0)";
                arrowTop.style.transform = "translateY(-200px)";

                arrow2Left.style.transform = "translateX(-200px)"
                arrow2rigth.style.transform = "translateX(200px)"
                arrowBottom.style.transform = "translateY(200px)"

            
                arrowTop.style.transform = "translateY(0)"
                arrowTop.innerHTML = 'Inicio<p id="arrow-top2">&#8744;</p>';
                arrowTop.style.opacity = "1";

                
            
                acumArrowTop++;

            } else {
                contPresent.style.opacity = '0';
                contSuma.style.opacity = '1';
                contSuma.style.transform = "translateY(0)";
                arrowTop.style.transform = "translateY(-200px)";

                iconSetting.style.opacity = '0';
                iconSetting.style.cursor = "default";

                setTimeout(() => {
                    iconSetting.style.display = "none";
                }, 1000);

                arrow2Left.style.transform = "translateX(-200px)"
                arrow2rigth.style.transform = "translateX(200px)"
                arrowBottom.style.transform = "translateY(200px)"

                setTimeout (function(){
                    arrowTop.style.transform = "translateY(0)"
                    arrowTop.innerHTML = 'Inicio<p id="arrow-top2">&#8744;</p>';
                    arrowTop.style.opacity = "1";
                }, 1000)
                acumArrowTop++;
            }

            
            break;

        case 2:
            if (acumButtonTransitions == 1) {
                contPresent.style.opacity = '1';
                contSuma.style.opacity = '0';
                contSuma.style.transform = "translateY(-500px)";
                arrowTop.style.transform = "translateY(-200px)"

                iconSetting.style.display = "block";

                arrow2Left.style.transform = "translateX(0)"
                arrow2rigth.style.transform = "translateX(0)"
                arrowBottom.style.transform = "translateY(0)"
            
                arrowTop.innerHTML = 'Suma<p>&#8744;</p>';
                arrowTop.style.transform = "translateY(0)";

                acumArrowTop--;

            } else {
                contPresent.style.opacity = '1';
                contSuma.style.opacity = '0';
                contSuma.style.transform = "translateY(-500px)";
                arrowTop.style.transform = "translateY(-200px)"

                iconSetting.style.display = "block";
                iconSetting.style.opacity = '0';


                setTimeout(() => {
                    iconSetting.style.opacity = '1';
                    iconSetting.style.cursor = "pointer";
                }, 100);

                arrow2Left.style.transform = "translateX(0)"
                arrow2rigth.style.transform = "translateX(0)"
                arrowBottom.style.transform = "translateY(0)"
            
                setTimeout (function (){
                    arrowTop.innerHTML = 'Suma<p>&#8744;</p>';
                    arrowTop.style.transform = "translateY(0)";
                }, 310)

                acumArrowTop--;
            }

            
            break;

    }

})

arrow2Left.addEventListener ("click", function(){

    switch (acumArrow2Left) {
        case 1:

        if (acumButtonTransitions == 1) {

            contPresent.style.opacity = '0';
            contResta.style.opacity = '1';
            contResta.style.transform = "translateX(0)";
            arrow2Left.style.transform = "translateX(-200px)";

            iconSetting.style.display = "none";
    
            arrowTop.style.transform = "translateY(-200px)"
            arrow2rigth.style.transform = "translateX(200px)"
            arrowBottom.style.transform = "translateY(200px)"
    
            
            arrow2Left.innerHTML = 'Inicio<p>&#62;</p>';
            arrow2Left.style.transform = "translateX(0)";
            

            acumArrow2Left++;
        } else {
            contPresent.style.opacity = '0';
            contResta.style.opacity = '1';
            contResta.style.transform = "translateX(0)";
            arrow2Left.style.transform = "translateX(-200px)";
    
            iconSetting.style.opacity = '0';
            iconSetting.style.cursor = "default";

            setTimeout(() => {
                iconSetting.style.display = "none";
            }, 1000);

            arrowTop.style.transform = "translateY(-200px)"
            arrow2rigth.style.transform = "translateX(200px)"
            arrowBottom.style.transform = "translateY(200px)"
    
            setTimeout (function(){
                arrow2Left.innerHTML = 'Inicio<p>&#62;</p>';
                arrow2Left.style.transform = "translateX(0)";
            }, 1000)

            acumArrow2Left++;
        }
        break;

        case 2:
            if (acumButtonTransitions == 1) {
                contPresent.style.opacity = '1';
                contResta.style.opacity = '0';
                contResta.style.transform = "translateX(-900px)";
                arrow2Left.style.transform = "translateX(-200px)";

                iconSetting.style.display = "block";

                arrowTop.style.transform = "translateY(0)"
                arrow2rigth.style.transform = "translateX(0)"
                arrowBottom.style.transform = "translateY(0)"

                
                arrow2Left.innerHTML = 'Resta<p>&#62;</p>';
                arrow2Left.style.transform = "translateX(0)";
                

                acumArrow2Left--;
             
            } else {
                contPresent.style.opacity = '1';
                contResta.style.opacity = '0';
                contResta.style.transform = "translateX(-900px)";
                arrow2Left.style.transform = "translateX(-200px)";

                arrowTop.style.transform = "translateY(0)"
                arrow2rigth.style.transform = "translateX(0)"
                arrowBottom.style.transform = "translateY(0)"

                iconSetting.style.display = "block";
                iconSetting.style.opacity = '0';


                setTimeout(() => {
                    iconSetting.style.opacity = '1';
                    iconSetting.style.cursor = "pointer";
                }, 100);

                setTimeout (function(){
                    arrow2Left.innerHTML = 'Resta<p>&#62;</p>';
                    arrow2Left.style.transform = "translateX(0)";
                }, 330)

                acumArrow2Left--;
            }
            break;
    }

})

arrowBottom.addEventListener ("click", function(){

    switch (acumArrowBottom) {
        case 1:

            if (acumButtonTransitions == 1) {
                contPresent.style.opacity = '0';
                contMultiplicacion.style.opacity = '1';
                contMultiplicacion.style.transform = "translateY(0)";
                arrowBottom.style.transform = "translateY(200px)";

                iconSetting.style.display = "none";
            

                arrowTop.style.transform = "translateY(-200px)"
                arrow2rigth.style.transform = "translateX(200px)"
                arrow2Left.style.transform = "translateX(-200px)"

            
                arrowBottom.innerHTML = '<p id="arrow-bottom-p">&#8743;</p>Inicio';
                arrowBottom.style.transform = "translateY(0)";
            

                acumArrowBottom++;

            } else {
                contPresent.style.opacity = '0';
                contMultiplicacion.style.opacity = '1';
                contMultiplicacion.style.transform = "translateY(0)";
                arrowBottom.style.transform = "translateY(200px)";
            
                iconSetting.style.opacity = '0';
                iconSetting.style.cursor = "default";

                setTimeout(() => {
                    iconSetting.style.display = "none";
                }, 1000);

                arrowTop.style.transform = "translateY(-200px)"
                arrow2rigth.style.transform = "translateX(200px)"
                arrow2Left.style.transform = "translateX(-200px)"

                setTimeout (function(){
                    arrowBottom.innerHTML = '<p id="arrow-bottom-p">&#8743;</p>Inicio';
                    arrowBottom.style.transform = "translateY(0)";
                }, 1000)

                acumArrowBottom++;
            }
            break;

        case 2:

            if (acumButtonTransitions == 1) {
                contPresent.style.opacity = '1';
                contMultiplicacion.style.opacity = '0';
                contMultiplicacion.style.transform = "translateY(500px)";
                arrowBottom.style.transform = "translateY(200px)";

                iconSetting.style.display = "block";

                arrowTop.style.transform = "translateY(0)"
                arrow2rigth.style.transform = "translateX(0)"
                arrow2Left.style.transform = "translateX(0)"

                
                arrowBottom.innerHTML = '<p>&#8743;</p>Multiplicacion';
                arrowBottom.style.transform = "translateY(0)";
                

                acumArrowBottom--;
            } else {
                contPresent.style.opacity = '1';
                contMultiplicacion.style.opacity = '0';
                contMultiplicacion.style.transform = "translateY(500px)";
                arrowBottom.style.transform = "translateY(200px)";

                arrowTop.style.transform = "translateY(0)"
                arrow2rigth.style.transform = "translateX(0)"
                arrow2Left.style.transform = "translateX(0)"

                iconSetting.style.display = "block";
                iconSetting.style.opacity = '0';


                setTimeout(() => {
                    iconSetting.style.opacity = '1';
                    iconSetting.style.cursor = "pointer";
                }, 100);

                setTimeout (function(){
                    arrowBottom.innerHTML = '<p>&#8743;</p>Multiplicacion';
                    arrowBottom.style.transform = "translateY(0)";
                }, 320)

                acumArrowBottom--;
            }

            break;
    }

})

arrow2rigth.addEventListener ("click", function(){

    switch (acumArrow2Rigth) {
        case 1:

            if (acumButtonTransitions == 1) {
                contPresent.style.opacity = '0';
                contDivision.style.opacity = '1';
                contDivision.style.transform = "translateX(0)";
                arrow2rigth.style.transform = "translateX(200px)";

                iconSetting.style.display = "none";

                arrowTop.style.transform = "translateY(-200px)"
                arrow2Left.style.transform = "translateX(-200px)"
                arrowBottom.style.transform = "translateY(200px)"

            
                arrow2rigth.innerHTML = 'Inicio<p>&#60;</p>';
                arrow2rigth.style.transform = "translateX(0)";
            

                acumArrow2Rigth++;

            } else {
                contPresent.style.opacity = '0';
                contDivision.style.opacity = '1';
                contDivision.style.transform = "translateX(0)";
                arrow2rigth.style.transform = "translateX(200px)";

                arrowTop.style.transform = "translateY(-200px)"
                arrow2Left.style.transform = "translateX(-200px)"
                arrowBottom.style.transform = "translateY(200px)"

                iconSetting.style.opacity = '0';
                iconSetting.style.cursor = "default";

                setTimeout(() => {
                    iconSetting.style.display = "none";
                }, 1000);


                setTimeout (function(){
                    arrow2rigth.innerHTML = 'Inicio<p>&#60;</p>';
                    arrow2rigth.style.transform = "translateX(0)";
                }, 1000)

                acumArrow2Rigth++;
            }

            
        break;

        case 2:

            if (acumButtonTransitions == 1) {
                contPresent.style.opacity = '1';
                contDivision.style.opacity = '0';
                contDivision.style.transform = "translateX(900px)";
                arrow2rigth.style.transform = "translateX(200px)"

                iconSetting.style.display = "block";

                arrowTop.style.transform = "translateY(0)"
                arrow2Left.style.transform = "translateX(0)"
                arrowBottom.style.transform = "translateY(0)"

                    arrow2rigth.innerHTML = 'Division<p>&#60;</p>';
                    arrow2rigth.style.transform = "translateX(0)";
                

                acumArrow2Rigth--;

            } else {
                contPresent.style.opacity = '1';
                contDivision.style.opacity = '0';
                contDivision.style.transform = "translateX(900px)";
                arrow2rigth.style.transform = "translateX(200px)"

                arrowTop.style.transform = "translateY(0)"
                arrow2Left.style.transform = "translateX(0)"
                arrowBottom.style.transform = "translateY(0)"

                iconSetting.style.display = "block";
                iconSetting.style.opacity = '0';


                setTimeout(() => {
                    iconSetting.style.opacity = '1';
                    iconSetting.style.cursor = "pointer";
                }, 100);

                setTimeout (function(){
                    arrow2rigth.innerHTML = 'Division<p>&#60;</p>';
                    arrow2rigth.style.transform = "translateX(0)";
                }, 340)

                acumArrow2Rigth--;
            }
            break;
    }

})

iconSetting.addEventListener ("click", function(){

    switch (acumButtonConfiguration) {
        case 1:

            if (acumButtonTransitions == 2) {
                contConfiguration.style.transform = "translateY(0)";
                contPresent.style.opacity = "0";
                
                contSuma.style.opacity = '0';
                contResta.style.opacity = '0';
                contMultiplicacion.style.opacity = '0';
                contDivision.style.opacity = '0';

                arrowTop.style.transform = "translateY(-200px)";
                arrowBottom.style.transform = "translateY(200px)";
                arrow2Left.style.transform = "translateX(-200px)";
                arrow2rigth.style.transform = "translateX(200px)";
        
                if (acumbuttonAnimations == 2) {
                    
                }
        
                setTimeout(function() {
                    
        
                    setTimeout(() => {
                        
                    }, 100);
                }, 1400);
                acumButtonConfiguration++;
        
            } else {
                contConfiguration.style.transform = "translateY(0)";
                contPresent.style.opacity = "0";
                
                contSuma.style.opacity = '0';
                contResta.style.opacity = '0';
                contMultiplicacion.style.opacity = '0';
                contDivision.style.opacity = '0';

                arrowTop.style.transform = "translateY(-200px)";
                arrowBottom.style.transform = "translateY(200px)";
                arrow2Left.style.transform = "translateX(-200px)";
                arrow2rigth.style.transform = "translateX(200px)";
               
                if (acumbuttonAnimations == 2) {
                    
                }
                acumButtonConfiguration++;
            }

            break;

        case 2:
            if (acumButtonTransitions == 2) {
                contConfiguration.style.transform = "translateY(-500px)";
                contPresent.style.opacity = "1";
        
                contSuma.style.opacity = '0';
                contResta.style.opacity = '0';
                contMultiplicacion.style.opacity = '0';
                contDivision.style.opacity = '0';

                arrowTop.style.transform = "translateY(0)";
                arrowBottom.style.transform = "translateY(0)";
                arrow2Left.style.transform = "translateX(0)";
                arrow2rigth.style.transform = "translateX(0)";
        
                if (acumbuttonAnimations == 2) {
                    
                }
        
                setTimeout(function() {
                    
        
                    setTimeout(() => {
                        
                    }, 100);
                }, 1400);
                acumButtonConfiguration--;

            } else {
                contConfiguration.style.transform = "translateY(-500px)";
                contPresent.style.opacity = "1";

                contSuma.style.opacity = '0';
                contResta.style.opacity = '0';
                contMultiplicacion.style.opacity = '0';
                contDivision.style.opacity = '0';

                arrowTop.style.transform = "translateY(0)";
                arrowBottom.style.transform = "translateY(0)";
                arrow2Left.style.transform = "translateX(0)";
                arrow2rigth.style.transform = "translateX(0)";
               
                if (acumbuttonAnimations == 2) {
                    
                }
                acumButtonConfiguration--;
            }
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
            arrowLeft.style.transform = "translateX(0)";
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

// OPERACIONES

// Suma

const images = document.querySelectorAll('#cont-suma__table1-img img');
const inputSuma = document.getElementById("input-suma");
const buttonSuma = document.getElementById("button-suma");

let acumImgSuma = 24;

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgSuma++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgSuma--;
        }
    });
}

inputSuma.addEventListener ("input", function(){

    if (inputSuma.value.length >= 1) {

        buttonSuma.disabled = false;
        buttonSuma.style.cursor = "pointer";
        
    } else {
        buttonSuma.disabled = true;
        buttonSuma.style.cursor = "default";
    }

})

buttonSuma.addEventListener ("click", function(){

    if (inputSuma.value < 0) {
        alert("Debes ingresar numeros positivos");
        inputSuma.focus();
        inputSuma.value = "";
        buttonSuma.disabled = true;
        buttonSuma.style.cursor = "default";

    } else {
        if (inputSuma.value == acumImgSuma) {
            alert("Es correcto!");
            inputSuma.focus();
            inputSuma.value = "";
            buttonSuma.disabled = true;
            buttonSuma.style.cursor = "default";
    
        } else {
            alert("Es incorrecto, vuelve a intentarlo");
            inputSuma.focus();
            inputSuma.value = "";
            buttonSuma.disabled = true;
            buttonSuma.style.cursor = "default";
        }
    }   

})

// Resta

const images2 = document.querySelectorAll('#cont-resta__table-img img');
const inputResta = document.getElementById("input-resta");
const buttonResta = document.getElementById("button-resta");

let acumImgResta = 0;
let acum2ImgResta = 0;

for (var i = 0; i < images2.length; i++) {
    images2[i].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgResta++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acum2ImgResta++;
        }
    });
}

inputResta.addEventListener ("input", function(){

    if (inputResta.value.length >= 1) {

        buttonResta.disabled = false;
        buttonResta.style.cursor = "pointer";
        
    } else {
        buttonResta.disabled = true;
        buttonResta.style.cursor = "default";
    }

})

buttonResta.addEventListener ("click", function(){

    if (inputResta.value < 0) {
        alert("Debes ingresar numeros positivos");
        inputResta.focus();
        inputResta.value = "";
        buttonResta.disabled = true;
        buttonResta.style.cursor = "default";

    } else {
        if (inputResta.value == acumImgResta) {
            alert("Es correcto!");
            inputResta.focus();
            inputResta.value = "";
            buttonResta.disabled = true;
            buttonResta.style.cursor = "default";
    
        } else {
            alert("Es incorrecto, vuelve a intentarlo");
            inputResta.focus();
            inputResta.value = "";
            buttonResta.disabled = true;
            buttonResta.style.cursor = "default";
        }
    }   

})

// Multiplicacion

const images3 = document.querySelectorAll('#cont-multiplicacion__table-img img');
const inputMultiplicacion = document.getElementById("input-multiplicacion");
const buttonMultiplicacion = document.getElementById("button-multiplicacion");

let acumImgMultiplicacion = 24;

for (var i = 0; i < images3.length; i++) {
    images3[i].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgMultiplicacion++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgMultiplicacion--;
        }
    });
}

inputMultiplicacion.addEventListener ("input", function(){

    if (inputMultiplicacion.value.length >= 1) {

        buttonMultiplicacion.disabled = false;
        buttonMultiplicacion.style.cursor = "pointer";
        
    } else {
        buttonMultiplicacion.disabled = true;
        buttonMultiplicacion.style.cursor = "default";
    }

})

buttonMultiplicacion.addEventListener ("click", function(){

    if (inputMultiplicacion.value < 0) {
        alert("Debes ingresar numeros positivos");
        inputMultiplicacion.focus();
        inputMultiplicacion.value = "";
        buttonMultiplicacion.disabled = true;
        buttonMultiplicacion.style.cursor = "default";

    } else {
        if (inputMultiplicacion.value == acumImgMultiplicacion) {
            alert("Es correcto!");
            inputMultiplicacion.focus();
            inputMultiplicacion.value = "";
            buttonMultiplicacion.disabled = true;
            buttonMultiplicacion.style.cursor = "default";
    
        } else {
            alert("Es incorrecto, vuelve a intentarlo");
            inputMultiplicacion.focus();
            inputMultiplicacion.value = "";
            buttonMultiplicacion.disabled = true;
            buttonMultiplicacion.style.cursor = "default";
        }
    }   

})