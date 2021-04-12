async function setPic(weather) {
    let cont = document.getElementById('containerok')
    switch (weather) {
        case '01':
            cont.style.backgroundImage = "url('pictures/sunny.jpg')";
            break;
        case '02':
            cont.style.backgroundImage = "url('pictures/foggy.jpg')";
            break;
        case '03':
            cont.style.backgroundImage = "url('pictures/foggy.jpg')";
            break;
        case '04':
            cont.style.backgroundImage = "url('pictures/foggy.jpg')";
            break;
        case '09':
            cont.style.backgroundImage = "url('pictures/rainy.jpg')";
            break;
        case '10':
            cont.style.backgroundImage = "url('pictures/rainy.jpg')";
            break;
        case '11':
            cont.style.backgroundImage = "url('pictures/storm.jpg')";
            break;
        case '13':
            cont.style.backgroundImage = "url('pictures/snowy.jpg')";
            break;
        default:
            cont.style.backgroundImage = "url('pictures/sunny.jpg')";
            break;
    }
}

async function getCityInfo(city) {
    const content = document.getElementById("content")
    let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city.toString().toLowerCase()}&lang=ru&units=metric&appid=2e2705844f870f8720a2d2440fae435b`);
    let forecast = new URL(`https://api.openweathermap.org/data/2.5/forecast?q=${city.toString().toLowerCase()}&lang=ru&units=metric&appid=2e2705844f870f8720a2d2440fae435b`)
    let pr = fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let now = new Date();
            document.getElementById("city").textContent = data.name + " " + (now.getHours().toString() > 10 ? (now.getHours().toString()) : ("0" + now.getHours().toString())) + ":" + (now.getMinutes().toString() > 10 ? (now.getMinutes().toString()) : ("0" + now.getMinutes().toString())) + " (МСК)";
            document.getElementById("cel").textContent = Math.round(data.main.temp) >= 0 ? "+" + Math.round(data.main.temp).toString() + " " + cap(data.weather[0].description) : "-" + Math.round(data.main.temp).toString() + " " + cap(data.weather[0].description);
            document.getElementById("second").textContent = `Облачность: ${data.clouds.all}%, Влажность: ${data.main.humidity}%, Скорость ветра: ${data.wind.speed} м/сек`;
            document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            setPic(data.weather[0].icon.substring(0, 2));
            fetch(forecast)
                .then((forecast_data) => {
                    return forecast_data.json();
                })
                .then((forecast_data) => {
                    for (let i = 1; i < 5; i++) {
                        document.getElementById((i).toString()).children[0].textContent = forecast_data.list[i].dt_txt;
                        document.getElementById((i).toString()).children[1].children[0].textContent = Math.round(forecast_data.list[i].main.temp) >= 0 ? "+" + Math.round(forecast_data.list[i].main.temp).toString() + " " + cap(forecast_data.list[i].weather[0].description) : "-" + Math.round(forecast_data.list[i].main.temp).toString() + " " + cap(forecast_data.list[i].weather[0].description);
                        document.getElementById((i).toString()).children[2].src = `https://openweathermap.org/img/wn/${forecast_data.list[i].weather[0].icon}@2x.png`;
                    }

                })
        })
        .catch(() => {
            alert('Город не найден, повторите ввод!');
        })
}


function cap(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const search = document.getElementById("bar");
search.addEventListener("keydown", async function(event) {
    if (event.key == "Enter" && !search.value.toLowerCase().includes("поиск")) {
        event.preventDefault();
        await getCityInfo(search.value);
    }
}, true);

document.addEventListener('DOMContentLoaded', async function() {
    await getCityInfo("Moscow");
});