<template lang="html">
    <div class="main-container-inner">
        <div class="videoHolder">
        <video
            class="player"
            :src="nowPlaying.src"
            :poster='nowPlaying.poster'
            controls>
        </video>
        </div>
        <div class="video-container">
            <div 
                v-for="(item, index) in videoList"
                :key="item.id"
                class="single-box"
                :class="{'selectedVideo': selectedIndex == index}"
                @click="choseVideo(index)"
                >
                <img 
                    :src="item.poster" 
                    class="list-image"
                    />
                <div class="video-name-holder">
                    <p>
                        {{item.name}}<br/>
                        <span>{{item.info}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return {
            selectedIndex: 0,
            nowPlaying: {
                id: 1,
                name: 'Cagayake! Girls',
                info: '--S1 OPENING',
                poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/1.jpg',
                src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/3.mp4',
            },
            videoList: [
                {
                    id: 1,
                    name: 'Cagayake! Girls',
                    info: '--S1 OPENING',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/1.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/3.mp4',
                },
                {
                    id: 2,
                    name: 'Go! Go! Maniac',
                    info: '--S2 OPENING 1',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/2.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/2.mp4',
                },
                {
                    id: 3,
                    name: 'Utauyo!! Miracle',
                    info: '--S2 OPENING 2',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/3.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/1.mp4',
                },
                {
                    id: 4,
                    name: 'Listen!!',
                    info: '--S2 ENDING 1',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/4.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/4.mp4',
                },
                {
                    id: 5,
                    name: "Don't say 'lazy'",
                    info: '--S1 ENDING ',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/5.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/5.mp4',
                },
                {
                    id: 6,
                    name: "No, Thank You!",
                    info: '--S2 ENDING 2',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/6.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/6.mp4',
                },
                {
                    id: 7,
                    name: "Unmei♪wa♪Endless!",
                    info: '--剧场版 OPENING',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/7.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/8.mp4',
                },
                {
                    id: 8,
                    name: "Singing!",
                    info: '--剧场版 ENDING',
                    poster: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/video-cover/8.jpg',
                    src: 'https://konfan.oss-cn-beijing.aliyuncs.com/video/7.mp4',
                },
            ]
        }
    },
    created(){
    },
    methods:{
        choseVideo(index) {
            this.selectedIndex = index;
            this.nowPlaying = {...this.videoList[index]};
        },
    },
  }
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    @mixin showingList {//被选中或这被悬浮的盒子通用样式
        width: 250px;
        display: block;
        transition: all 0.3s;
        box-shadow: none;
        margin-right: 0px;
    }
    .video-container {
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin-top: 30px;
        height: 300px;
    
        .single-box {
            transition: all 0.3s;
            position: relative;
            cursor: pointer;

            .list-image {
                width: 200px;
                display: block;
                transition: all 0.1s;
            }
            .video-name-holder {
                text-align: center;

                p {
                    font-family: 'Dokdo', cursive;
                    color: white;
                    font-size: 30px;
                    opacity: 0;
                    transition: all 0.1s;

                    span {
                        font-family: normal;
                        font-size: 16px;
                    }
                }
            }
            &:not(:last-child) {
                margin-right: -50px;
            }
            &:not(:first-child) {

                .list-image {
                    box-shadow: -3px 0px 5px black;
                }
            }
            &:hover {
                margin-right: 0px;
                z-index: 1;

                .list-image {
                    @include showingList
                }
                .video-name-holder {
                    p {
                        opacity: 1;
                        transition: all 0.3s;
                    }
                }
            }
        }
        .single-box.selectedVideo {
            z-index: 1;
            margin-right: 0px;

            .list-image {
                @include showingList
            }
            .video-name-holder {
                p {
                    opacity: 1;
                    transition: all 0.3s;
                }
            }
        }
    }
    .main-container-inner {
        // padding-top: 10vh;
        position: absolute;
        max-width: 1450px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .videoHolder {
        position: relative;
        overflow: hidden;
        text-align: center;
        // padding-top: 20vh;
    }
    .player {
        margin: auto;
        display: block;
        border: 2px solid white;
        outline: none;
        width: 800px;
    }
</style>
