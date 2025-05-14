import {defineStore} from "pinia";
import {computed, ref} from "vue";
import user from "@/helpers/user.js"
import {jwtDecode} from "jwt-decode";

export const useLoginStore =
    defineStore('login', () => {
        // state
        const token = ref(localStorage.getItem('token') || null)

        // actions
        const logIn = async (guest) => {
            const response = await user.post('auth/login', guest)

            if (response.data) {
                token.value = response.data.token
                localStorage.setItem('token', token.value)
            }
        }

        const logOut = () => {
            token.value = null
            localStorage.removeItem('token')
        }

        // getters
        const isLoggedIn = computed(() => {
            return token.value !== null
            // return !!token.value // true if token is not null // true boolean
        })

        const loggedInUser = computed(() => {
            return token.value ? jwtDecode(token.value) : null
        })

        return {
            logIn,
            logOut,
            isLoggedIn,
            loggedInUser
        }
    });