/* global axios, google, CryptoJS */

// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions


let gmaps_apikey = "";
axios.get("/gmaps").then(function (res) {


  gmaps_apikey = decrypt(res.data);
  var script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${gmaps_apikey}&callback=initMap`;
  script.async = true;

  // Attach your callback function to the `window` object
  window.initMap = function () {
    // JS API is loaded and available
    // Create the script tag, set the appropriate attributes
    // The latitude and longitude to center the map (always required)
    var myLatlng = new google.maps.LatLng(37.5967007, -77.5162545);

    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 10,
      disableDefaultUI: false,
      scrollwheel: true,
      center: myLatlng,

      // How you would like to style the map.
      // styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
    };

    // Get the HTML DOM element that will contain your map
    var mapElement = document.getElementById("map");

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var infowindow = new google.maps.InfoWindow({
      content:
        "<span>The Kittrell Company</span>" +
        "<br/>" +
        "<span>6327 Mallory Drive</span>" +
        "<br/>" +
        "<span>Richmond, Virginia - 23226</span>" +
        "<br/>" +
        "<span><strong>Phone:</strong>804-285-7869</span>" +
        "<br/>" +
        "<span><strong>Email:</strong><a href='mailto:thekittrellcompany@gmail.com'>thekittrellcompany@gmail.com</a></span>",
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "The Kittrell Company",
    });
    infowindow.open(map, marker);

    // Blunts Bridge Estates
    var bluntsBridgeEl = document.getElementById("map-blunts-bridge");
    if (bluntsBridgeEl) {
      var bluntsBridgeLatLng = new google.maps.LatLng(37.811375, -77.511655);
      var bluntsBridgeMap = new google.maps.Map(bluntsBridgeEl, {
        zoom: 15,
        center: bluntsBridgeLatLng,
        disableDefaultUI: false,
        scrollwheel: true,
      });
      var bluntsBridgeMarker = new google.maps.Marker({
        position: bluntsBridgeLatLng,
        map: bluntsBridgeMap,
        title: "Blunts Bridge Estates",
      });
      var bluntsBridgeInfo = new google.maps.InfoWindow({
        content: "<strong>Blunts Bridge Estates</strong>",
      });
      bluntsBridgeInfo.open(bluntsBridgeMap, bluntsBridgeMarker);
    }

    // Belmont Green
    var belmontGreenEl = document.getElementById("map-belmont-green");
    if (belmontGreenEl) {
      var belmontGreenLatLng = new google.maps.LatLng(37.6162017, -77.4647401);
      var belmontGreenMap = new google.maps.Map(belmontGreenEl, {
        zoom: 15,
        center: belmontGreenLatLng,
        disableDefaultUI: false,
        scrollwheel: true,
      });
      var belmontGreenMarker = new google.maps.Marker({
        position: belmontGreenLatLng,
        map: belmontGreenMap,
        title: "Belmont Green",
      });
      var belmontGreenInfo = new google.maps.InfoWindow({
        content: "<strong>Belmont Green</strong>",
      });
      belmontGreenInfo.open(belmontGreenMap, belmontGreenMarker);
    }
  };


  // Append the 'script' element to 'head'
  document.head.appendChild(script);

});

function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}
