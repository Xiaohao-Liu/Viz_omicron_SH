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
          if(resp.index==base + 1){tab.value=2; return}
          if(resp.index==base + 2){tab.value=3; return}
          if(resp.index==base + 3){tab.value=4; return}
        }).onStepExit((resp) => {
            if(resp.index==0 && tab.value==1 ){tab.value=0; return}
            if(resp.index==3 && tab.value==4 ){tab.value=0; return}
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
      <figure :class="'left '+ ('part-'+count)">
        {{count}},{{tab}}
      </figure>

      <article >
          <div id="right-slide-bar" ref="slide_bar_container">
            <div :class="'tab-bar '+(tab>0?'fixed':'')" ref="tab_bar">
              <div :class="tab==i?'active':''" v-for="i in 4" :key="i">{{tab_name[i-1]}}</div>
            </div>
          </div>

          <div :class="'step step-'+id" data-step="1">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">1. 温饱生命线：米面粮油紧缺</p>
                  <p>
                    “物资短缺（米面、蔬菜），从浦西封控开始到现在，五千人的小区仅发过一次食物物资！！物资急缺！！”“公寓300多人现在断粮，苦捱度日，求提供泡面，面条等物资。”类似这样的求助信息在网站中随处可见。
可见，本应作为生存基本保障的主食碳水，却在集中物资发放中频繁缺位。
住在静安区的一处老居民楼的小杨回忆到，在4月5日后收到的第一批官方援助物资是红糖、绿茶和蜂蜜。“你不能说这些东西没用，但是对于一群快吃不上饭的人来说，这肯定不是急需的物资。”
据调查问卷结果显示，每天有超过12个小时都处于饥饿状态的人占比6%。即至少每17个人中就有1个每天都吃不饱饭。一位来自普陀区的家庭主妇表示，最久有持续15天没有吃过碳水类的主食，并留言道：“要饿死了。我们在要饭！”
事实上，这样的情况尚属个例，过半数的受访者一天仅有三小时以内的饥饿感。华东某高校研究生小壮感慨道，看到有老师全家仅靠米粥在维持。
可见，米面粮油等主食供应在此期间已经成为当之无愧的生存生命线。“不是吃不饱，只是吃不好”成为
                  </p>
                </div>
              </div>
          </div>

          <div :class="'step step-'+id" data-step="2">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">2. 饮食单一：物资多样化成奢侈</p>
                  <p>
                    
                    “室内有四人被隔离在家里，蔬菜基本没有，四个人根本不够吃，希望能够得到大家帮助，就是青菜新鲜蔬菜就行，没有其他要求。”——静安区3444


                  </p>
                </div>
              </div>
          </div>

          <div :class="'step step-'+id" data-step="3">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">3. 需求重灾区：母婴、老人、病患等特殊人群</p>
                  <p>


                  </p>
                </div>
              </div>
          </div>

          <div :class="'step step-'+id" data-step="4">
              <div class="right slide-bar">
                <div>
                  <p class="subtitle">4. 需求重灾区：母婴、老人、病患等特殊人群</p>
                  <p>


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
    top:10vh;
    background: none;
}
.step{
    height: 100vh;
    padding-top: 50px;
    box-sizing: border-box;
    margin:0px;
}
.title02{
  border:none;
  width:100vw;
  height:200px;
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
  background: $highlight;
  border:1px solid rgba(249, 223, 192, 0.35);
}
.left{
    width: 1366px;
    background-size: cover;
    height: 768px;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: calc(50vw - 768px);
    transition:ease .5s;
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
.slide-bar{
    width:35vw;
    position: absolute;
    right:0px;
    background: transparent;
    border: none;
}
#right-slide-bar{
  background-color: white;
  height: 450vh;
  position: absolute;
  right:0px;
  width: 35vw;
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
</style>
