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
let acumButtonPreferencias = 1;
let acumDisplayArrow = 0;

window.addEventListener('resize', function() {
    
})

function mostrarPreferencias () {
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
    acumButtonPreferencias++;
}

function ocultarPreferencias () {
    if (acumButtonTransitions == 2) {

        
        if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
            contConfiguration.style.transform = "translateY(-1500px)";

        } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
            contConfiguration.style.transform = "translateY(-2000px)";

        } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
            contConfiguration.style.transform = "translateY(-2500px)";

        } else if (window.innerHeight >= 3400 && window.innerHeight < 4000) {
            contConfiguration.style.transform = "translateY(-3000px)";

        } else {
            contConfiguration.style.transform = "translateY(-1000px)";
        }

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

        if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
            contConfiguration.style.transform = "translateY(-1500px)";

        } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
            contConfiguration.style.transform = "translateY(-2000px)";

        } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
            contConfiguration.style.transform = "translateY(-2500px)";

        } else if (window.innerHeight >= 3400 && window.innerHeight < 4000) {
            contConfiguration.style.transform = "translateY(-3000px)";

        } else {
            contConfiguration.style.transform = "translateY(-1000px)";
        }

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
    acumButtonPreferencias--;
}

arrowConfiguration.addEventListener ("click", mostrarPreferencias)

