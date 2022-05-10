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
                  if(resp.index==base + 5){scatter.value.step_5();tab.value=1;  scatter.value.stop_img(); return}
                  if(resp.index==base + 6){tab.value=2; scatter.value.step_img(1); return}
                  if(resp.index==base + 7){tab.value=2; scatter.value.step_img(2); return}
                  if(resp.index==base + 8){tab.value=2; scatter.value.step_img(3); return}
                  if(resp.index==base + 9){tab.value=2; scatter.value.step_img(4); return}
                  if(resp.index==base + 10){tab.value=2; scatter.value.step_img(5); return}
                  if(resp.index==base + 11){scatter.value.step_img(6);tab.value=3; return}
                  if(resp.index==base + 12){scatter.value.step_img(7);tab.value=3; return}
                  if(resp.index==base + 13){scatter.value.step_img(8);tab.value=3; return}
                  if(resp.index==base + 14){scatter.value.step_img(9);tab.value=3; return}
                  if(resp.index==base + 15){scatter.value.step_img(10);tab.value=3; return}
                  if(resp.index==base + 16){scatter.value.step_img(10);tab.value=3.2; return}
                }).onStepExit((resp) => {
                    if(resp.index==5 && tab.value==1){tab.value=0; return}
                    // if(resp.index==7 && tab.value==3){scatter.value.stop_img(); return}
                    if(resp.index==16 && tab.value==3.2){tab.value=0; return}
                  });
        }
  
onMounted(()=>{init();})

</script>

<template>
<div class="chart-div title01" ></div>
  <div class="content-div">
        <div class="content-wrap">
          <p>自从3月1日，出现第一例无症状感染者以来，上海疫情一直反反复复，愈演愈烈。长时间的全域静态管理给未曾充分准备的上海民众带来了诸多生活问题。<br/>
          各类民间互助组织，如雨后春笋般应时而生，来自各行各业的志愿者，自发参与到成千上万个的民间救助的解决推动进程中。<br/>
          我们爬取了一家互助规模较大、志愿体系较完善的抗疫网站中的求助信息，并在4月19号之后，通过问卷星向目前居住在上海的民众发放并回收了552份有效问卷，
</p>

		</div>
	</div>
  <section ref="scrolly">
      <!-- <figure class="right" ref="left">
          <p>{{count}}</p>
      </figure> -->
      <figure class="left">
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
                <p>通过计算这1517条求助文本中的词频，我们可以在这张词云图中清晰的看到他们的诉求重点。</p>
                <p>下图是对这1517条求助文本的词频统计，蔬菜、米、面等主食这些基本的日常食物，是求助的重灾区，饮用水甚至也成为了重要诉求，婴儿这一特殊群体也值得关注。
                </p>
                <div class="image" id="wordcloud"></div>
              </div>
          </div>
          <div :class="'ll step step-'+id" data-step="4">
              <div class="right">
                <p>其中，有305条求助信息，涉及官方食材发放中的管理问题，占12%。这些求助者，有的没有收到食材方面的物资；有的虽然收到了物资，但由于物资数量太少，或物资并非急需，并不能解决生存困境；另外有少部分的求助者收到的物资已经变质。</p>
                <p>物资数量和种类是物资发放中最主要的问题</p>
                <div class="image" id="chart_3"></div>

