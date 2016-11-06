var Vue = require('vue');
var App = require('./App.vue');

// I don't know if webpack was the issue here or not... But importing jquery in vue was a pain..
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js'); 
require('materialize-css');

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
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    console.log("document ready!");
    $('.modal').modal();
  });
    new Vue({
      el: '#app',
      render: h => h(App)
    })
  }
}


appInit.start()