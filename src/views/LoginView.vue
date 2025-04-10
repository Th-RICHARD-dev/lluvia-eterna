<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="w-[400px] bg-[#F1EADA] rounded-2xl p-8 border-solid border-1 border-[#584738]">
      <h2 class="text-2xl text-[#584738] font-bold text-center mb-6 uppercase">
        {{ isLogin ? 'Se connecter' : 'Créer un compte' }}
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="!isLogin" class="space-y-2">
          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block text-sm text-[#584738] uppercase mb-2">Nom</label>
              <input
                type="text"
                v-model="user.name"
                class="w-full p-2 border border-[#584738] rounded-2xl focus:outline-none focus:border-black"
                required
              />
            </div>
            <div class="flex-1">
              <label class="block text-sm text-[#584738] uppercase mb-2">Prénom</label>
              <input
                type="text"
                v-model="user.firstName"
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
            v-model="user.email"
            class="w-full p-2 border border-[#584738] rounded-2xl focus:outline-none focus:border-black"
            required
          />
        </div>

        <div class="space-y-2">
          <label class="block text-sm text-[#584738] uppercase">Mot de passe</label>
          <input
            type="password"
            v-model="user.password"
            class="w-full p-2 border border-[#584738] rounded-2xl focus:outline-none focus:border-black"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full p-2 bg-[#584738] text-white rounded-2xl uppercase text-sm hover:bg-gray-800 transition"
        >
          {{ isLogin ? 'Se connecter' : 'Créer un compte' }}
        </button>

        <div class="text-center mt-4">
          <button type="button" @click="isLogin = !isLogin" class="text-xs uppercase underline">
            {{ isLogin ? 'Créer un compte' : 'Déjà inscrit? Se connecter' }}
          </button>
        </div>
      </form>

      <div v-if="errorMessage" class="mt-4 text-red-500 text-sm text-center">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

export default {
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()

    const isLogin = ref(true)
    const errorMessage = ref('')
    const user = reactive({
      name: '',
      firstName: '',
      email: '',
      password: '',
    })

    const handleSubmit = async () => {
      try {
        errorMessage.value = ''

        if (isLogin.value) {
          // Login logic
          await authStore.login(user.email, user.password)
        } else {
          // Register logic
          await authStore.register(user.name, user.firstName, user.email, user.password)
        }

        // Redirect to home page after successful login/register
        router.push('/')
      } catch (error) {
        errorMessage.value = error.message || 'Une erreur est survenue'
      }
    }

    return {
      isLogin,
      user,
      errorMessage,
      handleSubmit,
    }
  },
}
</script>
