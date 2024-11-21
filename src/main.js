import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import TestPage from "../src/components/TestPage.vue";
import '@mdi/font/css/materialdesignicons.css';
import router from "./routers";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

const app = createApp(App);
app.use(router)
app.use(vuetify);

app.component('TestPage', TestPage);

app.mount('#app')
