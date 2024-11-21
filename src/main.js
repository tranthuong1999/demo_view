import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import TestPage from "../src/components/TestPage.vue";
import TodoList from "../src/components/TodoList.vue";
import { createPinia } from 'pinia';
import '@mdi/font/css/materialdesignicons.css';
import router from "./routers";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})
const pinia = createPinia();

const app = createApp(App);
app.use(router)
app.use(vuetify);
app.use(pinia);

app.component('TestPage', TestPage);
app.component('TodoList', TodoList);


app.mount('#app')
