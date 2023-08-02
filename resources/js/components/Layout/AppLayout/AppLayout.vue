<template>
    <div class="flex-col">
        <Header />
        <main class="flex content">
            <Navigation class="w-3/12" />
            <div class="bg-brandBlue w-9/12 p-8">
                <slot />
            </div>
        </main>
    </div>
</template>

<script>
import Header from "@/components/Layout/Header/Header.vue";
import Navigation from "@/components/Layout/Navigation/Navigation.vue";

export default {
    name: "AppLayout",
    components: { Navigation, Header },
};
</script>
