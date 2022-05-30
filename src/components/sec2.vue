<script setup>
import * as echarts from 'echarts';
import scrollama from "scrollama";
import { ref, onMounted, nextTick } from 'vue'
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
                  if(resp.index==base + 4){ tab.value=0; return}
                  if(resp.index==base + 5){scatter.value.step_4(); tab.value=0; return}
                  if(resp.index==base + 6){scatter.value.step_5();tab.value=0;  scatter.value.stop_img(); return}
                  if(resp.index==base + 7){scatter.value.step_6();tab.value=0;  scatter.value.stop_img(); return}
                  if(resp.index==base + 8){scatter.value.step_7();tab.value=0;  scatter.value.stop_img(); return}
                  if(resp.index==base + 9){scatter.value.step_8();tab.value=0;  scatter.value.stop_img(); return}
                  if(resp.index==base + 10){scatter.value.step_9();tab.value=0;  scatter.value.stop_img(); return}
                  if(resp.index==base + 11){scatter.value.step_10();tab.value=0;  scatter.value.stop_img(); return}
                  if(resp.index==base + 12){scatter.value.step_11();tab.value=1;  scatter.value.stop_img(); return}
                  if(resp.index==base + 13){tab.value=2; scatter.value.step_img(1); return}
                  if(resp.index==base + 14){tab.value=2; scatter.value.step_img(2); return}
                  if(resp.index==base + 15){tab.value=2; scatter.value.step_img(3); return}
                  if(resp.index==base + 16){tab.value=2; scatter.value.step_img(4); return}
                  if(resp.index==base + 17){tab.value=2; scatter.value.step_img(5); return}
                  if(resp.index==base + 18){scatter.value.step_img(6);tab.value=3; return}
                  if(resp.index==base + 19){scatter.value.step_img(7);tab.value=3; return}
                  if(resp.index==base + 20){scatter.value.step_img(8);tab.value=3; return}
                  if(resp.index==base + 21){scatter.value.step_img(9);tab.value=3; return}
                  if(resp.index==base + 22){scatter.value.step_img(10);tab.value=3.2; return}
                }).onStepExit((resp) => {
                    if(resp.index==12 && tab.value==1){tab.value=0; return}
                    // if(resp.index==7 && tab.value==3){scatter.value.stop_img(); return}
                    if(resp.index==22 && tab.value==3.2){tab.value=0; return}
                  });
        }
  
onMounted(()=>{init();})

const slide_bar_container = ref()
const end_right_slide = ref()
onMounted(()=>{init()})

nextTick(()=>{
  // console.log(end_right_slide.value, slide_bar_container.value)
  let height = end_right_slide.value.offsetTop + end_right_slide.value.offsetHeight - slide_bar_container.value.offsetTop
  slide_bar_container.value.style.height = height + "px"
})
</script>

