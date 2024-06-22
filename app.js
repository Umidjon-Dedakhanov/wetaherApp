fetch("https://api.weatherapi.com/v1/current.json?key=bcef58108fec4111a83150508242002&q=tashkent&aqi=yes")
    .then(res => res.json())
    .then(data => weatherApp(data))
    .catch(err => console.log(err))

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await fetch(`https://api.weatherapi.com/v1/current.json?key=bcef58108fec4111a83150508242002&q=${inp.value == "" ? "tashkent" : `${inp.value}`}&aqi=yes`)
    .then(res => res.json())
    .then(data => weatherApp(data))
    .catch(err => console.log(err))
    inp.value = "";
})

function weatherApp(data){
    console.log(data);

    country.innerText = `${data.location.country}, ${data.location.name}`
    temp.innerText = data.current.temp_c + " ℃";

    icon.setAttribute("src", `${data.current.condition.icon}`)

    wind.innerText = data.current.wind_mph + " mph";
    pressure.innerText = data.current.pressure_mb + " mb";
    humidity.innerText = data.current.humidity + " %"
    visibility.innerText = data.current.vis_km + " km"
}