<p>
可见，物资是否有效被输送到位的背后，折射着大众对当前疫情防控管理中乱象丛生的不满。<br/>
<span class="ref">“一整个公寓没有物资，街道不让商家做饭。全楼的人没有物资，根本什么都买不到！没有发过一次物资！”——浦东区 86</span><br/>
<span class="ref">“我在家里的方便面都已经吃完了.需要买个电饭锅煮面条吃，可我打上海市保供热线超市电话，他说需要居委会购买！可居委会电话始终无人接听状态！”——宝山区 199</span><br/>
<span class="ref">“物资短缺（米面、蔬菜），从浦西封控开始到现在，五千人的小区仅发过一次食物物资！！物资急缺！！”——嘉定区 1802</span><br/>
<span class="ref">“虹口区凉城街道文苑2居委车站北路727弄，封闭以来未曾收到米，油类物资，蔬菜和肉是腐烂变质”——虹口区 2103</span>
</p>              </div>
          </div>
          <div :class="'l step step-'+id" data-step="5">
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
              <div :class="parseInt(tab)==i?'active':''" v-for="i in 3" :key="i"></div>
            </div>

            <div class="step temp_step" data-step="1"></div>
            <div class="step temp_step" data-step="2"></div>
            <div class="step temp_step" data-step="3"></div>
          </div>

          <div :class="'ll step step-'+id" data-step="6" style="margin-top:40vh;">
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
                  <p class="subtitle">2. 饮食单一：物资多样化成奢侈</p>
                  <p>
                    “吃了十几天白萝卜包菜蛋饺了，看着是每顿有荤有素，但是每天食材都差不多。”已经因封校吃了40多天盒饭的研究生小壮吐槽道：“且不说饭菜味道如何，主要是根本不够吃，等不到下一次放饭就饿了。”<br/>
                      诸如此类的情况并不在少数，通过对大家每天所吃的食物种类和疫情居家以来总共吃过的食物种类数据进行调查分析和可视化呈现，形成了左边这张气泡图。
                  </p>
                  <p>气泡图主要基于受访者日均吃到的食物种类和自居家以来截止到问卷收集时总共吃到的食物种类两个维度进行展示。</p>
                </div>
              </div>
          </div>

          <div :class="'step step-'+id" data-step="8">
              <div class="right slide-bar">
                <div>
                  <p>
                    横轴表示每天吃到的食物种类数量，数字越大则代表居家以来饮食越丰富；纵轴表示总共吃过的食物种类，数字越大则代表饮食变化越多样。</p>
                </div>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="9">
              <div class="right slide-bar">
                <div>
                  <p>图中气泡大小代表该类人群数量的多少，例如红色气泡代表每天吃6种食物，总共吃12种食物的有24人。其余深色气泡代表了最多数量的几种人群，他们普遍分布在左下角。</p>
                </div>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="10">
              <div class="right slide-bar">
                <div>
                  <p> 蓝色虚线代表了日均所吃食物种类等于总共所吃食物种类，也就是说分布在这条线上的人群，自居家以来每天都在吃同样的东西。<br/>
越趋于左下方的人群代表每日所吃食物种类和总共吃过的食物种类数量都越少；反之，越趋于右上方分布的气泡所代表的人群，则自居家以来每天都有丰富的饮食种类可以选择。 </p>
                </div>
              </div>
          </div>
          <div :class="'lll step step-'+id" data-step="11">
              <div class="right slide-bar">
                <div>
                  <p>
                    日均吃到6种食材的人最多，但他们之间的食物多样性差异很大。红色虚线框中了日均吃到6种食材的全部人群，可以看到最上面的气泡代表了该受访者虽然每天只吃六种食材，但居家以来一共吃过30种食材，几乎可以做到5天不重样的饮食丰富度。
                  </p>
                  <p>其中，一天吃不到3种食材的占比24.3%，而平常制作一份蛋炒饭就要用到不止3种食材。<br/>
不少上海高校学生反映，尽管学校有食堂，但依然发愁温饱。除了像小壮这种日复一日单调的食材供给和吃不饱的情况外，还面临着严重的食品安全问题。“因为食堂有工作人员确诊阳性，学校为解决几千人的供餐问题，就需要靠外面供应商，他们收费更高，食品质量还得不到保障。前几天配菜里的虾都已经酸了，因此而拉肚子的同学不在少数。”小壮介绍道。</p>
                  <div class="image" id="want_to_eat"></div>
                  <p>
                    那么，在食材匮乏的常态中，大家普遍想吃到什么呢？<br/>
