<template>
    <div 
        class="question-holder " 
        :class="{'shit-anwser': isWrong, 'correct': hasPassed}"
        >
        <div 
            class="content-wrapper"
            >
            <p class="title-holder">
                {{question.title}}
            </p>
            <div class="option-holder">
                <div
                    v-for="(item, index) in question.options"
                    :key="index"
                    @click="submit(index)"
                    class="single-option-holder"
                    >
                    <i class="fa fa-circle-o"></i>
                    <i class="fa fa-circle"></i>
                    {{item}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: {
            type: Object,
            default: function() {
                return {
                    title: 'sample what you want to ask?',
                    options: [
                        'a',
                        'b',
                        'c',
                        'd'
                    ],
                    anwserIndex: 2
                }
            },
            required: false
        }
    },
    data() {
        return {
            isWrong: false,
            hasPassed: false
        }
    },
    methods: {
        submit(index) {
            if (index == this.question.anwserIndex) {
                this.hasPassed = true;
                setTimeout(() => {
                    this.hasPassed = false;
                    this.$emit('pass-question');
                }, 600)
            }
            else {
                this.triggerWrong();
            }
        },
        triggerWrong() {
            this.isWrong = true;
            setTimeout(() => {
                this.isWrong = false;
            }, 200)
        }
    }
}
</script>

<style lang="scss" scoped>
    .question-holder {
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(239, 137, 169, 1);
        padding: 20px 40px;
        border-radius: 20px;
        box-shadow: 0px 0px 10px white;

        &.shit-anwser {
            animation: shaking 200ms infinite ease-in-out;
            pointer-events: none;

            @keyframes shaking {
                25% {
                    transform: translate(-30%, -50%);
                }
                75% {
                    transform: translate(-70%, -50%);
                }
                100% {
                    transform: translate(-50%, -50%);
                }
            }
        }
        &.correct {
            opacity: 0;
            transition: all 300ms;
            pointer-events: none;
        }
        .content-wrapper {

            .title-holder {
                margin: 0px;
                text-align: left;
                line-height: 40px;
                font-family: 'ZCOOL KuaiLe', cursive;
                font-size: 22px;
                letter-spacing: 2px;
                color: rgba(60, 61, 76, 1)
            }

            .option-holder {
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-around;

                .single-option-holder {
                    cursor: pointer;
                    font-family: 'ZCOOL KuaiLe', cursive;
                    color: rgba(253, 253, 254, 1);
                    line-height: 30px;
                    font-size: 18px;

                    i:last-of-type {
                        display: none;
                    }

                    &:hover {
                        i:first-of-type {
                            display: none;
                        }
                        i:last-of-type {
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
</style>