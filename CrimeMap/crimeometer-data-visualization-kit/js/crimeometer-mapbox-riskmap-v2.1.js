
// var map;

// function initMap() {

//     //Load parameters
//     var script_tag = document.getElementById('crimeometer-mapbox-riskmap-v2');
//     const data_tk = script_tag.getAttribute("data-tk");

//     //Map settings
//     const origin_lat =  40.79178257140376;
//     const origin_lng = -74.00110273834993;
//     const data_zoom = script_tag.getAttribute("data-zoom");
//     const zoom = parseInt(data_zoom);
//     const data_distance = script_tag.getAttribute("data-distance");
//     const data_datetime_ini = script_tag.getAttribute("data-datetime-ini");
//     const data_datetime_end = script_tag.getAttribute("data-datetime-end");
//     const data_max_incidents = script_tag.getAttribute("data-max-incidents");

//     mapboxgl.accessToken = api_mapbox_accessToken;

//     map = new mapboxgl.Map({
//         container: 'crime-map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         zoom: zoom,
//         center: [origin_lng, origin_lat],
//         transformRequest: (resourceType,url) => {
//             if (resourceType === 'Source' && url.startsWith('https://tiles.crimeometer.com')) {
//                 return {
//                     url: url,
//                     headers: { 'Access-Control-Allow-Origin': '*' }
//                 }
//             }
//           }
//     });

//     const custom_control = {
//         onAdd: () => {
//             var source = window.location.hostname;
//             if (window.location.hostname == '' || window.location.hostname == null){
//                 source = window.location.href;
//              }
//              var url_logo = 'https://crimeometer.com/?utm_medium=embeddablemap&utm_source='+source;

//             const logoControlDiv = document.createElement('div');
//             logoControlDiv.style.padding = '10px';
//             var logo = document.createElement('img');
//             logo.src = 'crimeometer-data-visualization-kit/static/crimeometer_logo.png';
//             logo.style.cursor = 'pointer';
//             logoControlDiv.appendChild(logo);

//             logoControlDiv.addEventListener('click', function() {
//                 window.open(url_logo, '_blank');
//             });
            
//             return logoControlDiv;
//         },
//         getDefaultPosition: () => {
//             return 'top-right'
//         },
//     };
//     map.addControl(custom_control); 

//     const custom_control2 = {
//         onAdd: () => {

//             const graphicControlDiv = document.createElement('div');
//             //graphicControlDiv.style.padding = '10px';
//             var graphic = document.createElement('img');
//             graphic.src = 'crimeometer-data-visualization-kit/static/risk_graphic.png';
//             graphicControlDiv.appendChild(graphic);
            
//             graphicControlDiv.appendChild(graphic);
            
//             return graphicControlDiv;
//         },
//         getDefaultPosition: () => {
//             return 'bottom-right'
//         },
//     };
//     map.addControl(custom_control2);

//     // Add zoom and rotation controls to the map.
//     map.addControl(new mapboxgl.NavigationControl(),'bottom-right');


//     if (x_api_key != '' && x_api_key != '{YOUR API KEY}'){

//         // JSON Payload to call crimeometer-handler-v1
//         const payload = {
//             "method": "crimeometer_google_maps_markers",
//             "lat": 40.79178257140376,
//             "lon":  -74.00110273834993,
//             "distance": "15mi",
//             "datetime_ini": data_datetime_ini,
//             "datetime_end": data_datetime_end,
//             "max_incidents":"500"
//         }

//         // crimeometer-handler-v1 URL
//         const url = 'https://api.crimeometer.com/v2/handler/level1';
        
//         var request = new XMLHttpRequest();
//         var array_features = [];

//         request.onreadystatechange=function(){

//             if (request.readyState==4 && request.status==200){
                
//                 let res = JSON.parse(request.responseText);
//                 result_data = res['incidents'];
            
//                 //Create data.
                
//                 for (var i = 0; i < result_data.length; i++) {
//                     var item = {
//                         type: 'Feature',
//                         geometry: {
//                             type: 'Point',
//                             coordinates: [result_data[i].lon, result_data[i].lat],
//                         },
//                         properties: {
//                             description: result_data[i].offense,
//                             icon_url: icons[result_data[i].offense].icon,
//                             iconSize: [30,42]
//                         }
//                     }
//                     array_features.push(item)
            
//                 }

//                 //console.log(array_features);
//                 let geojson = {
//                     type: 'FeatureCollection',
//                     features: array_features
//                 }
//                 //console.log(geojson.features);

//                 drawMarkers(geojson);
//             }
//         }

//         request.open("POST", url);
//         request.setRequestHeader('Content-Type','aplication/json')
//         request.setRequestHeader('x-api-key',x_api_key)
//         request.send(JSON.stringify(payload));

//     }

//     if (data_tk != ''){
//         map.on('load', function() {
//             drawTiles(data_tk);
//         });
//     }

// }

// initMap();



// function drawTiles(data_tk){

//     map.addSource('my-tiles', { 
//         type: 'raster', 
//         tiles: [
//             'https://tiles.crimeometer.com/get-tile-v2?tk='+data_tk+'&z={z}&x={x}&y={y}'
//         ],
//         tileSize: 256
//     }); 

//     map.addLayer({
//         "id": 'tiles',
//         "source":'my-tiles',
//         "type" : "raster",
//         "minzoom": 1,
//         "maxzoom": 20
//     });

// }

// function drawMarkers(geojson){
//     // add markers to map
//     geojson.features.forEach(function (marker) {

//         //console.log(marker.geometry.coordinates);

//         //console.log(marker.properties.icon_url)

//         // create a DOM element for the marker
//         var el = document.createElement('div');
//         el.className = 'marker';
//         el.style.backgroundImage ='url('+marker.properties.icon_url+')';
//         el.style.width = marker.properties.iconSize[0] + 'px';
//         el.style.height = marker.properties.iconSize[1] + 'px';

//         // create the popup
//         var popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.properties.description);

//         // add marker to map
//         new mapboxgl.Marker(el)
//             .setLngLat(marker.geometry.coordinates)
//             .setPopup(popup)
//             .addTo(map);

//         //console.log("marker");
//     });

// };

