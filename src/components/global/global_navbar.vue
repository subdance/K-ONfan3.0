<template lang="html">
  <div class="navHolder">
        <div><router-link to="/"  @click='changeFixPlayer(true)'><span class="navTextHome">HTT活动室&nbsp</span><i class="icon fa fa-home fa-lg" style="color: white;"></i></router-link></div>
        <div><router-link to="/c" @click='changeFixPlayer(true)'><span class="navTextHome">部员册&nbsp</span><i class="icon fa fa-address-book fa-lg" style="color: white;"></i></span></router-link></div>
        <div><router-link to="/a" @click='changeFixPlayer(true)'><span class="navTextHome">茶色相簿&nbsp</span><i class="icon fa fa-image fa-lg" style="color: white;"></i></span></router-link></div>
        <div><router-link to="/v" @click='changeFixPlayer(true)'><span class="navTextHome">放映机&nbsp</span><i class="icon fa fa-video-camera fa-lg" style="color: white;"></i></span></router-link></div>
        <div><router-link to="/t" ><span class="navTextHome" style="color: white;">雲上茶屋&nbsp</span><i class="icon fa fa-coffee fa-lg" style="color: white;"></i></span></router-link></div>
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
    methods: {
        changeFixPlayer(reg){
        },
    },
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

        div {
            text-align: center;
            margin-right: 1.2rem;

            &:nth-child(5) {
                margin: auto;
                margin-right: 0px;
            }

            .navTextHome {
                font-size: 16px;
                color: #df000a;
                font-weight: bold;
            }

            .navTextHome:hover {
                color: red;
                text-shadow: 2px 2px 1px black;
                transition: all 200ms ease-in-out;
            }
        }
    }
    .navHolder > div::after {
        content: '';
        display: block;
        border-bottom: 2px solid white;
        transform: scale(0);
        transition: transform 250ms ease-in-out;
    }
    .navHolder > div:hover::after {
        transform: scale(1);
    }
    img {
        height: 60px;
        margin-top: -3px;
    }
    .iconHolder {
        display: inline-block;
        height: 60px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    @media only screen and (max-width: 600px) {
        .navHolder > div {
            flex-grow: 1;
            margin-right: 0.5rem;
        }
        .navHolder > div::after {
            content: '';
            position: relative;
            top: 0.5rem;
            display: block;
            border-bottom: 2px solid white;
            transform: scale(0);
            transition: transform 250ms ease-in-out;
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
