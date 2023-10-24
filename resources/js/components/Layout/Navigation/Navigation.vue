<template>
    <nav
        class="navigation bg-brandDarkGreen flex flex-col pb-8 justify-between"
    >
        <ul>
            <li v-for="item in navLinks">
                <router-link
                    v-if="item.roles.includes(role)"
                    class="no-underline p-4 block transition-colors ease-in-out hover:bg-brandBlue duration-500"
                    :to="{ name: item.path }"
                    >{{ item.label }}</router-link
                >
            </li>
        </ul>
        <div class="px-6">
            <button type="button" @click="onLogOut">Log out</button>
        </div>
    </nav>
</template>

<script>
import router from "@/router/index.js";
import userService from "@/services/user.service.js";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import { NAVIGATION_LINKS } from "@/constants/navigationLinks.constants.js";

export default {
    name: "Navigation",
    computed: {
        role() {
            return userService.getUserFromLS().role;
        },
        navLinks() {
            return NAVIGATION_LINKS;
        },
    },
    methods: {
        onLogOut() {
            this.$store.dispatch("auth/logout").then(function () {
                router.push({ name: ROUTE_NAMES.LOGIN });
            });
        },
    },
};
</script>
