import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'

export const useProductStore = defineStore('products', {
  state: () => ({
    parfums: [],
    packs: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
    this.loading = true
    this.error = null
    try {
      const { data: parfums, error: parfumsError } = await supabase.from('parfums').select('*')
      console.log('Supabase parfums →', parfums, parfumsError)

      if (parfumsError) throw parfumsError

      const { data: packs, error: packsError } = await supabase.from('packs').select('*')
      console.log('Supabase packs →', packs, packsError)

      if (packsError) throw packsError

      this.parfums = parfums
      this.packs = packs
    } catch (error) {
      console.error('ERREUR fetchProducts:', error)
      this.error = error.message
    } finally {
      this.loading = false
    }
  },

  },
})
