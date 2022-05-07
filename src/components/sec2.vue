<script setup>
import * as echarts from 'echarts';
import scrollama from "scrollama";
import { ref } from 'vue'
import chartScatter from './charts/chartScatter.vue';

const id = ref("sec-1")
const count = ref(0)
const tab = ref(1)
</script>

<template>
  <div class="content-div">
        <div class="content-wrap">
          <p class="subtitle">他们在吃什么？</p>
          <p> <strong>呐喊：正常饮食怎么这么难？</strong></p>
          <p>“一个月前，要是有人跟我说2022年的上海让人吃不上饭，我都不信。”他一边说，一边在学校的大群里用自己不顶饿的物品和女生交换方便面。“方便面在男生这里可是硬通货。”
  </p>
		</div>
	</div>
  <section ref="scrolly">
      <!-- <figure class="right" ref="left">
          <p>{{count}}</p>
      </figure> -->
      <figure class="left">{{count}}
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
                <p>有305条求助信息中，涉及官方组织的食材发放问题。主要表现为没有收到食材方面的物资和收到的物资并不能解决生存困境这两方面诉求。</p>
                <div class="image" id="chart_3"></div>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="4">
              <div class="right">
                <p>4</p>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="5">
              <div class="right">
                <p>5</p>
              </div>
          </div>
          <div :class="'step step-'+id" data-step="5">
              <div class="right" id="slide-bar">
                <div>
                  <div class="tab-bar">
                    <div :class="tab==i?'active':''" v-for="i in 3" :key="i" @mouseover="tab=i"></div>
                  </div>
                  <p class="subtitle" v-if="tab==1">温饱生命线：米面粮油紧缺</p>
                  <p v-if="tab==1">
                    本应作为生存基本保障的主食碳水，却在集中物资发放中频繁缺位。
                    “物资短缺（米面、蔬菜），从浦西封控开始到现在，五千人的小区仅发过一次食物物资！！物资急缺！！”“公寓300多人现在断粮，苦捱度日，求提供泡面，面条等物资。”

                    静安区的某居民区在4月5日后收到的第一批官方援助物资是红糖、绿茶和蜂蜜。
                    根据我们的调查问卷中显示，有受访者最久有持续15天没有吃过碳水类的主食。
                    与此同时，华东某高校老师全家仅靠米粥维持多日。米面粮油等主食成为当之无愧的生存生命线。

                  </p>
                  <p v-if="tab==2">2</p>
                  <p v-if="tab==3">3</p>
                </div>
              </div>
          </div>
      </article>
    </section>
</template>

<script>
export default {
  components: { chartScatter },
    mounted(){
        this.init()
    },
    methods:{
        init:function() {
            let scrolly = this.$refs.scrolly
            let figure = scrolly.getElementsByTagName("figure");
            // let article = scrolly.getElementsByTagName("article");
            // let step = scrolly.getElementsByClassName("step-"+this.id);

            let scroller = scrollama();

            scroller
                .setup({
                    container: scrolly,
                    graphic: figure,
                    step: ".step-"+this.id,
                    offset: 0.5,
                    debug: false
                })
                .onStepEnter((resp)=>{
                  const base = 4
                  this.count = resp.index
                  if(resp.index==base + 0){this.$refs.scatter.step_0();return}
                  if(resp.index==base + 1){this.$refs.scatter.step_1(); return}
                  if(resp.index==base + 2){this.$refs.scatter.step_2(); return}
                  if(resp.index==base + 3){this.$refs.scatter.step_3(); return}
                  if(resp.index==base + 4){this.$refs.scatter.step_4(); return}
                  if(resp.index==base + 5){this.$refs.scatter.step_5(); return}
                });
        },
    }
}
</script>

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
.tab-bar{
  height: 10px;
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
.image{
  background-position: center;
  background-size:contain ;
  background-repeat: no-repeat;
    height: 200px;
  width: 100%;
    margin: 10px 0px;
}
#chart_3{
  background-image: url('../assets/images/chart_3.png');
}
#slide-bar{
    height: 100vh;
    background-color: rgba(0,0,0,.2);
}
</style>
