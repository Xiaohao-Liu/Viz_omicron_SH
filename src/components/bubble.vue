<script setup>
// import * as $ from "jquery";
import * as d3 from 'd3';

import bubble from '../assets/bubble.json';

import {ref, onMounted, watch} from 'vue';

const native = ref("0")
const status = ref("0")
const type= ref("0")

const num_veg = ref(20)
const num_protein = ref(20)
const num_fruit = ref(20)
const num_carbon = ref(20)


function myfunc(div){
    let WIDTH = 350;
    let HEIGHT = 400;
    let marginLeft = 50;
    let marginRight = 10;
    let marginTop = 10;
    let marginBottom = 10;
    let width = WIDTH - marginTop - marginBottom;
    let height = HEIGHT - marginLeft - marginRight;

    let svg = d3.select(div)
    .append("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT)
    // .call(responsivefy)
    .append("g")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", 'translate('+marginLeft+' '+marginTop+')');

    let scaleX = d3.scaleLinear().range([0, width]).domain([1, 20]);
    let scaleR = d3.scaleLinear().range([0, 30]).domain([0, Math.sqrt(179)]);//把数据求根，让圆的面积差距小一点
    const data = bubble;
        data.forEach(e => {
            e.veg = +e.veg;
            e.fruit = +e.fruit;
            e.protein = +e.protein;
            e.carbon = +e.carbon;
        })
        function sortData() {
            let vegAmount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            let fruitAmount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            let proteinAmount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            let carbonAmount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            let output = {};
            //筛选数据
            let dataCopy = data;
            // let native = $("#native option:selected").val();
            // let status = $("#status option:selected").val();
            // let type = $("#type option:selected").val();
            if (native.value !== "0") {
                dataCopy = dataCopy.filter(item => item.native === native.value);
            }
            if (status.value !== "0") {
                dataCopy = dataCopy.filter(item => item.status === status.value);
            }
            if (type.value !== "0") {
                dataCopy = dataCopy.filter(item => item.type === type.value);
            }
            //分类汇总
            dataCopy.forEach(e => {
                vegAmount[e.veg]++ ;    
                fruitAmount[e.fruit]++ ;
                proteinAmount[e.protein]++ ;
                carbonAmount[e.carbon]++ ;
            });
            output.veg = vegAmount;
            output.fruit = fruitAmount;
            output.protein = proteinAmount;
            output.carbon = carbonAmount;
            return output;
        }

        //初始图
        let initData = sortData();
        let vegCircles = svg.append("g")
        .attr("class", "vegG")
        .selectAll("circle")
        .data(initData.veg, d => d.key)
        .enter()
        .append("circle")
        .attr("class", "vegCircles")
        .attr("cx", function(d, i) {
            return scaleX(i);
        })
        .attr("cy", "50")
        .attr("r", d => scaleR(Math.sqrt(d)))
        .attr("fill", "#22925cbb")
        // .on("mouseover", mouseover)
        // .on("mousemove", mousemove)
        // .on("mouseout", mouseout)
        let fruitCircles = svg.append("g")
        .attr("class", "fruitG")
        .selectAll("circle")
        .data(initData.fruit, d => d.key)
        .enter()
        .append("circle")
        .attr("class", "fruitCircles")
        .attr("cx", function(d, i) {
            return scaleX(i);
        })
        .attr("cy", "150")
        .attr("r", d => scaleR(Math.sqrt(d)))
        .attr("fill", "#ab3921bb")
        // .on("mouseover", mouseover)
        // .on("mousemove", mousemove)
        // .on("mouseout", mouseout)
        let proteinCircles = svg.append("g")
        .attr("class", "proteinG")
        .selectAll("circle")
        .data(initData.protein, d => d.key)
        .enter()
        .append("circle")
        .attr("class", "proteinCircles")
        .attr("cx", function(d, i) {
            return scaleX(i);
        })
        .attr("cy", "250")
        .attr("r", d => scaleR(Math.sqrt(d)))
        .attr("fill", "#d4842bbb")
        // .on("mouseover", mouseover)
        // .on("mousemove", mousemove)
        // .on("mouseout", mouseout)
        let carbonCircles = svg.append("g")
        .attr("class", "carbonG")
        .selectAll("circle")
        .data(initData.carbon, d => d.key)
        .enter()
        .append("circle")
        .attr("class", "carbonCircles")
        .attr("cx", function(d, i) {
            return scaleX(i);
        })
        .attr("cy", "350")
        .attr("r", d => scaleR(Math.sqrt(d)))
        .attr("fill", "#fbc909bb")
        // .on("mouseover", mouseover)
        // .on("mousemove", mousemove)
        // .on("mouseout", mouseout)


        function draw(){
            let newData = sortData();
            let veg = newData.veg;
            let fruit = newData.fruit;
            let protein = newData.protein;
            let carbon = newData.carbon;
            vegCircles
            .data(veg)
            .transition()
            .duration(1000)
            .attr("r", d => scaleR(Math.sqrt(d)));

            fruitCircles
            .data(fruit)
            .transition()
            .duration(1000)
            .attr("r", d => scaleR(Math.sqrt(d)));

            proteinCircles
            .data(protein)
            .transition()
            .duration(1000)
            .attr("r", d => scaleR(Math.sqrt(d)));

            carbonCircles
            .data(carbon)
            .transition()
            .duration(1000)
            .attr("r", d => scaleR(Math.sqrt(d)));
            
            //get天数
            // let outputNum = [];
            // //图省事的低效率循环，可以改
            // for (let index = 0; index < veg.length; index++) {
            //     const vegNum = veg[index];
            //     const fruitNum = fruit[index];
            //     const proteinNum = protein[index];
            //     const carbonNum = carbon[index];
            //     if (vegNum > 0) {
            //         outputNum[0] = index;
            //     }
            //     if (fruitNum > 0) {
            //         outputNum[1] = index;
            //     }
            //     if (proteinNum > 0) {
            //         outputNum[2] = index;
            //     }
            //     if (carbonNum > 0) {
            //         outputNum[3] = index;
            //     }
            // }
            function get_middle(arr){
                let sum = 0;
                for (let index = 0; index < arr.length; index++) {
                    sum += arr[index];
                }
                let cum = 0
                for (let index = 0; index < arr.length; index++) {
                    cum += arr[index];
                    if(sum/2 < cum){
                        return index + 1
                    }
                }
            }
            // console.log(veg)
            num_veg.value = get_middle(veg)
            num_fruit.value = get_middle(fruit)
            num_protein.value = get_middle(protein)
            num_carbon.value = get_middle(carbon)
            // $("#veg").html(outputNum[0]);
            // $("#fruit").html(outputNum[1]);
            // $("#protein").html(outputNum[2]);
            // $("#carbon").html(outputNum[3]);
        }

        //选择框变一次画一次
        // $("#native").change(() => {
        //     let dataNow = draw();
        // })
        // $("#status").change(() => {
        //     let dataNow = draw();
        // })
        // $("#type").change(() => {
        //     let dataNow = draw();
        // })
        draw()
        watch(native, ()=>{
            draw()
        })
        watch(status, ()=>{
            draw()
        })
        watch(type, ()=>{
            draw()
        })
}

onMounted(()=>{myfunc("#bubble-veg")})

</script>


<template>
	<div class="container">
		<p>如果2022年4月底，在上海</p>
        <br/>
		<div class="select-box">
			你是<select class="small" name="native" id="native" v-model="native">
			  <option value="0">本地与否</option>
			  <option value="是">本地人</option>
			  <option value="否">外地人</option>
			</select>
		作为
			<select class="small" name="status" id="status" v-model="status">
			  <option value="0">职业</option>
			  <option value="工薪族">工薪族</option>
			  <option value="学生">学生</option>
			  <option value="一线工作者（如大白、志愿者、骑手等）">一线工作者</option>
			  <option value="其他">其他</option>
			</select>
		  </div>
        <div style="height:50px;" margin></div>
        <div class="left">
		    <div :class="'job-board job-' + status">
        </div>
        </div>
		  <div class="right">
            <h5>
			<span class="logo veg"></span>您可能已经<span class="max" id='veg' style="background-color:#fff9f0;box-shadow: none;">{{num_veg}}</span>天没吃蔬菜了。 <span class="day">天</span>
			</h5>
            <h5>
			<span class="logo fruit"></span>您可能已经<span class="max" id='fruit' style="background-color:#fff9f0;box-shadow: none;">{{num_fruit}}</span>天没吃水果了。 <span class="day">天</span>
			</h5>
            <h5>
			<span class="logo protein"></span>您可能已经<span class="max" id="protein" style="background-color:#fff9f0;box-shadow: none;">{{num_protein}}</span>天没吃蛋白质了。 <span class="day">天</span>
			</h5>
            <h5>
			<span class="logo carbon"></span>您可能已经<span class="max" id='carbon' style="background-color:#fff9f0;box-shadow: none;">{{num_carbon}}</span>天没吃主食了。 <span class="day">天</span>
		  </h5>
		  <div class="chart-div" id="bubble-veg"></div>
          <div class="mini">数据说明：气泡图数据来自对上海居民进行问卷定向投放的调查问卷，投放时间在2022年4月19日-28日。有效问卷共552份，填写问卷的人涵盖学生、工薪族、老人和抗疫一线工作者，其中绝大多数是能熟练使用智能手机的青壮年。互动文本中的天数为中位数。</div>
          </div>
	</div>
</template>

<style lang='scss' scoped>
.container{
    width: 100vw;
    margin-left: calc(-50vw + 325px);
    margin-bottom:50px;
    padding-bottom: 400px;
    p{
        font-size:14pt  !important;
    }
}
.chart-div{
    height: 400px;
    width: 400px;
}
.select-box{
    .small{
        height:26px;
        margin:0px 5px;
        margin-bottom:5px;
        border:none;
        border-bottom:2px solid #aaa;
        box-sizing: border-box;
        background: transparent;
        color: #504235;
        font-size: 14pt;
        
    }
}

.right, .left{
    float: left;
    position: relative;
    height: 400px;
    width: 30vw;
    margin-left:10vw;
    .job-board{
        height: 300px;
        width: 500px;
        // background: white;
        background-position:center ;
        background-size: contain;
        background-repeat: no-repeat;
        background-image:url('../assets/images/all/worker.png');
        margin: 10px auto;
    }
    .job-其他{
        background-image:url('../assets/images/all/dot.png');
            background-size: cover;
    transform: rotate(-90deg);
    }
    .job-学生{
        background-image:url('../assets/images/all/student.png');
    }
    .job-一线工作者（如大白、志愿者、骑手等）{
        background-image:url('../assets/images/all/underline.png');
    }
    .chart-div{
        position: absolute;
        top:0px;
        left:0px;
        border:none;
    }
    h5:nth-child(1){
        margin-top:-40px;
    }
    h5{
        height: 100px;
        width: 330px;
        line-height:100px;
        box-sizing: border-box;
        border-bottom:1px solid #aaa;
        position: relative;
        font-weight: normal;
        margin-left:60px;
        .max{
            font-weight: bold;
        }
        .day{
            position:absolute;
            bottom:-20px;
            right:-50px;
            height: 40px;
            width: 40px;
            line-height: 40px;
        }
        .logo{
            // display: block;
            width:30px;
            // background-color:red;
            background-size: 100px;
            background-position: center;
            background-repeat:no-repeat ;
            line-height: 100px;
            height: 30px;
            display: inline-block;
            margin-bottom: -10px;
            margin-right: 5px;
        }
        .logo.veg{
            background-image:url('../assets/images/all/vegetable.png');
        }
        .logo.protein{
            background-image:url('../assets/images/all/meat.png');
        }
        .logo.fruit{
            background-image:url('../assets/images/all/apple.png');
        }
        .logo.carbon{
            background-image:url('../assets/images/all/noodle.png');
        }
    }
    h5:before{
        content:"0";
        position:absolute;
        bottom:-40px;
        left:-50px;
        height: 40px;
        width: 40px;
        line-height: 40px;
    }
    h5:after{
        content:"20";
        position:absolute;
        bottom:-40px;
        right:-20px;
        height: 40px;
        width: 40px;
        line-height: 40px;
    }
}
.right{
    width: calc(50vw - 50px);
    margin-left: 50px;
    height: auto;
    margin-bottom:20px;
    .mini{
        font-size:12px;font-family: 'KaiTi';margin-top:50px;padding:0px 30px;text-align: justify;width: 450px;box-sizing: border-box;
    }
}

@media (max-width: 640px){
  .container{
      width: 100%;
      margin:0px;
      padding-bottom: 50px;
  }
  
  .right, .left{
    float:none ;
    position: relative;
    height: auto;
    width: 100vw;
    margin-left: -20px;
    overflow: hidden;
    .mini{
        width: 100%;
    }
    .job-board{
        width: 100%;
        height: 200px;
    }
     #bubble-veg{
        position: absolute;
        top:40px;
        left: calc(50% - 200px - 6px);
        // left:-40px;
        border:none;
     }
     h5{
         width: 330px;

         margin-left: calc(50% - 165px);
        //  margin-left: 40px;
        .day{
            right:-40px;
        }
     }
     h5:before{
        left:-40px;
    }
    }
    .right h5:nth-child(1){
        margin-top:0px;
    }
    .left{height: 250px;}
}
</style>