arrowConfiguration2.addEventListener ("click", ocultarPreferencias)

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

                if (i >= 9)  {
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

const imagesSuma1 = document.querySelectorAll('#cont-suma__table1-img img');
const imagesSuma2 = document.querySelectorAll('#cont-suma__table2-img img');

const imagesResta1 = document.querySelectorAll('#cont-resta__table1-img img');
const imagesResta2 = document.querySelectorAll('#cont-resta__table2-img img');

const imagesMultiplicacion1 = document.querySelectorAll('#cont-multiplicacion__table1-img img');
const imagesMultiplicacion2 = document.querySelectorAll('#cont-multiplicacion__table2-img img');

const imagesDivision1 = document.querySelectorAll('#cont-division__table1-img img');
const imagesDivision2 = document.querySelectorAll('#cont-division__table2-img img');


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

            for (var i = 0; i < imagesSuma1.length; i++) {
                imagesSuma1[i].style.animation = "rotateImage1 3s ease 0s infinite normal";
                imagesSuma2[i].style.animation = "rotateImage1 3s ease 0s infinite normal";

                imagesResta1[i].style.animation = "rotateImage2 3s ease 0s infinite normal";
                imagesResta2[i].style.animation = "rotateImage2 3s ease 0s infinite normal";

                imagesMultiplicacion1[i].style.animation = "rotateImage3 3s ease 0s infinite normal";
                imagesMultiplicacion2[i].style.animation = "rotateImage3 3s ease 0s infinite normal";

                imagesDivision1[i].style.animation = "rotateImage4 3s ease 0s infinite normal";
            }

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

            for (var i = 0; i < imagesSuma1.length; i++) {
                imagesSuma1[i].style.animation = "none";
                imagesSuma2[i].style.animation = "none";

                imagesResta1[i].style.animation = "none";
                imagesResta2[i].style.animation = "none";

                imagesMultiplicacion1[i].style.animation = "none";
                imagesMultiplicacion2[i].style.animation = "none";

                imagesDivision1[i].style.animation = "none";
            }

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

            for (var i = 0; i < imagesSuma1.length; i++) {
                imagesSuma1[i].style.transition = "all 1.2s"
                imagesSuma2[i].style.transition = "all 1.2s"

                imagesResta1[i].style.transition = "all 1.2s"
                imagesResta2[i].style.transition = "all 1.2s"

                imagesMultiplicacion1[i].style.transition = "all 1.2s"
                imagesMultiplicacion2[i].style.transition = "all 1.2s"

                imagesDivision1[i].style.transition = "all 1.2s"
                imagesDivision2[i].style.transition = "all 1.2s"
            }

            acumButtonTransitions++;
            break;

        case 2:
        
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.transition = "none";
        }

        main.style.transition = "none";
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

        for (var i = 0; i < imagesSuma1.length; i++) {
            imagesSuma1[i].style.transition = "none"
            imagesSuma2[i].style.transition = "none"

            imagesResta1[i].style.transition = "none"
            imagesResta2[i].style.transition = "none"

            imagesMultiplicacion1[i].style.transition = "none"
            imagesMultiplicacion2[i].style.transition = "none"

            imagesDivision1[i].style.transition = "none"
            imagesDivision2[i].style.transition = "none"
        }

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

            if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
                contConfiguration.style.transform = "translateY(-1500px)";

            } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
                contConfiguration.style.transform = "translateY(-2000px)";

            } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
                contConfiguration.style.transform = "translateY(-2500px)";

            } else if (window.innerHeight >= 3400) {
                contConfiguration.style.transform = "translateY(-3000px)";

            } else {
                contConfiguration.style.transform = "translateY(-1000px)";
            }

            contPresent.style.opacity = "1";
            arrowLeft.style.transform = "translateX(-200px)";
            arrowRigth.style.transform = "translateX(200px)";

        
            arrowBottom.style.transform = "translateY(0)";
            arrowTop.style.transform = "translateY(0)";
            arrow2Left.style.transform = "translateX(0)";
            arrow2rigth.style.transform = "translateX(0)"
        

            contSuma.style.transform = "translateX(0)"
            
            if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
                contSuma.style.transform = "translateY(-1500px)";
                contResta.style.transform = "translateX(-1500px)";
                contMultiplicacion.style.transform = "translateX(0)";
                contMultiplicacion.style.transform = "translateY(1500px)";
                contDivision.style.transform = "translateX(1500px)";
    
            } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
                contSuma.style.transform = "translateY(-2000px)";
                contResta.style.transform = "translateX(-2000px)";
                contMultiplicacion.style.transform = "translateX(0)";
                contMultiplicacion.style.transform = "translateY(2000px)";
                contDivision.style.transform = "translateX(2000px)";
    
            } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
                contSuma.style.transform = "translateY(-2500px)";
                contResta.style.transform = "translateX(-2500px)";
                contMultiplicacion.style.transform = "translateX(0)";
                contMultiplicacion.style.transform = "translateY(2500px)";
                contDivision.style.transform = "translateX(2500px)";
    
            } else if (window.innerHeight >= 3400) {
                contSuma.style.transform = "translateY(-3000px)";
                contResta.style.transform = "translateX(-3000px)";
                contMultiplicacion.style.transform = "translateX(0)";
                contMultiplicacion.style.transform = "translateY(3000px)";
                contDivision.style.transform = "translateX(3000px)";
    
            } else {
                contSuma.style.transform = "translateY(-1000px)";
                contResta.style.transform = "translateX(-1000px)";
                contMultiplicacion.style.transform = "translateX(0)";
                contMultiplicacion.style.transform = "translateY(1000px)";
                contDivision.style.transform = "translateX(1000px)";
            }

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

        if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
            contConfiguration.style.transform = "translateY(-1500px)";

        } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
            contConfiguration.style.transform = "translateY(-2000px)";

        } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
            contConfiguration.style.transform = "translateY(-2500px)";

        } else if (window.innerHeight >= 3400) {
            contConfiguration.style.transform = "translateY(-3000px)";

        } else {
            contConfiguration.style.transform = "translateY(-1000px)";
        }

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
        
        if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
            contSuma.style.transform = "translateY(-1500px)";
            contResta.style.transform = "translateX(-1500px)";
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.transform = "translateY(1500px)";
            contDivision.style.transform = "translateX(1500px)";

        } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
            contSuma.style.transform = "translateY(-2000px)";
            contResta.style.transform = "translateX(-2000px)";
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.transform = "translateY(2000px)";
            contDivision.style.transform = "translateX(2000px)";

        } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
            contSuma.style.transform = "translateY(-2500px)";
            contResta.style.transform = "translateX(-2500px)";
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.transform = "translateY(2500px)";
            contDivision.style.transform = "translateX(2500px)";

        } else if (window.innerHeight >= 3400) {
            contSuma.style.transform = "translateY(-3000px)";
            contResta.style.transform = "translateX(-3000px)";
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.transform = "translateY(3000px)";
            contDivision.style.transform = "translateX(3000px)";

        } else {
            contSuma.style.transform = "translateY(-1000px)";
            contResta.style.transform = "translateX(-1000px)";
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.transform = "translateY(1000px)";
            contDivision.style.transform = "translateX(1000px)";
        }

        
        }
        acumbuttonModoXeY++;
        acumButtonConfiguration = 1;
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

            if (acumButtonTransitions == 1) {
                iconSetting.style.display = 'none';
            } else {
                    
                iconSetting.style.opacity = '0';
            
            setTimeout(() => {
                iconSetting.style.display = "none";
            }, 1500);
            }


            acumbuttonModoXeY--;
            acumButtonPreferencias = 1;
            break;
    }

})

