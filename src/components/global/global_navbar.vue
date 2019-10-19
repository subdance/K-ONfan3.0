<template lang="html">
  <div class="navHolder">
        <div class="single-holder" v-for="item in routerList">
            <router-link :to=item.router>
                <span class="navTextHome">{{item.title}}&nbsp</span>
                <i :class="item.icon" style="color: white;"></i>
            </router-link>
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
                    title: 'HTT活动室',
                    router: '/',
                    icon: 'icon fa fa-home fa-lg'
                },
                {
                    title: '部员册',
                    router: '/character',
                    icon: 'icon fa fa-address-book fa-lg'
                },
                {
                    title: '茶色相簿',
                    router: '/album',
                    icon: 'icon fa fa-image fa-lg'
                },
                {
                    title: '放映机',
                    router: '/video',
                    icon: 'icon fa fa-video-camera fa-lg'
                },
                {
                    title: '云上茶屋',
                    router: '/blog',
                    icon: 'icon fa fa-coffee fa-lg'
                },
            ]
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

            &:nth-child(5) {
                margin: auto;
                margin-right: 0px;
            }
            .navTextHome {
                font-size: 1.3rem;
                color: #df000a;
                font-family: 'ZCOOL KuaiLe', cursive;
                transition: all 200ms ease-in-out;
            }

            &:hover {

                .navTextHome {
                    color: red;
                    text-shadow: 2px 2px 1px black;
                }
            }
        }
    }
    // .navHolder > div::after {
    //     content: '';
    //     display: block;
    //     border-bottom: 2px solid white;
    //     transform: scale(0);
    //     transition: transform 250ms ease-in-out;
    // }
    // .navHolder > div:hover::after {
    //     transform: scale(1);
    // }
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
            font-size: 2.5rem;
        }
    }
</style>
