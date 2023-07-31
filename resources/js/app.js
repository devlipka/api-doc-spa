import "./bootstrap";
import Vue, { createApp } from "vue";
import VueTailwind from "vue-tailwind";
import { TInput } from "vue-tailwind/dist/components";

const components = {
    "t-input": {
        component: TInput,
        props: {
            classes: "border-2 block w-full rounded text-gray-800",
            // ...More settings
        },
    },
};

Vue.use(VueTailwind, components);

import App from "./components/App/App.vue";

createApp(App).mount("#app");
