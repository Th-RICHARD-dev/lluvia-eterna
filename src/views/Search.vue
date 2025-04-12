<template>
  <div class="search-container">
    <div class="search-wrapper">
      <input 
        type="text" 
        v-model="searchTerm" 
        placeholder="Recherchez des fragrances..."
        class="search-input"
      >
    </div>
    <div class="results-grid" v-if="filteredItems.length">
      <div v-for="perfume in filteredItems" 
           :key="perfume.id" 
           class="perfume-card">
        <img :src="perfume.image" :alt="perfume.name" class="perfume-image">
        <h3>{{ perfume.name }}</h3>
        <p class="brand">{{ perfume.brand }}</p>
        <p class="price">${{ perfume.price }}</p>
      </div>
    </div>
    <p v-else-if="searchTerm" class="no-results">
      Aucune fragrance trouvée pour '{{ searchTerm }}'.
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'  // This should now work

export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  computed: {
    ...mapState(['perfumes']),
    filteredItems() {
      if (!this.searchTerm) return this.perfumes || [];
      
      const searchLower = this.searchTerm.toLowerCase();
      return (this.perfumes || []).filter(perfume => {
        return perfume.name.toLowerCase().includes(searchLower) ||
               perfume.brand.toLowerCase().includes(searchLower) ||
               perfume.description?.toLowerCase().includes(searchLower);
      });
    }
  }
}
</script>

<style scoped>
.search-container {
  max-width: 1200px;
  margin: 7rem auto 2rem; /* Increased top margin to account for header */
  padding: 0 1rem;
  min-height: calc(100vh - 80px); /* Adjust based on header height */
}

.search-wrapper {
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.search-input {
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 30px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #9c8175;
  box-shadow: 0 0 15px rgba(156, 129, 117, 0.2);
}

.search-icon {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9c8175;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.perfume-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.perfume-card:hover {
  transform: translateY(-5px);
}

.perfume-image {
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.brand {
  color: #9c8175;
  font-style: italic;
  margin: 0.5rem 0;
}

.price {
  font-weight: bold;
  color: #4a4a4a;
}

.no-results {
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 2rem;
}
</style>