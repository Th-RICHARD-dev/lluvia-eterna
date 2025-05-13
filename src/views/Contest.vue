<template>
  <div class="mt-[75px] p-10 flex justify-evenly items-center">
    <div class="w-[50%] contest-view place-items-center border-1 border-[#584738] rounded-lg py-5 px-10 flex flex-col items-center relative">
      <h1>Concours</h1>
      <div v-if="currentQuestionIndex < questions.length" class="flex justify-center items-center flex-col">
        <h2>{{ questions[currentQuestionIndex].question }}</h2>
        <ul class="grid grid-cols-2 gap-4 m-4">
          <li
            v-for="(option, index) in questions[currentQuestionIndex].options"
            :key="index"
            :class="['border-1 border-[#584738] rounded-lg py-5 px-10 cursor-pointer',
            selectedOption === option ? 'bg-[#584738] text-[#F1EADA]' : ''
            ]"
            @click="selectOption(option)"
          >
            {{ index + 1 }}. {{ option }}
          </li>
        </ul>
        <button @click="submitAnswer" class="button bg-[#584738] text-[#F1EADA] px-6 py-2 rounded-lg mt-5">Suivant</button>
      </div>
      <div class="text-center" v-else>
        <h2>Questionnaire terminé</h2>
        <p>Votre score: {{ score }}/{{ questions.length }}</p>
      </div>
      <img src="/src/assets/question_span.svg" alt="span" class="w-[50px] absolute right-[-50px] top-[50%]" />
    </div>
    <div id="three-container" class="h-[400px] w-[400px]"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import questionsData from "@/data/questions.json";

export default {
  data() {
    return {
      questions: [],
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0
    };
  },
  created() {
    this.questions = questionsData;
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    
    const container = document.getElementById('three-container');
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);

    camera.position.set(10, 15, 10
    );
    camera.lookAt(0, 0, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;

    let model = null;

    this.$_threeRefs = {
      scene,
      camera,
      renderer,
      controls
    };

    const loader = new GLTFLoader();
    loader.load(
      '/src/assets/cafemdl.glb',
      (gltf) => {
        model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(3, 3, 3);
        model.rotation.y = Math.PI / 4;
        
        scene.add(model);
        

        const mixer = new THREE.AnimationMixer(model);
        if (gltf.animations.length > 0) {
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
        }
        this.$_threeRefs.mixer = mixer;
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      
      if (this.$_threeRefs.mixer) {
        const delta = clock.getDelta();
        this.$_threeRefs.mixer.update(delta);
      }

      if (model) {
        model.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    container.addEventListener('mousedown', () => {
      controls.autoRotate = false;
    });

    container.addEventListener('mouseup', () => {
      setTimeout(() => {
        controls.autoRotate = true;
      }, 3000);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.$_threeRefs) {
      const { renderer, controls } = this.$_threeRefs;
      if (renderer) renderer.dispose();
      if (controls) controls.dispose();
      this.$_threeRefs = null;
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    submitAnswer() {
      if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++;
      }
      this.selectedOption = null;
      this.currentQuestionIndex++;
    },
    onWindowResize() {
      if (this.$_threeRefs) {
        const { camera, renderer } = this.$_threeRefs;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    }
  }
};
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