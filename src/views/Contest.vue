<template>
  <div class="relative h-screen">    
    <!-- 3D Model Container -->
    <div id="three-container" class="absolute inset-0 w-full h-full">
      <!-- 3D model will be rendered here -->
    </div>

    <!-- Exit Button -->
    <button @click="showExitConfirmation = true" class="absolute top-4 right-4 z-50 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="black">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

  <!-- Quiz Container -->
    <div class="relative z-10 flex p-10">
      <div v-if="currentQuestionIndex < questions.length" 
           class="max-w-xl w-full p-8 backdrop-blur-md bg-white/20 rounded-xl h-auto">
        <div v-if="currentQuestionIndex === 0" class="z-30 bg-green-100 border border-green-300 text-green-800 px-6 py-3 rounded-xl shadow text-center max-w-xl mb-[10px]">
          <span class="font-semibold">Participez au concours&nbsp;!</span> Répondez correctement aux questions pour obtenir jusqu'à <span class="font-bold">-15% de réduction</span> sur votre panier
        </div>
        <h2 class="text-2xl font-bold text-[#584738] text-center mb-8">{{ questions[currentQuestionIndex].question }}</h2>
        <div class="grid grid-cols-1 gap-4">
          <button
            v-for="(option, index) in questions[currentQuestionIndex].options"
            :key="index"
            @click="selectOption(option)"
            :class="[
              'py-4 px-6 rounded-lg text-[#584738] transition-all transform hover:scale-105',
              selectedOption === option 
                ? 'bg-[#B59E7D]/80 shadow-lg' 
                : 'bg-white/50 hover:bg-white/60'
            ]"
          >
            {{ option }}
          </button>
        </div>
        <button 
          @click="submitAnswer" 
          class="mt-8 w-full py-3 bg-[#B59E7D]/80 text-[#584738] rounded-lg hover:bg-[#584738] hover:text-[#B59E7D] transition-colors"
        >
          Suivant
        </button>
      </div>
      
      <div v-else class="absolute left-8 top-16 text-center text-[#584738] p-8 backdrop-blur-md bg-white/20 rounded-xl">
        <h2 class="text-3xl font-bold mb-4">Concours terminé</h2>
        <p class="text-xl mb-8">Votre score: {{ score }}/{{ questions.length }}</p>
        <div v-if="score > 0" class="text-green-700 text-lg font-semibold">
          Félicitations ! Vous avez obtenu une réduction de -{{ discount }}% sur votre panier.
        </div>
        <div v-else class="text-red-700 text-lg font-semibold">
          Vous n'avez pas obtenu de réduction cette fois-ci. Réessayez pour tenter votre chance !
        </div>
      </div>
    </div>

    <!-- Exit Confirmation Modal -->
    <div v-if="showExitConfirmation" 
         class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-xl max-w-md w-full mx-4">
        <h3 class="text-xl font-bold text-[#584738] mb-4">Êtes-vous sûr de vouloir quitter ?</h3>
        <p class="text-gray-600 mb-6">Attention : votre progression ne sera pas sauvegardée si vous quittez maintenant.</p>
        <div class="flex gap-4">
          <button 
            @click="exitQuiz" 
            class="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Quitter
          </button>
          <button 
            @click="showExitConfirmation = false" 
            class="flex-1 py-2 bg-[#584738] text-white rounded-lg hover:bg-[#B59E7D] transition-colors"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const currentQuestionIndex = ref(0)
    const selectedOption = ref(null)
    const score = ref(0)
    const showExitConfirmation = ref(false)
    const router = useRouter()
    let scene, camera, renderer
    let currentModel = null
    let animationFrame
    
    // Define rotation constants for each model
    const modelRotations = {
      cafe: {
        start: Math.PI / 2,    // 90 degrees
        min: -Math.PI / 8,     // -22.5 degrees
        max: Math.PI / 2       // 90 degrees
      },
      arcade: {
        start: -Math.PI / 1.01,    // 60 degrees
        min: -Math.PI / 1.001,     // -30 degrees
        max: -Math.PI / 2      // 60 degrees
      },
      jardin: {
        start: Math.PI / 6,    // 45 degrees
        min: -Math.PI / 2,     // -45 degrees
        max: Math.PI / 6       // 45 degrees
      }
    }

    let currentRotationSettings = modelRotations.cafe
    let rotationDirection = -1

    const animate = () => {
      animationFrame = requestAnimationFrame(animate)
      if (currentModel) {
        if (currentModel.rotation.y >= currentRotationSettings.max) {
          rotationDirection = -1
        } else if (currentModel.rotation.y <= currentRotationSettings.min) {
          rotationDirection = 1
        }
        currentModel.rotation.y += 0.003 * rotationDirection
      }
      renderer.render(scene, camera)
    }

    const loadNextModel = () => {
      const loader = new GLTFLoader()
      if (currentModel) {
        scene.remove(currentModel)
      }
      
      loader.load(models[currentModelIndex], (gltf) => {
        currentModel = gltf.scene
        
        // Adjust scale, position, and rotation settings based on model index
        switch(currentModelIndex) {
          case 0: // cafe model
            currentModel.scale.set(2, 2, 2)
            currentModel.position.y = -1.5
            currentRotationSettings = modelRotations.cafe
            break
          case 1: // arcade model
            currentModel.scale.set(0.8, 0.8, 0.8)
            currentModel.position.y = -1
            currentRotationSettings = modelRotations.arcade
            break
          case 2: // jardin model
            currentModel.scale.set(2, 2, 2)
            currentModel.position.y = 1
            currentRotationSettings = modelRotations.jardin
            break
        }
        
        currentModel.rotation.y = currentRotationSettings.start
        scene.add(currentModel)
      })
    }

    const initThreeJS = () => {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true })
      
      const container = document.getElementById('three-container')
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 5, 5)
      scene.add(ambientLight, directionalLight)

      loadNextModel()
      camera.position.z = 5
      animate()
    }

    const questions = ref([
      {
        question: "Quelle est l'odeur d'une bonne boulangerie ?",
        options: [
         "Le pain chaud",
          "Le chocolat",
          "Le café",
          "Le croissant"
        ],
        correctAnswer: "Le pain chaud"
      },
      {
        question: "En quelle année Lluvia Eterna a-t-elle été fondée ?",
        options: [
          "1985",
          "1990",
          "1992",
          "1995"
        ],
        correctAnswer: "1992"
      },
      {
        question: "Quelle fleur est présente dans notre parfum 'Printemps' ?",
        options: [
          "Coquelicot",
          "Paquerette",
          "Violette",
          "Tournesol"
        ],
        correctAnswer: "Violette"
      }
    ])

    const models = [
      '/src/assets/cafemdl.glb',
      '/src/assets/arcade.glb',    
      '/src/assets/jardin.glb'     
    ]
    let currentModelIndex = 0

    // Helper for discount message
    const discount = computed(() => {
      if (score.value === 1) return 5
      if (score.value === 2) return 10
      if (score.value === 3) return 15
      return 0
    })

    const submitAnswer = () => {
      if (selectedOption.value === questions.value[currentQuestionIndex.value].correctAnswer) {
        score.value++
      }
      selectedOption.value = null
      currentQuestionIndex.value++
      // Change model when moving to next question
      if (currentQuestionIndex.value < questions.value.length) {
        currentModelIndex = (currentModelIndex + 1) % models.length
        loadNextModel()  // Load the next model immediately
      }
      // Set discount based on score when contest is finished
      if (currentQuestionIndex.value === questions.value.length) {
        let discount = 0
        if (score.value === 1) discount = 5
        else if (score.value === 2) discount = 10
        else if (score.value === 3) discount = 15
        localStorage.setItem('lluvia_discount', discount.toString())
      }
    }

    const selectOption = (option) => {
      selectedOption.value = option
    }

    const exitQuiz = () => {
      router.push('/') // or wherever you want to redirect
    }

    onMounted(() => {
      initThreeJS()
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      window.removeEventListener('resize', handleResize)
    })

    const handleResize = () => {
      if (camera && renderer) {
        const container = document.getElementById('three-container')
        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(container.clientWidth, container.clientHeight)
      }
    }

    return {
      currentQuestionIndex,
      questions,
      selectedOption,
      score,
      showExitConfirmation,
      selectOption,
      submitAnswer,
      exitQuiz,
      discount
    }
  }
}
</script>

<style scoped>
#three-container {
  cursor: grab;
}

#three-container:active {
  cursor: grabbing;
}

#three-container canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>