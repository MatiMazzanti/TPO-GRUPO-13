// MENÚ

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new',{delay: 500});
ScrollReveal().reveal('.cards',{delay: 500});


// FOTOS

const fulimgbox = document.getElementById("fulimgbox");
fulimg = document.getElementById("fulimg");
function openImg(reference) {
    fulimgbox.style.display = "flex";
    fulimg.src = reference;
}
function closeImg() {
    fulimgbox.style.display = "none";
}


// CONTACTANOS - Formulario
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones= {
    nombre: /^[a-zA-ZÀ-ÿ\s]{6,30}$/, /* minimo 6 letras a 40 */
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/ , //correo
    telefono:/^\d{7,14}$/ //de 7 a 14 numeros
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampoNombre(expresiones.nombre, e.target, 'nombre');
            
        break;
        case "email":
            validarCampoEmail(expresiones.email, e.target, 'email');
        break;
        case "telefono":
            validarCampoTelefono(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

const validarCampoNombre = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        console.log("funciona");
        nombre.style.borderColor = "#FFFFFF";
    } else {
        nombre.style.borderColor = "#FF0F0F";
    }      
}
const validarCampoEmail = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        email.style.borderColor = "#FFFFFF";
    } else {
        email.style.borderColor = "#FF0F0F";
    }      
}
const validarCampoTelefono = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        telefono.style.borderColor = "#FFFFFF";
    } else {
        telefono.style.borderColor = "#FF0F0F";
    }      
}


//cuando se levanta la tecla o se da click esta funcion valida el formulario
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario );
    input.addEventListener('blur', validarFormulario );
});

