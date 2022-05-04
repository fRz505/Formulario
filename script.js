
    const enviar = document.getElementById('boton')
    const usuario = document.getElementById('nombre')
    const contraseña = document.getElementById('password')
    const email = document.getElementById('email')
    inicio_v()
    function inicio_v() {
        document.addEventListener('DOMContentLoaded', inicio)
    }

    function inicio() {
        enviar.disabled = true;
        console.log('Cargando');
        usuario.addEventListener('blur',validacion )
        contraseña.addEventListener('blur',validacion )
        email.addEventListener('blur',validacion)

    }

    function validacion(e) {
        if (e.target.value.lenght > 3) {
            console.log('Informacion valida');
        } else {
           
        }
    }