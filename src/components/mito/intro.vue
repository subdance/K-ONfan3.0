<template>
    <transition name="el-zoom-in-top">
    <div class="intor-holder" v-if='shouldShow'>
        <div class="single">
            <span class="title-text">表设定</span>
            <span class="detail-text">{{intro.official}}</span>
        </div>
        <div class="single">
            <span class="title-text">里设定</span>
            <span class="detail-text">{{intro.real}}</span>
        </div>
        <div class="single">
            <span class="title-text"><del>恋爱关系</del></span>
            <span class="detail-text">{{intro.connect[0]}}</span>
        </div>
    </div>
    </transition>
</template>

<script>
import {grass} from '@/components/mito/grass.js'
export default {
    data() {
        return {
            intro: {},
            shouldShow: false
        }
    },
    created() {
        this.intro = grass.intro;
        this.init();
    },
    methods: {
        init() {
            this.list = grass.bangumiList;
            this.uploader = grass.uploader;
            setTimeout(() => {
                this.shouldShow = true;
            }, 5000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .intor-holder {
        width: 300px;
        height: 90vh;
        position: absolute;
        top: 0px;
        left: calc(300px + 600px + 10px);
        overflow: scroll;
        margin-top: 20px;
        padding-right: 20px;

        .single {

            &:not(:first-of-type) {
                margin-top: 20px;
            }

            .title-text {
                color: rgba(239, 137, 169, 1);
                font-family: 'ZCOOL KuaiLe', cursive;
                font-size: 22px;
                margin-right: 5px;

                &:after {
                    content: ":"
                }
            }
            .detail-text {
                color: grey;
                font-size: 14px;
            }
        }
    }
</style>