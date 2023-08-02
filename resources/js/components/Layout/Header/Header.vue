<template>
    <header class="header bg-brandDarkGreen flex items-center px-4">
        <router-link class="text-xl" :to="{ name: 'users' }"
            >Monolith</router-link
        >
        <button class="btn"><i class="fa-solid fa-user"></i></button>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>
