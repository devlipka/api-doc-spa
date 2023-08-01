<template>
    <nav class="navigation d-flex flex-column justify-content-between">
        <ul>
            <li>
                <a href="/">Users</a>
            </li>
            <li>
                <a href="/">Products</a>
            </li>
            <li>
                <a href="/">My Profile</a>
            </li>
        </ul>
        <div class="d-flex justify-content-end">
            <a href="/" class="btn btn-danger">Log out</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
};
</script>
