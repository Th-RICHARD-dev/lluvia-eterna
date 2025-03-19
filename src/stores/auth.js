import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // Les trucs importants
  const user = ref(null);
  const token = ref(localStorage.getItem('auth_token') || null);
  
  // Ce qu'on peut récupérer
  const isAuthenticated = computed(() => !!token.value);
  
  // Les actions qu'on peut faire
  const login = async (email, password) => {
    try {
      // Dans une vraie app, on ferait un appel API ici
      // Pour le moment, on fait semblant que ça marche
      
      // On fait genre que ça prend du temps
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (email === 'demo@example.com' && password === 'password') {
        const generatedToken = 'demo_token_' + Math.random().toString(36).substring(2);
        
        user.value = {
          id: '1',
          name: 'Demo User',
          email: email,
          phone: '+33 123 456 789'
        };
        
        token.value = generatedToken;
        localStorage.setItem('auth_token', generatedToken);
        
        return user.value;
      } else {
        throw new Error('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };
  
  const register = async (name, email, password) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const generatedToken = 'demo_token_' + Math.random().toString(36).substring(2);
      
      user.value = {
        id: '1',
        name: name,
        email: email,
        phone: ''
      };
      
      token.value = generatedToken;
      localStorage.setItem('auth_token', generatedToken);
      
      return user.value;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };
  
  const updateProfile = async (profileData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      user.value = {
        ...user.value,
        ...profileData
      };
      
      return user.value;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };
  
  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('auth_token');
  };
  
  return {
    user,
    token,
    isAuthenticated,
    login,
    register,
    updateProfile,
    logout
  };
});