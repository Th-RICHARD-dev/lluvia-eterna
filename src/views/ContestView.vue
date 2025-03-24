<template>
  <div class="contest-view">
    <h1>Contest</h1>
    <div v-if="currentQuestionIndex < questions.length">
      <h2>{{ questions[currentQuestionIndex].question }}</h2>
      <ul>
        <li 
          v-for="(option, index) in questions[currentQuestionIndex].options" 
          :key="index"
        >
          <label>
            <input 
              type="radio" 
              :name="'question-' + currentQuestionIndex" 
              :value="option" 
              v-model="selectedOption" 
            />
            {{ option }}
          </label>
        </li>
      </ul>
      <button @click="submitAnswer">Suivant</button>
    </div>
    <div v-else>
      <h2>Questionnaire terminer</h2>
      <p>Votre score: {{ score }}/{{ questions.length }}</p>
    </div>
  </div>
</template>

<script>
import questionsData from "@/data/questions.json";

export default {
  data() {
    return {
      questions: [],
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0,
    };
  },
  created() {
    this.questions = questionsData;
  },
  methods: {
    submitAnswer() {
      if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++;
      }
      this.selectedOption = null;
      this.currentQuestionIndex++;
    },
  },
};
</script>

<style scoped>
.contest-view {
    margin-top: 50px;
}
</style>