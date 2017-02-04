<template>

  <div id="map-view">
    <div id="map-image"></div>
  </div>

</template>

<script>
export default {
  name: 'map-view',
  data () {
    return {
      msg: 'map-view',
      map: false
    }
  },
  mounted: function(){
    console.log('MAP IMAGE READY');
    
    //this.map = L.map('map-image').setView([51.505, -0.09], 13);
    this.map = L.map('map-image').fitWorld();
    this.map.locate({setView: true, maxZoom: 16});
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(this.map);
  }
}
</script>

<style>
  #map-image {
    height: 100vh;
  }
</style>