<template>
<div class="chart-div title01" ></div>
  <div class="content-div">
        <div class="content-wrap">
          <p>自3月1日出现第一例无症状感染者以来，上海疫情一直反复。五月底，越来越多的上海市民有机会从居家状态中走出来，在附近自由采购物资。</p>
          <p>在过去的两个月里，长时间的全域静态管理，给未曾充分准备的上海民众带来了诸多生活问题。为了改善这一局面，在“封城”初期，各类民间互助组织如雨后春笋般应时而生，来自各行各业的志愿者，自发参与到成千上万个民间救助的解决进程中。</p>

          <p>我们定时持续爬取了一家互助规模较大、志愿体系较完善的抗疫网站中的求助信息，并进行内容分类和编码，发现饮食问题在所有的求助信息中最突出。在4月19号之后，我们通过问卷星向目前居住在上海的民众定向发放并回收了552份有效问卷，试图了解上海饮食情况的全貌，试图回答什么环节在突发公共危机下的温饱保障中最为重要。</p>


		</div>
	</div>
  <section ref="scrolly">
      <!-- <figure class="right" ref="left">
          <p>{{count}}</p>
      </figure> -->
      <figure :class="'left '+(tab>0?'top ':'') +(count==12?'hidden ':'') + (count>12?'normal':'') ">
        <chart-scatter ref="scatter"/>
      </figure>

      <article style="margin-top:-325px">
          <div :class="'step step-sec-2'" data-step="1">
              <div class="right">
                <p>这是上海抗疫互助网站“I ♥ shanghai”自4月10日到14日期间，全部<strong>7124</strong>条求助信息。反映了上海疫情封控期间，围绕求医、购药、断粮等民众生活中的诸多生存困境。</p>
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="2">
              <div class="right">
                <p>其中，有<strong>1517</strong>条求助信息涉及“饮食问题”，占比<strong>21%</strong>。</p>
                <p>“吃不上”“吃不饱”“吃不好”，成为上海本轮疫情爆发以来突出的民生问题。</p>
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="3">
              <div class="right">
                <p>下图是对这1517条求助文本的词频统计，蔬菜、米、面等主食这些基本的日常食物，是求助的重灾区，饮用水甚至也成为了重要诉求，婴儿这一特殊群体也值得引起关注。
                </p>
                <div class="image" id="wordcloud"></div>
              </div>
          </div>
          <div :class="'ll step step-sec-2'" data-step="4">
              <div class="right">
                <p>其中，有<strong>305</strong>条求助信息，涉及官方食材发放中的管理问题，占<strong>12%</strong>。</p>
                  <p>这些求助者，有的没有收到食材方面的物资；有的虽然收到了物资，但由于物资数量太少，或物资并非急需，并不能解决生存困境；另外有少部分的求助者收到的物资已经变质。</p>
                <div class="image" id="gv_things"><div class="t">物资数量和种类是物资发放中最主要的问题</div></div>    
              </div>
          </div>

          <div :class="'ll step step-sec-2'" data-step="5">
              <div class="right">

                  <p>值得关注的是，这305条反映管理问题的求助中，存在物资发放问题的社区，也往往伴随着对于核酸检测不及时、阳性未转接、“一刀切”等疫情防控问题的反映。这些求助，折射着大众对当前疫情防控管理中乱象丛生的不满。</p>
                  <p><span class="ref">“一整个公寓没有物资，街道不让商家做饭。全楼的人没有物资，根本什么都买不到！没有发过一次物资！”——浦东区 86</span></p>
                  <p><span class="ref">“我在家里的方便面都已经吃完了。需要买个电饭锅煮面条吃，可我打上海市保供热线超市电话，他说需要居委会购买！可居委会电话始终无人接听状态！”——宝山区 199</span></p>
                  <p><span class="ref">“物资短缺（米面、蔬菜），从浦西封控开始到现在，五千人的小区仅发过一次食物物资！！物资急缺！！”——嘉定区 1802</span></p>
                  <p><span class="ref">“虹口区凉城街道文苑2居委车站北路727弄，封闭以来未曾收到米，油类物资，蔬菜和肉是腐烂变质的”——虹口区 2103</span>
                  </p>              
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="6">
              <div class="right">
                <p>
                  在这1517条与饮食相关的求助信息中，缺少食材、食品的诉求占比97.6%。</p>
                </div>
          </div>

          <div :class="'step step-sec-2'" data-step="7">
              <div class="right">
                <p>
                  求助者普遍对蔬菜的需求较为强烈，23.7%的人想要价格处于合理区间且没有腐坏变质的蔬菜包供给。</p>
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="8">
              <div class="right">
                <p>其次，有16.4%的求助信息提到急需大米、挂面、小麦粉等主食充饥。</p>
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="9">
              <div class="right">
                <p>对于生鲜和饮用水的求助信息也占比颇多，分别为12.8%和12.7%。这意味着，平均不到9个求助者中就有一个人不能实现“饮用水自由”。</p>
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="10">
              <div class="right">
                <p>值得注意的是，婴儿相关和营养品类的食品也十分瞩目，占比均在9%以上。</p>
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="11">
              <div class="right">
                <p>仅占相关求助内容1.5%的部分是关于煤电厨具等做饭设施方面。这类求助信息大都来自在上海打工的外地人或年轻人。尽管比例极低，但也揭开了来自“沪漂”的生活一角。</p>
              </div>
          </div>
          <div :class="'step step-sec-2'" data-step="12">
              <div class="right">
                <p>另外，0.8%的求助者为自己的宠物发布的求助信息。这些求助者有的在封控时恰好不在家，无法照顾，有的是宠物食物已经耗尽。</p>
              </div>
          </div>
          <div class="right-slide-bar">
            <div :class="'tab-bar '+(tab>0?'fixed':'')" ref="tab_bar">
              <div :class="parseInt(tab)==i?'active':''" v-for="i in 3" :key="i"></div>
            </div>

            <div class="step temp_step" data-step="1"></div>
            <div class="step temp_step" data-step="2"></div>
            <div class="step temp_step" data-step="3"></div>
          </div>
          <div class="right-slide-bar behind" ref="slide_bar_container">
          </div>

          <div :class="'ll step top step-sec-2'" data-step="13" style="margin-top:40vh;">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">温饱生命线：米面粮油紧缺</p>
                  <p>
                    “物资短缺（米面、蔬菜），从浦西封控开始到现在，五千人的小区仅发过一次食物物资！！物资急缺！！”“公寓300多人现在断粮，苦捱度日，求提供泡面，面条等物资。”类似这样的求助信息在网站中随处可见。</p>
          <p>本应作为生存基本保障的主食碳水，却在集中物资发放中频繁缺位。</p>
             <p>住在静安区的一处老居民楼的小杨回忆到，在4月5日后收到的第一批官方援助物资是红糖、绿茶和蜂蜜。“你不能说这些东西没用，但是对于一群快吃不上饭的人来说，这肯定不是急需的物资。”</p>
            <p><br/></p>
            <p><br/></p>
            <p><br/></p>
            <p><br/></p>
            <p>据调查问卷结果，每天有超过12个小时都处于饥饿状态的人占比6%。也就是说，至少每17个人中就有1个每天都吃不饱饭。华东某高校研究生小壮透露说：“有的老师全家仅靠米粥在维持生存。”</p>
            <p>而一位来自普陀区的家庭主妇则表示，自己最久有持续15天没吃过碳水类的主食，并留言道：“要饿死了。我们在要饭！”</p>
           <p>尽管这样的情况尚属个例，过半数的受访者一天仅有三小时以内的饥饿感。可见饱腹的关键就是能不能获得足够的主食。</p>
              <p>米面粮油等主食供应成为封控之后当之无愧的生存生命线。“不是吃不饱，只是吃不好”成为挣扎在“生存线之上”的普遍状态。
                  </p>
                </div>
              </div>
          </div>

          <div :class="'l step step-sec-2'" data-step="14">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle"> 饮食单一：物资多样化成奢侈</p>
                  <p>
                    “吃了十几天白萝卜、包菜、蛋饺了，看着是每顿有荤有素，但是每天食材都差不多。”已经因封校吃了40多天盒饭的小壮说道：“且不说饭菜味道如何，主要是根本不够吃，等不到下一次放饭就饿了。”</p>
                     <p> 诸如此类的情况并不在少数。我们通过问卷调查收集了大家每天在吃的食物、疫情居家以来总共吃过的食物种类的数据，并在分析后进行可视化呈现，形成了左边这张气泡图。
                  </p>
                  <p><br/></p>
                  <p>气泡图主要基于两个维度的数据进行展开，即受访者日均吃到的食物种类，以及自居家以来总共吃到的食物种类数目。</p>
                </div>
              </div>
          </div>

          <div :class="'s step step-sec-2'" data-step="15">
              <div class="right slide-bar">
                <div>
                  <p>
                    横轴表示每天吃到的食物种类数量，数字越大代表居家以来饮食越丰富；纵轴表示总共吃过的食物种类，数字越大代表饮食变化越多样。</p>
                </div>
              </div>
          </div>
          <div :class="'s step step-sec-2'" data-step="16">
              <div class="right slide-bar">
                <div>
                  <p>图中气泡大小代表该类人群数量的多少，例如深红色气泡代表了平均每天吃6种食物，总共吃过12种食物的有24人。</p>
                  <p>其余深色气泡则代表了其他几种数量最多且情况一致的人群。他们普遍分布在左下角，这意味着，大多数人在饮食方面都没有太多选择的余地。</p>
                </div>
              </div>
          </div>
          <div :class="'s step step-sec-2'" data-step="17">
              <div class="right slide-bar">
                <div>
                  <p> 蓝色虚线代表：日均所吃食物种类＝总共所吃食物种类的人群集合，也就是说分布在这条线上的人群，自居家以来每天都在吃同样的食物。</p>
                  <p>越趋于左下方的气泡代表该人群居家期间吃过的食物种类越少；反之，越趋于右上方，则自居家以来每天都有丰富的饮食种类可以选择 </p>
                </div>
              </div>
          </div>

          <div :class="'lll step step-sec-2'" data-step="18">
              <div class="right slide-bar">
                <div>
                  <p>其中，日均吃到6种食材的人最多，他们之间的食物多样性差异很大。</p>
                  <p>红色虚线框出了日均吃到6种食材的全部人群。可以看到，最上面的气泡代表了该受访者每天只吃六种食材，但居家以来一共吃过30种食材，几乎可以做到5天不重样的饮食丰富度。</p>
                  <p><br/></p>
                  <p><br/></p>
                  <p><br/></p>
                  <p><br/></p>
                  <p><br/></p>
                  <p>其中，一天吃不到3种食材的人群占比24.3%，而通常制作一份蛋炒饭就要用到不止3种食材。</p>
