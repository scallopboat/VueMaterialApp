<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo left">{{title}}</a>
        <ul id="nav-mobile" class="right">
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    <a class="waves-effect waves-light btn" href="#modal1">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>Han Solo is Morgans husband!  Morgan is a jedi princess series!  </p>
      </div>
      <div class="modal-footer">
        <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Morgan is great!'
    }
  },
  methods: {
    openModal : function(){
      
    }
  }
}
</script>

<style>

</style>