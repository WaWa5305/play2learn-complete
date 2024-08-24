import { createApp } from 'vue';
import App from './App.vue'; 
import router from './router';
const app = createApp(App);

app.component('BaseVue', BaseVue);

app.use(router);
app.mount('#app'); 