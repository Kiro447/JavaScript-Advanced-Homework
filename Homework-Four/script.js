const apiKey = "7e791cfc24aa543a2572b982c3d12022";
const apiParameters = {
    globalCity: `Skopje`,
    apiKey: `74e59f6374abe0d9b758877616ae444c`,
    apiFirstUrl: `https://api.openweathermap.org/data/2.5/onecall`,
    apiSecondUrl: `https://api.openweathermap.org/data/2.5/forecast`,
    imgUrl: ` http://openweathermap.org/img/wn/`,
  };
  


  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            return resolve(position);
          },
          (err) => {
            return reject(err);
          }
        );
      } else {
        return reject("Geolocation is not supported by this browser.");
      }
    });
  };
  
  getLocation().then((position) => {
    const { latitude, longitude } = position.coords;
    fetch(
      `${apiParameters.apiFirstUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        console.log(feels_like);
        console.log(data);
        console.log(data.timezone);
        console.log(data.hourly);
        hourlyCreator(data)
      });
  });


  function hourlyCreator (data){
    data.forEach((element)=>{
    const { feels_like, humidity, temp } = data.hourly[element];
    console.log(feels_like);
})}

  /* 
  
  <div id="timezone"><div>
  <div id="humidity">%<div>
  <div id="feelsLike"><div>
  <div id="description"><div>
  <div id="icon"><div>
  <div><div>
  
  
  
  */