<template>
    <div 
        class="question-holder " 
        :class="{'shit-anwser': isWrong}"
        >
        <transition name="drop">
            <div 
                class="content-wrapper"
                v-show="!hasPassed"
                >
                <p>
                    {{question.title}}
                </p>
                <div class="option-holder">
                    <div
                        v-for="(item, index) in question.options"
                        :key="index"
                        @click="submit(index)"
                        class="single-option-holder"
                        >
                        <i 
                            class="fa fa-circle-o" 
                            :class="{'fa-circle' : hasPassed && index == question.anwserIndex}"
                            >
                        </i>
                        {{item}}
                    </div>
                </div>
            </div>
        </transition>
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
                }, 500)
            }
            else {
                this.triggerWrong();
            }
        },
        triggerWrong() {
            this.isWrong = true;
            setTimeout(() => {
                this.isWrong = false;
            }, 500)
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
        border: 1px solid red;
        height: 300px;
        width: 600px;
        background-color: aqua;

        &.shit-anwser {
            animation: shaking 200ms infinite ease-in-out;

            @keyframes shaking {
                25% {
                    transform: rotate(-10deg) translate(-50%, -50%);
                }
                75% {
                    transform: rotate(10deg) translate(-50%, -50%);
                }
                100% {
                    transform: rotate(0deg) translate(-50%, -50%);
                }
            }
        }
        .content-wrapper {

            .option-holder {
                display: flex;
                border: 1px solid red;
                justify-content: space-around;

                .single-option-holder {
                    cursor: pointer;
                }
            }
        }
    }
    // transition css 
    .drop-enter-active, .drop-leave-active {
        transition: all 500ms;
    }
    .drop-enter {
        opacity: 0;
        transform: rotate(360deg) scale(0.2);
    }
    .drop-enter-to {
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
    .drop-leave {
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
    .drop-leave-to {
        opacity: 0;
        transform: rotate(360deg) scale(0.2);
    }
</style>