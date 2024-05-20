import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL =
  "https://weird-text-backend-1df9250fa871.herokuapp.com/";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const app = createApp(App);

app.use(router, axios);

app.mount("#app");
