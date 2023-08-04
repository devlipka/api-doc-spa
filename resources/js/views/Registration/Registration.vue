<template>
    <form
        @submit.prevent="register"
        class="signup-form bg-brandDarkGreen p-10 w-6/12 rounded-sm"
    >
        <h1 class="mb-4 text-2xl uppercase">Sign up</h1>
        <div class="mb-2">
            <input v-model="state.email" type="email" placeholder="Email" />
            <span v-if="v$.email.$error" class="error-label">
                {{ v$.email.$errors[0].$message }}
            </span>
        </div>
        <div class="mb-2">
            <input
                v-model="state.firstName"
                type="text"
                placeholder="First Name"
            />
            <span v-if="v$.firstName.$error" class="error-label">
                {{ v$.firstName.$errors[0].$message }}
            </span>
        </div>
        <div class="mb-2">
            <input
                v-model="state.lastName"
                type="text"
                placeholder="Last Name"
            />
            <span v-if="v$.lastName.$error" class="error-label">
                {{ v$.lastName.$errors[0].$message }}
            </span>
        </div>
        <div class="mb-2 password">
            <input
                v-model="state.password.password"
                type="password"
                placeholder="Password"
            />
            <span v-if="v$.password.password.$error" class="error-label">
                {{ v$.password.password.$errors[0].$message }}
            </span>
        </div>
        <div class="password mb-4">
            <input
                v-model="state.password.confirm"
                type="password"
                placeholder="Repeat your password"
            />
            <span v-if="v$.password.confirm.$error" class="error-label">
                {{ v$.password.confirm.$errors[0].$message }}
            </span>
        </div>
        <div class="flex justify-end mb-2">
            <button type="submit" class="btn btn-primary">Register</button>
        </div>
        <div class="new-account-link">
            <router-link :to="{ name: 'login' }"
                >I already have an account</router-link
            >
        </div>
    </form>
</template>

<script>
import { computed, reactive } from "vue";
import {
    email,
    alpha,
    sameAs,
    required,
    maxLength,
    minLength,
} from "@vuelidate/validators";
import store from "@/store/index.js";
import { useVuelidate } from "@vuelidate/core";

export default {
    name: "Registration",
    setup() {
        const state = reactive({
            email: "",
            lastName: "",
            firstName: "",
            password: {
                confirm: "",
                password: "",
            },
        });

        const rules = computed(() => ({
            email: {
                email,
                required,
            },
            firstName: {
                alpha,
                required,
                minLength: minLength(2),
                maxLength: maxLength(50),
            },
            lastName: {
                alpha,
                required,
                minLength: minLength(2),
                maxLength: maxLength(50),
            },
            password: {
                password: {
                    required,
                    minLength: minLength(8),
                    maxLength: maxLength(16),
                },
                confirm: {
                    required,
                    minLength: minLength(8),
                    maxLength: maxLength(16),
                    sameAs: sameAs(state.password.password),
                },
            },
        }));

        const v$ = useVuelidate(rules, state);

        return {
            state,
            v$,
        };
    },

    methods: {
        register() {
            this.v$.$validate();
            if (!this.v$.$error) {
                const {
                    email,
                    lastName,
                    firstName,
                    password: { password, confirm },
                } = this.state;

                store.dispatch("auth/register", {
                    email,
                    password,
                    lastName,
                    firstName,
                    password_confirmation: confirm,
                });
            }
        },
    },
};
</script>
