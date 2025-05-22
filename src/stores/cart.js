import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    showNotification: false
  }),

  getters: {
    totalItems(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    cartCount(state) {
      return state.items.length
    },
    displayCount(state) {
      const count = this.totalItems
      return count > 99 ? '99+' : count.toString()
    }
  },

  actions: {
    initializeCart() {
      const saved = localStorage.getItem('cart_items')
      if (saved) {
        this.items = JSON.parse(saved)
      }
    },
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart_items', JSON.stringify(this.items))
      // Show notification
      this.showNotification = true
      setTimeout(() => {
        this.showNotification = false
      }, 3000)
    },

    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId)
      localStorage.setItem('cart_items', JSON.stringify(this.items))
    },

    clearCart() {
      this.items = []
      localStorage.setItem('cart_items', JSON.stringify(this.items))
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find((item) => item.id === productId)
      if (item && quantity > 0) {
        item.quantity = quantity
        localStorage.setItem('cart_items', JSON.stringify(this.items))
      }
    }
  }
})
