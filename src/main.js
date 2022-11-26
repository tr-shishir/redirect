import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
if( urlParams.has('location') ){
    locationFilter = urlParams.get('location');
    console.log(locationFilter);
}

createApp(App).mount('#app');



