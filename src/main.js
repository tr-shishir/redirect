import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

createApp(App).mount('#app');

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
if( urlParams.has('location') ){
    locationFilter = urlParams.get('location');
    console.log(locationFilter);
}

