<template>
  <div id="app">
    
    <!-- Header -->
    <nav>
      <div class="nav-wrapper red">
        <a href="#" class="brand-logo left">{{title}}</a>
        <ul id="nav-mobile" class="menu-icons right">
          <li><i class="large material-icons">search</i></li>
          <li><a class='dropdown-button' href='#' data-activates='dropdown1'><i class="large material-icons">sort</i></a></li>
        </ul>
      </div>
    </nav>
    <!-- Header -->
    
    <!-- Dropdown Structure -->
    <ul id='dropdown1' class='dropdown-content'>
      <li><a class="red-text" href="#!">Favorites</a></li>
      <li><a class="red-text" href="#!">Recent Visits</a></li>
      <li><a class="red-text" href="#!">Distance</a></li>
    </ul>
    <!-- Dropdown Structure -->
    
    <!-- Views -->
    <settings v-if="view == 'settings'"></settings>
    <groups v-if="view == 'groups'"></groups>
    <locations v-if="view == 'locations'"></locations>
    <map-view v-if="view == 'map-view'"></map-view>
    <!-- Views -->

    <!-- FAB button toolbar -->
    <div class="fixed-action-btn toolbar">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">menu</i>
      </a>
      <ul>
        <li class="waves-effect waves-light"><a v-on:click="view = 'settings'"><i class="material-icons">settings</i><span>Settings</span></a></li>
        <li class="waves-effect waves-light"><a v-on:click="view = 'groups'"><i class="material-icons">group</i><span>Groups</span></a></li>
        <li class="waves-effect waves-light"><a v-on:click="view = 'locations'"><i class="material-icons">store</i><span>Places</span></a></li>
        <li class="waves-effect waves-light"><a v-on:click="view = 'map-view'"><i class="material-icons">map</i><span>Map</span></a></li>
        <!--<li class="waves-effect waves-light"><a href="#!"><i class="material-icons">map</i><span>Map</span></a></li>-->
      </ul>
    </div>
    <!-- FAB button toolbar -->

  </div>
</template>

<script>
var Settings = require('./settings.vue');
var Locations = require('./locations.vue');
var Groups = require('./groups.vue');
var MapView = require('./map.vue');

export default {
  name: 'app',
  components: {
    Settings,
    Locations,
    Groups,
    MapView
  },
  data () {
    return {
      title: 'AppTitle',
      view: 'locations'
    }
  },
  methods: {
    openModal : function(){
      
    }
  }
}
</script>

<style>

  .menu-icons > li {
    padding-right: 10px;
  }

</style>