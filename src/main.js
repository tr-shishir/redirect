import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

createApp(App).mount('#app');


if( urlParams.has('location') ){
    locationFilter = urlParams.get('location');
    console.log(locationFilter);
}

