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
            offset: 0.33,
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
            <p>2022年春，上海。在全市封城的第20天，物资充沛，但仍有很多人濒临断粮。<br/>
            4月13日，上海某社区群里卖到50元10斤装的面粉，在19日还有人求购不到。</p>

            <p>横亘在上海所有市民面前的，是巨大的物资供需鸿沟。<br/>
它撕裂开的是，随着封控时长日益增长的生活必需品需求和远无法满足供给、配送的诸多条件之间存在的突出问题。</p>

		</div>
	</div>
    <bubble></bubble>
    <div class="content-div">
		<div class="content-wrap">
            <!-- <p class="subtitle"><span>物资</span></p> -->
            <p>做为国际大都市的上海，在今天，为何会有这么多人吃不饱？吃不好？</p>

		</div>
	</div>
    <div ref="scrolly">
        
        <figure :class="'part '+ ('part-'+count)"> 
            {{count}}
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
        <div :class="'step step-'+id" data-step="7">
        </div>
    </article>
    </div>
    <div class="content-div">
		<div class="content-wrap">
            <!-- <p class="subtitle"><span>物资</span></p> -->
            <p>随着上海新增感染者持续下降，上海疫情控制政策已见成效，动态清零的目标即将实现。</p>

		</div>
	</div>
    <div class="options"><a id='database_button' href="https://hurricanemariasdead.com/database.html">查看求助信息</a>
        <div class="scrolldown" @click="_show_story"><a href="#story">阅读故事</a></div>
    </div>
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
    height: 75vh;
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
  background-image: url('../assets/images/timeline/timeline01.png');
}
.part-1{
  background-image: url('../assets/images/timeline/timeline02.png');
}
.part-2{
  background-image: url('../assets/images/timeline/timeline03.png');
}
.part-3{
  background-image: url('../assets/images/timeline/timeline04.png');
}
.part-4{
  background-image: url('../assets/images/timeline/timeline05.png');
}
.part-5{
  background-image: url('../assets/images/timeline/timeline06.png');
}
.part-6{
  background-image: url('../assets/images/timeline/timeline07.png');
}
</style>
