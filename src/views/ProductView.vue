<template>
    <section class="min-h-screen mt-[15vh] px-[10%]">
        <!-- Main product -->
        <div v-if="product" class="w-full md:w-[40%] mb-16" :class="{ 'ml-auto': parseInt(product.id) % 2 === 0 }">
            <div class="h-64 bg-gray-200 mb-4"></div>
            <h1 class="text-2xl font-light uppercase mb-4">{{ product.name }}</h1>
            <p class="text-lg mb-4">{{ product.description }}</p>
            <p class="text-lg font-bold">{{ product.price }}</p>
            
            <button 
                @click="$router.push(`/product/${getNextProductId(product.id)}`)" 
                class="mt-8 px-4 py-2 bg-black text-white uppercase text-sm hover:bg-gray-800 transition"
            >
                Voir ce produit
            </button>
        </div>
        
        <!-- Related products in diagonal layout -->
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
        
        // Create a computed property that safely finds the product
        const product = computed(() => {
            // If we have an ID, find the product
            if (id) {
                return data.find((item) => item.id === id) || null;
            }
            // If no ID is provided, return the first product or a default
            return data[0] || { 
                name: 'Produit non trouvé',
                description: 'Veuillez sélectionner un produit',
                price: '--'
            };
        });
        
        // Get related products (different from the current one)
        const relatedProducts = computed(() => {
            if (!product.value || !product.value.id) return [];
            
            // Get up to 4 other products
            return data
                .filter(item => item.id !== product.value.id)
                .slice(0, 4);
        });
        
        // Function to get the next product ID
        const getNextProductId = (currentId) => {
            const currentIndex = data.findIndex(item => item.id === currentId);
            if (currentIndex === -1 || currentIndex === data.length - 1) {
                return data[0].id;
            }
            return data[currentIndex + 1].id;
        };

        return {
            product,
            relatedProducts,
            getNextProductId
        };
    },
};
</script>