const API_KEY=`8695fdeb586f983fdb44d0f6557fb08c`;



const cityName=document.querySelector(`input`);


document.querySelector(`button`).addEventListener(`click`,()=>{
    getCity(cityName.value);
    cityName.value="";
})

const getCity = (cityValue) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => displayUptade(data));
  };
const displayUptade=(data)=>{
document.querySelector(`.content`).innerHTML+=`
<div class="contents" style="background-color: rgb(246, 223, 77);width:20%;height:20rem;padding-top:4rem;border-radius:6%;font-weight:900;font-size:3rem;"><div class="city">${data.name},${
   data.sys.country
 }</div>
       <div class="temp">${Math.round(data.main.temp)}°C</div>
       <img class="img" src="http://openweathermap.org/img/wn/${
         data.weather[0].icon
       }.png" />
       <div class="desc">${data.weather[0].description}</div>
       <div class="minmax">${Math.round(data.main.temp_min)}°C/${Math.round(
   data.main.temp_max
 )}°C</div></div>`;
}
