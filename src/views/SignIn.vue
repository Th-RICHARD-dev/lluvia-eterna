<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="w-[400px] bg-[#F1EADA] rounded-2xl p-8 border-solid border-1 border-[#584738]">
      <h2 class="text-2xl text-[#584738] font-bold text-center mb-6 uppercase">
        Se connecter
      </h2>

      <form @submit.prevent="handleSignIn" class="space-y-4">
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
          />
        </div>

        <button
          type="submit"
          class="w-full p-2 bg-[#584738] text-white rounded-2xl uppercase text-sm hover:bg-gray-800 transition"
        >
          Se connecter
        </button>

        <div class="text-center mt-4">
          <router-link to="/signup" class="text-xs uppercase underline">
            Créer un compte
          </router-link>
        </div>
      </form>

      <div v-if="errorMessage" class="mt-4 text-red-500 text-sm text-center">
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
    const errorMessage = ref('')

    const handleSignIn = async () => {
      try {
        errorMessage.value = ''

        // Check-up de si l'utilisateur existe dans la base de donnée
        const { data: userExists } = await supabase
          .from('users')
          .select('email')
          .eq('email', email.value.trim())
          .single()

        if (!userExists) {
          errorMessage.value = 'Compte non trouvé'
          return
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.value.trim(),
          password: password.value
        })

        if (error) throw error

        if (data?.user) {
          localStorage.setItem('user', JSON.stringify(data.user))
          router.push('/')
        }
      } catch (error) {
        console.error('Login error:', error.message)
        errorMessage.value = 'Email ou mot de passe incorrect'
      }
    }

    return {
      email,
      password,
      errorMessage,
      handleSignIn
    }
  }
}
</script>