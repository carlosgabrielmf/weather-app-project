//declare function to geololization
function getGeolocation() {
  //async function for values
  const success = async (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    // latitude = 44.355;
    // longitude = 2.769;
    console.log(`Latitude is ${latitude}, and longitude is ${longitude}`);

    //we call the API with the key
    const API_KEY = '688feda454b3f179b097bbead2ef85e0';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    //we obtein the data from the API
    const data = await response.json();
    // console.log(data);

    //we used the values we require
    const daily = data.daily[0].weather[0].main;
    // console.log(daily);

    //we create a conditional to show in screen the values with DOM
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

  //we call the geolocation function
  navigator.geolocation.getCurrentPosition(success, error);
}
//we asigned the event to the button to collect data
document
  .querySelector('#geolocation')
  .addEventListener('click', getGeolocation);
