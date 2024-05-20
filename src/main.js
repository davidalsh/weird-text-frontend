import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "http://0.0.0.0:8000/";

const app = createApp(App);

app.use(router, axios);

app.mount("#app");
