<template>
    <div class="slogan-holder">
        <span 
            v-for="(item, index) in showingText"
            :key="index"
            >
            {{item}}
        </span>
        <span></span>
    </div>
</template>

<script>
export default {
    props: {
        slogan: {
            type: Array,
            default: function() {
                return [
                    'sample-1',
                    'sample-2'
                ]
            },
            required: false
        }
    },
    data() {
        return {
            showingText: [],
            sloganIndex: 0
        }
    },
    created() {
        this.addingText();
    },
    methods: {
        addingText() {
            this.showingText = [];
            let temp = this.slogan[this.sloganIndex].split('');
            const loop = setInterval(() => {
                this.showingText.push(temp.shift());
                if (temp.length == 0) {
                    setTimeout(() => {
                        this.nextSlogan();
                    }, 4000)
                    clearInterval(loop);
                }
            }, 200)
        },
        nextSlogan() {
            if (this.sloganIndex < this.slogan.length - 1) {
                this.sloganIndex = this.sloganIndex + 1;
            }
            else {
                this.sloganIndex = 0;
            }
            this.addingText();
        }
    }
}
</script>

<style lang="scss" scoped>
    .slogan-holder {
        position: absolute;
        right: 20px;
        top: 20px;
        writing-mode: vertical-rl;
        letter-spacing: 3px;
        max-height: 600px;
        // border: 1px solid red;
        
        span {
            color: white;
            font-size: 35px;
            font-family: 'Ma Shan Zheng', cursive;
            font-family: 'ZCOOL XiaoWei', serif;

            &:last-of-type {
                display: inline-block;
                width: 20px;
                height: 20px;
                background-color: white;
                animation: shining 1000ms infinite ease-in-out;
                @keyframes shining {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>