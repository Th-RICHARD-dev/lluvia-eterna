import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { supabase } from '../lib/supabaseClient';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  // Load user from Supabase session
  const loadUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    user.value = data?.user || null;
  };

  // Login with Supabase
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password
    });
    if (error) throw error;
    user.value = data.user;
    return data.user;
  };

  // Register with Supabase
  const register = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}/signin`
      }
    });
    if (error) throw error;
    user.value = data.user;
    return data.user;
  };

  // Update profile with Supabase
  const updateProfile = async (profileData) => {
    const { data, error } = await supabase.auth.updateUser({ data: profileData });
    if (error) throw error;
    user.value = data.user;
    return data.user;
  };

  // Logout with Supabase
  const logout = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };

  // Listen to auth state changes
  supabase.auth.onAuthStateChange((_, session) => {
    user.value = session?.user || null;
  });

  // Initial load
  loadUser();

  return {
    user,
    isAuthenticated,
    login,
    register,
    updateProfile,
    logout,
    loadUser
  };
});