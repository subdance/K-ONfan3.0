<template>
    <el-container>
        <div>
            <aplayer
                ref='aplayer'
                :audio="currentAudio"
                :volume='moePlayer.volume'
                v-show="shouldShow"
                :fixed="isFixed"
                :autoplay="false"
                v-if="!isMito"
                />
        </div>

        <el-header :style="{'display': isMito ? 'none' : 'block'}">
            <navbar></navbar>
        </el-header>

        <el-main :style="{'margin-top': isMito ? '0px' : '-60px'}">
            <router-view/>
            <to-top></to-top>
        </el-main>

        <el-footer :style="{'display': isMito ? 'none' : 'block'}">
            <footbar></footbar>
        </el-footer>
    </el-container>
</template>

<script>
import navbar from "@/components/global/global_navbar.vue"
import footbar from "@/components/global/global_footbar.vue"
import toTop from "@/components/global/global_backToTop.vue"
export default {
    components: {
        navbar,
        footbar,
        toTop
    },
    data(){
        return {
            moePlayer: {
                volume: 0.5,
                audio: [
                    {
                        name: 'わたしの恋はホッチキス/订书机之恋',
                        artist: '放課後ティータイム',
                        url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/love.mp3',
                        cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/1.jpeg',
                    },
                    {
                        name: 'ふわふわ時間/轻飘飘的时光',
                        artist: '放課後ティータイム',
                        url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/time.mp3',
                        cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/2.jpeg',
                    },
                    {
                        name: 'ふでペン 〜ボールペン〜/毛笔圆珠笔',
                        artist: '放課後ティータイム',
                        url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/pen.mp3',
                        cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/3.jpeg',
                    },
                    {
                        name: 'U&I',
                        artist: '放課後ティータイム',
                        url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/u%26i.mp3',
                        cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/4.jpeg',
                    },
                    {
                        name: '天使にふれたよ!',
                        artist: '放課後ティータイム',
                        url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/angel.mp3',
                        cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/5.jpeg',
                    },
                ],
                audio2: [
                    {
                    name: 'あの日の夢',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/dream.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/7.jpeg',
                    },
                    {
                    name: 'Autumn breeze with you',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/autumn.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/1.jpeg',
                    },
                    {
                    name: 'いい夢見てね',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/sweetdream.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/6.jpeg',

                    },
                    {
                    name: 'Winter night in a warm room',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/winternight.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/5.jpeg',
                    },
                    {
                    name: 'U&I 〜夕日の綺麗なあの丘で〜',
                    artist: '百石元',
                    url: 'https://konfan.oss-cn-beijing.aliyuncs.com/music/instui.mp3',
                    cover: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/music-cover/3.jpeg',
                    },
                ],
            },
            
        }
    }, 
    created() {
        if (window.innerWidth < 1200) {
            setTimeout(() => {
                this.$message({
                    type: 'success',
                    message: '在大屏幕浏览可以获得完整体验',
                    showClose: true
                });
            }, 1000)
        }
    },
    computed: {
        currentAudio() {
            if (this.$route.name === 'blog') {
                return this.moePlayer.audio2
            }
            else {
                return this.moePlayer.audio
            }
        },
        shouldShow() {
            if (this.$route.name == 'video') {
                if (this.$refs.aplayer) {
                    this.$refs.aplayer.pause();
                }
            }
            return this.$route.name !== 'video'
        },
        isFixed() {
            return true;
        },
        isMito() {
            return this.$route.name == 'mito';
        }
    },
    mounted() {
        let pathSet = ['home', 'character', 'blog', 'album', 'video', 'mito'];
        if (pathSet.indexOf(this.$route.name) < 0) {
            this.$router.push('/')
        }
    },
    methods: {
        dispatchAplayer(to, from) {//根据当前路由分配曲目
            if (to.name === 'blog') {
                this.moePlayer.currentAudio = [...this.moePlayer.audio2];
            }
            else {
                this.moePlayer.currentAudio = [...this.moePlayer.audio];
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .el-header {
        background-color: rgba(156, 141, 141, 0.349);
        position: relative;
        z-index: 999;
        padding: 0px;
        backdrop-filter: blur(10px);
    }
    .el-main {
        padding: 0px;
        margin-top: -60px;
        position: relative;

        &.mito {
            margin-top: 0px;
        }
    }
    .el-footer {
        padding: 0px;
    }
</style>
