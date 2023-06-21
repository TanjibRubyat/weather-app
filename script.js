async function getWeatherData(city) {
  let city_name = document.getElementById("city").value;
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=24823c109f00d05bed470eacc9d37d58`
    );
    let data = await response.json();
    display(data);
  } catch (error) {
    console.error("FETCH ERROR:", error);
  }
}

function display(data) {
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;

  document.getElementById("temp").innerHTML = "<b>Temperature</b>" + " " +":"+" "+ temperature;
  document.getElementById("pressure").innerHTML = "<b>Pressure</b>" + " " +":"+" "+ pressure;
  document.getElementById("humid").innerHTML = "<b>Humidity</b>" + " " +":"+" "+ humidity;
}