截止到4月28日，有47.46%的受访者急需水果，43.48%的受访者希望吃到零食。一位在普陀区的一线工作人员在问卷中透露，自己已经20天没有吃到水果了。始终活跃在抗疫互助活动中的小王说：“生活已经这么难了，能吃点零食、喝瓶可乐就是我最大的精神寄托了。”通过对数据的交叉分析，可以发现这种将零食、饮料作为精神寄托的想法，在一线工作人员中尤为明显。</p>

<p>为何在普遍挣扎的吃饱的饮食需求状态中，零食和水果成为大家最想吃的东西？<br/>
的确，自上海封城以来主要的人力和运力，都以保障生存为基础，首先满足生活必需品的供应。但随着封控时间越来越长，仅靠饱腹为目的的饮食摄入，严重破坏了大家的营养均衡。宿舍楼曾有阳性确诊的高校学生余君在被封控的一个多月里，学习平均每周会发一次水果，但也不是每个人都能得到的。因果蔬摄入过少，她已经便秘很久了。这与问卷调查结果显示一致，学生和工薪族都非常需要均衡营养、有益健康的水果。</p>

<p>此外，那些平时生活中不起眼的葱姜蒜和糖盐醋等调味品，也在这个时期成为了不可忽视的存在。食不知味的背后也是这些配料缺供的问题折射。
                  </p>
                </div>
              </div>
          </div>

          <div :class="'l step step-'+id" data-step="12">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">3. 需求重灾区：母婴、老人、病患等特殊人群</p>
                  <p>
                    <span class="ref">“14个月大宝宝奶粉买不到，纸尿裤买不到，宝宝蛋白质过敏喝的适度水解奶粉。街道保障热线说目前所居住的小区对母婴服务未开放。找过居委，打过12345，找过妇联都表示没有渠道购买。自行找跑腿但是说母婴店几乎没开。”——长宁区2728</span>  </p>
                  <p>与吃相关的1517条求助中，特殊人群被提到607次，接近一半。</p>
                </div>
              </div>
          </div>

          <div :class="'l step step-'+id" data-step="13">
              <div class="right slide-bar">
                <div>
                  <p>其中婴儿和儿童最多，被提到147次，孕产妇被提到20次。  </p>
                  <p>突如其来的长时间疫情封控，使得孕产妇所必需的营养补充和新生儿的常吃的奶粉供给问题，在许多家庭中都显得捉襟见肘。</p>
                  <p>奶粉需要的都是特别的，具体到牌子和时间段，有的小宝宝换牌子会呕吐</p>
                </div>
              </div>
          </div>
           <div :class="'l step step-'+id" data-step="14">
              <div class="right slide-bar">
                <div>
                  <p>同时，病患的食物忌口、营养品补充，甚至是流食注射所需的针管等工具也随着越来越久的封控中逐渐稀缺。这些需要特殊饮食的人群，在物资相对紧缺的时期变得尤为无助。消化道疾病和手术的原因，只能吃特定的食物（详情可以筛选一下“特殊食物”）。残疾人。</p>
                </div>
              </div>
          </div>

          <div :class="'l step step-'+id" data-step="15">
              <div class="right slide-bar">
                <div>
                  <p>这些病人、残疾人往往也正是老年人，子女没有办法在身边照顾。老人被提到234次，仅次于婴儿和儿童。</p>
                </div>
              </div>
          </div>

          <div :class="'l step step-'+id" data-step="16">
              <div class="right slide-bar">
                <div>
                  <p>失业和经济困难7次。甚至没有钱，面对高昂的团购付不起。有的失业是因为疫情。</p>
                  <p>而且在当前“正常需求”尚无法满足的情况下，这些有“特殊需求”的群体更难以被照顾到。</p>
                </div>
              </div>
          </div>

          <div :class="'lll step step-'+id" style="height:240vh;" data-step="17">
              <div class="right slide-bar">
                <div>
                  <p>除了食材和必需食品不足，厨具、灶具等做饭条件也会限制民众的饮食，所有关于吃的求助中，15.6%是关于饮食条件的。这些求助者多为在上海租房的年轻工薪族，他们平时就餐以公司食堂、外卖等方式为主，居住环境中很少涉及在家做饭的场景。上海没有居委统一管理、因人数太少无法发起的团购的公寓里，也大都是这些沪漂。</p>
                  <p>“我和室友连灶台都没有，封控以来，就是靠小电锅煮东西吃。这样凑合时间长了真的受不了。”居住在静安寺附近一个老小区的小王说：“后来还是楼上一个独居阿姨，看我们不容易，收拾出来一套锅具和电磁炉解了我们燃眉之急。”</p>
                  <p>厨房用具是除食材之外最主要的求助对象</p>
                  <div class="aside">
                    <div class="image" id="un_eat_able"></div>
                    <div class="desc">所有和饮食相关的求助内容中，非食物被提及到38次，占1.5%。其中，锅等厨房用具提到32次。缺煤气、缺电也是一大难题。</div>
                  </div>
                  <p>
                    在社会身份中，是否是上海本地人对饮食质量的高低存在相关性影响。据上海市第七次人口普查数据显示，外省来沪人口占比42.1%。孤立无援、无亲无故成为许多“沪漂”求助无门背后的重要原因。他们一方面是像小王一样没有在家生过火、做过饭，缺乏基本的设施条件，另一方面是居住环境所带来的限制，因租住在公寓而没有相关的管理以致无法进行有序的居家隔离和及时获得各类支援物资，“封城以来，就做了一次核酸，做抗原两次有发现阳性。并且一次物资都没发过，还抢不到菜。快要断粮了。”住在宝山区的小董求助道：“居委说我们不归他们管，是流动人口归城管管，城管说只管商铺，不管公寓人员，说让找警察，警察又说找居委。”</p>

                  <p>而上海的本地人则可以借助自己已有的亲属关系和社会网络，在突如其来的疫情封控期间获得更多的支持和帮助。但同时他们也更需要操心亲友中老年人的生活问题。小王在整理求助信息的共享文档时也表达过同样的感触：“我是一人吃饱全家不愁，但是家里有老人，尤其是独居老人真的很困难。”
                  </p>
                  <div class="image" id="part3_waidiren"></div>
                  <p>值得一提的是，疫情下的宠物们所面临的饮食问题也并不亚于人类。求助狗粮、猫粮的声音也在诸多平台铺天盖地的求助信息中发着微弱的呼救。迫不得已接受天价倒卖和尝试临期过期宠物食品的表述也时常出现在那些信息列表之中。</p>
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
    top:calc(50vh - 250px);
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
.step.ll{
  height: 150vh;
  padding-top: 50px;
  box-sizing: border-box;
}
.step.lll{
  height: 180vh;
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
  background: #DBC1AF88;
  border-radius: 10px;
  padding: 20px;
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
  height:140px;
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
  right: 50px;
  width: 500px;
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

#un_eat_able{
  height: 150px;
  background-size: 400px;
  background-position: left;
  background-image: url('../assets/images/all/un_eat_able.png');
}

#part3_waidiren{
  height: 500px;
  background-size: 400px;
  background-position: center;
  background-image: url('../assets/images/all/part3_waidiren.png');
}
#want_to_eat{
  height: 100px;
  background-size: 600px;
  background-position: center;
  background-image: url('../assets/images/all/want_to_eat.png');
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
.aside{
  height: 150px;
  width: 100%;
  .image{
    width: 50%;float:left;
  }
  .desc{
    width:50%;float:left;
  }
}
.slide-bar{
    // height: 100%;
    width:460px;
    // box-sizing: border-box;
    // margin-left:65vw;
    position: absolute;
    right:50px;
    background: transparent;
    border: none;
}
#right-slide-bar{
  background-color: rgba(0,0,0,.2);
  height: 1450vh;
  position: absolute;
  right:50px;
  width: 500px;
  margin-top:-10vh;
}
</style>