<p>不少上海高校学生反映，尽管学校有食堂，他们依然为温饱发愁。和小壮一样，他们每天都在吃差不多的食材；在吃不饱的同时，还面临着严重的食品安全问题。“因为食堂有工作人员确诊阳性，学校为解决几千人的供餐问题，就需要靠外面的供应商，他们收费更高，食品质量还得不到保障。前几天配菜里的虾都已经酸了，因此拉肚子的同学不在少数。”小壮介绍道。
</p>
                  <p><br/></p>
                  <p><br/></p>
                  <p><br/></p>
                  <p><br/></p>
                  <p><br/></p>
                  <p><strong>在食材匮乏的常态中，大家普遍想吃到什么呢？</strong></p>
<p>截止到4月28日，有47.46%的受访者急需水果，43.48%的受访者希望吃到零食。</p>
<div class="image" id="want_to_eat"><div class="t">最缺的是水果、零食、蔬菜</div></div>
<p>一位在普陀区的一线工作人员在问卷中透露，自己已经20天没有吃到水果了。</p>
<p>始终活跃在抗疫互助活动中的小王说：“生活已经这么难了，能吃点零食、喝瓶可乐就是我最大的精神寄托。”根据问卷结果，这种将零食、饮料作为精神寄托的想法，在一线抗疫工作人员中尤为明显。</p>

