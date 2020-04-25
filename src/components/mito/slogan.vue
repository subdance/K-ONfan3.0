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
        this.addingWord();
    },
    methods: {
        addingWord() {
            const reg = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/;
            this.showingText = [];
            let duration = 200;
            let temp = this.slogan[this.sloganIndex].split('');
            const loop = setInterval(() => {
                this.showingText.push(temp.shift());
                if (temp.length == 0) {
                    setTimeout(() => {
                        this.nextSlogan();
                    }, 4000)
                    clearInterval(loop);
                }
            }, duration)
        },
        nextSlogan() {
            if (this.sloganIndex < this.slogan.length - 1) {
                this.sloganIndex = this.sloganIndex + 1;
            }
            else {
                this.sloganIndex = 0;
            }
            this.addingWord();
        }
    }
}
</script>

<style lang="scss" scoped>
    .slogan-holder {
        writing-mode: vertical-rl;
        letter-spacing: 3px;
        max-height: 700px;
        line-height: 50px;
        width: 200px;
        position: fixed;
        top: 0px;
        
        span {
            color: white;
            font-size: 30px;
            // font-family: 'ZCOOL XiaoWei', serif;

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