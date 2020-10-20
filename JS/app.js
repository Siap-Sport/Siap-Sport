
// let textSend = document.getElementById('imprimirTexto');
let numeroRandom = Math.floor(Math.random() * 100);
class mensaje{
    constructor(mensaje){
        this.mensaje = mensaje;
        this.nuevo()
        this.limpiarFomulario();
    }

    limpiarFomulario  = () => {
         document.getElementById('formulario').reset()
    }

    nuevo = () => {
        let user = 'User' + numeroRandom
    let gordo = user.bold()    
    textSend.innerHTML += '<p class="imprimirTexto" id="imprimirTexto"><span class="gordo">'  + gordo + '</span> : ' + this.mensaje +  '\n </p> '
    }
}



enviarMensaje = (text) => {
      let persona = new mensaje(text)
}


 

/* module.exports = {
}
 */
 
/* CHAT EN VIVO */
//index.js














/* Coneccion */
// let socket = io();
