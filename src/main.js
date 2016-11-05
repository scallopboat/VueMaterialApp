import Vue from 'vue'
import App from './App.vue'

//import 'materialize-css/node_modules/jquery/dist/jquery.min.js'
//import 'materialize-css'

//import 'materialize-css/dist/css/materialize.min.css'
//import './assets/app.css'

// 1. Require the module 
import VueMaterialComponents from 'vue-material-components'
  
// 2. Require the Materialize CSS (or import it in your HTML) 
import 'vue-material-components/assets/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueMaterialComponents)

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
    
    // Use Vue material lib
    
    
    // Start app
    new Vue({
      el: '#app',
      render: h => h(App)
    })
  }
}


appInit.start()