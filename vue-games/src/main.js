import { createApp } from 'vue';
import App from './App.vue'; 
import router from './router';
import BaseVue from './components/BaseVue.vue'; 
const app = createApp(App);

app.component('BaseVue', BaseVue);

app.use(router);
app.mount('#app'); 