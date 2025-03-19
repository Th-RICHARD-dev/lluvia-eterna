<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="w-[400px] p-8 bg-white/80 shadow-lg">
      <h2 class="text-2xl font-light text-center mb-6 uppercase">{{ isLogin ? 'Se connecter' : 'Créer un compte' }}</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="!isLogin" class="space-y-2">
          <label class="block text-sm uppercase">Nom</label>
          <input 
            type="text" 
            v-model="user.name" 
            class="w-full p-2 border border-gray-300 focus:outline-none focus:border-black"
            required
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm uppercase">Email</label>
          <input 
            type="email" 
            v-model="user.email" 
            class="w-full p-2 border border-gray-300 focus:outline-none focus:border-black"
            required
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm uppercase">Mot de passe</label>
          <input 
            type="password" 
            v-model="user.password" 
            class="w-full p-2 border border-gray-300 focus:outline-none focus:border-black"
            required
          />
        </div>
        
        <button 
          type="submit" 
          class="w-full p-2 bg-black text-white uppercase text-sm hover:bg-gray-800 transition"
        >
          {{ isLogin ? 'Se connecter' : 'Créer un compte' }}
        </button>
        
        <div class="text-center mt-4">
          <button 
            type="button" 
            @click="isLogin = !isLogin" 
            class="text-xs uppercase underline"
          >
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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    
    const isLogin = ref(true);
    const errorMessage = ref('');
    const user = reactive({
      name: '',
      email: '',
      password: ''
    });
    
    const handleSubmit = async () => {
      try {
        errorMessage.value = '';
        
        if (isLogin.value) {
          // Login logic
          await authStore.login(user.email, user.password);
        } else {
          // Register logic
          await authStore.register(user.name, user.email, user.password);
        }
        
        // Redirect to home page after successful login/register
        router.push('/');
      } catch (error) {
        errorMessage.value = error.message || 'Une erreur est survenue';
      }
    };
    
    return {
      isLogin,
      user,
      errorMessage,
      handleSubmit
    };
  }
};
</script>