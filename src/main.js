var Vue = require('vue');
var App = require('./App.vue');

// I don't know if webpack was the issue here or not... But importing jquery in vue was a pain..
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
require('materialize-css');
require('leaflet');

require('leaflet/dist/leaflet.css');
require('materialize-css/dist/css/materialize.min.css');
require('material-design-icons/iconfont/material-icons.css');

require('./assets/app.css');

/* eslint-disable no-new */
var appInit = {

  // Application Constructor
  start() {
    this.bindEvents()
  },

  // Bind Event Listeners
  //
  // Check to see if we're running in a browser or Phonegap
  bindEvents() {

    // Init materialize modal
    $(document).ready(function () {
      console.log("document ready! Init modal");
      $('.modal').modal();

      $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
      );
    });

    if ((window.cordova || window.PhoneGap || window.phonegap) && /^file:\/{3}[^\/]/i.test(window.location.href) && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent)) {
      console.log("UA: Running in Cordova/PhoneGap");
      document.addEventListener("deviceready", this.onDeviceReady, false);
    } else {
      console.log("Running in browser");
      this.run();
    }
  },

  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'Phonegap.receivedEvent(...);'
  onDeviceReady() {
    // init the app
    appInit.run()
  },

  // Update DOM on a Received Event
  run() {

    // Start app
    new Vue({
      el: '#app',
      render: h => h(App)
    })
  }
}


appInit.start()