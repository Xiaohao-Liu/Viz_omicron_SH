<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import sec1 from './components/sec1.vue'
import mainpart from './components/mainpart.vue'
import sec2 from './components/sec2.vue'
import sec3 from './components/sec3.vue'
import sec4 from './components/sec4.vue'

import {ref} from 'vue';
</script>

<template>
  <sec-1 @_show_story="_show_story"/>
  <!-- <mainpart v-if="show_story"/> -->
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
@import "assets/global.scss";
@import "assets/landing.scss";
body::after{
  background-image: url('./assets/images/all/bg_pic.png');
}
</style>
