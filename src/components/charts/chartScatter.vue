<template>
  <div class="chart" id="c5678" ref="chart">
    
    <div :class="'point overall ' + (i<55?'food ':'not-food ')" v-for="i in 256" :key="i"/>

    <div :class="'point inner ' + (i<62?'manage ':'not-manage ')" v-for="i in 256" :key="i"/>

    <div :class="'point inner2 ' + (i<250?'manage2 ':'not-manage2 ') + ((i<=254 && i >=250)?'r ':'')" v-for="i in 256" :key="i"/>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  data(){
    return {
      data:[],
      box:null
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init_data(){
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
    },
    init(){
      this.data = this.init_data();
      this.box = d3.select("#c5678")

      this.step_0()
    },
    step_0(){
      this.box.selectAll('.overall').data(this.data)
      .classed('status1', false)
      .classed('fade', false)
      // .transition().duration(500)
      // .style("background", "#d3d3d3")
      .style("top",(d)=>{return d[0] * (500/16) + "px"})
      .style("left",(d)=>{return d[1] * (500/16) + "px"})

      // ---
      
      this.box.selectAll('.point.inner').data(this.data)
      // .transition().duration(500)
      .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
      .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

      this.box.selectAll('.point.inner2').data(this.data)
      // .transition().duration(500)
      // .style("background", "#d3d3d3")
      .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
      .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

      this.box.selectAll('.inner')
      .classed('fade', false)
      this.box.selectAll('.food')
      .classed('status1', false)
      this.box.selectAll('.point.manage')
      .classed('status2', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.inner2.r')
      .classed('status3', false)
      
    },
    step_1(){
       this.box.selectAll('.food')
      // .transition().duration(500)
      .classed('status1', true)

      // ---
      this.box.selectAll('.overall')
      .classed('fade', false)

      this.box.selectAll('.point.inner').data(this.data)
      // .transition().duration(500)
      .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
      .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

      this.box.selectAll('.point.inner2').data(this.data)
      // .transition().duration(500)
      // .style("background", "#d3d3d3")
      .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
      .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

      this.box.selectAll('.inner')
      .classed('fade', false)
      this.box.selectAll('.point.manage')
      .classed('status2', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.inner2.r')
      .classed('status3', false)
    },
    step_2(){
      this.box.selectAll('.overall')
      .classed('fade', true)

      this.box.selectAll('.point.inner').data(this.data)
      // .style("background", "#d3d3d3")
      .style("top",(d)=>{return d[0] * (500/16) + "px"})
      .style("left",(d)=>{return d[1] * (500/16) + "px"})

      // ---
      this.box.selectAll('.point.inner2').data(this.data)
      // .transition().duration(500)
      // .style("background", "#d3d3d3")
      .style("top",(d)=>{return (d[0] % 3) * (500/16) + "px"})
      .style("left",(d)=>{return (d[1] % 16) * (500/16) + "px"})

      this.box.selectAll('.inner')
      .classed('fade', false)
      this.box.selectAll('.point.manage')
      .classed('status2', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.inner2.r')
      .classed('status3', false)

    },
    step_3(){
      this.box.selectAll('.point.manage')
      .classed('status2', true)

      // ---
      this.box.selectAll('.inner')
      .classed('fade', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.manage2')
      .classed('status2', false)
      this.box.selectAll('.inner2.r')
      .classed('status3', false)
    },
    step_4(){
      this.box.selectAll('.inner')
      .classed('fade', true)
      this.box.selectAll('.manage2')
     .classed('status2', true)

      this.box.selectAll('.point.inner2').data(this.data)
      // .style("background", "#d3d3d3")'
      // transition().duration(500)
      .style("top",(d)=>{return d[0] * (500/16) + "px"})
      .style("left",(d)=>{return d[1] * (500/16) + "px"})

      // --- 
      this.box.selectAll('.inner2.r')
      .classed('status3', false)

    },
    step_5(){
      this.box.selectAll('.inner2.r')
      .classed('status3', true)
    },
  }
}
</script>

<style lang="scss" >
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
</style>