class TemperatureConverter {
  public static CelsiusToFahrenheit(celsiusTemperature: number) {
    return (celsiusTemperature * 9) / 5 + 32;
  }

  public static FahrenheitToCelsius(fahrenheitTemperature: number) {
    return ((fahrenheitTemperature - 32) * 5) / 9;
  }
}

let fahrenheit = 100;
let celsius = TemperatureConverter.FahrenheitToCelsius(fahrenheit);
fahrenheit = TemperatureConverter.CelsiusToFahrenheit(celsius);