<p><strong>为何在普遍挣扎的吃饱的饮食需求状态中，零食和水果成为大家最想吃的东西？</strong></p>
<p>自上海封城以来主要的人力和运力，都以保障生存为基础，首先满足生活必需品的供应。随着封控时间越来越长，仅靠饱腹为目的的饮食摄入，破坏了人们的营养均衡和饮食习惯。</p>
<p>根据问卷调查结果，学生和工薪族对水果的需求显著。</p>
<p>“平时很少能吃到水果，我已经便秘很久了。”上海某高校应届毕业生小佳这样描述自己的生活，因宿舍楼曾有阳性确诊，自己已经足不出户地被封控了一个多月了。这期间学校平均每周会发一次水果，但也不是每个人都能得到。
</p>
<p>能够均衡营养、有益健康的水果，以及能提升生活幸福感的零食，是他们当前可望而不得的物资。
</p>

<p>此外，那些平时生活中不起眼的葱姜蒜和糖盐醋等调味品，也在这个时期成为了不可忽视的存在。“食不知味”的背后是这些配料缺供的结果。</p>
                </div>
              </div>
          </div>

          <div :class="'l step step-sec-2'" data-step="19">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">需求重灾区：母婴、老人、病患等特殊人群</p>
                  <p>那么，是谁在求助？问题都集中爆发在哪些人群？</p>
                  <p>为了回答这个问题，我们将这1517条求助信息中提到的身份特征进行编码并分析，发现以母婴、老人、病患、残疾人为代表的特殊人群被提到607次，接近总量的一半。他们是这场疫情大考中需要被着重照顾的“特困生”。</p>
                </div>
              </div>
          </div>
          <div :class="'l step step-sec-2'" data-step="20">
              <div class="right slide-bar">
                <div>
                  <p>
                    <span class="ref">“14个月大宝宝奶粉买不到，纸尿裤买不到，宝宝蛋白质过敏喝的适度水解奶粉。街道保障热线说目前所居住的小区对母婴服务未开放。找过居委，打过12345，找过妇联都表示没有渠道购买。自行找跑腿但是说母婴店几乎没开。”——长宁区2728</span>  </p>
                  <p>婴儿和儿童以48.3%的占比，成为求助中被提及最频繁的人群。“再苦不能苦孩子”的观念在特殊时期也依然是大家的普遍共识。</p>
                  <p>不同于成年人相对简单的饮食需求，婴幼儿的蛋白质耐受和过敏情况成为迫切诉求。奶粉是深度水解还是半水解，1段还是2段，甚至是哪个品牌，任何一点与之前的差异都可能引发婴幼儿的呕吐和过敏等不良反应。</p>
                  <p>与之相伴的是被提到20次的孕产妇群体。突如其来的长时间封控，使得孕产妇所必需的营养补给和新生儿的奶粉供给，在许多家庭中都捉襟见肘。</p>
                </div>
              </div>
          </div>

          <div :class="'l step step-sec-2'" data-step="21">
              <div class="right slide-bar">
                <div>
                  <p><span class="ref">“本人68岁，孤老，左肢残疾，有残症证，肠癌二次手术，目前在大病治疗范围中……需耍牛奶，蔬菜，水果就可以，谢谢！”——静安区 2031</span></p>
                  <p>不止是老人。</p>
                  <p>同时，病患的食物忌口、营养品补充，甚至是注射流食所需的针管等工具，也随着越来越久的封控逐渐稀缺。</p>
                  <p>另外，还有0.7%的残障人士，因行动不便等限制，无法通过常规渠道参与物资团购等。
