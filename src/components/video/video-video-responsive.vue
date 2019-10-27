<template>
    <div class="main-container-inner">
        <video
            class="player"
            :src="nowPlaying.src"
            :poster='nowPlaying.poster'
            controls>
        </video>
        <div class="list-holder">
            <div 
                class="single-list"
                v-for="(item, index) in videoList"
                :key="item.id"
                @click="choseVideo(index)"
                >
                <img 
                    class="poster-image"
                    :src="item.poster"
                    />
                <div class="info-holder">
                    <span>{{item.name}}</span><br/>
                    <span>{{item.info}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
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
    methods: {
        choseVideo(index) {
            this.nowPlaying = {...this.videoList[index]};
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 300)
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container-inner {
        width: 100%;
        // padding-top: 60px;
        // background-color: black;

        .player {
            width: 100%;
            display: block;
        }
        .list-holder {
            display: flex;
            flex-flow: column nowrap;

            .single-list {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                border-bottom: 1px solid white;
                padding-top: 10px;
                padding-bottom: 10px;
                transition: all 0.3s;

                &:active {
                    background-color: rgba(255, 255, 255, 0.39);
                }

                .poster-image {
                    display: block;
                    border-radius: 10px;
                    object-fit: contain;
                    height: 100px;
                }
                .info-holder {
                    width: 150px;
                    color: white;
                    // margin-left: 30px;
                }


            }
        }
    }
</style>