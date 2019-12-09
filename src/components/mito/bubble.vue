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
        border-radius: 3px;
        border-bottom-left-radius: 3px;
        top: 20px;
        left: 160px;
        box-shadow: 1px 1px 2px black;
        z-index: 999;
        line-height: 16px;
        padding: 10px 10px;
        box-sizing: border-box;
        min-width: 100px;

        span {
            color: white;
            font-size: 12px;
            font-family: 'ZCOOL KuaiLe', cursive;
        }
    }
</style>