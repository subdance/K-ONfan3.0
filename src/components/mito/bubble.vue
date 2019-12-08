<template>
    <transition name="el-fade-in-linear">
        <div v-if="shouldBubbleShow" class="bubble-holder">
            <span class="single-line-holder">
                {{currentLine}}
            </span>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        lines: {
            type: Array,
            default: function() {
                return ['empty-sample', 'empty-sample']
            },
            required: false
        }
    },
    data() {
        return {
            currentLine: ''
        }
    },
    computed: {
        shouldBubbleShow() {
            return this.currentLine !== '';
        }
    },
    created() {
        this.startTalkig();
    },
    methods: {
        startTalkig() {
            this.currentLine = this.lines[0];
            let index = 0;
            const lineLoop = setInterval(() => {
                index = index + 1;
                if (index == this.lines.length) {
                    clearInterval(lineLoop);
                    this.currentLine = '';
                }
                else {
                    this.currentLine = this.lines[index];
                }
            }, 1500);
        }
    }
}
</script>

<style lang="scss" scoped>
    .bubble-holder {
        position: absolute;
        background-color: rgba(239, 137, 169, 1);
        border-radius: 40px;
        padding: 20px 20px;
        top: 50px;
        left: 200px;

        span {
            color: white;
            font-size: 16px;
            font-family: 'ZCOOL KuaiLe', cursive;
        }
    }
</style>