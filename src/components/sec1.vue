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
            // console.log("asf")
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
              <p class="ref">“非必要不购买改善型食品，如酒水、饮料、香烟、休闲零食、甜点小食、奶茶咖啡等非生活必需品。” ——由由八居委 2022年5月9日</p>

              <p>无独有偶，在闵行区读研的小壮趁着买药的机会买了葡萄糖和凉茶颗粒，“这样四舍五入就等于有王老吉喝了。”他感慨道：“两个月前，要是有人跟我说2022年的上海让人吃不上饭，我是肯定不信的。”</p>
              <p>那么，做为国际大都市的上海，在今天，为何会有这么多人吃不饱？吃不好？</p>
      </div>
	</div>
  <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>横亘在上海所有市民面前的，是巨大的物资供需鸿沟。<br/>
              它撕裂开的是，随着封控时长日益增长的生活必需品需求和远无法满足供给的诸多条件之间存在的突出问题。
              </p>
      </div>
	</div>
    <bubble></bubble>
    <div ref="scrolly">
        
        <figure :class="'part '+ ('part-'+count)"> 
            <!-- {{count}} -->
        </figure>
        <article ref="box">
        <div :class="'step step-'+id" data-step="1">
        </div>
        <div :class="'step step-'+id" data-step="2">
        </div>
        <div :class="'step step-'+id" data-step="3">
        </div>
        <div :class="'step step-'+id" data-step="4">
        </div>
        <div :class="'step step-'+id" data-step="5">
        </div>
        <div :class="'step step-'+id" data-step="6">
        </div>
        <!-- <div :class="'step step-'+id" data-step="7">
        </div> -->
    </article>
    </div>
    <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>在这些日增五位数的背后，是一个又一个想要就医治疗的感染者和一群又一群惶恐不安的密接者；是他们对同住者无尽的抱歉和对下个环境未知的恐惧。从对“下个14天后就解封”逐渐不抱希望的等待，到习惯并接受现有生活的平静。</p>
              <p>这些数据能够告诉我们，疫情扩散正在被遏制。 </p>
              <p>这些数据没有告诉我们的。。。</p>
              <p>那么上海，那里的人过的怎么样？</p>
              <p>我们试图从民众生活的最基础——吃饭问题上，撕开一角，了解这月余的全域静态管理下的大多数人。</p>
      </div>
    </div>
    <div class="options"><a id='database_button' href="https://hurricanemariasdead.com/database.html">查看求助信息</a>
        <div class="scrolldown" @click="_show_story"><a href="#story">阅读故事</a></div>
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
</style>
