const api = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "fcbb98321e257dd2bfe82725efeb394c";

const url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=imperial";

navigator.geolocation.getCurrentPosition(success, error);
getWeather();

function success(position) {
  console.log(position);
}

function error() {
  console.log("error");
}


