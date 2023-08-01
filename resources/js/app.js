import "./bootstrap";
import { createApp } from "vue";

import router from "@/router";
import App from "@/components/App/App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
