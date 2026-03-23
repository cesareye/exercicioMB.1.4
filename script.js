function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos.";
        resultadoDiv.className = "resultado alerta";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(1);
    let classificacao = "";
    let classeCSS = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        classeCSS = "alerta";
    } else if (imc < 24.9) {
        classificacao = "Peso Normal";
        classeCSS = "normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
        classeCSS = "alerta";
    } else {
        classificacao = "Obesidade";
        classeCSS = "perigo";
    }

    resultadoDiv.innerHTML = `Seu IMC: ${imc} <br> Classificação: ${classificacao}`;
    resultadoDiv.className = `resultado ${classeCSS}`;
}
