<template>
    <div 
        class="mito-hoolder"
        :class="{'phase2': shouldMove}"
        >
        <bubble :lines="lines"></bubble>
        <figureHolder></figureHolder>
    </div>
</template>

<script>
import bubble from '@/components/mito/bubble.vue'
import figureHolder from '@/components/mito/figure.vue'
export default {
    components: {
        bubble,
        figureHolder
    },
    props: {
        lines: {
            type: Array,
            required: false
        },
        isTriggered: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            shouldMove: false
        }
    },
    created() {
        setTimeout(() => {
            this.shouldMove = true;
        }, 1500)
    }
}
</script>

<style lang="scss" scoped>
    .mito-hoolder {
        position: absolute;
        width: 400px;
        height: 700px;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 80%) scale(3);

        &.phase2 {
            animation: move 1s ease-in-out;
            bottom: 0px;
            left: 0;
            transform: translate(20%, 70%) scale(2.2);

            @keyframes move {
                from {
                    bottom: 0px;
                    left: 50%;
                    transform: translate(-50%, 80%) scale(3);
                }
                to {
                    bottom: 0px;
                    left: 0;
                    transform: translate(20%, 70%) scale(2.2);
                }
            }
        }
    }
</style>