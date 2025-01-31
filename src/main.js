import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

//전역변수
app.config.globalProperties.contentHtml = window.contentHtml;
app.config.globalProperties.session = window.session;
app.config.globalProperties.page = window.page;
app.config.globalProperties.CONFIG = window.CONFIG;

app.mount('.Vuejs')
