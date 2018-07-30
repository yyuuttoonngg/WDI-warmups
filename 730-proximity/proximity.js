console.log("proximity");
var furtherest;
var places =[];
var current;

var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}

var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]

// If your lat and long are in degrees then divide by 180/PI to convert to radians.
function distance({lat:lat1, long:long1}, {lat:lat2, long:long2}) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((long2 - long1) * p))/2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

// results.forEach(function(place){
//     var result = distance(startPoint.location,place.location);
//     var distanceMeter = (result * 1000).toFixed(2)+ "m";
//     if (result > furtherest){
//         places.push(place.name + ": " + distanceMeter);
//         furtherest=result;
//     } else {
//         places.unshift(place.name + ": " + distanceMeter);
//     }    
// });
// console.log(places);


var currentLocation = navigator.geolocation.getCurrentPosition(
    displayPosition, 
);

function displayPosition(position) {
    current = {lat:position.coords.latitude ,long:position.coords.longitude};
}

setTimeout(() => {
    results.forEach(function(place){
        var result = distance(current,place.location);
        var distanceMeter = (result * 1000).toFixed(2)+ "m";
        if (result > furtherest){
            places.push(place.name + ": " + distanceMeter);
            furtherest=result;
        } else {
            places.unshift(place.name + ": " + distanceMeter);
        }    
    });
    console.log(places)
    
}, 5000);