function mostrarSuma () {
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
                
                if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
                    contSuma.style.transform = "translateY(-1500px)";
        
                } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
                    contSuma.style.transform = "translateY(-2000px)";
        
                } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
                    contSuma.style.transform = "translateY(-2500px)";
        
                } else if (window.innerHeight >= 3400) {
                    contSuma.style.transform = "translateY(-3000px)";
        
                } else {
                    contSuma.style.transform = "translateY(-1000px)";
                }

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
                
                if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
                    contSuma.style.transform = "translateY(-1500px)";
        
                } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
                    contSuma.style.transform = "translateY(-2000px)";
        
                } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
                    contSuma.style.transform = "translateY(-2500px)";
        
                } else if (window.innerHeight >= 3400) {
                    contSuma.style.transform = "translateY(-3000px)";
        
                } else {
                    contSuma.style.transform = "translateY(-1000px)";
                }

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
}

function mostrarSuma2 () {
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

}

function ocultarSuma () {
    if (acumButtonTransitions == 1) {
        contPresent.style.opacity = '1';
        contSuma.style.opacity = '0';
        
        if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
            contSuma.style.transform = "translateY(-1500px)";

        } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
            contSuma.style.transform = "translateY(-2000px)";

        } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
            contSuma.style.transform = "translateY(-2500px)";

        } else if (window.innerHeight >= 3400) {
            contSuma.style.transform = "translateY(-3000px)";

        } else {
            contSuma.style.transform = "translateY(-1000px)";
        }

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
        
        if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
            contSuma.style.transform = "translateY(-1500px)";

        } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
            contSuma.style.transform = "translateY(-2000px)";

        } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
            contSuma.style.transform = "translateY(-2500px)";

        } else if (window.innerHeight >= 3400) {
            contSuma.style.transform = "translateY(-3000px)";

        } else {
            contSuma.style.transform = "translateY(-1000px)";
        }
        
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
}

arrowTop.addEventListener("click", mostrarSuma)

function mostrarResta () {
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
}

function mostrarResta2 () {
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
}

function ocultarResta () {
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
}

arrow2Left.addEventListener ("click", mostrarResta)

function mostrarMultiplicacion () {
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
}

function mostrarMultiplicacion2 () {
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
}

function ocultarMultiplicacion () {
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
}

arrowBottom.addEventListener ("click", mostrarMultiplicacion)

function mostrarDivision () {
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
}

function mostrarDivision2 () {
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

}

function ocultarDivision () {
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
}

arrow2rigth.addEventListener ("click", mostrarDivision)

