<script setup>
import * as echarts from 'echarts';
import scrollama from "scrollama";
import { ref, onMounted } from 'vue'
import chartScatter from './charts/chartScatter.vue';

const id = ref("sec-2")
const count = ref(0)
const tab = ref(0)
const scrolly = ref()
const scatter = ref()

        function init() {
            
            let figure = scrolly.value.getElementsByTagName("figure")[0];

            // let article = scrolly.getElementsByTagName("article");
            // let step = scrolly.getElementsByClassName("step-"+this.id);

            let scroller = scrollama();

            scroller
                .setup({
                    container: scrolly,
                    graphic: figure,
                    step: ".step-sec-2",
                    offset: 0.5,
                    debug: false
                })
                .onStepEnter((resp)=>{
                  const base = 0
                  count.value = resp.index
                  if(resp.index==base + 0){scatter.value.step_0();tab.value=0; return}
                  if(resp.index==base + 1){scatter.value.step_1(); tab.value=0; return}
                  if(resp.index==base + 2){scatter.value.step_2(); tab.value=0; return}
                  if(resp.index==base + 3){scatter.value.step_3(); tab.value=0; return}
                  if(resp.index==base + 4){scatter.value.step_4(); tab.value=0; return}
                  if(resp.index==base + 5){scatter.value.step_5();tab.value=1; return}
                  if(resp.index==base + 6){tab.value=2; scatter.value.stop_img(); return}
                  if(resp.index==base + 7){scatter.value.step_img(1);tab.value=3; return}
                  if(resp.index==base + 8){scatter.value.step_img(2);tab.value=3; return}
                  if(resp.index==base + 9){scatter.value.step_img(3);tab.value=3; return}
                  if(resp.index==base + 10){scatter.value.step_img(4);tab.value=3; return}
                  if(resp.index==base + 11){scatter.value.step_img(5);tab.value=3; return}
                }).onStepExit((resp) => {
                    if(resp.index==5 && tab.value==1){tab.value=0; return}
                    // if(resp.index==7 && tab.value==3){scatter.value.stop_img(); return}
                    if(resp.index==11 && tab.value==3){tab.value=0; return}
                  });
        }
  
onMounted(()=>{init();})

</script>

<template>
<div class="chart-div title01" ></div>
  <div class="content-div">
        <div class="content-wrap">
          <p>自3月x以来，上海疫情一直反反复复，愈演愈烈。长时间的全域静态管理给未曾充分准备的上海民众带来了诸多生活问题。<br/>
各类民间互助组织，如雨后春笋般应时而生，来自各行各业的志愿者，自发参与到成千上万个的民间救助的解决推动进程中。<br/>
我们通过技术手段爬取了一家互助规模较大、志愿体系较完善的抗疫网站中的求助信息，并在4月19号之后，通过问卷星向目前居住在上海的民众发放并回收了552份有效问卷。
</p>

		</div>
	</div>
  <section ref="scrolly">
      <!-- <figure class="right" ref="left">
          <p>{{count}}</p>
      </figure> -->
      <figure class="left">{{count}},{{tab}}
        <chart-scatter ref="scatter"/>
      </figure>

      <article style="margin-top:-325px">
          <div :class="'step step-'+id" data-step="1">
              <div class="right">
                <p>这是上海抗疫互助网站“I ♥ shanghai”自4月10日到14日期间，全部7124条求助信息。反映了上海疫情封控期间，围绕求医、购药、断粮等民众生活中的诸多生存困境。</p>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="2">
              <div class="right">
                <p>其中，有1517条求助信息涉及“饮食问题”，占比21%。</p>
                <p>“吃不上”“吃不饱”“吃不好”，成为上海本轮疫情爆发以来突出的民生问题。</p>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="3">
              <div class="right">
                <p>在全部1517条饮食相关的求助信息中</p>
                <div class="image" id="wordcloud"></div>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="4">
              <div class="right">
                <p>其中，有305条求助信息，涉及官方组织的食材发放问题，占12%。主要表现为没有收到食材方面的物资和收到的物资并不能解决生存困境这两方面诉求</p>
                <div class="image" id="chart_3"></div>

<p>
可见，物资是否有效被输送到位的背后，折射着大众对当前疫情防控管理中乱象丛生的不满。<br/>
“一整个公寓没有物资，街道不让商家做饭。全楼的人没有物资，根本什么都买不到！没有发过一次物资！”——浦东区 86<br/>
“我在家里的方便面都已经吃完了.需要买个电饭锅煮面条吃，可我打上海市保供热线超市电话，他说需要居委会购买！可居委会电话始终无人接听状态！”——宝山区 199<br/>
“物资短缺（米面、蔬菜），从浦西封控开始到现在，五千人的小区仅发过一次食物物资！！物资急缺！！”——嘉定区 1802<br/>
“虹口区凉城街道文苑2居委车站北路727弄，封闭以来未曾收到米，油类物资，蔬菜和肉是腐烂变质”——虹口区 2103
</p>              </div>
          </div>
          <div :class="'step step-'+id" data-step="5">
              <div class="right">
                <p>
                  在这1517条与饮食相关的求助信息中，缺少食材、食品的诉求占比97.6%。<br/>
