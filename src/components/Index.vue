<template>
  <div id="index">
    <div class="main">
      <div class="fourbutton">
        <div @click="link('数据库分析')">
          <img src="../assets/bar2.png" alt="">
          <span>数据库分析</span>
        </div>
        <div @click="link('产品对接管理')">
          <img src="../assets/pencil2.png" alt="">
          <span>产品对接管理</span>
        </div>
        <div @click="link('产品对比')">
          <img src="../assets/menu2.png" alt="">
          <span>横向测评</span>
        </div>
        <div @click="link('配置销售平台')">
          <img src="../assets/user3.png" alt="">
          <span>配置销售平台</span>
        </div>
      </div>
      <div class="warp">
        <div class="ad">
          <img src="../assets/advertise.jpg" alt="">
        </div>
        <div class="news">
          <div class="news-title">新闻资讯</div>
          <div class="news-wrap">
            <div v-for="(item, index) in news" v-if="index>min&&index<max"  :key="index" :class="{'move': fresh&&index==(min+1)}">
              <a class="news-one" :href="item.url" target="_blank"><span class="news-text">♦ {{item.text}}</span><i class="news-date">{{item.date}}</i></a>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="news-title">消息</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      min: -1,
      max: 19,
      fresh: false,
      news: [
        {'text':'险企布局非保险子公司各有所好 相关监管或处休眠期','url':'http://insurance.jrj.com.cn/2018/04/26085624453871.shtml','date':	'2018/4/26'},
        {'text':'专家研判保险业形势与风险','url':'http://insurance.jrj.com.cn/2018/04/26075724453583.shtml','date':	'2018/4/26'},
        {'text':'降准置换MLF实施 净释放资金近4000亿元','url':'http://insurance.jrj.com.cn/2018/04/26075424453570.shtml','date':	'2018/4/26'},
        {'text':'QDII额度告别数年零增加 险企成扩大额度后首批赢家','url':'http://insurance.jrj.com.cn/2018/04/26074024453434.shtml','date':	'2018/4/26'},
        {'text':'7险企一周内被罚逾110万 紫金财险连续四个月吃罚单','url':'http://insurance.jrj.com.cn/2018/04/26031524452655.shtml','date':	'2018/4/26'},
        {'text':'财险业艰难期延续：9家非上市险企车险承保无一盈利','url':'http://insurance.jrj.com.cn/2018/04/26031024452649.shtml','date':	'2018/4/26'},
        {'text':'最高保额可达2000万 精算师提醒超高上限用途不大','url':'http://insurance.jrj.com.cn/2018/04/26030624452640.shtml','date':	'2018/4/26'},
        {'text':'银保监会提示 互联网保险三大风险','url':'http://insurance.jrj.com.cn/2018/04/26025924452626.shtml','date':	'2018/4/26'},
        {'text':'“五一”小长假出游 有保险护航才安心','url':'http://insurance.jrj.com.cn/2018/04/26003624452514.shtml','date':	'2018/4/26'},
        {'text':'细节看保险：无锡骗保案对保险经营的启示','url':'http://invest.10jqka.com.cn/20180426/c604134351.shtml','date':	'2018/4/26'},
        {'text':'互联网寿险发展：且转、且险、且专','url':'http://invest.10jqka.com.cn/20180426/c604132118.shtml','date':	'2018/4/26'},
        {'text':'保险服务现“前移”：从事后补偿到事前干预','url':'http://invest.10jqka.com.cn/20180426/c604131857.shtml','date':	'2018/4/26'},
        {'text':'科技保险如何护航“国之重器”？','url':'http://invest.10jqka.com.cn/20180426/c604131609.shtml','date':	'2018/4/26'},
        {'text':'“影子股东”何处遁形？ 保险公司股权代持协议被最高法认定无效','url':'http://invest.10jqka.com.cn/20180426/c604131597.shtml','date':	'2018/4/26'},
        {'text':'中法人寿去年净亏7410万元 保费收入仅18万元','url':'http://invest.10jqka.com.cn/20180426/c604131037.shtml','date':	'2018/4/26'},
        {'text':'联化科技三年从30跌到8元 铁杆股东新华人寿一路亏损','url':'http://insurance.hexun.com/2018-04-26/192907586.html','date':	'2018/4/26'},
        {'text':'银保渠道销售难度加大一家分行犹豫期内退保同比飙增一倍','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425091028.shtml','date':	'2018/4/25'},
        {'text':'车险健康险拖后腿 永诚保险时隔三年盈转亏','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425090926.shtml','date':	'2018/4/25'},
        {'text':'银行保险机构股权管理应守住底线“量体裁衣”','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425090813.shtml','date':	'2018/4/25'},
        {'text':'多家险企偿付能力告急 监管锚定公司治理','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425090623.shtml','date':	'2018/4/25'},
        {'text':'国寿和工行将在雄安新区建设、AI等领域全面合作','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425090516.shtml','date':	'2018/4/25'},
        {'text':'3月寿险保费增三成 国寿大幅改善 平安太保增速平稳','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425090314.shtml','date':	'2018/4/25'},
        {'text':'险资加快进军债权投资市场 重仓持股24家公司','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425090102.shtml','date':	'2018/4/25'},
        {'text':'神州租车“保险”问题悄整改 多个疑问仍待解','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425090009.shtml','date':	'2018/4/25'},
        {'text':'京东物流引入国寿为股东 又签下战略合作','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085843.shtml','date':	'2018/4/25'},
        {'text':'"保险""赔审团""模式商业潜力大 利于险企缓解舆论压力"','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085713.shtml','date':	'2018/4/25'},
        {'text':'友邦中国CEO张晓宇： 保险业对外开放不会产生零和博弈','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085556.shtml','date':	'2018/4/25'},
        {'text':'利安人寿2017年亏损1.29亿元 营业收入同比减少19.87%','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085507.shtml','date':	'2018/4/25'},
        {'text':'中英人寿披露2017年年报 ：保险业务收入同比增超20%','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085425.shtml','date':	'2018/4/25'},
        {'text':'汇丰人寿2017年年报出炉 投资收益同比增长56.58%','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085336.shtml','date':	'2018/4/25'},
        {'text':'国寿系统刚刚做出系列人事调整','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085152.shtml','date':	'2018/4/25'},
        {'text':'今年养老金调整进入落地期 上海已出台调整方案','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425085004.shtml','date':	'2018/4/25'},
        {'text':'中韩人寿长兴代理人资料造假 15人伪造高中学历证明','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180425084915.shtml','date':	'2018/4/25'},
        {'text':'监管连发保险消费提示：谨防“吸睛”产品误导及“高息”诱惑','url':'http://invest.10jqka.com.cn/20180425/c604130318.shtml','date':	'2018/4/25'},
        {'text':'4家保险公司首获QDII投资额度','url':'http://invest.10jqka.com.cn/20180425/c604129376.shtml','date':	'2018/4/25'},
        {'text':'监管将通过资本调控鼓励保险扶贫 业界提出三点建议','url':'http://invest.10jqka.com.cn/20180425/c604123920.shtml'	,'date':	'2018/4/25'},
        {'text':'人保财险首个汽车超人门店在沪落地','url':'http://invest.10jqka.com.cn/20180425/c604117129.shtml','date':	'2018/4/25'},
        {'text':'光大永明人寿成立16周年 要做经营“功夫菜”的百年老店','url':'http://invest.10jqka.com.cn/20180425/c604117117.shtml','date':	'2018/4/25'},
        {'text':'买税延养老险怎样享优惠','url':'http://invest.10jqka.com.cn/20180425/c604116680.shtml','date':	'2018/4/25'},
        {'text':'保险扶贫一保一县助力脱贫攻坚','url':'http://invest.10jqka.com.cn/20180425/c604112551.shtml','date':	'2018/4/25'},
        {'text':'利安人寿2017年退保金暴增近八成 欲2020年实现盈利','url':'http://invest.10jqka.com.cn/20180425/c604111514.shtml','date':	'2018/4/25'},
        {'text':'公司治理 保险业“源头”监管思路日渐清晰','url':'http://field.10jqka.com.cn/20180425/c604107726.shtml','date':	'2018/4/25'},
        {'text':'唐山：保险业观摩风险处置演练','url':'http://invest.10jqka.com.cn/20180425/c604106735.shtml','date':	'2018/4/25'},
        {'text':'开门红保费增速地图出炉：上海、北京领跌','url':'http://invest.10jqka.com.cn/20180425/c604104639.shtml','date':	'2018/4/25'},
        {'text':'利安人寿去年亏了1.3亿 成立七年仅一年盈利','url':'http://invest.10jqka.com.cn/20180425/c604104626.shtml','date':	'2018/4/25'},
        {'text':'失业保险支持职业技能提升','url':'http://invest.10jqka.com.cn/20180425/c604104619.shtml','date':	'2018/4/25'},
        {'text':'君龙人寿2017年保险业务收入同比增43.84% 净亏损同比收窄','url':'http://insurance.hexun.com/2018-04-25/192906890.html','date':	'2018/4/25'},
        {'text':'长生人寿2017年净利润由盈转亏 共计亏损1.34亿元','url':'http://insurance.hexun.com/2018-04-25/192906880.html','date':	'2018/4/25'},
        {'text':'珠江人寿2017年投资收益同比增长35%  连续三年实现盈利','url':'http://insurance.hexun.com/2018-04-25/192906876.html','date':	'2018/4/25'},
        {'text':'百年人寿2017年保险业务收入同比增长5成  偿付力降至150%以下','url':'http://insurance.hexun.com/2018-04-25/192906874.html','date':	'2018/4/25'},
        {'text':'2017年友邦中国净利润近20亿元 同比增加284%','url':'http://insurance.hexun.com/2018-04-25/192906311.html','date':	'2018/4/25'},
        {'text':'英大人寿去年保险业务收入增长近八成 退保支出同比降低20%','url':'http://insurance.hexun.com/2018-04-25/192906308.html','date':	'2018/4/25'},
        {'text':'中法人寿2017年仍未恢复新业务开展 总资产缩水过半','url':'http://insurance.hexun.com/2018-04-25/192906307.html','date':	'2018/4/25'},
        {'text':'民生保险2017年保险业务收入同比降低11% 退保金降超三成','url':'http://insurance.hexun.com/2018-04-25/192906306.html','date':	'2018/4/25'},
        {'text':'众惠相互结盟健帆生物 相互保险多元探路但发展空间仍有限','url':'http://insurance.hexun.com/2018-04-25/192901513.html','date':	'2018/4/25'},
        {'text':'监管将通过资本调控鼓励保险扶贫 业界提出三点建议','url':'http://insurance.jrj.com.cn/2018/04/25180324451193.shtml','date':	'2018/4/25'},
        {'text':'银保监会：警惕互联网保险的三大风险','url':'http://insurance.jrj.com.cn/2018/04/25175724453636.shtml','date':	'2018/4/25'},
        {'text':'银保监会：规避线上线下风险，消费者应警惕“高息”诱','url':'http://insurance.jrj.com.cn/2018/04/25175324451108.shtml	','date':	'2018/4/25'},
        {'text':'中国银保监会：谨防互联网保险三大风险 建议因需选购','url':	'http://insurance.jrj.com.cn/2018/04/25173324450930.shtml','date':	'2018/4/25'},
        {'text':'友邦中国发布“新五年计划” 创新科技列为支柱策略','url':'http://insurance.jrj.com.cn/2018/04/25162924450400.shtml','date':	'2018/4/25'},
        {'text':'中国保险行业协会启动14项公司治理团体标准制定','url':'http://insurance.jrj.com.cn/2018/04/25155824450112.shtml','date':	'2018/4/25'},
        {'text':'光大永明人寿成立16周年 要做经营“功夫菜”的百年老','url':'http://insurance.jrj.com.cn/2018/04/25153824450258.shtml','date':	'2018/4/25'},
        {'text':'人保财险首个汽车超人门店在沪落地','url':	'http://insurance.jrj.com.cn/2018/04/25153824450257.shtml','date':	'2018/4/25'},
        {'text':'美国保险法中不可抗辩条款规定及其启示','url':'http://insurance.jrj.com.cn/2018/04/25092724447350.shtml','date':	'2018/4/25'},
        {'text':'非上市险企年报：部分保费增幅不及手续费与佣金支出涨幅','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424090727.shtml','date':	'2018/4/24'},
        {'text':'银保监会整治金融乱象：一季度开11.5亿元罚单','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424090617.shtml','date':	'2018/4/24'},
        {'text':'银行保险机构“三会一层”要“形似”更要“神似”','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424090403.shtml','date':	'2018/4/24'},
        {'text':'利安人寿七年六亏 股权变动频繁关联交易存风险','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424090230.shtml','date':	'2018/4/24'},
        {'text':'各路资本竞逐保险中介市场','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424090113.shtml','date':	'2018/4/24'},
        {'text':'渤海人寿业绩频现起伏 众诚财险持续亏损','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085950.shtml','date':	'2018/4/24'},
        {'text':'华泰人寿陕西分公司获批筹建','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085900.shtml','date':	'2018/4/24'},
        {'text':'法院当庭裁决两家公司代持君康人寿保险股权协议无效','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085729.shtml','date':	'2018/4/24'},
        {'text':'同种保险两类平台差价数倍为哪般？','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085621.shtml','date':	'2018/4/24'},
        {'text':'平安健康医疗分拆上市 互联网医疗公司竞逐IPO','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085459.shtml','date':	'2018/4/24'},
        {'text':'保险业专家齐聚北大赛瑟：聚焦保险扶贫与可发挥保障','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085318.shtml','date':	'2018/4/24'},
        {'text':'大地财险：结合监管共性与行业实际 完善公司治理政策','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085140.shtml	','date':	'2018/4/24'},
        {'text':'太平洋寿险：公司治理是行业健康稳定发展的重要基石','url':'http://www.qzr.cn/newsfile/bxsx/bxbxsx/20180424085006.shtml','date':	'2018/4/24'}
      ]
    }
  },
  created () {
    this.runGo()
  },
  methods: {
    runGo () {
      var self = this;
      var timer = setInterval(()=>{
        if(self.max==self.news.length){
          clearInterval(timer);
        }
        self.fresh = true;
        var timer2 = setTimeout(()=>{
          self.min++;
          self.max++;
          self.fresh = false;
        }, 2000);
      }, 10000);
    },
    link (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style scoped>
#index {
  height: calc(100% - 92px);
  width: 100%;
}

#index .main {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: #F7F7F7;
}

