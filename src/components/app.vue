<template>
  <div>
    <h2>{{title}}</h2>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  Button
</button>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
  <i class="material-icons">add</i>
</button>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
  <i class="material-icons">add</i>
</button>
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
    }
  }
</script>
<style>

</style>