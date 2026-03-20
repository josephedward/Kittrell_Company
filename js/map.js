/* global L */

window.addEventListener('load', function () {
  // Main office map
  var mapEl = document.getElementById('map');
  if (mapEl) {
    var officeMap = L.map('map', { scrollWheelZoom: true }).setView([37.5967007, -77.5162545], 10);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(officeMap);
    var officeMarker = L.marker([37.5967007, -77.5162545]).addTo(officeMap);
    officeMarker.bindPopup(
      '<strong>The Kittrell Company</strong><br>' +
      '6327 Mallory Drive<br>' +
      'Richmond, Virginia 23226<br>' +
      '<strong>Phone:</strong> 804-285-7869<br>' +
      '<strong>Email:</strong> <a href="mailto:thekittrellcompany@gmail.com">thekittrellcompany@gmail.com</a>'
    ).openPopup();
    officeMap.invalidateSize();
  }

  // Blunts Bridge Estates map
  var bluntsBridgeEl = document.getElementById('map-blunts-bridge');
  if (bluntsBridgeEl) {
    var bluntsBridgeMap = L.map('map-blunts-bridge', { scrollWheelZoom: true }).setView([37.811375, -77.511655], 15);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(bluntsBridgeMap);
    L.marker([37.811375, -77.511655]).addTo(bluntsBridgeMap)
      .bindPopup('<strong>Blunts Bridge Estates</strong>').openPopup();
    bluntsBridgeMap.invalidateSize();
  }

  // Belmont Green map
  var belmontGreenEl = document.getElementById('map-belmont-green');
  if (belmontGreenEl) {
    var belmontGreenMap = L.map('map-belmont-green', { scrollWheelZoom: true }).setView([37.6162017, -77.4647401], 15);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(belmontGreenMap);
    L.marker([37.6162017, -77.4647401]).addTo(belmontGreenMap)
      .bindPopup('<strong>Belmont Green</strong>').openPopup();
    belmontGreenMap.invalidateSize();
  }
});
