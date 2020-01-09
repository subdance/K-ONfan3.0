<template>
    <div class="main-container">
        <div class="wrapper">
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
            <intro v-if="hasPassedAll"></intro>
            <p class="info" @click="toHome">这个网站的本体其实是...</p>
            <div class="reminder" v-if="isSmall">
                喂喂，屏幕太小了，请换一个大点的哦。
            </div>
        </div>
    </div>
</template>

<script>
import {grass} from '@/components/mito/grass.js'
import mitoBody from '@/components/mito/mito-body.vue'
import question from '@/components/mito/question.vue'
import slogan from '@/components/mito/slogan.vue'
import bangumiList from '@/components/mito/list.vue'
import intro from '@/components/mito/intro.vue'
export default {
    components: {
        mitoBody,
        question,
        slogan,
        bangumiList,
        intro
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
            // return true;
            return this.currentQuestionIndex == this.questions.length;
        },
        isSmall() {
            return window.innerWidth < 900
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

        .wrapper {
            width: 1440px;
            height: 789px;
            position: relative;
            margin: auto;
            overflow: hidden;
            background-color: rgba(44, 45, 61, 1);


            .info {
                position: absolute;
                bottom: 20px;
                right: 100px;
                color: grey;
                font-size: 12px;
                padding-right: 10px;
                cursor: pointer;
                line-height: 14px;
                margin: 0px;
                z-index: 999;
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
    }
</style>