这些需要特殊饮食和照顾的人群，在物资相对紧缺的时期变得尤为无助。</p>
                </div>
              </div>
          </div>
           <div :class="'l step step-sec-2'" data-step="22">
              <div class="right slide-bar">
                <div>
                  <p><span class="ref">“同住3个老人没有隔离，已全部阳性。目前快没有吃的了，不会手机团购。小区东西送不进房间，居委会一直联系不上，希望通过你们的渠道尽快安排单独隔离或进方舱，万分感谢。”——静安区 2312</span></p>
                  <p>被提到234次的老年人是求助信息中占比第二多的特殊人群。</p>
                  <p>尤其是独居老人，因为子女不能在身边照顾，不管是抗原检测、登记核酸结果，还是团购下单，甚至是在线表达诉求都很难完成。</p>
                  <p>许多地区也都因此组织了专门的志愿者和社区工作人员为独居老人点对点服务。</p>
                </div>
              </div>
          </div>

          <div :class="'l step step-sec-2'" data-step="23" ref="end_right_slide">
              <div class="right slide-bar">
                <div>
                  <p><span class="ref">“完全断粮了，需要食物。我们一户群租六人，都是刚到上海几天，还没找到工作就前后被封控了三十二天。已经身无分文了！”——松江区 6783</span></p>
                  <p>当然，还有一些并不特殊的“普通人”也面临着吃不上饭的难题。</p>
                  <p>他们是在疫情期间失业的“打工族”，没有经济收入，需要负担房租等多项支出。封控期间高昂的团购菜价格让本就入不敷出的他们雪上加霜。</p>
                  <p>在“正常需求”尚无法被满足的情况下，这些有着“特殊需求”的群体更难以被照顾到。</p>
                </div>
              </div>
          </div>
          
      </article>
      
    </section>
    <section>
    <div class="content-div">
      <div class="content-wrap">
    
                  <p>除了食材和必需食品不足以外，厨具、灶具等“做饭条件”也会限制民众的饮食</p>
                  <p>在所有关于“吃”的求助信息中，15.6%是关于这些“做饭条件”的。这些求助者多为在上海租房的年轻工薪族，他们平时就餐以公司食堂、外卖等方式为主，居住环境中很少准备在家做饭的工具。</p>
                  <p>“我和室友连灶台都没有。封控以来，就是靠小电锅煮东西吃。这样凑合时间长了真的受不了。”居住在静安寺附近的小王说：“后来还是楼上一个独居阿姨，看我们不容易，收拾出来一套锅具和电磁炉解了我们燃眉之急。”</p>
                  <p></p>
                  <div class="aside">
                    <div class="image" id="un_eat_able"><div class="t">厨房用具是除食材之外最主要的求助对象</div></div>
                    <div class="desc">所有和饮食相关的求助内容中，非食物被提及到38次，占1.5%。其中，锅等厨房用具被提到32次。缺煤气、缺电也是一大难题。</div>
                  </div>
                  <p></p>

                  <p >
                    在社会身份中，是否是上海本地人对饮食质量的高低存在相关性影响。据上海市第七次人口普查数据显示，外省来沪人口占比42.1%。“孤立无援”和“无亲无故”成为许多“沪漂”求助无门背后的重要原因。</p>

                  <p >他们一方面是像小王一样没有在家生过火、做过饭，缺乏基本的设施条件；另一方面是居住环境所带来的限制，因租住公寓缺乏相关的管理和服务，以致无法进行有序的居家隔离，并及时获得各类支援物资。“封城以来，一次物资都没发过，还抢不到菜。快要断粮了。”住在宝山区的小董求助道，“居委说我们不归他们管，流动人口归城管管，城管说只管商铺，不管公寓人员，说让找警察，警察又说找居委。”</p>
                  <p >而上海的本地人则可以借助自己的亲属关系和社会网络，在突如其来的疫情封控期间获得更多的支持和帮助。但与此同时，他们也更需要操心亲友里老年人的生活问题。</p>
                  <p>小王在整理求助信息的共享文档时也表达过同样的感触：“我是一人吃饱全家不愁，但是家里有老人，尤其是独居老人真的很困难。”</p>
                  <div class="image" id="part3_waidiren"><div class='t'>封控后本地人的饮食满意度落差更小</div></div>
                  <p>值得一提的是，疫情下的宠物们所面临的饮食问题也并不亚于人类。求助狗粮、猫粮的声音也在诸多平台铺天盖地的求助信息中发出微弱的呼救。迫不得已接受天价倒卖和尝试临期过期宠物食品的表述，也时常出现在信息列表之中。</p>
      </div>
    </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../assets/variable.scss";

