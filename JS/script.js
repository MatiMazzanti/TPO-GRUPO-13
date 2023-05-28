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




//Consumo APi Provincias y localidades

const $d = document;
const $selectProvincias = $d.getElementById("selectProvincias");
const $selectMunicipios = $d.getElementById("selectMunicipios");
const $selectLocalidades = $d.getElementById("selectLocalidades");

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $options = `<option value="Elige una provincia">Elige una provincia</option>`;

        json.provincias.forEach(el => $options += `<option value="${el.nombre}">${el.nombre}</option>`);

        $selectProvincias.innerHTML = $options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        $selectProvincias.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$d.addEventListener("DOMContentLoaded", provincia)

function municipio(provincia) {
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&max=150`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $options = `<option value="Elige un municipio">Elige un municipio</option>`;

        json.municipios.forEach(el => $options += `<option value="${el.id}">${el.nombre}</option>`);

        $selectMunicipios.innerHTML = $options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        $selectMunicipios.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$selectProvincias.addEventListener("change", e => {
    municipio(e.target.value);
    console.log(e.target.value)
})

function localidad(municipio) {
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?municipio=${municipio}&max=150`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let $options = `<option value="Elige una localidad">Elige una localidad</option>`;

        json.localidades.forEach(el => $options += `<option value="${el.id}">${el.nombre}</option>`);

        $selectLocalidades.innerHTML = $options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        $selectLocalidades.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

$selectMunicipios.addEventListener("change", e => {
    localidad(e.target.value);
    console.log(e.target.value)
})