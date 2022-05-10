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
              <p>“没有食欲，一天只能吃一两顿”</p>
            <p>除了身体健康受到影响，产生肠胃问题之外，饮食状况也给很多上海民众带来心理层面的压抑。并会因此没有胃口，主动减少饮食摄入。如此循环往复，身体和心理都释放出问题信号。
            </p>
            <p>饮食问题对心理的影响比生理更加严重</p>
      </div>
	</div>
  <div class="chart-div" id="part3_bar" ></div>
  <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>一个抗议互助信息共享文档的创建者小王自从4月5日没有如期解封后，被网上铺天盖地的各种负面信息所笼罩，加上做饭条件有限、食材不足，她一天只吃一两顿饭。“共享文档刚开放编辑权限的时候，我基本上每隔五分钟就要去看一眼。那几天，我几乎所有的空余时间都花在帮助大家找组织、拉群和搜集可用的信息这些事情上。”小王说：“只有在搜集和整理有效信息到共享文档里、帮助到别人的时候，我才能稍微缓解一点自己的焦虑。”</p>

              <p>解封后最想吃水果、零食、蔬菜</p>
      </div>
	</div>
<div class="chart-div" id="want_to_eat" ></div>

    <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>一位在上海全域静态管理后始终在一线奔走的饿了么骑手小哥说“刚全面封控的那个阶段，我有时候逛一天也未必能买到顾客需要的东西。现在（4月18日），上海的混乱风波已经过去了，基本没有骑手去买高价商品了。”5月9号的晚上，这位骑手小哥告诉我们：“现在政府已经开始往小区陆续递送物资了，只有个别小商贩以拿货价的120%的价格销售部分稀缺菜品。”</p>

              <p>随着上海每日新增的数字不断降低，天价菜也成为了历史。就像骑手小哥说的那样，最混乱的那个上海已经被有效管控了。xx%的受访者都在问卷调查的最后表达了“一起正在慢慢变好”的信念。</p>

              <p>上海在2022年春天的故事还没讲完。<br/>
              所有人都期待着，那一天的到来——可以自由吃水果、零食和蔬菜的一天。</p>

      </div>
    </div>

    <div class="content-div">
      <div class="content-wrap end">
              <!-- <p class="subtitle"><span>物资</span></p> -->
                <p>数据来源：
                <br/>调查问卷、求助网站
                <br/>问卷数据说明：
                <br/>网站数据说明：知网是国内目前最权威的学术文献数据库之一，收录了《中国优秀博硕士学位论文全文数据库（CDMD）》以及《中国引文数据库》。《中国优秀硕博士学位论文全文数据库》的收录年限为1984年至今，是目前国内相关资源最完备、高质量、连续动态更新的中国优秀博硕士学位论文全文数据库。本篇的数据收集时间为2019年3月27日。</p>
                <p>参考资料：</p>


                <p>作者：徐鹏 李天舒 夏睿 韩亚君
                <br/>指导老师：叶韦明
                <br/>北京大学财经传媒出品</p>

        </div>
    </div>
    
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

#part3_bar{
    background-position: center;
    background-size:contain ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/part3_bar.png');
    background-color: transparent;
}
#want_to_eat{
    height:200px;
    background-position: center;
    background-size:800px ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/want_to_eat.png');
    background-color: transparent;
}

.chart-div{
    border:none;
}
.end p{
    font-size: 10pt;
    text-align: center;
}
</style>
