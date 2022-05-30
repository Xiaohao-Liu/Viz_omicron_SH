<script setup>
import * as echarts from 'echarts';
import scrollama from "scrollama"; 
import { ref, defineEmits, onMounted } from 'vue'
import bubble from './bubble.vue'

const emit = defineEmits(['_show_story'])
const id = ref("sec-1")
const count = ref("0")
const scrolly = ref()
// step.style("height", stepH + "px");
function init() {
    // let scrolly = this.$refs.scrolly
    let figure = scrolly.value.getElementsByTagName("figure")[0];
    // let article = scrolly.getElementsByTagName("article");
    // let step = scrolly.getElementsByClassName("step-"+this.id);

    let scroller = scrollama();

    scroller
        .setup({
            container: scrolly,
            graphic: figure,
            step: ".step-sec-1",
            offset: 1,
            debug: false
        })
        .onStepEnter((resp)=>{
            count.value = resp.index
        });
}

function _show_story(){
    emit("_show_story")
}

onMounted(()=>{
    init()
})

</script>

<template>
  <section >
    <!-- <figure  id="top">
        <p></p>
    </figure> -->


    <div class="chart-div" id="top" ></div>
    <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p><span  class="">“平价粽子来咯！”5月29日，端午节前在上海市锦博苑小区的某团购群内，一条团购粽子的链接被发出后，不到一天，就成团了215单。</span></p>

              <p><span  class="">20天前，该街道还在呼吁：“非必要不购买改善型食品，如酒水、饮料、香烟、休闲零食、甜点小食、奶茶咖啡等非生活必需品。——由由八居委 2022年5月9日”</span></p>
      </div>
	</div>
  <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>28日，上海市闵行区某高校已经封校76天。在这两个多月里，该校研究生小壮为了吃饱，用洗面奶换过方便面；为了满足“咖啡瘾”，也用方便面换过咖啡；为了抽到分配水果的机会“虔诚祷告”。他感慨道：“之前要是有人跟我说2022年的上海吃不上饭，我是肯定不信的。”</p>
              <p>“吃不饱”和“吃不好”成为过去两个月里，上海居民最普遍的生活状态。<br/>
              “送不到”和“不能送”则是外界对物资流转最常见的无奈。
              </p>
              <p>横亘在上海所有市民面前的，是巨大的物资供需鸿沟。</p>
              <p>它撕裂开的是，随着封控时长日益增长，生活必需品需求和远无法满足供给的诸多障碍之间的突出矛盾。</p>
      </div>
	</div>
  <div class="chart-div" id="bottom" ></div>
  <bubble></bubble>
  <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>下图为上海重要防疫政策出台时间线，以及每日上海新增新冠病例数（包含确诊与无症状）变动情况。</p>
              <p>3月28日，以黄浦江为界，浦东浦西交替封城。随着更多无症状患者被持续发现，上海根据不同区域实际情况延长封控时间。不少对解封保持乐观态度的居民，顿时陷入屯粮不足的尴尬境地。</p>
      </div>
	</div>
    <div ref="scrolly">
        
        <figure :class="'part '+ ('part-'+count)"> 
            <!-- {{count}} -->
        </figure>
        <article ref="box">
        <div class="step step-sec-1" data-step="1">
        </div>
        <div class="step step-sec-1" data-step="2">
        </div>
        <div class="step step-sec-1" data-step="3">
        </div>
        <div class="step step-sec-1" data-step="4">
        </div>
        <div class="step step-sec-1" data-step="5">
        </div>
        <div class="step step-sec-1" data-step="6">
        </div>
        <!-- <div :class="'step step-'+id" data-step="7">
        </div> -->
    </article>
    </div>
    <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>在日新增五位数的背后，是一个又一个想要就医治疗的感染者和一群又一群惶恐不安的密接者；是他们对同住者无尽的抱歉和对下个环境未知的恐惧。从对“14天后就解封”逐渐不抱希望的等待，到习惯并接受现有生活的平静。</p>
              <p>这些数据能够告诉我们，疫情扩散正在被遏制。  </p>
              <p>这些数据没有告诉我们，疫情下的上海生活是什么样？</p>
              <p>我们试图从民众生活的关键——吃饭入手，了解这段时间全域静态管理下的大多数人。</p>

      </div>
    </div>
    <div class="options">
      <div class="scrolldown" @click="_show_story"><a href="#story">阅读故事</a></div>
      <a id='database_button' href="http://120.77.96.185/" target="_blank">查看求助信息</a>
        
    </div>
    <div class="chart-div" id="bottom" ></div>
    <div id="story"></div>
    
</section>
</template>


<style scoped lang="scss">
@import "../assets/variable.scss";
section{
    width: 650px;
    margin:auto;
}
figure{
    height: 76vh;
    top:12vh;
}
.step{
    height: 35vh;
    // border:1px solid red;
    p{
        text-shadow: 0px 0px 5px white;
    }
}
.step .title{
    color: #000;
    font-size: $title-font-size !important;
}
#top{
    background-position: center;
    background-size:contain ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/face.png');
    background-color: transparent;
}
#bottom{
  height:200px;
    background-position: center;
    background-size:500px ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/dot.png');
    background-color: transparent;
}
.chart-div{
    border:none;
}
.part{
    background: transparent;
    width: 1000px;
    background-size: cover;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: -175px;
    transition:ease .5s;
}
.part-0{
  background-image: url('../assets/images/all/timeline01.png');
}
.part-1{
  background-image: url('../assets/images/all/timeline02.png');
}
.part-2{
  background-image: url('../assets/images/all/timeline03.png');
}
.part-3{
  background-image: url('../assets/images/all/timeline04.png');
}
.part-4{
  background-image: url('../assets/images/all/timeline05.png');
}
.part-5{
  background-image: url('../assets/images/all/timeline06.png');
}
// .part-6{
//   background-image: url('../assets/images/all/timeline07.png');
// }
@media (max-width: 640px){

#top{
  width: 100vw;
  margin-left: -20px;
}
  section{
    width: calc(100% - 40px);
    margin:auto;
}

figure.part{
    width: 100%;
    background-size: contain;
    top: 12vh;
    margin: 0px;
}

.scrolldown {
  display: flex;
  a{
    margin: auto;
  }
}


.part-0{
  background-image: url('../assets/images/mobile/timeline01.png');
}
.part-1{
  background-image: url('../assets/images/mobile/timeline02.png');
}
.part-2{
  background-image: url('../assets/images/mobile/timeline03.png');
}
.part-3{
  background-image: url('../assets/images/mobile/timeline04.png');
}
.part-4{
  background-image: url('../assets/images/mobile/timeline05.png');
}
.part-5{
  background-image: url('../assets/images/mobile/timeline06.png');
}
}
</style>
