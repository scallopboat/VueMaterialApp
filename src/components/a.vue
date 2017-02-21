<template>
  <div>
    <h2>{{title}}</h2>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }}
        <br>
        <button :disabled="!p.inventory" @click="addToCart(p)">
        Add to cart
      </button>
      </li>
    </ul>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'app',
    components: {

    },
    data() {
      return {
        title: 'a'
      }
    },
    computed: mapGetters({
      products: 'allProducts'
    }),
    methods: mapActions([
      'addToCart'
    ]),
    created() {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>
<style>

</style>