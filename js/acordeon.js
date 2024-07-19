//Lecciones
/* acordeon.js
* Interacciones:
* - Mostrar y ocultar los acordeones 
* Estructurtura:
* - Constantes
* - Funciones Handler
* - Eventos */

// Se hace referencia en lecciones.html



(function() {
const content = document.querySelector(`.Acordeon`)
const filaAcordeon = content.querySelectorAll(`.Acordeon-section`)
const btn = content.querySelectorAll(`.Acordeon-button`)

//Funcion Handler
// a TODOS .Content-p le remove la clase isActive
//.Content-p[index] le ADD la clase isActive

const openAcordeon = (index) => {
    btn[index].addEventListener(`mouseup`, () => {
       if(filaAcordeon[index].classList.contains(`is-active`)){
           filaAcordeon[index].classList.remove(`is-active`)
       }
       else{
           filaAcordeon.forEach(( _ , index) => {
               filaAcordeon[index].classList.remove(`is-active`)
           })
           filaAcordeon[index].classList.add(`is-active`)
       }
       })
   }

//Eventos
//Cuando hago mouseup en Acordeon-button se ejecuta openAcordeon(index)
btn.forEach(( _ , index)  => openAcordeon(index))

    
})()

