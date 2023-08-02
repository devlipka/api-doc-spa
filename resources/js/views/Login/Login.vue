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
            <span v-if="v$.email.$error" class="">
                {{ v$.email.$errors[0].$message }}
            </span>
        </div>
        <div class="mb-3 password flex flex-col">
            <input
                type="password"
                v-model="state.password"
                placeholder="Password"
            />
            <span v-if="v$.password.$error" class="">
                {{ v$.password.$errors[0].$message }}
            </span>
        </div>
        <div class="flex justify-end mb-2">
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

export default {
    name: "Login",
    setup() {
        const state = reactive({
            email: "",
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
                console.log("Suc");
            } else {
                console.log("ERR");
            }
            // this.$router.push("/");
        },
    },
};
</script>
