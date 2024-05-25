function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (isNaN(celsius)) {
        alert("Por favor, insira um número válido");
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    let result = '';

    switch (true) {
        case !isNaN(fahrenheit):
            result += `<p>${celsius} °C = ${fahrenheit.toFixed(2)} °F</p>`;
            break;
        default:
            result += `<p>Erro ao converter para Fahrenheit</p>`;
    }

    switch (true) {
        case !isNaN(kelvin):
            result += `<p>${celsius} °C = ${kelvin.toFixed(2)} K</p>`;
            break;
        default:
            result += `<p>Erro ao converter para Kelvin</p>`;
    }

    document.getElementById('results').innerHTML = result;
}
