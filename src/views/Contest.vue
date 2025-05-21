<template>
  <div class="mt-[75px] relative h-screen">
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
    <div class="relative z-10 flex h-full">
      <div v-if="currentQuestionIndex < questions.length" 
           class="max-w-xl w-full mx-4 p-8 backdrop-blur-md bg-white/20 rounded-xl absolute left-8 top-16">
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
      
      <div v-else class="absolute left-8 top-16 text-center text-[#584738]">
        <h2 class="text-3xl font-bold mb-4">Questionnaire terminé</h2>
        <p class="text-xl mb-8">Votre score: {{ score }}/{{ questions.length }}</p>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
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
        question: "Quel est l'ingrédient principal de notre parfum signature ?",
        options: [
          "L'essence de rose de Damas",
          "L'extrait de jasmin",
          "La vanille de Madagascar",
          "Le bois de santal"
        ],
        correctAnswer: "L'essence de rose de Damas"
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
        question: "Quelle est la signification de 'Lluvia Eterna' ?",
        options: [
          "Pluie Éternelle",
          "Lumière Infinie",
          "Amour Éternel",
          "Parfum Divin"
        ],
        correctAnswer: "Pluie Éternelle"
      }
    ])

    const models = [
      '/src/assets/cafemdl.glb',
      '/src/assets/arcade.glb',    
      '/src/assets/jardin.glb'     
    ]
    let currentModelIndex = 0

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
      exitQuiz
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