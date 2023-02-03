function converter1() {
  var valorCelParaFare = document.getElementById("CelsiusParaFahrenheit");
  var CelsiusParaFahrenheit = valorCelParaFare.value;
  var Celsius = parseInt(CelsiusParaFahrenheit);

  var valorConverterCelParaFare = Celsius * 1.8 + 32;

  var ResultadoValorConvertidoCPF = document.getElementById("valorConvertido");
  var valorConvertido =
    "Celsius para Fahrenheit é " + valorConverterCelParaFare;
  ResultadoValorConvertidoCPF.innerHTML = valorConvertido;
}

function converter2() {
  var valorFareParaCel = document.getElementById("FahrenheitParaCelsius");
  var FahrenheitParaCelsius = valorFareParaCel.value;
  var Fahrenheit = parseInt(FahrenheitParaCelsius);

  var valorConverterFareParaCel = (Fahrenheit - 32) / 1.8;
  var ResultadoValorConvertidoFPC = document.getElementById("valorConvertido");
  var valorConvertido =
    "Fahrenheit para Celsius é " + valorConverterFareParaCel;
  ResultadoValorConvertidoFPC.innerHTML = valorConvertido;
}

function converter3() {
  var valorKelParaCel = document.getElementById("KelvinParaCelsius");
  var KelvinParaCelsius = valorKelParaCel.value;
  var Kelvin = parseFloat(KelvinParaCelsius);

  var valorConverterKelParaCel = Kelvin - 273;
  var ResultadoValorConvertidoKPC = document.getElementById("valorConvertido");
  var valorConvertido = "Kelvin para Celsius é " + valorConverterKelParaCel;
  ResultadoValorConvertidoKPC.innerHTML = valorConvertido;
}
