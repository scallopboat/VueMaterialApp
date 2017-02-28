<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">{{title}}</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. 
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
        </nav> -->
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/a">Go to A</router-link>
        <router-link class="mdl-navigation__link" to="/b">Go to B</router-link>
        <router-link class="mdl-navigation__link" to="/c">Go to C</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <!-- Your content goes here -->
        <router-view></router-view>
      </div>
    </main>
  </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    components: {

    },
    data() {
      return {
        title: 'test'
      }
    },
    computed: {

    },
    mounted: function () {

      // Update MDL components.
      componentHandler.upgradeDom()

      setInterval(function () {
        componentHandler.upgradeDom()
      }, 1000)
    }
  }
</script>
<style>

</style>