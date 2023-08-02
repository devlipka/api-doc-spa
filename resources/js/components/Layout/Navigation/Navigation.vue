<template>
    <nav
        class="navigation bg-brandDarkGreen flex flex-col pb-8 justify-between"
    >
        <ul>
            <li>
                <router-link
                    class="p-4 block transition-colors ease-in-out hover:bg-brandBlue duration-500"
                    :to="{ name: 'users' }"
                    >Users</router-link
                >
            </li>
            <li>
                <router-link
                    class="p-4 block transition-colors ease-in-out hover:bg-brandBlue duration-500"
                    :to="{ name: 'products' }"
                    >Products</router-link
                >
            </li>
            <li>
                <router-link
                    class="p-4 block transition-colors ease-in-out hover:bg-brandBlue duration-500"
                    :to="{ name: 'profile' }"
                >
                    My Profile
                </router-link>
            </li>
        </ul>
        <div class="px-6">
            <a href="/" class="btn btn-danger">Log out</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
};
</script>
