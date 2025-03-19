<script>
import { useRoute } from 'vue-router';
import data from '@/data/data.json';

export default {
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const product = data.find((item) => item.id === id);

        return {
            product,
        };
    },
};
</script>

<template>
    <section class="h-screen">
        <h1 class="text-2xl">Product Name: {{ product.name }}</h1>
        <p class="text-lg">Description: {{ product.description }}</p>
        <p class="text-lg">Price: {{ product.price }}</p>
    </section>
</template>