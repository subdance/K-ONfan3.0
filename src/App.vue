<template>
    <el-container>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=Noto+Serif+SC|ZCOOL+XiaoWei" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Merienda+One" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=Gochi%20Hand" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
        <link async href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet">
        <link async href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet">
        <aplayer
            ref='aplayer'
            :audio="moePlayer.audio"
            :volume='moePlayer.volume'
            fixed
            autoplay
            v-show='moePlayer.isFixPlayerShow'
            />
        <el-header>
        </el-header>

        <el-main>
            <router-view/>
        </el-main>

        <el-footer>

        </el-footer>
    </el-container>
</template>

<script>

export default {
    components: {
    },
    data(){
        return {
            moePlayer: {
                isFixPlayerShow: true,
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
            },
            
        }
    }, 
}
</script>
<style lang="scss" scoped>
    .el-main {
        padding: 0px;
    }
</style>
