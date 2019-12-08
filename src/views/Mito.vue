<template>
    <div class="main-container">
        <bubble :lines="lines"></bubble>
        <figureHolder></figureHolder>
        <question 
            :question="this.questions[this.currentQuestionIndex]"
            @pass-question="passQuestion"
            v-if="!hasPassedAll"
            >
        </question>
    </div>
</template>

<script>
import { grass } from '@/components/mito/grass.js'
import bubble from '@/components/mito/bubble.vue'
import figureHolder from '@/components/mito/figure.vue'
import question from '@/components/mito/question.vue'
export default {
    components: {
        bubble,
        figureHolder,
        question
    },
    data() {
        return {
            currentQuestionIndex: 0,
            questions: null,
            lines: null
        }
    },
    computed: {
        hasPassedAll() {
            return this.currentQuestionIndex == this.questions.length;
        }
    },
    created() {
        this.initData();
    },
    methods: {
        initData() {
            this.questions = grass.questions;
            this.lines = grass.lines;
        },
        passQuestion() {
            this.currentQuestionIndex = this.currentQuestionIndex + 1;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        border: 1px solid red;
        position: relative;
        background-color: rgba(44, 45, 61, 1);
    }
</style>