<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="w-[400px] bg-[#F1EADA] rounded-2xl p-8 border-solid border-1 border-[#584738]">
      <h2 class="text-2xl text-[#584738] font-bold text-center mb-6 uppercase">
        Créer un compte
      </h2>

      <form @submit.prevent="handleSignUp" class="space-y-4">
        <div class="space-y-2">
          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block text-sm text-[#584738] uppercase mb-2">Nom</label>
              <input
                type="text"
                v-model="lastName"
                class="w-full p-2 border border-[#584738] rounded-2xl focus:outline-none focus:border-black"
                required
              />
            </div>
            <div class="flex-1">
              <label class="block text-sm text-[#584738] uppercase mb-2">Prénom</label>
              <input
                type="text"
                v-model="firstName"
                class="w-full p-2 border border-[#584738] rounded-2xl focus:outline-none focus:border-black"
                required
              />
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-sm text-[#584738] uppercase">Email</label>
          <input
            type="email"
            v-model="email"
            class="w-full p-2 border border-[#584738] rounded-2xl focus:outline-none focus:border-black"
            required
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm text-[#584738] uppercase">Mot de passe</label>
          <input
            type="password"
            v-model="password"
            class="w-full p-2 border border-[#584738] rounded-2xl focus:outline-none focus:border-black"
            required
            minlength="6"
          />
        </div>

        <button
          type="submit"
          class="w-full p-2 bg-[#584738] text-white rounded-2xl uppercase text-sm hover:bg-gray-800 transition"
        >
          Créer un compte
        </button>

        <div class="text-center mt-4">
          <router-link to="/signin" class="text-xs uppercase underline">
            Déjà inscrit? Se connecter
          </router-link>
        </div>
      </form>

      <div v-if="errorMessage" class="mt-4 text-[#584738] text-sm text-center">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'

export default {
  setup() {
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const errorMessage = ref('')

    const handleSignUp = async () => {
      try {
        errorMessage.value = ''

        const { data, error } = await supabase.auth.signUp({
          email: email.value.trim(),
          password: password.value,
          options: {
            data: {
              first_name: firstName.value,
              last_name: lastName.value
            },
            emailRedirectTo: `${window.location.origin}/signin`
          }
        })

        if (error) throw error

        if (data?.user) {
          // if case si on décide ou non a la fin d'inscrire et de se connecter directement sans passer par un confirmation par email
          if (data.session === null) {
            errorMessage.value = 'Un email de confirmation vous a été envoyé à ' + email.value + '. Veuillez vérifier votre boîte de réception et vos spams.'
          } else {
            errorMessage.value = 'Compte créé avec succès!'
          }
          
          // Delay pour laisser a l'utilisateur le temps de lire le message
          setTimeout(() => {
            router.push('/signin')
          }, 6500)
        }
      } catch (error) {
        console.error('Signup error:', error)
        if (error.message.includes('Email rate limit exceeded')) {
          errorMessage.value = 'Trop de tentatives. Veuillez réessayer plus tard.'
        } else if (error.message.includes('User already registered')) {
          errorMessage.value = 'Cette adresse email est déjà utilisée'
        } else {
          errorMessage.value = error.message
        }
      }
    }

    return {
      email,
      password,
      firstName,
      lastName,
      errorMessage,
      handleSignUp
    }
  }
}
</script>