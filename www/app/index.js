function getGeolocation() {
  const success = async (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    // latitude = 44.355;
    // longitude = 2.769;
    // console.log(`Latitude is ${latitude}, and longitude is ${longitude}`);
    const API_KEY = '688feda454b3f179b097bbead2ef85e0';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    // console.log(data);

    const daily = data.daily[0].weather[0].main;
    // console.log(daily);

    const rain = document.querySelector('#rain');
    const noRain = document.querySelector('#noRain');
    if (
      daily === 'Rain' ||
      daily === 'Shower Rain' ||
      daily === 'Thunder Storm'
    ) {
      rain.style.display = 'contents';
    } else {
      noRain.style.display = 'contents';
    }
  };
  const error = (error) => {
    status.textContent = 'Wow! we not find your location.';
  };
  navigator.geolocation.getCurrentPosition(success, error);
}
document
  .querySelector('#geolocation')
  .addEventListener('click', getGeolocation);
