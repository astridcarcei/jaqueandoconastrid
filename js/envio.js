//Menu principal
/* envio.js
* Interacciones:
* - Capturar el evento submit y enviar un alert "Comentario Enviado!!!" y resetear el formulario
* Estructurtura:
* - Constantes
* - Funciones 
* - Eventos */
const contactForm = document.querySelector(`.Comment-form`)
//Funcion que captura el evento submit, envia un alert y resetea el formulario

    const envioComentario = () => {
        contactForm.addEventListener(`submit`, (event) => {
            event.preventDefault()
            alert("Gracias por tu comentario!!!")
            contactForm.reset()
            return 
        })
    }
    envioComentario()


   
