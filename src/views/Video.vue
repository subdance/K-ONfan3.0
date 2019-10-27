<template>
    <div class="main-container">
        <!-- <player /> -->
        <player-res />
    </div>
</template>

<script>
import player from '@/components/video/video-video.vue'
import playerRes from '@/components/video/video-video-responsive.vue'
export default {
    components: {
        player,
        playerRes
    },
    computed: {
    }

}
</script>

<style lang="scss" scoped>
    .main-container {
        width: 100%;
        position: relative;
        padding-top: 60px;
        min-height: 100vh;
        background-image: url('https://konfan.oss-cn-beijing.aliyuncs.com/image/character-slide/5.jpg');
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }
</style>