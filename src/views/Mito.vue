<template>
    <div class="main-container">
        <mito-body
            :lines="lines"
            v-if="hasPassedAll"
            ></mito-body>
        <question 
            :question="this.questions[this.currentQuestionIndex]"
            @pass-question="passQuestion"
            v-if="!hasPassedAll"
            >
        </question>
        <bangumiList
            v-if="hasPassedAll"
            >
        </bangumiList>
        <slogan 
            :slogan='slogan'
            v-if="hasPassedAll"
            >
        </slogan>
        <p class="info" @click="toHome">这个网站的本体其实是...</p>
        <div class="reminder" v-if="isSmall">
            喂喂，屏幕太小了，请换一个大点的哦。
        </div>
    </div>
</template>

<script>
import {grass} from '@/components/mito/grass.js'
import mitoBody from '@/components/mito/mito-body.vue'
import question from '@/components/mito/question.vue'
import slogan from '@/components/mito/slogan.vue'
import bangumiList from '@/components/mito/list.vue'
export default {
    components: {
        mitoBody,
        question,
        slogan,
        bangumiList
    },
    data() {
        return {
            currentQuestionIndex: 0,
            questions: null,
            lines: null,
            slogan: null
        }
    },
    computed: {
        hasPassedAll() {
            return this.currentQuestionIndex == this.questions.length;
        },
        isSmall() {
            return window.innerWidth < 1200 
        }
    },
    created() {
        this.initData();
    },
    methods: {
        initData() {
            this.questions = grass.questions;
            this.lines = grass.lines;
            this.slogan = grass.slogan;
        },
        passQuestion() {
            this.currentQuestionIndex = this.currentQuestionIndex + 1;
        },
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: rgba(44, 45, 61, 1);
        overflow: hidden;

        .info {
            position: absolute;
            bottom: 0px;
            right: 0px;
            color: grey;
            font-size: 12px;
            padding-right: 10px;
            cursor: pointer;
        }
        .reminder {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            background-color: rgba(44, 45, 61, 1);
            z-index: 999;
            color: white;
            line-height: 100vh;
            text-align: center;
        }
    }
</style>