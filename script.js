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
Murder.onclick = function () {L.circle([40.864987, -73.892697], {radius:500}).addTo(mymap)};
//               const marker = L.marker([40.78154477134981, -73.96579497822658]).addTo(mymap);
//               const circle=L.circle([40.78154477134981, -73.96579497822658], {
// radius:500}).addTo(mymap)

              // 40.864987, -73.892697