figure{
    height: 500px;
    width: 500px;
    top:calc(50vh - 250px);
    background: none;
    transition: ease 0.5s;
}
.step{
    height: 75vh;
    margin:0px;
    padding-top: 50px;
}
.step.s{
  height: 50vh;
  
}
.step.l{
  height: 100vh;
}
.step.ll{
  height: 150vh;
}
.step.lll{
  height: 320vh;
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
  .item{
    padding:10px 20px;
  
  }
  .item::before{
    content:"";
    height:8px;
    width: 8px;
    float:left;
    background:#666;
    margin-top:8px;
    margin-right: 5px;
    border-radius:10px;
  }
}
.left{
  margin-right:120px;
  width: 500px;
  margin-left: calc(50vw - 1120px / 2);
}
.title01{
  border:none;
  margin-top:100px;
  width:100vw;
  height:140px;
    background-position: calc(50% - 50px);
    background-size:contain ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/title01.png');
    background-color: transparent;
}
.tab-bar{
  height: 40px;
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  background: #c4c4c4;
  div{
    width: calc(33% - 10px);
    height: 8px;
    background: white;
    float:left;
    margin:5px 5px;
    border-radius:5px;
    transition:ease .5s;
  }
  div.active{
    background: #aa351b;
  }
}
.tab-bar.fixed{
  position: fixed;
  top:0px;
  right: 50px;
  width: 45vw;
  z-index: 3;
  height: 40px;
}
.image{
  background-position: center;
  background-size:contain ;
  background-repeat: no-repeat;
    height: 200px;
    position: relative;
  width: 100%;
    margin: 20px 0px;
    margin-top:20px;
    .t{
      font-size: 14px !important;
      width: 100%;
      font-weight: bold;
      text-align: center;
      color:#666;
      margin-top:-20px;
      position: absolute;
      width: 100%;
      top:0px;
      line-height: 14px;
    }
}