#index .main .fourbutton {
  display: flex;
  justify-content: space-between;
  margin: 28px 40px;
}

#index .main .fourbutton div {
  flex: 1;
  /* width:249px; */
  height:80px;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#index .main .fourbutton div:hover {
  cursor: pointer;
}

#index .main .fourbutton div img {
  width: 40px;
  height: 40px;
}

#index .main .fourbutton div:not(:last-child) {
  margin-right: 31px;
}

#index .main .fourbutton div:nth-child(1) {
  background: #F18F1C;
}

#index .main .fourbutton div:nth-child(2) {
  background: #4CAF50;
}

#index .main .fourbutton div:nth-child(3) {
  background: #00BCD4;
}

#index .main .fourbutton div:nth-child(4) {
  background: #5A51DE;
}

#index .main .warp {
  display: flex;
}

#index .main .warp > div {
  height: 618px;
  margin: 0px 20px 0 0;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
  background: #fff;
}

#index .main .warp > div:nth-child(1) {
  margin-left: 40px;
}

#index .main .warp > div:nth-child(3) {
  margin-right: 40px;
}

.main .warp .ad {
  /* flex: 2; */
  min-width: 300px;
}

.main .warp .ad img {
  height: 100%;
  width: 100%;
}

.main .warp .news {
  flex: 1;
}

.main .warp .info {
  flex: 1;
}

/* 新闻 */
#index .main .warp .news,
#index .main .warp .info {
  padding: 10px;
  box-sizing: border-box;
}
#index .main .warp .news-title{
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  line-height: 36px;
}
#index .main .warp .news-wrap{
  height: 540px;
  overflow: hidden;
  margin: 10px 15px 0;
  box-shadow: none;
}
#index .main .warp .news-wrap>div{
  height: 30px;
  margin: 0;
  box-shadow: none;
}
.news-one{
  color: #111;
  text-decoration: none;
  font-size: 14px;
  line-height: 30px;
  text-align: left;
  display: flex;
  flex-direction: row;
}
.news-one:hover, .news-one:active, .news-one:hover .news-date, .news-one:active .news-date{
  color: #69c;
}
.news-text{
  display: inline-block;
  vertical-align: middle;
  /* width: 40%; */
  /* width: 16em; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 3;
}
.news-date{
  text-align: right;
  color: #999;
  font-size: 14px;
  /* margin-left: 50px; */
  flex: 1;
}
#index .main .warp .news-wrap>div.move{
  margin-top: -30px;
  transition: all 2s ease;
}
</style>
