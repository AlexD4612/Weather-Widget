// Setup Variables
const APIKEY = "b18c85b57ec882a0c44e9d86cf66be28";
const units = "Imperial";
let city = "";

const bodySelect = document.querySelector('body');
if (bodySelect.classList.contains("pageOne")) {
    city = "Spokane"
} else if (bodySelect.classList.contains("pageTwo")) {
    city = "Phoenix"
}


const date = new Date();
document.querySelector('#date').textContent = date.toDateString();


//Query String
let queryString = `https://api.openweathermap.org/data/2.5/weather?&appid=${APIKEY}&q=${city}&units=${units}`;
console.log(queryString);



function newCity() {
    fetch(queryString)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let city = document.querySelector('#city');
            const description = document.querySelector('#description');
            const temp = document.querySelector('#temp');
            const feels = document.querySelector('#feels');
            const icon = document.querySelector('img.icon');
            const country = document.querySelector('#country');

            city.textContent = data.name + ",";
            temp.textContent = Math.floor(data.main.temp) + "℉";
            feels.textContent = "Feels like " + Math.floor(data.main.feels_like) + "℉";
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            country.textContent = data.sys.country;
            description.textContent = toTitleCase(data.weather[0].description);
        });
}

newCity();


//from stackoverflow    
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


function submitMe(id) {
    city = document.getElementById(id).value;
    queryString = `https://api.openweathermap.org/data/2.5/weather?&appid=${APIKEY}&q=${city}&units=${units}`;
    newCity();
    var form = document.getElementById("id");
    form.value = " ";
}