#un_eat_able{
  height: 150px;
  background-size: contain;
  background-position: center;
  background-image: url('../assets/images/all/un_eat_able.png');
  .t{
    margin-top:-20px;
  }
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
  height:200px;
  background-size: contain;
  background-image: url('../assets/images/all/wordcloud.png');
}
#gv_things{
  height:100px;
  background-size: contain;
      background-position: top;
  background-image: url('../assets/images/all/gv_things.png');
}
.aside{
  height: 160px;
  width: 100%;
  .image{
    width: 50%;float:left;
  }
  .desc{
    margin-top:-20px;
    width:50%;float:left;
  }
}
.slide-bar{
    // height: 100%;
    width:calc(45vw - 40px);
    // box-sizing: border-box;
    // margin-left:65vw;
    position: absolute;
    right:50px;
    background: transparent;
    border: none;
}
.right-slide-bar{
  // background-color: rgba(0,0,0,.2);
  height: 1200vh;
  position: absolute;
  right:50px;
  width: 45vw;
  margin-top:-10vh;
  z-index: 1;
  
}
.right-slide-bar.behind{
  background-color: rgba(196,196,196 , 100%);
  z-index: 0;
}

@media (max-width: 640px){
  section{
    width: calc(100vw - 40px);
    margin:auto;
}

.right-slide-bar{
  height: 1305vh;
}
.step.top{
  padding-top:0vh;
}
.title01{
  background-position:left;
}
figure.top{
  z-index: 100;
  top: 50px;
  background: #f1f1f1;
  border-radius: 10px;
  opacity: 1;
}
figure.top.hidden{
  opacity: 0;
  z-index: -1;
}
figure{
  opacity: 1;
  top: calc(50vh - 50vw);
}
.left{
  width: calc(100vw - 60px);
  height: calc((100vw - 60px) * 1);
  margin:auto;
  background-size: cover;

}
.left.normal{
  height: calc((100vw - 60px) * 0.8);
}
#want_to_eat{
  background-size: 100vw;
}
#un_eat_able .t{
    margin-top: -50px;
}
.right{
  background: rgba(219, 193, 175,0.9);
  width: calc(100% - 40px);
  margin-left: 10px;
  // box-sizing: border-box;
  padding: 10px;
  p{
    padding: 5px;
  }
}
.right.slide-bar{
  // width: 100%;
  // margin:0px;
  right: 10px;
  background: transparent;
}
.right-slide-bar{
  width: calc(100% + 40px);
  right: -20px;
  .tab-bar{
   width: 100%;
   right: 0px;
  }
}
.tab-bar.fixed{
  height: 60px;
}
}
</style>
