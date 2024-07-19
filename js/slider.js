// Slider
/* slider.js
* Interacciones:
* -TranslateX de la posición del slider
* Estructurtura:
* - Constantes
* - Funciones Handler
* - Eventos
* - Funcion de intervalo , todo esto dentro de una función anónima autoejecutable
 */
// Se hace referencia en index.html
(function() {
// Constantes y variables 
const destacadosSlider= document.querySelector(`.Destacados`)
const sliderBtns = destacadosSlider.querySelectorAll(`.Destacados-btn`)
const sliderContainer = destacadosSlider.querySelector(`.Destacados-container`)
const sliderNext = destacadosSlider.querySelector(`.Destacados-arrow--next`)
const sliderPrev = destacadosSlider.querySelector(`.Destacados-arrow--prev`)

const anchoItems = 100 / 4
let contador = 0

// Función para TranslateX la posición del slider
const actualizarSlider = () => {
    sliderContainer.style.transform = `translateX(-${anchoItems * contador}%)`
}

// Funciones Handlers
// Funcion que se ejecuta cuando hago MOUSEUP en .Destacados-btn segun el index del contador 
const SliderBtn = (index) => () => {
    contador = index
    actualizarSlider()
}
//Funcion que se ejecuta cuando hago MOUSEUP en .Destacados-arrow--next
//Aumenta el contador en 1 y ejecuta actualizarSlider
const SliderNext = () => {
    contador = contador >= 3 ? 0 : contador + 1
    actualizarSlider()
}
//Funcion que se ejecuta cuando hago MOUSEUP en .Destacados-arrow--prev
//Disminuye el contador en 1 y ejecuta actualizarSlider

const SliderPrev = () => {
    contador = contador <= 0 ? 0 : contador - 1
    actualizarSlider()
}

// Eventos
//Cuando hago MOUSEUP en .Destacados-btn se ejecuta SliderBtn(index)
sliderBtns.forEach((btn, index) => {
    btn.addEventListener(`mouseup`, SliderBtn(index))
})
//Cuando hago MOUSEUP en .Destacados-arrow--next se ejecuta SliderNext
//Cuando hago MOUSEUP en .Destacados-arrow--prev se ejecuta SliderPrev
sliderNext.addEventListener(`mouseup`, SliderNext)
sliderPrev.addEventListener(`mouseup`, SliderPrev)

// Intervalo
//Cada 5 segundos se ejecuta la función SliderNext
setInterval(() => {
    contador = (contador + 1) % 4
    actualizarSlider()
}, 5000)
})()