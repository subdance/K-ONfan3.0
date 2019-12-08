<template>
    <div class="list-holder">
        <div class="single-bangumi" v-for="(item, index) in list" :key="index">
            <div class="img-holder">
                <a :href="item.link" target="_blank"><img :src="item.cover" alt=""></a>
            </div>
            <div class="content-holder">
                <a :href="item.link">{{item.name}}</a>
                <span>{{item.des}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {grass} from '@/components/mito/grass.js'
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.list = grass.bangumiList
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-holder {
        position: absolute;
        left: 50%;
        top: 100px;
        transform: translate(-50%, 0);
        width: 600px;
        height: 550px;
        overflow: scroll;

        .single-bangumi {
            display: flex;
            flex-flow: row nowrap;
            width: 100%;

            &:not(:first-of-type) {
                margin-top: 10px;
            }

            .img-holder {
                flex: 0 0 200px;
                border: 1px solid white;
                border-radius: 4px;

                img {
                    width: 100%;
                    display: block;
                } 
            }
            .content-holder {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                padding-left: 20px;
                padding-right: 20px;
                flex-grow: 2;

                a {
                    color: rgba(239, 137, 169, 1);
                    font-size: 18px;
                    text-decoration: underline;
                    font-weight: bold;
                }
                span {
                    color: white;
                    font-size: 16px;
                }
            }
        }
    }
</style>