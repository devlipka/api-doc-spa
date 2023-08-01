<template>
    <Header />
    <div>
        <slot />
    </div>
</template>

<script>
import Header from "@/components/Layout/Header/Header.vue";

export default {
    name: "AuthLayout",
    components: { Header },
};
</script>
