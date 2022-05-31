<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted,ref } from 'vue'
import sec1 from './components/sec1.vue'
import mainpart from './components/mainpart.vue'
import sec2 from './components/sec2.vue'
import sec3 from './components/sec3.vue'
import sec4 from './components/sec4.vue'
// import wx from './assets/js/wx'

// onMounted(()=>{
//     wx.config({
//     debug: false, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
//     appId: '', // 必填，公众号的唯一标识
//     timestamp: , // 必填，生成签名的时间戳
//     nonceStr: '', // 必填，生成签名的随机串
//     signature: '',// 必填，签名
//     jsApiList: [] // 必填，需要使用的 JS 接口列表
//   });
// })
</script>

<template>
  <sec-1 @_show_story="_show_story"/>
  <sec-2 v-if="show_story"/>
  <sec-3 v-if="show_story"></sec-3>
  <sec-4 v-if="show_story"></sec-4>
</template>

<script>
export default {
  components: { mainpart, sec3, sec2 },
  data(){
    return {
      show_story: true
    }
  },
  methods:{
    _show_story(){
      this.show_story = true
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family:'KaiTi';
  src: url('./assets/SIMKAI.TTF')format('truetype'),/* Safari, Android, iOS */
}

@import "assets/global.scss";
@import "assets/landing.scss";
body::after{
  background-image: url('./assets/images/all/bg_pic.png');
}
</style>
