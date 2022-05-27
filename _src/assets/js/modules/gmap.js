import loadGoogleMapsApi from 'load-google-maps-api';

function init() {
  initMap();
}

function initMap() {
  const $map = document.getElementById('p-topAccess__gMap');

  if (!$map) {
    return;
  }

  const lang = $map.getAttribute('data-lang');
  const APIKEY = 'AIzaSyCz9LLui03aArzWnKKmXqdrier9LnzP-z8';
  const options = {
    zoom: 17,
    center: { lat: 35.710263, lng: 139.778316, },
  };

  loadGoogleMapsApi({ key: APIKEY, language: lang, }).then((googleMaps => {
    /* eslint-disable no-unused-vars */
    const map = new googleMaps.Map($map, options);
    const latlng = new googleMaps.LatLng(options.center.lat, options.center.lng);
    const marker = new googleMaps.Marker({
      position: latlng,
      map,
      icon: {
        url: '/ueno/assets/images/access/access_pin.png',
        scaledSize: new googleMaps.Size(100, 106),
        origin: new googleMaps.Point(0, 0),
      },
    });
    /* eslint-enable no-unused-vars */
  }));
}

module.exports = {
  init,
};
