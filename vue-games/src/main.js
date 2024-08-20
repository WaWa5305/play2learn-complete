import { createApp } from 'vue';
import App from './App.vue'; 

import BaseVue from './components/BaseVue.vue'; 

const app = createApp(App);

app.component('BaseVue', BaseVue);

app.mount('#app'); 