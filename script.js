var rest_api = "https://restcountries.com/v3.1/all";

async function api() {
  var url = fetch(rest_api);
  var out = await (await url).json();
  // console.log(out[0]);
  var parent = document.querySelector(".row");
  for (let i of out) {
    try {
      // console.log(i);
      var data_cont = document.createElement("div");
      data_cont.classList.add("card");

      //latlng
      var lat = i.latlng[0];
      var lng = i.latlng[1];
      data_cont.setAttribute("lat", lat);
      data_cont.setAttribute("lng", lng);

      //Name
      var country_name = document.createElement("h3");
      country_name.innerText = i.name.common;
      data_cont.append(country_name);

      //Flag
      var country_flag = document.createElement("img");
      country_flag.setAttribute("src", i.flags.png);
      data_cont.append(country_flag);

      //Capital
      var country_capital = document.createElement("p");
      country_capital.innerText = "Capital : " + i.capital[0];
      data_cont.append(country_capital);
      // console.log(i.capital[0]);

      //Region
      var country_region = document.createElement("p");
      country_region.innerText = "Region : " + i.region;
      data_cont.append(country_region);

      //Country codes
      var country_code = document.createElement("p");
      country_code.innerText = "Contry Code : " + i.cca3;
      data_cont.append(country_code);

      //Click Button
      var click_btn = document.createElement("button");
      click_btn.setAttribute("onclick", "clicking(this)");
      click_btn.innerHTML = "Click for Weather";
      data_cont.append(click_btn);
      // console.log(click_btn);

      parent.append(data_cont);
    } catch (err) {
      // console.log(err);
    }
  }
}
api();

async function clicking(e) {
  var parent = e.parentElement;
  // console.log(e.parentElement);
  var lat = parent.getAttribute("lat");
  var lon = parent.getAttribute("lng");
  var api_key = "3b6a0392c11fd031d1e07e7957232d58";
  var weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  var weather_url = fetch(weather_api);
  var out1 = await (await weather_url).json();
  console.log(out1);
  var result = document.querySelector("body div.container");
  result.innerHTML = "";
  var data_ele = document.createElement("h1");
  data_ele.classList.add("cName");
  var data_ele1 = document.createElement("p");
  data_ele.classList.add("cWeather");
  // console.log(data_ele.innerText);
  data_ele.innerText = JSON.stringify(out1.sys.country);
  data_ele1.innerText = JSON.stringify(out1.weather);
  result.append(data_ele);
  result.append(data_ele1);
}
