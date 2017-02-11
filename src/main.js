import Vue from 'vue';
import App from './components/app.vue';

import 'material-design-lite';

var vm = new Vue({
    el: 'body', // attach the app to <body>
    render: function (createElement) {
        return createElement(App)
    }
});