import 'babel-polyfill'

import Vue   from 'vue';
import App   from './components/app.vue';

import store from './store'

import 'material-design-lite';

var vm = new Vue({
    el: 'body', // attach the app to <body>
    store,
    render: function (createElement) {
        return createElement(App)
    }
});