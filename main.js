// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create your Vue app instance
const app = createApp(App);
console.log('App created:', app);

// Use Vue Router
app.use(router);
console.log('Router used:', router);

// Mount the app
app.mount('#app');
console.log('App mounted');