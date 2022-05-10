<script setup>
import * as echarts from 'echarts';
import scrollama from "scrollama";
import { ref, onMounted } from 'vue'

const id = ref("sec-3")
const tab = ref(0)
const count = ref(0)

const tab_name = ref(['接触机会','意愿能力','渠道供给','结果表现'])
const scrolly = ref()

function init() {
    
    let figure = scrolly.value.getElementsByTagName("figure")[0];

    // let article = scrolly.getElementsByTagName("article");
    // let step = scrolly.getElementsByClassName("step-"+this.id);

    let scroller = scrollama();

    scroller
        .setup({
            container: scrolly,
            graphic: figure,
            step: ".step-sec-3",
            offset: 0.5,
            debug: false
        })
        .onStepEnter((resp)=>{
          const base = 0
          count.value = resp.index
          if(resp.index==base + 0){tab.value=1; return}
          if(resp.index==base + 1){tab.value=1.5; return}
          if(resp.index==base + 2){tab.value=2; return}
          if(resp.index==base + 3){tab.value=3; return}
          if(resp.index==base + 4){tab.value=4; return}
        }).onStepExit((resp) => {
            if(resp.index==0 && tab.value==1 ){tab.value=0; return}
            if(resp.index==4 && tab.value==4 ){tab.value=0; return}
          });
}

onMounted(()=>{init()})
</script>

