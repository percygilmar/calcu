function calcularIMC() {
    var peso_lb = parseFloat(document.getElementById('peso_lb').value);
    var altura_pulgadas = parseFloat(document.getElementById('altura_pulgadas').value);
    
    var altura_metros = altura_pulgadas * 0.0254; 
    
    var imc = peso_lb / (altura_metros * altura_metros);
    
    var clasificacion = "";
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Normal";
    } else if (imc < 30) {
        clasificacion = "Exceso de peso";
    } else {
        clasificacion = "Obeso";
    }
    
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Su valor de IMC es " + imc.toFixed(1) + ", lo que le clasifica como " + clasificacion;
}
function calcularEdadMascotaFormula() {
    var edad_mascota = parseFloat(document.getElementById('edad_mascota').value);
    var edad_humana = 0;

    if (edad_mascota <= 2) {
        edad_humana = edad_mascota * 10.5;
    } else {
        edad_humana = 2 * 10.5 + (edad_mascota - 2) * 4;
    }
    
    var resultadoDiv = document.getElementById('resultadoEdadMascota');
    resultadoDiv.innerHTML = "La edad humana equivalente de tu mascota es aproximadamente " + edad_humana + " años.";
}
function calcularEdadMascotaSieteAnios() {
    var edad_mascota = parseFloat(document.getElementById('edad_mascota').value);
    var edad_humana = edad_mascota * 7;
    
    var resultadoDiv = document.getElementById('resultadoEdadMascota');
    resultadoDiv.innerHTML = "La edad humana equivalente de tu mascota es aproximadamente " + edad_humana + " años.";
}

