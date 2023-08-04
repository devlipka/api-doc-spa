import { createApp } from "vue";

import "./axios";
import store from "@/store";
import router from "@/router";
import App from "@/components/App/App.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
