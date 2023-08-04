<template>
    <component :is="$route.meta.layout || 'div'">
        <router-view />
    </component>
</template>
<script>
export default {
    name: "App",
    created() {
        if (this.$store.getters["auth/authToken"]) {
            this.$store.dispatch("user/fetchUser");
        }
    },
};
</script>
