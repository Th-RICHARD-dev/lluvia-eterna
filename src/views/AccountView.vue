<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-light uppercase mb-8">Mon compte</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white/80 p-6 shadow-sm">
          <nav>
            <ul class="space-y-4">
              <li v-for="(item, index) in navItems" :key="index">
                <button 
                  @click="activeSection = item.id" 
                  class="text-sm uppercase w-full text-left py-2 border-b border-transparent"
                  :class="activeSection === item.id ? 'border-black' : 'hover:border-gray-300'"
                >
                  {{ item.label }}
                </button>
              </li>
              <li class="pt-6">
                <button 
                  @click="logout" 
                  class="text-sm uppercase w-full text-left py-2 text-red-600 hover:text-red-800"
                >
                  Se déconnecter
                </button>
              </li>
            </ul>
          </nav>
        </div>
        
        <div class="md:col-span-2 bg-white/80 p-6 shadow-sm">
          <div v-if="activeSection === 'profile'" class="space-y-6">
            <h2 class="text-xl uppercase font-light">Informations personnelles</h2>
            
            <form @submit.prevent="updateProfile" class="space-y-4">
              <div class="space-y-2">
                <label class="block text-sm uppercase">Nom</label>
                <input 
                  type="text" 
                  v-model="profile.name" 
                  class="w-full p-2 border border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm uppercase">Email</label>
                <input 
                  type="email" 
                  v-model="profile.email" 
                  class="w-full p-2 border border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm uppercase">Téléphone</label>
                <input 
                  type="tel" 
                  v-model="profile.phone" 
                  class="w-full p-2 border border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              
              <button 
                type="submit" 
                class="px-4 py-2 bg-black text-white uppercase text-sm hover:bg-gray-800 transition"
              >
                Enregistrer
              </button>
            </form>
          </div>
          
          <div v-if="activeSection === 'address'" class="space-y-6">
            <h2 class="text-xl uppercase font-light">Adresses</h2>
            
            <div v-if="addresses.length === 0" class="text-sm text-gray-500">
              Aucune adresse enregistrée
            </div>
            
            <div v-for="(address, index) in addresses" :key="index" class="border p-4 relative">
              <button @click="removeAddress(index)" class="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                &times;
              </button>
              <p><strong>{{ address.name }}</strong></p>
              <p>{{ address.street }}</p>
              <p>{{ address.postalCode }} {{ address.city }}</p>
              <p>{{ address.country }}</p>
            </div>
            
            <button 
              @click="showAddressForm = !showAddressForm" 
              class="text-sm uppercase underline"
            >
              {{ showAddressForm ? 'Annuler' : 'Ajouter une adresse' }}
            </button>
            
            <form v-if="showAddressForm" @submit.prevent="addAddress" class="space-y-4 border-t pt-4">
              <!-- Form fields for address -->
            </form>
          </div>
          
          <div v-if="activeSection === 'orders'" class="space-y-6">
            <h2 class="text-xl uppercase font-light">Mes commandes</h2>
            
            <div v-if="orders.length === 0" class="text-sm text-gray-500">
              Aucune commande
            </div>
            
            <div v-for="(order, index) in orders" :key="index" class="border p-4">
              <div class="flex justify-between items-center mb-2">
                <p class="font-medium">Commande #{{ order.id }}</p>
                <p class="text-sm text-gray-500">{{ order.date }}</p>
              </div>
              <p class="text-sm">Statut: <span class="font-medium">{{ order.status }}</span></p>
              <p class="text-sm">Total: <span class="font-medium">{{ order.total }}€</span></p>
              <button class="text-xs uppercase underline mt-2">Voir les détails</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    
    onMounted(() => {
      if (!authStore.isAuthenticated) {
        router.push('/login');
      }
    });
    
    const activeSection = ref('profile');
    const showAddressForm = ref(false);
    
    const navItems = [
      { id: 'profile', label: 'Informations personnelles' },
      { id: 'orders', label: 'Mes commandes' },
      { id: 'address', label: 'Adresses' },
    ];
    
    const profile = reactive({
      name: authStore.user?.name || '',
      email: authStore.user?.email || '',
      phone: authStore.user?.phone || '',
    });
    
    const addresses = ref([]);
    const orders = ref([]);
    
    const newAddress = reactive({
      name: '',
      street: '',
      postalCode: '',
      city: '',
      country: 'France',
    });
    
    const updateProfile = async () => {
      try {
        await authStore.updateProfile(profile);
        alert('Profil mis à jour avec succès');
      } catch (error) {
        alert('Erreur lors de la mise à jour du profil');
      }
    };
    
    const addAddress = () => {
      addresses.value.push({ ...newAddress });
      
      Object.keys(newAddress).forEach(key => {
        if (key !== 'country') newAddress[key] = '';
      });
      
      showAddressForm.value = false;
    };
    
    const removeAddress = (index) => {
      addresses.value.splice(index, 1);
    };
    
    const logout = () => {
      authStore.logout();
      router.push('/');
    };
    
    return {
      activeSection,
      navItems,
      profile,
      addresses,
      orders,
      newAddress,
      showAddressForm,
      updateProfile,
      addAddress,
      removeAddress,
      logout
    };
  }
};
</script>