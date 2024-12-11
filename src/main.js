import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import TodoList from "../src/components/TodoList.vue";
import { createPinia } from 'pinia';
import '@mdi/font/css/materialdesignicons.css';
import router from "./routers";
import "../src/styles/index.css"
import MenuComponent from "./components/MenuComponent.vue";
import breakpointsPlugin from "./plugins/breakpoints";
import CoursePopularComponent from "./components/CoursePopularComponent.vue";
import CourseReferenceComponent from "./components/CouseReferenceComponent.vue";
import DialogComponent from "./components/DialogComponent.vue";

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
app.use(breakpointsPlugin);
app.component('MenuComponent', MenuComponent);
app.component('CoursePopularComponent', CoursePopularComponent);
app.component('CourseReferenceComponent', CourseReferenceComponent);
app.component('DialogComponent', DialogComponent);

app.mount('#app')