求助者普遍对蔬菜的需求较为强烈，23.7%的人想要价格处于合理区间且没有腐坏变质的蔬菜包供给。<br/>
其次，有16.4%的求助信息提到急需大米、挂面、小麦粉等主食充饥。<br/>
<br/>
对于生鲜和饮用水的求助信息也占比颇多，分别为12.8%和12.7%。这意味着，平均不到9个求助者中就有一个人不能实现“饮用水自由”。<br/>
<br/>
值得注意的是，婴儿相关和营养品类的食品也十分让人瞩目，占比均在9%以上。<br/>

<br/>
另外，仅占总饮食相关求助信息1.5%的部分则是关于煤电厨具等做饭设施方面。尽管比例极低，但也揭开了不少外来“沪漂”的生活一角。<br/>

                </p>
              </div>
          </div>
          <div id="right-slide-bar" ref="slide_bar_container">
            <div :class="'tab-bar '+(tab>0?'fixed':'')" ref="tab_bar">
              <div :class="tab==i?'active':''" v-for="i in 3" :key="i"></div>
            </div>

            <div class="step temp_step" data-step="1"></div>
            <div class="step temp_step" data-step="2"></div>
            <div class="step temp_step" data-step="3"></div>
          </div>

          <div :class="'l step step-'+id" data-step="6" style="margin-top:40vh;">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">1. 温饱生命线：米面粮油紧缺</p>
                  <p>
                    “物资短缺（米面、蔬菜），从浦西封控开始到现在，五千人的小区仅发过一次食物物资！！物资急缺！！”“公寓300多人现在断粮，苦捱度日，求提供泡面，面条等物资。”类似这样的求助信息在网站中随处可见。
<br/>                    可见，本应作为生存基本保障的主食碳水，却在集中物资发放中频繁缺位。
<br/>                    住在静安区的一处老居民楼的小杨回忆到，在4月5日后收到的第一批官方援助物资是红糖、绿茶和蜂蜜。“你不能说这些东西没用，但是对于一群快吃不上饭的人来说，这肯定不是急需的物资。”
<br/>                    据调查问卷结果显示，每天有超过12个小时都处于饥饿状态的人占比6%。即至少每17个人中就有1个每天都吃不饱饭。一位来自普陀区的家庭主妇表示，最久有持续15天没有吃过碳水类的主食，并留言道：“要饿死了。我们在要饭！”
<br/>                    事实上，这样的情况尚属个例，过半数的受访者一天仅有三小时以内的饥饿感。华东某高校研究生小壮感慨道，看到有老师全家仅靠米粥在维持。
<br/>                    可见，米面粮油等主食供应在此期间已经成为当之无愧的生存生命线。
<br/>                    “不是吃不饱，只是吃不好”成为生存线上的普遍状态。

                  </p>
                </div>
              </div>
          </div>

          <div :class="'l step step-'+id" data-step="7">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">2. 需求重灾区：母婴、老人、病患等特殊人群</p>
                  <p>
                    “14个月大宝宝奶粉买不到，纸尿裤买不到，宝宝蛋白质过敏喝的适度水解奶粉。街道保障热线说目前所居住的小区对母婴服务未开放。找过居委，打过12345，找过妇联都表示没有渠道购买。自行找跑腿但是说母婴店几乎没开。”——长宁区2728  
