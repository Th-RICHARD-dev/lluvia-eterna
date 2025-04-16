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
    <img src="/src/assets/question_head.svg" alt="head" class="h-[300px]" />
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
  },
};
</script>