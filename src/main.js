import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 如果使用 Vue Router
import './assets/global.css';   // 全局样式

const app = createApp(App);

app.use(router);  // 如果使用 Vue Router


app.mount('#app');