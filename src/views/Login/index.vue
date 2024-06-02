<template>
    <div class="flex flex-col  md:flex-row justify-center items-center bg-black">
        <div class=" w-screen md:w-1/2  md:h-screen flex justify-center items-center">
            <img src="./../../assets/images/logo-otica.png" class="rounded-md w-20 md:w-96" />

        </div>
        <div class="w-screen md:w-1/2 bg-slate-50 h-screen flex justify-center items-center">
            <form class="flex flex-col justify-center items-center gap-10  p-12 rounded-md " @submit.prevent="submitLogin">
                <h1 class="text-4xl w-full">Bem-vindo</h1>

                <div class="flex flex-col gap-2">
                    <label for="email">Email</label>
                    <InputText id="email" type="email" v-model="userLoginForm.email" class="p-4 rounded-md bg-slate-300"
                        aria-describedby="email-help" :class="v$.userLoginForm.email.$invalid&&v$.$dirty?'border-red-500 border':'border-none'"/>
                    <small id="email-help" class="text-red-500" :class=" v$.userLoginForm.email.$invalid&&v$.$dirty?'block':'hidden'">Formato de email inválido</small>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="email">Senha</label>
                    <InputText v-model="userLoginForm.password" type="password" class="p-4 rounded-md bg-slate-300" :class="v$.userLoginForm.email.$invalid&&v$.$dirty?'border-red-500 border':'border-none'"/>
                    <small id="email-help"   class="text-red-500" :class=" v$.userLoginForm.password.$invalid&&v$.$dirty?'block':'hidden'">Formato de senha inválido</small>
                    {{  }}
                </div>
                <div>
                    <Button @click="submitLogin" type="submit" label="Fazer Login"
                        class="bg-black hover:bg-yellow-600 rounded-md px-6 py-3 w-full text-slate-50 font-semibold" />
                    <span class="w-full flex flex-wrap flex-row gap-1 p-1">
                        <h4>Não tem cadastro ainda?</h4><router-link to="/signup" class="hover:text-yellow-700">Clique
                            Aqui</router-link>
                    </span>

                </div>

            </form>
        </div>

    </div>



</template>
<script lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email} from '@vuelidate/validators'
import {isValidPassword} from "@/utils/regex.util"
export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            userLoginForm: {
                email: '',
                password: ''
            }
        }
    },
    validations() {
        return {
            userLoginForm: {
                email: { required, email },
                password: { required, isValidPassword }
            }
        }
    },
    methods: {
        async submitLogin() {
            const result = await this.v$.$validate()
            if (!result) {
                // notify user form is invalid
                console.log(this.v$, 'invalido')
                
            }
            console.log(this.v$)
        }, 
        
    }
}
</script>