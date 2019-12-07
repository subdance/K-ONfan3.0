<template>
    <div class="main-container">
        <bubble :lines="lines"></bubble>
    </div>
</template>

<script>
import bubble from '@/components/mito/bubble.vue'
export default {
    components: {
        bubble
    },
    data() {
        return {
            lines: [
                'aaa',
                'bbb',
                'ccc',
                'ddd',
                'eee',
                'fff'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        width: 100vw;
        height: 100vh;
    }
</style>