function mostrarConfiguracion () {
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
                
                if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
                    contConfiguration.style.transform = "translateY(-1500px)";
    
                } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
                    contConfiguration.style.transform = "translateY(-2000px)";
    
                } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
                    contConfiguration.style.transform = "translateY(-2500px)";
    
                } else if (window.innerHeight >= 3400) {
                    contConfiguration.style.transform = "translateY(-3000px)";
    
                } else {
                    contConfiguration.style.transform = "translateY(-1000px)";
                }

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
                
                if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                    contConfiguration.style.transform = "translateY(-1500px)";
    
                } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                    contConfiguration.style.transform = "translateY(-2000px)";
    
                } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                    contConfiguration.style.transform = "translateY(-2500px)";
    
                } else if (window.innerWidth >= 4000) {
                    contConfiguration.style.transform = "translateY(-3000px)";
    
                } else {
                    contConfiguration.style.transform = "translateY(-1000px)";
                }

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
}

function mostrarConfiguracion2 () {
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
}

function ocultarConfiguracion () {
    if (acumButtonTransitions == 2) {
        
        if (window.innerHeight >= 1300 && window.innerHeight < 2000) {
            contConfiguration.style.transform = "translateY(-1500px)";

        } else if (window.innerHeight >= 2000 && window.innerHeight < 2700) {
            contConfiguration.style.transform = "translateY(-2000px)";

        } else if (window.innerHeight >= 2700 && window.innerHeight < 3400) {
            contConfiguration.style.transform = "translateY(-2500px)";

        } else if (window.innerHeight >= 3400) {
            contConfiguration.style.transform = "translateY(-3000px)";

        } else {
            contConfiguration.style.transform = "translateY(-1000px)";
        }

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
}

iconSetting.addEventListener ("click", mostrarConfiguracion)

let acumContNote = 1;

function moveRigth () {
    switch(acumArrowRigth) {
        case 1:
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contPresent.style.transform = "translateX(-1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contPresent.style.transform = "translateX(-2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contPresent.style.transform = "translateX(-2500px)";

            } else if (window.innerWidth >= 4000) {
                contPresent.style.transform = "translateX(-3000px)";

            } else {
                contPresent.style.transform = "translateX(-1000px)";
            }

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
            
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contSuma.style.transform = "translateX(-1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contSuma.style.transform = "translateX(-2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contSuma.style.transform = "translateX(-2500px)";

            } else if (window.innerWidth >= 4000) {
                contSuma.style.transform = "translateX(-3000px)";

            } else {
                contSuma.style.transform = "translateX(-1000px)";
            }

            contSuma.style.opacity = '0';
            contResta.style.transform = "translateX(0)";
            contResta.style.opacity = '1';
            acumArrowRigth++;
            acumArrowLeft++;
            acumDisplayArrow++;
            break;

        case 3:
            
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contResta.style.transform = "translateX(-1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contResta.style.transform = "translateX(-2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contResta.style.transform = "translateX(-2500px)";

            } else if (window.innerWidth >= 4000) {
                contResta.style.transform = "translateX(-3000px)";

            } else {
                contResta.style.transform = "translateX(-1000px)";
            }

            contResta.style.opacity = '0';
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.opacity = '1';
            acumArrowRigth++;
            acumArrowLeft++;
            acumDisplayArrow++;
            break;

        case 4:
            
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contMultiplicacion.style.transform = "translateX(-1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contMultiplicacion.style.transform = "translateX(-2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contMultiplicacion.style.transform = "translateX(-2500px)";

            } else if (window.innerWidth >= 4000) {
                contMultiplicacion.style.transform = "translateX(-3000px)";

            } else {
                contMultiplicacion.style.transform = "translateX(-1000px)";
            }

            contMultiplicacion.style.opacity = '0';
            contDivision.style.transform = "translateX(0)";
            contDivision.style.opacity = '1';

            arrowRigth.style.display = "none";

            acumArrowRigth++;
            acumArrowLeft++;
            acumDisplayArrow++;
            break;
    }

}

function moveLeft () {
    switch(acumArrowLeft) {
        case 1:
            contPresent.style.transform = "translateX(0)";
            contPresent.style.opacity = '1';
            
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contSuma.style.transform = "translateX(1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contSuma.style.transform = "translateX(2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contSuma.style.transform = "translateX(2500px)";

            } else if (window.innerWidth >= 4000) {
                contSuma.style.transform = "translateX(3000px)";

            } else {
                contSuma.style.transform = "translateX(1000px)";
            }

            contSuma.style.opacity = '0';
            arrowLeft.style.display = "none";
            acumArrowLeft++;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;

        case 2:
            contSuma.style.transform = "translateX(0)";
            contSuma.style.opacity = '1';
            
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contResta.style.transform = "translateX(1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contResta.style.transform = "translateX(2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contResta.style.transform = "translateX(2500px)";

            } else if (window.innerWidth >= 4000) {
                contResta.style.transform = "translateX(3000px)";

            } else {
                contResta.style.transform = "translateX(1000px)";
            }

            contResta.style.opacity = '0';
            acumArrowLeft--;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;

        case 3:
            contResta.style.transform = "translateX(0)";
            contResta.style.opacity = '1';
            
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contMultiplicacion.style.transform = "translateX(1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contMultiplicacion.style.transform = "translateX(2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contMultiplicacion.style.transform = "translateX(2500px)";

            } else if (window.innerWidth >= 4000) {
                contMultiplicacion.style.transform = "translateX(3000px)";

            } else {
                contMultiplicacion.style.transform = "translateX(1000px)";
            }

            contMultiplicacion.style.opacity = '0';
            acumArrowLeft--;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;

        case 4:
            contMultiplicacion.style.transform = "translateX(0)";
            contMultiplicacion.style.opacity = '1';
            
            if (window.innerWidth >= 1500 && window.innerWidth < 2300) {
                contDivision.style.transform = "translateX(1500px)";

            } else if (window.innerWidth >= 2300 && window.innerWidth < 3200) {
                contDivision.style.transform = "translateX(2000px)";

            } else if (window.innerWidth >= 3200 && window.innerWidth < 4000) {
                contDivision.style.transform = "translateX(2500px)";

            } else if (window.innerWidth >= 4000) {
                contDivision.style.transform = "translateX(3000px)";

            } else {
                contDivision.style.transform = "translateX(1000px)";
            }

            contDivision.style.opacity = '0';
            arrowRigth.style.display = "block";
            acumArrowLeft--;
            acumArrowRigth--;
            acumDisplayArrow--;
            break;
    }
}

let acumKeySuma = 1;
let acumKeyResta = 1;
let acumKeyMultiplicacion = 1;
let acumKeyDivision = 1;

document.addEventListener ("keyup", function(){

    if (acumbuttonModoXeY == 1) {
        if (event.keyCode == 39) {

            if (acumButtonPreferencias == 1) {
                
            moveRigth();

            }

        } else if (event.keyCode == 37) {

            if (acumArrowRigth > 1 && acumButtonPreferencias == 1) {
                moveLeft();
            }
    
        } else if (event.keyCode == 38) {
            mostrarPreferencias();
            acumButtonPreferencias = 2;

        } else if (event.keyCode == 40) {
            ocultarPreferencias(); 
            acumButtonPreferencias = 1;
        } 
    } else if (acumbuttonModoXeY == 2) {
        
        if (event.keyCode == 38) {
            
            switch (acumKeySuma) {
                case 1:
                    mostrarSuma2();
                    acumKeySuma++;
                    acumKeyResta = 0;
                    acumKeyMultiplicacion = 0;
                    acumKeyDivision = 0;
                    break;

                case 2:
                    ocultarSuma();
                    acumKeySuma--;
                    acumKeyResta = 1;
                    acumKeyMultiplicacion = 1;
                    acumKeyDivision = 1;
                    break;
            }

        } else if (event.keyCode == 37) {

            switch (acumKeyResta) {
                case 1:
                    mostrarResta2();
                    acumKeyResta++;
                    acumKeySuma = 0;
                    acumKeyMultiplicacion = 0;
                    acumKeyDivision = 0;
                    break;

                case 2:
                    ocultarResta()
                    acumKeyResta--;
                    acumKeySuma = 1;
                    acumKeyMultiplicacion = 1;
                    acumKeyDivision = 1;
                    break;
            }

        } else if (event.keyCode == 40) {
            switch (acumKeyMultiplicacion) {
                case 1:
                    mostrarMultiplicacion2();
                    acumKeyMultiplicacion++;
                    acumKeySuma = 0;
                    acumKeyResta = 0;
                    acumKeyDivision = 0;
                    break;

                case 2:
                    ocultarMultiplicacion()
                    acumKeyMultiplicacion--;
                    acumKeySuma = 1;
                    acumKeyResta = 1;
                    acumKeyDivision = 1;
                    break;
            }
        } else if (event.keyCode == 39) {
            switch (acumKeyDivision) {
                case 1:
                    mostrarDivision2();
                    acumKeyDivision++;
                    acumKeySuma = 0;
                    acumKeyResta = 0;
                    acumKeyMultiplicacion = 0;
                    break;

                case 2:
                    ocultarDivision()
                    acumKeyDivision--;
                    acumKeySuma = 1;
                    acumKeyResta = 1;
                    acumKeyMultiplicacion = 1;
                    break;
            }
        }
    }

}) 

const containerNote = document.getElementById("container-note");

arrowLeft.addEventListener ("click", function(){

    moveLeft();

})

arrowRigth.addEventListener ("click", function(){

    moveRigth();

    acumContNote++;

    if (acumContNote == 2) {
        containerNote.style.transform ="translateY(0)";
        containerNote.style.opacity = '1';
        setTimeout(() => {
            containerNote.style.transition = "all 1s, opacity 0.4s"
            containerNote.style.transform ="translateY(-100px)";
            containerNote.style.opacity = '0';
        }, 5000);
    }    

    if (acumContNote == 5) {
        acumContNote = 2;
    }

})

// OPERACIONES

// Suma

const tableSuma1 = document.querySelectorAll('#cont-suma__table1-img img');
const tableSuma2 = document.querySelectorAll('#cont-suma__table2-img img');
const inputSuma = document.getElementById("input-suma");
const buttonSuma = document.getElementById("button-suma");

let acumImgSuma1 = 12;
let acumImgSuma2 = 12;
let resultadoSuma = acumImgSuma1 + acumImgSuma2;

for (var i = 0; i < tableSuma1.length; i++) {
    tableSuma1[i].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgSuma1++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgSuma1--;
        }
        resultadoSuma = acumImgSuma1 + acumImgSuma2;
    });
}

