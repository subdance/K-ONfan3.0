<template lang="html">
  <div class="tabHolder">
    <el-carousel
      :indicator-position="indicatorPos"
      trigger='click'
      :autoplay='autoplay'
      :height='carouselHeight'
      arrow='always'
      >
      <el-carousel-item
        v-for="item in 5"
        :key="item"
        >
        <div class="introHolder">
          <p ><span class="girlNameText">{{ backName[ item - 1 ] }}</span><span class="subName">{{ backNameJ[ item - 1 ] }}</span></p>
          <p class="girlIntroText">{{ backIntro[ item - 1 ] }}</p>
        </div>
        <img class="bigImg" :src='backPic[ item - 1 ]' alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        autoplay: false,
        nowBackPic: 'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/yui.jpeg',
        backPic: [
          'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/yui.jpeg',
          'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/ritsu.jpeg',
          'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mio.jpeg',
          'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/mugi.jpeg',
          'https://konfan.oss-cn-beijing.aliyuncs.com/image/character/azusa.jpeg',
        ],
        nowGirlName: 'Hirasawa Yui',
        nowGirlIntro: '主唱，主音吉他，团宠',
        backName: ['Hirasawa Yui', 'Tainaka Ritsu', 'Akiyama Mio', 'Kotobuki Tsumugi', 'Nakano Azusa'],
        backNameJ: ['ひらさわ ゆい', 'たいなか りつ', 'あきやま みお', 'ことぶき つむぎ', 'なかの あずさ'],
        backIntro: [
          '主唱，主音吉他，团宠',
          '部长，架子鼓手，搞笑担当',
          '主唱，贝斯手，人气成员',
          '电子琴手，金主',
          '辅音吉他手，唯宠',
        ],
        isIconShow: [true, false, false, false, false],
        carouselHeight: '',
        indicatorPos: 'inside',
      }
    },
    created(){
      this.setHeight();
    },
    methods: {
      setHeight(){
        if(window.innerWidth < 600){
          this.carouselHeight = '300px';
          this.indicatorPos = 'inside';
        }
        else{
          this.carouselHeight = 100 + 'vh';
          this.indicatorPos = 'inside';
        }
      }
    },
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .bigImg {
    width: 100%;
    height: 100vh;
    object-position: center;
    object-fit: cover;
  }
  .tabHolder {
    position: relative;
    width: 100%;
    background-color: #303133;
  }
  .introHolder {
    position: absolute;
    bottom: 10rem;
    left: 20rem;
  }
  .girlNameText {
    font-size: 2.5rem;
    font-weight: 800;
    color: #df000a;
    text-shadow: 3px 3px 1px grey, -1px -1px 1px grey, 1px -1px 1px grey, 0px 0px 0px grey;
    -webkit-text-stroke: 1px white;
    font-family: 'Merienda One', cursive;
  }
  .subName {
    font-size: 2rem;
    font-weight: 800;
    color: #df000a;
    text-shadow: 3px 3px 1px grey, -1px -1px 1px grey, 1px -1px 1px grey, 0px 0px 0px grey;
    -webkit-text-stroke: 1px white;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  .girlIntroText {
    color: #C0C4CC;
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    .tabHolder {
      background-color: black;
      padding-top: 60px;
    }
    .bigImg {
      width: 100%;
      height: 300px;
      object-position: center;
      object-fit: cover;
    }
    .introHolder {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    }
    .girlNameText {
      font-size: 1.5rem;
    }
    .subName {
      font-size: 1.5rem
    }
    .girlIntroText {
      font-size: 1rem;
    }
  }
</style>
