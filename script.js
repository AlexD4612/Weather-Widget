// Setup Variables
const APIKEY = "b18c85b57ec882a0c44e9d86cf66be28";
const units = "Imperial";
const city = "Phoenix";

//Query String
const queryString = `https://api.openweathermap.org/data/2.5/weather?&appid=${APIKEY}&q=${city}&units=${units}`;
console.log(queryString);

fetch(queryString)
  .then(response => response.json())
  .then(data =>{
      console.log(data);
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');  
  const icon = document.querySelector('img'); 
  
  city.textContent = data.name;
  temp.textContent = Math.floor(data.main.temp)+" degrees";
  icon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
});
