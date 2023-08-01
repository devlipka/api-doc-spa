<template>
    <Header />
    <main>
        <Navigation />
        <div>
            <slot />
        </div>
    </main>
</template>

<script>
import Header from "@/components/Layout/Header/Header.vue";
import Navigation from "@/components/Layout/Navigation/Navigation.vue";

export default {
    name: "AppLayout",
    components: { Navigation, Header },
};
</script>
