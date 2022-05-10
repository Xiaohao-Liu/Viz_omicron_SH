<script setup>
// import * as echarts from 'echarts';
// import scrollama from "scrollama"; 
import { ref, defineEmits, onMounted } from 'vue'
import bubble from './bubble.vue'

const emit = defineEmits(['_show_story'])
const id = ref("sec-1")
const count = ref("0")
// const scrolly = ref()
// step.style("height", stepH + "px");
// function init() {
//     // let scrolly = this.$refs.scrolly
//     let figure = scrolly.value.getElementsByTagName("figure")[0];
//     // let article = scrolly.getElementsByTagName("article");
//     // let step = scrolly.getElementsByClassName("step-"+this.id);

//     let scroller = scrollama();

//     scroller
//         .setup({
//             container: scrolly,
//             graphic: figure,
//             step: ".step-sec-1",
//             offset: 1,
//             debug: false
//         })
//         .onStepEnter((resp)=>{
//             count.value = resp.index
//             // console.log("asf")
//         });
// }

// onMounted(()=>{
//     init()
// })

</script>

<template>
<div class="chart-div title03" ></div>
  <section >
    <!-- <figure  id="top">
        <p></p>
    </figure> -->


    
    <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>“没有食欲，一天只能吃一两顿”</p>
            <p>除了身体健康受到影响，产生肠胃问题之外，饮食状况也给很多上海民众带来心理层面的压抑。并会因此没有胃口，主动减少饮食摄入。如此循环往复，身体和心理都释放出问题信号。
            </p>
      </div>
	</div>
  <div class="chart-div" id="part3_bar" ><div style="font-size:14px;color:#666;text-align:center;">饮食问题对心理的影响比生理更加严重</div></div>
  <div class="content-div">
      <div class="content-wrap">
              <!-- <p class="subtitle"><span>物资</span></p> -->
              <p>某抗疫互助信息共享文档的创建者小王回忆到，自从4月5日没有如期解封后，被网上铺天盖地的各种负面信息所笼罩，加上做饭条件有限、食材不足，她一天只吃一两顿饭。</p>
              <p>“共享文档刚开放编辑权限的时候，我基本上每隔五分钟就要去看一眼。那几天，我几乎所有的空余时间都花在帮助大家找组织、拉群和搜集可用的信息这些事情上。”小王说,“只有在搜集和整理有效信息到共享文档里、帮助到别人的时候，我才能稍微缓解一点自己的焦虑。”</p>
              <p>一位在上海全域静态管理后始终在一线奔走的饿了么骑手小哥说“刚全面封控的那个阶段，我有时候逛一天也未必能买到顾客需要的东西。现在（4月18日），上海的混乱风波已经过去了，基本没有骑手去买高价商品了。”</p>
              <p>5月9号的晚上，这位骑手小哥告诉我们：“现在政府已经开始往小区陆续递送物资了，只有个别小商贩以拿货价的120%的价格销售部分稀缺菜品。”</p>
            <p>随着上海每日新增的数字不断降低，“天价菜”也成为了历史。就像骑手小哥说的那样，最混乱的那个上海已经被有效管控了。56.9%的受访者都在问卷调查的最后表达了“一起正在慢慢变好”的信念。</p>

              <p>上海在2022年春天的故事还没讲完。</p>
              <p>所有人都期待着，那一天的到来——可以自由吃水果、零食和蔬菜的一天。</p>

      </div>
    </div>
    <div class="options" style="margin:30px atuo;">
        <p>如果你有什么故事想要分享，可以点击按钮填写问卷</p>
        <a style="float:none;margin:20px auto;" href="https://www.wjx.cn/vj/QoV3Siq.aspx">查看求助信息</a>
    </div>

    <div class="content-div">
      <div class="content-wrap end">
              <!-- <p class="subtitle"><span>物资</span></p> -->
                <p><strong>数据来源：</strong>
                <br/>调查问卷、求助网站
                <br/>问卷数据说明：对上海居民进行问卷定向投放，投放时间在2022年4月19日-28日。有效问卷共552份，填写问卷的人涵盖学生、工薪族、老人和抗疫一线工作者，其中绝大多数是能熟练使用智能手机的青壮年，问卷结论有一定局限性。</p>
                <p>求助信息数据说明：求助信息数据库内容来自对上海抗疫互助网站“I ♥ shanghai”的定时持续爬取。正文部分的数据来自该网站4月10日-14日共7124条求助内容。</p>
                <p><strong>参考资料：</strong>
                <br/>上海市第七次人口普查数据</p>

                <p><br/></p>
                <p><strong>指导老师</strong>：叶韦明</p>
                <p><strong>北京大学财经传媒出品</strong></p>

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
.title03{
  border:none;
  width:100vw;
  height:140px;
  margin-top:100px;
    background-position: center;
    background-size:contain ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/title03.png');
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