<br/>
突如其来的长时间疫情封控，使得孕产妇所必需的营养补充和新生儿的常吃的奶粉供给问题，在许多家庭中都显得捉襟见肘。
<br/>
同时，病患的食物忌口、营养品补充，甚至是流食注射所需的针管等工具也随着越来越久的封控中逐渐稀缺。这些需要特殊饮食的人群，在物资相对紧缺的时期变得尤为无助。而且在当前“正常需求”尚无法满足的情况下，这些有“特殊需求”的群体更难以被照顾到。

                  </p>
                </div>
              </div>
          </div>

          <div :class="'l step step-'+id" data-step="8">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">3. 饮食单一：物资多样化成奢侈</p>
                  <p>
                    “吃了十几天白萝卜包菜蛋饺了，看着是每顿有荤有素，但是每天食材都差不多。”已经因封校吃了40多天盒饭的研究生小壮吐槽道：“且不说饭菜味道如何，主要是根本不够吃，等不到下一次放饭就饿了。”<br/>
                      诸如此类的情况并不在少数，通过对大家每天所吃的食物种类和疫情居家以来总共吃过的食物种类数据进行调查分析和可视化呈现，形成了左边这张气泡图。
                  </p>
                </div>
              </div>
          </div>

          <div :class="'step step-'+id" data-step="9">
              <div class="right slide-bar">
                <div>
                  <p>
                    “吃了十几天白萝卜包菜蛋饺了，看着是每顿有荤有素，但是每天食材都差不多。”已经因封校吃了40多天盒饭的研究生小壮吐槽道：“且不说饭菜味道如何，主要是根本不够吃，等不到下一次放饭就饿了。”<br/>
                      诸如此类的情况并不在少数，通过对大家每天所吃的食物种类和疫情居家以来总共吃过的食物种类数据进行调查分析和可视化呈现，形成了左边这张气泡图。
                  </p>
                </div>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="10">
              <div class="right slide-bar">
                <div>
                  <p>
                    “吃了十几天白萝卜包菜蛋饺了，看着是每顿有荤有素，但是每天食材都差不多。”已经因封校吃了40多天盒饭的研究生小壮吐槽道：“且不说饭菜味道如何，主要是根本不够吃，等不到下一次放饭就饿了。”<br/>
                      诸如此类的情况并不在少数，通过对大家每天所吃的食物种类和疫情居家以来总共吃过的食物种类数据进行调查分析和可视化呈现，形成了左边这张气泡图。
                  </p>
                </div>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="11">
              <div class="right slide-bar">
                <div>
                  <p>
                    “吃了十几天白萝卜包菜蛋饺了，看着是每顿有荤有素，但是每天食材都差不多。”已经因封校吃了40多天盒饭的研究生小壮吐槽道：“且不说饭菜味道如何，主要是根本不够吃，等不到下一次放饭就饿了。”<br/>
                      诸如此类的情况并不在少数，通过对大家每天所吃的食物种类和疫情居家以来总共吃过的食物种类数据进行调查分析和可视化呈现，形成了左边这张气泡图。
                  </p>
                </div>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="12">
              <div class="right slide-bar">
                <div>
                  <p>
                    “吃了十几天白萝卜包菜蛋饺了，看着是每顿有荤有素，但是每天食材都差不多。”已经因封校吃了40多天盒饭的研究生小壮吐槽道：“且不说饭菜味道如何，主要是根本不够吃，等不到下一次放饭就饿了。”<br/>
                      诸如此类的情况并不在少数，通过对大家每天所吃的食物种类和疫情居家以来总共吃过的食物种类数据进行调查分析和可视化呈现，形成了左边这张气泡图。
                  </p>
                </div>
              </div>
          </div>
          
      </article>
    </section>
</template>

<style lang="scss" scoped>
@import "../assets/variable.scss";

figure{
    height: 500px;
    width: 500px;
    top:25vh;
    background: none;
}
.step{
    height: 75vh;
    margin:0px;
}
.step.l{
  height: 100vh;
  padding-top: 50px;
  box-sizing: border-box;
}
.right{
  width: 500px;
  margin-left: calc(50vw);
  *{font-size:$font-size !important;text-align: justify;}
  .subtitle{
    font-size:20pt !important;
    font-weight: bold;
  }
  color: $note-color;
  background: $highlight;
  border:1px solid rgba(249, 223, 192, 0.35);
}
.left{
  margin-right:120px;
  width: 500px;
  margin-left: calc(50vw - 1120px / 2);
}

.title01{
  border:none;
  width:100vw;
  height:200px;
    background-position: calc(50% - 50px);
    background-size:contain ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/title01.png');
    background-color: transparent;
}
.tab-bar{
  height: 50px;
  width: 100%;
  div{
    width: calc(33% - 10px);
    height: 10px;
    background: white;
    float:left;
    margin:5px 5px;
  }
  div.active{
    background: #aa351b;
  }
}
.tab-bar.fixed{
  position: fixed;
  top:5px;
  width: 35vw;
  z-index: 3;
}
.image{
  background-position: center;
  background-size:contain ;
  background-repeat: no-repeat;
    height: 200px;
  width: 100%;
    margin: 10px 0px;
}

#wordcloud{
  height:300px;
  background-size: contain;
  background-image: url('../assets/images/all/wordcloud.png');
}
#chart_3{
  height:100px;
  background-size: 100%;
  background-image: url('../assets/images/chart_4.png');
}
.slide-bar{
    // height: 100%;
    width:35vw;
    // box-sizing: border-box;
    // margin-left:65vw;
    position: absolute;
    right:0px;
    background: transparent;
    border: none;
}
#right-slide-bar{
  background-color: rgba(0,0,0,.2);
  height: 650vh;
  position: absolute;
  right:0px;
  width: 35vw;
  margin-top:-10vh;
}
</style>
