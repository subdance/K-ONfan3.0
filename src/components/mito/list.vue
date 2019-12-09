<template>
    <transition name="el-zoom-in-top">
        <div class="main-wrapper" v-if="shouldShow">
            <div class="list-holder" >
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
            <div class="uploader-holder">
                <div v-for="(item, index) in uploader" :key="index" class="single-uploader">
                    <a :href="item.link" target="_blank">
                        <img :src="item.avatar" alt="">
                        <p>{{item.name}}</p>
                        <p>{{item.des}}</p>
                    </a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {grass} from '@/components/mito/grass.js'
export default {
    data() {
        return {
            list: [],
            uploader: [],
            shouldShow: false
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.list = grass.bangumiList;
            this.uploader = grass.uploader;
            setTimeout(() => {
                this.shouldShow = true;
            }, 4000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-wrapper {
        position: absolute;
        top: 0px;
        left: 300px;
        height: 100vh;
        max-height: 900px;
        width: 600px;
        display: flex;
        flex-flow: column nowrap;
        padding-bottom: 20px;
        box-sizing: border-box;

        .list-holder {
            margin: auto;
            margin-top: 20px;
            width: 100%;
            height: 600px;
            overflow: scroll;
            margin-bottom: 20px;
            border-radius: 5px;
            
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
                        color: rgb(107, 103, 103);
                        font-size: 16px;
                    }
                }
            }
        }
        .uploader-holder {
            display: flex;
            flex-flow: row nowrap;
            padding-left: 20px;
            justify-content: flex-end;
            margin-top: auto;
            align-items: center;

            .single-uploader {
                flex: 0 0 150px;

                a {
                    text-decoration: none;

                    img {
                        width: 60px;
                        border-radius: 50%;
                        overflow: hidden;
                        border: 1px solid white;
                    }
                    p {
                        margin: 0px;
                        color: white;
                        text-align: left;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 20px;

                        &:last-of-type {
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 14px;
                            color: grey;
                        }
                    }
                }

            }

        }
    }
</style>