for (var j = 0; j < tableSuma2.length; j++) {
    tableSuma2[j].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgSuma2++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgSuma2--;
        }
        resultadoSuma = acumImgSuma1 + acumImgSuma2;
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

inputSuma.addEventListener ("keyup", function(){

    if (event.keyCode == 13) {
        buttonSuma.click()
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
        if (inputSuma.value == resultadoSuma) {
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

const tableResta1 = document.querySelectorAll('#cont-resta__table1-img img');
const tableResta2 = document.querySelectorAll('#cont-resta__table2-img img');
const inputResta = document.getElementById("input-resta");
const buttonResta = document.getElementById("button-resta");

let acumImgResta1 = 12;
let acumImgResta2 = 12;
let resultadoResta = acumImgResta1 - acumImgResta2

for (var i = 0; i < tableResta1.length; i++) {
    tableResta1[i].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgResta1++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgResta1--;
        }
        resultadoResta = acumImgResta1 - acumImgResta2
    });
}

for (var j = 0; j < tableResta2.length; j++) {
    tableResta2[j].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgResta2++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgResta2--;
        }
        resultadoResta = acumImgResta1 - acumImgResta2
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


inputResta.addEventListener ("keyup", function(){

    if (event.keyCode == 13) {
        buttonResta.click()
    }
})

buttonResta.addEventListener ("click", function(){

    if (inputResta.value == resultadoResta) {
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

})

// Multiplicacion

const tableMultiplicacion1 = document.querySelectorAll('#cont-multiplicacion__table1-img img');
const tableMultiplicacion2 = document.querySelectorAll('#cont-multiplicacion__table2-img img');
const inputMultiplicacion = document.getElementById("input-multiplicacion");
const buttonMultiplicacion = document.getElementById("button-multiplicacion");

let acumImgMultiplicacion1 = 12;
let acumImgMultiplicacion2 = 12;
let resultadoMultiplicacion = acumImgMultiplicacion1 * acumImgMultiplicacion2;

for (var i = 0; i < tableMultiplicacion1.length; i++) {
    tableMultiplicacion1[i].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgMultiplicacion1++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgMultiplicacion1--;
        }
        resultadoMultiplicacion = acumImgMultiplicacion1 * acumImgMultiplicacion2;
    });
}

