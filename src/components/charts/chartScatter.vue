<script setup>
import { ref, onMounted } from 'vue'
import * as  d3 from 'd3';
const data = ref([])
const box = ref("null")
const count = ref(0)
  function init_data(){
      let d = []
      for(let i = 0; i<16;i++){
        for(let j = 0; j< 16; j++){
          d.push([i,j,{
            size: 10,
            color: "#d3d3d3"
          }])
        }
      }
      return d
    }
function init(){
      data.value = init_data();
      box.value = d3.select("#c5678")

      step_0()
}
function step_0(){
  box.value.selectAll('.overall').data(data.value)
  .classed('status1', false)
  .classed('fade', false)
  // .transition().duration(500)
  // .style("background", "#d3d3d3")
  .style("top",(d)=>{return d[0] * (500/16) + "px"})
  .style("left",(d)=>{return d[1] * (500/16) + "px"})

  // ---
  
  box.value.selectAll('.point.inner').data(data.value)
  // .transition().duration(500)
  .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
  .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

  box.value.selectAll('.point.inner2').data(data.value)
  // .transition().duration(500)
  // .style("background", "#d3d3d3")
  .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
  .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

  box.value.selectAll('.inner')
  .classed('fade', false)
  box.value.selectAll('.food')
  .classed('status1', false)
  box.value.selectAll('.point.manage')
  .classed('status2', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.inner2.r')
  .classed('status3', false)
  
}
function step_1(){
    box.value.selectAll('.food')
  // .transition().duration(500)
  .classed('status1', true)

  // ---
  box.value.selectAll('.overall')
  .classed('fade', false)

  box.value.selectAll('.point.inner').data(data.value)
  // .transition().duration(500)
  .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
  .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

  box.value.selectAll('.point.inner2').data(data.value)
  // .transition().duration(500)
  // .style("background", "#d3d3d3")
  .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
  .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

  box.value.selectAll('.inner')
  .classed('fade', false)
  box.value.selectAll('.point.manage')
  .classed('status2', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.inner2.r')
  .classed('status3', false)
}
function step_2(){
  box.value.selectAll('.overall')
  .classed('fade', true)

  box.value.selectAll('.point.inner').data(data.value)
  // .style("background", "#d3d3d3")
  .style("top",(d)=>{return d[0] * (500/16) + "px"})
  .style("left",(d)=>{return d[1] * (500/16) + "px"})

  // ---
  box.value.selectAll('.point.inner2').data(data.value)
  // .transition().duration(500)
  // .style("background", "#d3d3d3")
  .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
  .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

  box.value.selectAll('.inner')
  .classed('fade', false)
  box.value.selectAll('.point.manage')
  .classed('status2', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.inner2.r')
  .classed('status3', false)

}
function step_3(){
  box.value.selectAll('.point.manage')
  .classed('status2', true)

  // ---
  box.value.selectAll('.inner')
  .classed('fade', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.manage2')
  .classed('status2', false)
  box.value.selectAll('.inner2.r')
  .classed('status3', false)
}
function step_4(){
  box.value.selectAll('.inner')
  .classed('fade', true)
  box.value.selectAll('.manage2')
  .classed('status2', true)

  box.value.selectAll('.point.inner2').data(data.value)
  // .style("background", "#d3d3d3")'
  // transition().duration(500)
  .style("top",(d)=>{return d[0] * (500/16) + "px"})
  .style("left",(d)=>{return d[1] * (500/16) + "px"})

  // --- 
  box.value.selectAll('.inner2.r')
  .classed('status3', false)

}
function step_5(){
  box.value.selectAll('.inner2.r')
  .classed('status3', true)
}
function step_img(c){
  count.value = c;
}
function stop_img(){
  count.value = 0;
}

onMounted(()=>{init()})
defineExpose({ 
    step_0, step_1, step_2, step_3, step_4, step_5, step_img, stop_img
})
</script>
<template>
  <div class="chart" id="c5678" ref="chart">
    <div :class="'part '+('part-'+count)"></div>
    
    <div :class="'point overall ' + (i<55?'food ':'not-food ')" v-for="i in 256" :key="i"/>

    <div :class="'point inner ' + (i<62?'manage ':'not-manage ')" v-for="i in 256" :key="i"/>

    <div :class="'point inner2 ' + (i<250?'manage2 ':'not-manage2 ') + ((i<=254 && i >=250)?'r ':'')" v-for="i in 256" :key="i"/>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variable.scss";
.chart{
  height: 100%;
  width: 100%;
  position: relative;
  /* transform: rotate(90deg); */
  .point{
    background: #d3d3d3;
    position: absolute;
    height: 14px;
    width: 14px;
    border-radius: 10px;
    left: 0px;
    top: 0px;
    z-index: 3;
    transition: ease 1s;
  }
  .point.inner{
    z-index: 2;
    background: #9e9e9d;
  }
  .point.inner2{
    z-index: 1;
    background: #9e9e9d;
  }
  .point.status1{
    background: #9e9e9d;
  }
  .point.fade{
    transition: 1.5s;
    top: 500px !important;
    opacity: 0;
  }
  .point.status2{
    background: #c4a892;
  }
  .point.status3{
    background: #aa351b;
  }
}
.part{
  width: 100%;
    background-size: cover;
    height: 100%;
    background-color:$bg-color;
    position: absolute;
    z-index: 100;
    background-position: center;
    background-repeat: no-repeat;
    transition:ease .5s;
}
.part.part-0{
  opacity:0;
}
.part.part-1{
  background-image: url('../../assets/images/all/part1_3_01.png');
}
.part.part-2{
  background-image: url('../../assets/images/all/part1_3_02.png');
}
.part.part-3{
  background-image: url('../../assets/images/all/part1_3_03.png');
}
.part.part-4{
  background-image: url('../../assets/images/all/part1_3_04.png');
}
.part.part-5{
  background-image: url('../../assets/images/all/part1_3_05.png');
}
</style>