<template>
    <form
        method="post"
        @submit.prevent="login"
        class="login-form bg-brandDarkGreen p-10 w-6/12 rounded-sm"
    >
        <h1 class="mb-4 text-2xl uppercase">Sign in</h1>
        <div class="form-group mb-2 flex flex-col">
            <input
                class="bg-brandBlue"
                placeholder="Email"
                v-model="state.email"
            />
            <span v-if="v$.email.$error" class="error-label">
                {{ v$.email.$errors[0].$message }}
            </span>
        </div>
        <div class="password flex flex-col">
            <input
                type="password"
                v-model="state.password"
                placeholder="Password"
            />
            <span v-if="v$.password.$error" class="error-label">
                {{ v$.password.$errors[0].$message }}
            </span>
        </div>
        <span v-if="state.error" class="error-label">
            {{ state.error }}
        </span>
        <div class="flex justify-end mb-2 mt-2">
            <button type="submit" class="">Log in</button>
        </div>
        <div class="new-account-link">
            <router-link :to="{ name: 'register' }"
                >I do not have an account</router-link
            >
        </div>
    </form>
</template>

<script>
import { computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { ROUTE_NAMES } from "@/constants/routeNames.constants.js";
import router from "@/router/index.js";

export default {
    name: "Login",
    setup() {
        const state = reactive({
            email: "",
            error: "",
            password: "",
        });

        const rules = computed(() => ({
            email: {
                email,
                required,
            },
            password: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(16),
            },
        }));

        const v$ = useVuelidate(rules, state);

        return {
            state,
            v$,
        };
    },

    methods: {
        login() {
            this.v$.$validate();
            if (!this.v$.$error) {
                this.state.error = "";
                this.$store
                    .dispatch("auth/login", {
                        email: this.state.email,
                        password: this.state.password,
                    })
                    .then(function () {
                        router.push({ name: ROUTE_NAMES.HOME });
                    })
                    .catch(
                        (res) =>
                            (this.state.error =
                                res.response?.data?.message || ""),
                    );
            }
        },
    },
};
</script>
