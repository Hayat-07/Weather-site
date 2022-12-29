const searchLocation = (a,b)=>{

  const cityName = document.getElementById('location').value;
  console.log(cityName);

//19f7297dd50adad30ab1da324aae2c51//
  const apiKey =  `19f7297dd50adad30ab1da324aae2c51`;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
   .then(res => res.json())
   .then(data => pushData(data));
   
   const shortIfo= document.getElementById('weatherInformation');
   shortIfo.innerHTML = "";
   const pushData =(x)=>{
    console.log(x);
    // console.log(x.name);
    

    
    const newDiv =document.createElement('div');
    newDiv.classList.add("newDiv");
    newDiv.innerHTML = `

     
    <h3 class=" text-3xl">${x.name}</h3><br>
    <h6  class=" text-cyan-300 font-extrabold font-serif text-7xl ">${x.main.temp} <span class=" text-lime-400 text-5xl ">&deg;C</span></h6><br>
    <h2>Pressure: ${x.main.pressure}</h2><br>
    <h2>Cloud: ${x.weather[0].description} </h2><br>
    <h2>Humidity: ${x.main.humidity}</h2><br>
    `;
    shortIfo.appendChild(newDiv);

  ////////////////// Push Weather Icon /////////////////////
    console.log(x.weather[0].icon);
    const weatherImG = document.getElementById('weatherImg');

     const pusHdata =(b)=>{
      weatherImG.innerHTML ="";

      weatherImG.innerHTML = `
      <img src="http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png" alt="">
      <br><h2 class=" text-gray-300 font-extrabold"  >${x.weather[0].description} </h2><br>
      `;
     }
     pusHdata();

   }



  



}