<template>
  <section ref="scrolly">
    <div class="chart-div title02" ></div>
      <!-- <figure class="right" ref="left">
          <p>{{count}}</p>
      </figure> -->
        <div class="content-div">
        <div class="content-wrap">
             <p>绝大多数的上海民众都是按照4月1日起封城5天的通知准备物资。但到了4日晚上，愈演愈烈的疫情扩散让大家意识到，可能不会如期解封了。果然，封城被不断推迟，但大家的囤粮也逐渐难以维持基本生活需求了。</p>
              <p>由于前期囤货不足，自疫情封控以来，民众获取食材等物资的方式主要有三种：<br/>
              各区政府将援助物资通过街道和居委会发放到户；<br/>
              居委会寻找供货商统一采购和配送到所属小区内的住户；<br/>
              居民自行寻找渠道团购，如各种抢菜APP、有团长组织的微信群等，再通过志愿者和平台骑手配送。</p>

              <p>在有关饮食的1517条求助信息中，绝大多数都涉及到“获取方式和渠道”方面的问题。也就是说，存在饮食问题的求助者都在上述三种获取方式中存在不同程度的困难和问题。</p>

              <p>问卷调查中，77.5%的受访者有通过社区团购的方式购买食材。而在上述1517条饮食相关的求助信息中，有50.5%的问题都与“团购”有关。也就是说，团购是上海民众现阶段最常用的获取物资方式，但在打通该渠道的过程中又困难重重。</p>

        </div>
      </div>
      <figure :class="'left '+ ('part-'+count)">
        <!-- {{count}},{{tab}} -->
      </figure>

      <article >
          <div id="right-slide-bar" ref="slide_bar_container">
            <div :class="'tab-bar '+(tab>0?'fixed':'')" ref="tab_bar">
              <div :class="parseInt(tab)==i?'active':''" v-for="i in 4" :key="i">{{tab_name[i-1]}}</div>
            </div>
          </div>

          <div :class="'step step-'+id" data-step="1">
              <div class="right slide-bar">
                <div>
                  <p>“缺米缺面，团购无门”——杨浦区254</p>
                  <p>其中，58.5%的人卡在了“团购”的第一步。他们受限于无法接触到团购渠道，一方面是找不到相应的供货商或者缺乏有力的“团长”带头组织，也有些居民区因为人口密度低，凑不起来团购的起送规模；另一方面，由于团购前需报备给居委会同意，但并不是所有社区都可以承担物流的消杀和住户安全保障的工作，所以，没有接触机会的求助者中，有3.1%是因为被社区禁止团购后，出现了断供的现象。 </p>
                  <p>大部分没有接触团购机会的人是因为没有渠道</p>
                  <div class="image" id="part2_bar1"></div>
                  <p>“小区封闭以来只发过一次物资，很多独居老人饿的一天一顿白粥。居委会不让团购，但居委楼组长却自己倒卖物资！一个女生和孕妇找居委沟通团购的事，反而被居委打！”——徐汇区4397</p>

                </div>
              </div>
          </div>

          <div :class="'step step-'+id" data-step="2">
              <div class="right slide-bar">
                <div>
                  <p>卡在意愿能力的求助者 大多是特殊群体没有能力参与团购</p>
                  <div class="image" id="part2_bar2"></div>                  
                </div>
              </div>
          </div>

          <div :class="'ll step step-'+id" data-step="3">
              <div class="right slide-bar">
                <div>
                      <p>“两位老人（一位68，一位90）还有两天即将吃完大米。断粮，也缺蔬菜。周围楼栋较少，且老人不会用手机，无法网购或团购。”——嘉定区4312</p>
                      <p>“封闭十几天，小区只发过一次蔬菜。网上抢不到菜。自发的团购菜太贵且有安全隐患。”——普陀区4035</p>
                    <p>“不会”和“不敢”是成功团到物资的第二道阻碍。</p>
                    <p>有20%的人因为个人意愿和能力不足而无法通过团购获取物资。</p>
                    <p>独居老人，作为被互联网抛下的一代人，他们不会使用智能手机的诸多功能，无法参与到微信群接龙和小程序下单这些最常用的团购操作中，更不要说用其他APP抢菜了。就连呼救，都需要他人代发。尽管如此，我们还是可以从中捕捉到总占比12.7%的老人求助信息。</p>
                    <p>与此同时，另有3%的求助者表示:由于担心物资携带病毒引发传染和食品安全问题得不到保障而不敢参与网上的团购。因为起初很多地区没有重视外来物资的消杀环节，从而引发多起“物传人”的疫情扩散。在这样的焦虑环境中，不够规范的配送管理使许多民众失去了团购的信心和动机。“信息不透明。在不知道小区哪些楼封控，多少个阳性的情况下。居委会让居民去老年活动室统一领取团购的蔬菜，又造成聚集。”居住在普陀区的船酱（网名）反映道。</p>
                    <p>剩下4.6%的人则是因为团购的价格过高而买不起。10斤装的面粉50元，4斤装的挂面也是50元，这是4月13日在某小区团购群的流通价格。“商家拿货高自然就卖的高，当然也有个别商家把囤货故意卖高价。”一位饿了么骑手小哥根据自己这些天跑腿的经历介绍道：“像那些偷偷运作的肯德基，除了价格贵，没有关系还吃不上呢。”</p>
                </div>
              </div>
          </div>

          <div :class="'ll step step-'+id" data-step="4">
              <div class="right slide-bar">
                <div>
                  <p>
                    运力：<br/>
                    平台给的时间不足以买到商品，时间地点中间路途根本赶不上时间偷偷开门的商家卖高价正常
                  </p>
                  <p>每天早上五点多起床，抢各大APP六点上架的物资，几乎成了每一个上海年轻人的日常。<br/>
                  “头天订好闹钟，清晨转战于多个APP之间，然后继续睡。”今年刚到上海工作的何风这样描述自己的日常：“很多次都是怀着恨意睡回笼觉的。因为都一个月了，美团一次都没抢到过，叮咚门店都被关了。”<br/>
                  渠道失灵成为供给环节出现问题的主要原因。
                  </p>
                  <p>“从上个月14号陆续封到现在，目前已经断粮了。各大APP都抢不到菜，外卖超市都不开门，快递也不送。不知道还要封多久，求帮忙买点吃的充饥。”——闵行区 6685</p>
                  <p>除了抢不到菜，还会出现上架的菜下不了单，下单的菜不给配送等诸多可能性。“有时抢不到菜，有时候抢到了菜没有骑手接单，一样也买不到。”小王介绍说。</p>
                  <p>据某平台骑手估算，自己平均每天要在外面跑14个小时，接20来单，单程都在20公里左右。即使这样，仍然有大量需求无法满足。可见，运力不足也是封城期间诸多地方瘫痪的重要原因。
                  </p>
                  <p>渠道失灵是卡在渠道供给的主要原因</p>

                  <div class="image" id="part2_bar3"></div>   

                  <p>“买不到蔬菜，叮咚每日优鲜的等站点全部关闭，居委好不容易抢到的蔬菜也有很多腐烂掉的。”——徐汇区 5424</p>
                  <p>“封闭第十七天，小区无物资且无统一采购物资渠道。小区周边乱七八糟的团购骗子泛滥，且价格高的离谱。已经断粮，真的没办法了。”——松江区 6219</p>
                  
                </div>
              </div>
          </div>

          <div :class="'step step-'+id" data-step="5">
              <div class="right slide-bar">
                <div>
                  <p>最后，有2%跨过前方重重阻碍的“幸运儿”，在最后发现自己拿到手的是变质腐烂的食物。</p>
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
    height: 100vh;
    padding-top: 50px;
    box-sizing: border-box;
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
.title02{
  border:none;
  width:100vw;
  height:140px;
  margin-top:100px;
    background-position: calc(50% - 50px);
    background-size:contain ;
    background-repeat: no-repeat;
    background-image: url('../assets/images/all/title02.png');
    background-color: transparent;
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
  border-radius: 10px;
  border:1px solid rgba(249, 223, 192, 0.35);
}
.left{
    width: 1366px;
    background-size: 90%;
    height: 768px;
    background-position:center left;
    background-repeat: no-repeat;
    left: calc(50vw - 768px);
    top:calc(50vh - 384px);
    transition:ease .5s;
    // transform: scale(0.9);
}
.tab-bar{
  height: 50px;
  width: 100%;
  div{
    width: calc(25% - 10px);
    height: 40px;
    background: $button-unchecked;
    float:left;
    font-size: 14pt;
    margin:5px 5px;
    border-radius: 0px;
    line-height: 40px;
  }
  div.active{
    background: $button-checked-red;
    color: white;
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
#part2_bar1{
  background-size:600px ;
  background-image:url('../assets/images/all/part2_bar1.png');
}
#part2_bar2{
  background-size:600px ;
  background-position: left;
  background-image:url('../assets/images/all/part2_bar2.png');
}
#part2_bar3{
  background-size:600px ;
  background-position: left center;
  background-image:url('../assets/images/all/part2_bar3.png');
}
.slide-bar{
    width:500px;
    position: absolute;
    right:50px;
    background: transparent;
    border: none;
}
#right-slide-bar{
  background-color: white;
  height: 650vh;
  position: absolute;
  right:50px;
  width: 500px;
  margin-top: -50vh;
}
.part-0{
  background-image: url('../assets/images/all/part2_01.png');
}
.part-1{
  background-image: url('../assets/images/all/part2_02.png');
}
.part-2{
  background-image: url('../assets/images/all/part2_03.png');
}
.part-3{
  background-image: url('../assets/images/all/part2_04.png');
}
.part-4{
  background-image: url('../assets/images/all/part2_04.png');
}
</style>