for (var j = 0; j < tableMultiplicacion2.length; j++) {
    tableMultiplicacion2[j].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgMultiplicacion2++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgMultiplicacion2--;
        }
        resultadoMultiplicacion = acumImgMultiplicacion1 * acumImgMultiplicacion2;
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

inputMultiplicacion.addEventListener ("keyup", function(){

    if (event.keyCode == 13) {
        buttonMultiplicacion.click()
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
        if (inputMultiplicacion.value == resultadoMultiplicacion) {
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

// Division 

const tableDivision1 = document.querySelectorAll('#cont-division__table1-img img');
const tableDivision2 = document.querySelectorAll('#cont-division__table2-img img');
const inputDivision = document.getElementById("input-division");
const buttonDivision = document.getElementById("button-division");

let acumImgDivision1 = 12;
let acumImgDivision2 = 12;
let resultadoDivision = acumImgDivision1 / acumImgDivision2;

for (var i = 0; i < tableDivision1.length; i++) {
    tableDivision1[i].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgDivision1++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgDivision1--;
        }
        resultadoDivision = acumImgDivision1 / acumImgDivision2;
    });
}

for (var j = 0; j < tableDivision2.length; j++) {
    tableDivision2[j].addEventListener('click', function() {
        if (this.classList.contains('selected')) {

            this.classList.remove('selected');
            this.style.opacity = '1';
            acumImgDivision2++;
        } else {

            this.classList.add('selected');
            this.style.opacity = '0.3';
            acumImgDivision2--;
        }
        resultadoDivision = acumImgDivision1 / acumImgDivision2;
    });
}

inputDivision.addEventListener ("input", function(){

    if (inputDivision.value.length >= 1) {

        buttonDivision.disabled = false;
        buttonDivision.style.cursor = "pointer";
        
    } else {
        buttonDivision.disabled = true;
        buttonDivision.style.cursor = "default";
    }

})

inputDivision.addEventListener ("keyup", function(){

    if (event.keyCode == 13) {
        buttonDivision.click()
    }
})

buttonDivision.addEventListener ("click", function(){

    if (inputDivision.value < 0) {
        alert("Debes ingresar numeros positivos");
        inputDivision.focus();
        inputDivision.value = "";
        buttonDivision.disabled = true;
        buttonDivision.style.cursor = "default";

    } else {
        if (inputDivision.value == resultadoDivision) {
            alert("Es correcto!");
            inputDivision.focus();
            inputDivision.value = "";
            buttonDivision.disabled = true;
            buttonDivision.style.cursor = "default";
    
        } else {
            alert("Es incorrecto, vuelve a intentarlo");
            inputDivision.focus();
            inputDivision.value = "";
            buttonDivision.disabled = true;
            buttonDivision.style.cursor = "default";
        }
    }   

})


