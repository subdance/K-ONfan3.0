<template>
    <transition 
        name="el-zoom-in-center"
        @after-leave="changeToken"
        >
    <div class="main-container-inner" @click="toTop" v-show="shouldShow">
        <img :src="pics[random]" class="mugi-face-wow">
    </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            shouldShow: false,
            pics: [
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/azusa-wow.gif',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/mugi-wow.gif',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/yuri-wow.gif',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/mio-wow.gif',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/tea-wow.gif',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/cute-wow.gif',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/ritsu-wow.GIF',
                'https://konfan.oss-cn-beijing.aliyuncs.com/image/home/yui-wow.GIF'
            ],
            trigger: 0
        }
    },
    mounted() {
        window.onscroll = this.checkShouldShow;
    },
    computed: {
        random() {
            return Math.floor(Math.random() * this.pics.length + this.trigger * 0);
        }
    },
    methods: {
        checkShouldShow() {
            this.shouldShow = document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
        },
        changeToken() {
            this.trigger ++;
        },
        toTop() {
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container-inner {
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
        text-align: center;
        overflow: hidden;
        border: 4px solid white;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0px 0px 10px black;

        .mugi-face-wow {
            height: 120px;
            display:block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &:hover, &:active{
            transform: scale(1.1);
            transition: all 0.2s;
        }
    }
</style>