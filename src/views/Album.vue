<template>
    <div class="main-container">
        <carousel />
    </div>
</template>

<script>
import carousel from '@/components/album/album-carousel';
export default {
    components: {
        carousel
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        position: relative;
        width: 100%;
        overflow: hidden;
        background: #FC5C7D;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>