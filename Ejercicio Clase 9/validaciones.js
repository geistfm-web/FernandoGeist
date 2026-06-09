// =========================
// CAMPOS
// =========================

const nombre = document.getElementById("nombreCompleto");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repetirPassword = document.getElementById("repetirPassword");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const ciudad = document.getElementById("ciudad");
const codigoPostal = document.getElementById("codigoPostal");
const dni = document.getElementById("dni");

const formulario = document.getElementById("formSuscripcion");

// =========================
// MOSTRAR ERROR
// =========================

function mostrarError(id, mensaje)
{
    document.getElementById(id).textContent = mensaje;
}

// =========================
// LIMPIAR ERROR
// =========================

function limpiarError(id)
{
    document.getElementById(id).textContent = "";
}

// =========================
// VALIDAR NOMBRE
// =========================

function validarNombre()
{
    let valor = nombre.value.trim();

    if(valor.length <= 6)
    {
        mostrarError("error-nombreCompleto",
        "Debe tener más de 6 caracteres");
        return false;
    }

    if(!valor.includes(" "))
    {
        mostrarError("error-nombreCompleto",
        "Debe contener nombre y apellido");
        return false;
    }

    limpiarError("error-nombreCompleto");
    return true;
}

// =========================
// VALIDAR EMAIL
// =========================

function validarEmail()
{
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email.value))
    {
        mostrarError("error-email",
        "Email inválido");
        return false;
    }

    limpiarError("error-email");
    return true;
}

// =========================
// VALIDAR PASSWORD
// =========================

function validarPassword()
{
    let regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if(!regex.test(password.value))
    {
        mostrarError("error-password",
        "Mínimo 8 caracteres con letras y números");
        return false;
    }

    limpiarError("error-password");
    return true;
}

// =========================
// VALIDAR REPETIR PASSWORD
// =========================

function validarRepetirPassword()
{
    if(password.value !== repetirPassword.value)
    {
        mostrarError("error-repetirPassword",
        "Las contraseñas no coinciden");
        return false;
    }

    limpiarError("error-repetirPassword");
    return true;
}

// =========================
// VALIDAR EDAD
// =========================

function validarEdad()
{
    let valor = parseInt(edad.value);

    if(isNaN(valor) || valor < 18)
    {
        mostrarError("error-edad",
        "Debe ser mayor o igual a 18");
        return false;
    }

    limpiarError("error-edad");
    return true;
}

// =========================
// VALIDAR TELEFONO
// =========================

function validarTelefono()
{
    let regex = /^[0-9]{7,}$/;

    if(!regex.test(telefono.value))
    {
        mostrarError("error-telefono",
        "Debe contener al menos 7 dígitos");
        return false;
    }

    limpiarError("error-telefono");
    return true;
}

// =========================
// VALIDAR DIRECCION
// =========================

function validarDireccion()
{
    let valor = direccion.value.trim();

    if(valor.length < 5)
    {
        mostrarError("error-direccion",
        "Dirección inválida");
        return false;
    }

    if(!valor.includes(" "))
    {
        mostrarError("error-direccion",
        "Debe contener letras, números y un espacio");
        return false;
    }

    limpiarError("error-direccion");
    return true;
}

// =========================
// VALIDAR CIUDAD
// =========================

function validarCiudad()
{
    if(ciudad.value.trim().length < 3)
    {
        mostrarError("error-ciudad",
        "Debe tener al menos 3 caracteres");
        return false;
    }

    limpiarError("error-ciudad");
    return true;
}

// =========================
// VALIDAR CODIGO POSTAL
// =========================

function validarCodigoPostal()
{
    if(codigoPostal.value.trim().length < 3)
    {
        mostrarError("error-codigoPostal",
        "Debe tener al menos 3 caracteres");
        return false;
    }

    limpiarError("error-codigoPostal");
    return true;
}

// =========================
// VALIDAR DNI
// =========================

function validarDni()
{
    let regex = /^[0-9]{7,8}$/;

    if(!regex.test(dni.value))
    {
        mostrarError("error-dni",
        "Debe tener 7 u 8 dígitos");
        return false;
    }

    limpiarError("error-dni");
    return true;
}

// =========================
// EVENTOS BLUR
// =========================

nombre.addEventListener("blur", validarNombre);
email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);
repetirPassword.addEventListener("blur", validarRepetirPassword);
edad.addEventListener("blur", validarEdad);
telefono.addEventListener("blur", validarTelefono);
direccion.addEventListener("blur", validarDireccion);
ciudad.addEventListener("blur", validarCiudad);
codigoPostal.addEventListener("blur", validarCodigoPostal);
dni.addEventListener("blur", validarDni);

// =========================
// EVENTOS FOCUS
// =========================

nombre.addEventListener("focus", () => limpiarError("error-nombreCompleto"));
email.addEventListener("focus", () => limpiarError("error-email"));
password.addEventListener("focus", () => limpiarError("error-password"));
repetirPassword.addEventListener("focus", () => limpiarError("error-repetirPassword"));
edad.addEventListener("focus", () => limpiarError("error-edad"));
telefono.addEventListener("focus", () => limpiarError("error-telefono"));
direccion.addEventListener("focus", () => limpiarError("error-direccion"));
ciudad.addEventListener("focus", () => limpiarError("error-ciudad"));
codigoPostal.addEventListener("focus", () => limpiarError("error-codigoPostal"));
dni.addEventListener("focus", () => limpiarError("error-dni"));

// =========================
// BONUS HOLA NOMBRE
// =========================

const titulo = document.querySelector(".titulo-seccion");

nombre.addEventListener("input", function()
{
    if(nombre.value.trim() === "")
    {
        titulo.textContent = "SUSCRIPCIÓN AL DIARIO";
    }
    else
    {
        titulo.textContent =
        "HOLA " + nombre.value.toUpperCase();
    }
});

// =========================
// BOTON ENVIAR
// =========================

formulario.addEventListener("submit", function(e)
{
    e.preventDefault();

    let valido =
        validarNombre() &&
        validarEmail() &&
        validarPassword() &&
        validarRepetirPassword() &&
        validarEdad() &&
        validarTelefono() &&
        validarDireccion() &&
        validarCiudad() &&
        validarCodigoPostal() &&
        validarDni();

    if(valido)
    {
        alert(
        "Formulario enviado correctamente\n\n" +
        "Nombre: " + nombre.value + "\n" +
        "Email: " + email.value + "\n" +
        "Edad: " + edad.value + "\n" +
        "Teléfono: " + telefono.value + "\n" +
        "Dirección: " + direccion.value + "\n" +
        "Ciudad: " + ciudad.value + "\n" +
        "Código Postal: " + codigoPostal.value + "\n" +
        "DNI: " + dni.value
        );
    }
    else
    {
        alert("Existen errores en el formulario.");
    }
});