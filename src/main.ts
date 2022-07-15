import { createApp } from 'vue';
import './index.css';
import routers from './router.ts';
import App from './App.vue';

const app = createApp(App)

app.use(routers);
app.mount("#app")
