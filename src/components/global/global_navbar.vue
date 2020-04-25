<template lang="html">
  <div class="navHolder">
        <div class="single-holder" v-for="(item, index) in routerList">
            <div class="wrapper">
                <router-link :to=item.router>
                    <span class="navTextHome">{{item.title}}&nbsp</span>
                    <i 
                        :class="item.icon" 
                        style="vertical-align: middle"
                        :style="{color: nowColor(index), transition: 'all 0.2s', filter: nowShadow(index)}"
                        >
                    </i>
                </router-link>
            </div>
        </div>
        <div class="single-holder">
            <div class="wrapper">
                <a href="https://yuiyuan.xyz/" target="_blank">
                    <span class="navTextHome">云上茶屋&nbsp</span>
                    <i 
                        class="icon fa fa-coffee fa-lg" 
                        style="vertical-align: middle"
                        :style="{color: nowColor(index), transition: 'all 0.2s', filter: nowShadow(index)}"
                        >
                    </i>
                </a>
            </div>
        </div>
        <div class="iconHolder">
            <a
                href="https://baike.baidu.com/item/%E8%BD%BB%E9%9F%B3%E5%B0%91%E5%A5%B3/5182240?fr=aladdin"
                target="_blank"
                >
                <img src='https://konfan.oss-cn-beijing.aliyuncs.com/image/element/element/3.png'>
            </a>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            routerList: [
                {
                    index: 0,
                    title: 'HTT活动室',
                    router: '/',
                    icon: 'icon fa fa-home fa-lg'
                },
                {
                    index: 1,
                    title: '部员册',
                    router: '/character',
                    icon: 'icon fa fa-address-book fa-lg'
                },
                {
                    index: 2,
                    title: '茶色相簿',
                    router: '/album',
                    icon: 'icon fa fa-image fa-lg'
                },
                {
                    index: 3,
                    title: '放映机',
                    router: '/video',
                    icon: 'icon fa fa-video-camera fa-lg'
                }
            ]
        }
    },
    computed: {
        nowIndex() {
            if (this.routerList.filter(item => item.router === this.$route.path).length) {
                return this.routerList.filter(item => item.router === this.$route.path)[0].index;
            }
            else {
                return 0
            }
        },
    },
    methods: {
        nowColor(index) {
            return this.nowIndex == index ? '#409EFF' : 'white';
        },
        nowShadow(index) {
            return this.nowIndex == index ? 'drop-shadow(0 0 8px white)' : 'none' 
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    .fa {
        font-size: 1.2rem;
    }
    
    .navHolder {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        height: 60px;
        padding: 0 20px;

        .single-holder {
            text-align: center;
            margin-right: 1.2rem;
            transition: all 0.1s;

            .wrapper {
                transition: all 0.2s;
            }
            &:nth-child(5) {
                margin: auto;
                margin-right: 0px;
            }
            .navTextHome {
                font-size: 1.3rem;
                color: #df000a;
                font-family: 'ZCOOL KuaiLe', cursive;
                transition: all 200ms ease-in-out;
                text-shadow: 1px 1px 1px black;
            }

            &:hover {

                .wrapper {
                    transform: translate(0, -3px);
                    transition: all 0.2s;

                    .navTextHome {
                        text-shadow: 2px 2px 1px black;
                    }
                }

            }
        }
    }
    img {
        height: 50px;
    }
    .iconHolder {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media only screen and (max-width: 600px) {
        .navHolder > div {
            flex-grow: 1;
            margin-right: 0.5rem;
        }
        .navTextHome {
            display: none;
        }
        img {
            display: none;
        }
        .icon {
            font-size: 22px;
        }
    }
</style>
