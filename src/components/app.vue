<template>
  <div>
    <h2>{{title}}</h2>
    <router-link to="/a">Go to A</router-link>
    <router-link to="/b">Go to B</router-link>
    <router-link to="/c">Go to C</router-link>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  Button
</button>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
  <i class="material-icons">add</i>
</button>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
  <i class="material-icons">add</i>
</button>
<router-view></router-view>
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
      
    }
  }
</script>
<style>

</style>