<template>
    <section class="min-h-screen mt-[15vh] px-[10%]">
        <div v-if="product" class="w-full md:w-[40%] mb-16" :class="{ 'ml-auto': parseInt(product.id) % 2 === 0 }">
            <div class="h-64 bg-gray-200 mb-4"></div>
            <h1 class="text-2xl font-light uppercase mb-4">{{ product.name }}</h1>
            <p class="text-lg mb-4">{{ product.description }}</p>
            <p class="text-lg font-bold">{{ product.price }}</p>
            
            <button 
                @click="$router.push(`/product/${product.id}`)" 
                class="mt-8 px-4 py-2 bg-black text-white uppercase text-sm hover:bg-gray-800 transition"
            >
                Voir ce produit
            </button>
        </div>
        
        <div v-for="(relatedProd, index) in relatedProducts" :key="relatedProd.id" 
             class="w-full md:w-[40%] mb-16" 
             :class="{ 'ml-auto': index % 2 === 0 }">
            <div class="h-64 bg-gray-200 mb-4"></div>
            <h1 class="text-2xl font-light uppercase mb-4">{{ relatedProd.name }}</h1>
            <p class="text-lg mb-4">{{ relatedProd.description }}</p>
            <p class="text-lg font-bold">{{ relatedProd.price }}</p>
            
            <button 
                @click="$router.push(`/product/${relatedProd.id}`)" 
                class="mt-8 px-4 py-2 bg-black text-white uppercase text-sm hover:bg-gray-800 transition"
            >
                Voir ce produit
            </button>
        </div>
    </section>
</template>

<script>
import { useRoute } from 'vue-router';
import data from '@/data/data.json';
import { ref, computed } from 'vue';

export default {
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const product = computed(() => {
            if (id) {
                return data.find((item) => item.id === id) || null;
            }
            return data[0] || { 
                name: 'Produit non trouvé',
                description: 'Veuillez sélectionner un produit',
                price: '--'
            };
        });
        const relatedProducts = computed(() => {
            if (!product.value || !product.value.id) return [];
            
            return data
                .filter(item => item.id !== product.value.id)
                .slice(0, 4);
        });
        return {
            product,
            relatedProducts,
        };
    },
};
</script>