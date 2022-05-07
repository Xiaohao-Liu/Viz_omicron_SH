<script setup>
import * as echarts from 'echarts';
import scrollama from "scrollama"; 
import { ref } from 'vue'

const id = ref("sec-1")

const stepH = Math.floor(window.innerHeight * 0.75);
// step.style("height", stepH + "px");

const figureHeight = window.innerHeight / 2;
const figureMarginTop = (window.innerHeight - figureHeight) / 2;
</script>

<template>
  <section ref="scrolly">
    <figure  :style="{'height':figureHeight + 'px', 'top':figureMarginTop+'px'}">
        <p></p>
    </figure>

    <article ref="box">
        <div :class="'step step-'+id" data-step="1" :style="{'height':stepH + 'px'}">
            <p class="title" >“民以食为天”，上海求助里的饮食裂缝</p>
        </div>
        <div :class="'step step-'+id" data-step="2" :style="{'height':stepH + 'px'}">
            <p>2022年春，上海。在全市封城的第20天，物资充沛，但仍有很多人濒临断粮。
                4月13日，上海某社区群里卖到50元10斤装的面粉，在19日还有人求购不到。</p>
        </div>
        <div :class="'step step-'+id" data-step="3" :style="{'height':stepH + 'px'}">
            <p>横亘在上海所有市民面前的，是巨大的物资供需鸿沟。
它撕裂开的是，随着封控时长日益增长的生活必需品需求和远无法满足供给、配送的诸多条件之间存在的突出问题</p>
        </div>
        <div :class="'step step-'+id" data-step="4" :style="{'height':stepH + 'px'}">
            <div class="options"><a id='database_button' href="https://hurricanemariasdead.com/database.html">查看求助信息</a>
                <div class="scrolldown" @click="_show_story"><a href="#story">阅读故事</a></div>
            </div>
        </div>
    </article>
    <div id="story"></div>
</section>
</template>

<script>
export default {
    mounted(){
        this.init()
    },
    methods:{
        init:function() {
            let scrolly = this.$refs.scrolly
            let figure = scrolly.getElementsByTagName("figure");
            // let article = scrolly.getElementsByTagName("article");
            // let step = scrolly.getElementsByClassName("step-"+this.id);

            let scroller = scrollama();

            scroller
                .setup({
                    container: scrolly,
                    graphic: figure,
                    // parent:  this.$refs.box,
                    step: ".step-sec-1",
                    offset: 0.33,
                    debug: false
                })
                .onStepEnter(()=>{
                    // console.log("asf")
                });
        },
        _show_story:function(){
            this.$emit("_show_story")
        }
    }
}
</script>


<style scoped lang="scss">
@import "../assets/variable.scss";
section{
    width: 650px;
    margin:auto;
}
figure{
    height: 50vh;
    top:25vh;
}
.step{
    height: 75vh;
}
.step .title{
    color: #000;
    font-size: $title-font-size !important;
}
</style>
