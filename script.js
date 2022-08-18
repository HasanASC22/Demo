var myHeaders = new Headers();
myHeaders.append("x-api-key", "I6Qzjiuye94bd7pwQcglh8Vzd5box0Ot4jItgyvg");

var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.crimeometer.com/v1/incidents/raw-data?lat=42.719296&lon=-84.424918&datetime_ini=2020-01-01 00:00:00&datetime_end=2020-12-31 00:00:00&distance=2mi&page=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  const apiKey='pk.eyJ1Ijoibmlra29zIiwiYSI6ImNsNndhaHEyNjI5Mm8zZG9kMXZ5aWd3NXMifQ.AstvVePNcQo-mv7D9JDtJw';



  const mymap = L.map('map').setView([40.78154477134981, -73.96579497822658], 13);

   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                  tileSize: 512,
                  zoomOffset: -1,
                  maxZoom: 18,
                  id:'mapbox/streets-v11',
                  accessToken:apiKey 
              }).addTo(mymap)
let Murder = document.getElementById("Murder-")
Murder.onclick = function () {{L.circle([40.864987, -73.892697], {radius:1000}).addTo(mymap)}
                              {L.circle([40.860922, -73.921504], {radius:1000}).addTo(mymap)}
                              {L.circle([40.640232, -73.944553], {radius:1000}).addTo(mymap)}
                              {L.circle([40.602896, -73.750340], {radius:1000}).addTo(mymap)}};
let Rape = document.getElementById("Rape-")
Rape.onclick = function () {{L.circle([40.770419, -73.987619], {radius:1000}).addTo(mymap)}
                            {L.circle([40.88304527621087, -73.86316365940384], {radius:1000}).addTo(mymap)}
                            {L.circle([40.754566, -73.911532], {radius:1000}).addTo(mymap)}
                            {L.circle([40.839618316041815, -73.93573878893353], {radius:1000}).addTo(mymap)}
                            {L.circle([40.85096094189201, -73.9076304735904], {radius:1000}).addTo(mymap)}
                            {L.circle([40.83456332842174, -73.87270445824812], {radius:1000}).addTo(mymap)}
                            {L.circle([40.841646599287465, -73.88073874708076], {radius:1000}).addTo(mymap)}
                            {L.circle([40.755358, -73.887225], {radius:1000}).addTo(mymap)}};

let Robbery = document.getElementById("Robbery-")
Robbery.onclick = function () {{L.circle([40.827943, -73.906993], {radius:2000}).addTo(mymap)}
                               {L.circle([40.831341, -73.863511], {radius:2000}).addTo(mymap)}
                               {L.circle([40.871798, -73.885558], {radius:2000}).addTo(mymap)}
                               {L.circle([40.811104, -73.951904], {radius:1500}).addTo(mymap)}
                               {L.circle([40.791015, -73.971093], {radius:1000}).addTo(mymap)}
                               {L.circle([40.793179, -73.946596], {radius:1000}).addTo(mymap)}
                               {L.circle([40.756076, -73.989262], {radius:1000}).addTo(mymap)}
                               {L.circle([40.720655, -73.986812], {radius:1000}).addTo(mymap)}
                               {L.circle([40.709636, -73.958255], {radius:1000}).addTo(mymap)}
                               {L.circle([40.693072, -73.988358], {radius:1000}).addTo(mymap)}
                               {L.circle([40.718284, -73.952914], {radius:800}).addTo(mymap)}
                               {L.circle([40.744347, -73.927781], {radius:2000}).addTo(mymap)}
                               {L.circle([40.749864, -73.871459], {radius:1500}).addTo(mymap)}
                               {L.circle([40.699822, -73.917585], {radius:1500}).addTo(mymap)}
                               {L.circle([40.678262, -73.912732], {radius:2000}).addTo(mymap)}
                               {L.circle([40.632268, -73.991258], {radius:2000}).addTo(mymap)}
                               {L.circle([40.595011, -73.973936], {radius:1500}).addTo(mymap)}
                               {L.circle([40.702040, -73.806030], {radius:1000}).addTo(mymap)}
                               {L.circle([40.681136, -73.853293], {radius:2500}).addTo(mymap)}
                               {L.circle([40.609239, -73.750296], {radius:500}).addTo(mymap)}
                               {L.circle([40.593077, -73.790808], {radius:500}).addTo(mymap)}
                              }
//               const marker = L.marker([40.78154477134981, -73.96579497822658]).addTo(mymap);
//               const circle=L.circle([40.78154477134981, -73.96579497822658], {
// radius:500}).addTo(mymap)

              // 40.864987, -73.892697
              // 40.860922, -73.921504
              // 40.640232, -73.944553
              // 40.602896, -73.750340
              // 40.754566, -73.911532
              // 40.755358, -73.887225
              // 40.681136, -73.853293
              // 40.609239, -73.750296