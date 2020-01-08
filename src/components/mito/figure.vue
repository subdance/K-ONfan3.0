<template>
    <div class="figure-holder">
        <img 
            class="figure-img" 
            :src="currentSrcUrl" 
            alt="mito-figure" />
    </div>
</template>

<script>
export default {
    props: {
        imgSet: {
            type: Array,
            default: function() {
                return [
                    'https://konfan.oss-cn-beijing.aliyuncs.com/image/mito/main-mito/mito-clear.png',
                    'fake-url'
                ]
            },
            required: false
        }
    },
    data() {
        return {
            currentSrcUrl: ''
        }
    },
    created() {
        this.setImg();
    },
    methods: {
        setImg() {
            this.currentSrcUrl = this.imgSet[0];
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .figure-holder {
        width: 250px;
        height: 653px;

        .figure-img {
            width: 100%;
            filter: drop-shadow(0px 0px 2px black);
        }
    }
</style>