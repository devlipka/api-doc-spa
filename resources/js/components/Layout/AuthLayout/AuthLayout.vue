<template>
    <Header />
    <div class="content flex items-center justify-center bg-brandBlue">
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
