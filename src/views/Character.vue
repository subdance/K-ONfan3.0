<template>
    <div class="main-container">
        <show />
        <intro />
        <detail />
    </div>
</template>

<script>
import detail from '@/components/character/character_detail';
import intro from '@/components/character/character_intro';
import show from '@/components/character/character_show';
export default {
    components: {
        detail,
        intro,
        show
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
</style>