<template>
  <div id="analysis">
    <div class="mark">
      <div class="topbar">
        <span><img src="../assets/file.png" alt="">下载报告<img src="../assets/share.png" alt="">分享</span>
        <!-- <span><img src="../assets/share.png" alt="">分享</span> -->
        <span><a href="http://123.56.68.131:9999/content/qview/?aid=5" target="view_window">查看产品列表<img src="../assets/arrow.png" alt=""></a></span>
      </div>
      <div class="content">
        <div class="report">
          <div class="title">{{ chartData.title }}报告</div>

          <div class="box">
            <div>分析对象</div>
            <div>{{ chartData.title }}</div>
            <div>定义范围</div>
            <div><p v-for="(item,index) in chartData.def" :key="index">{{item}}<br/></p></div>
            <div>数据源</div>
            <div>本报告所有数据来源于梵泰生生科技有限公司知识数据库</div>
          </div>

          <div v-show="chartData.temRadioData == 0">
            <div class="chartbox" v-for="(item,index) in termEchart[0]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 1">
            <div class="chartbox" v-for="(item,index) in termEchart[1]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 2">
            <div class="chartbox" v-for="(item,index) in termEchart[2]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 3">
            <div class="chartbox" v-for="(item,index) in termEchart[3]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 4">
            <div class="chartbox" v-for="(item,index) in termEchart[4]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 5">
            <div class="chartbox" v-for="(item,index) in termEchart[5]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 6">
            <div class="chartbox" v-for="(item,index) in termEchart[6]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 7">
            <div class="chartbox" v-for="(item,index) in termEchart[7]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 8">
            <div class="chartbox" v-for="(item,index) in termEchart[8]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 9">
            <div class="chartbox" v-for="(item,index) in termEchart[9]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id" :style="{'height': item.id!=55 ? 300+'px' : 600+'px'}"></div>
            </div>
          </div>

          <div v-show="chartData.temRadioData == 10">
            <div class="chartbox" v-for="(item,index) in termEchart[10]" :key="index" v-show="screen(index)">
              <div class="title2">{{ item.caption }}</div>
              <div class="info">{{ item.info }}</div>
              <div class="chart" :ref="'echart' + item.id"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="menu">
      <div class="title">分析范围筛选</div>
      <div class="content">
        <div class="row" v-for="(item,index) in term" :key="index">
          <input type="radio" :id="'term' + index" :value="index" v-model="radioData">
          <label :for="'term' + index">{{ item }}</label>
        </div>
      </div>

      <div class="title">分析维度筛选</div>
      <div class="content2">
        <div class="row2" v-for="(item,index) in changingTerm" :key="index">
          <input type="checkbox" :id="'checkbox' + index" :value="index" v-model="checkboxData">
          <label :for="'checkbox' + index"></label>
          <label :for="'checkbox' + index" class="label2">{{ item }}</label>
        </div>
      </div>

      <div class="sure" @click="start">开始分析</div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  name: 'Analysis',
  data () {
    return {
      term: ['定期寿险','终身寿险','两全保险','年金保险','综合医疗','特定医疗','重大疾病','防癌保险','特定疾病','综合意外','特定意外'],
      termDef: [
        [
          '1. 以被保险人死亡为给付保险金条件，且保险期间为固定年限的人寿保险；','2. 本分析报告只包含主险为定期寿险的产品，有普通型和分红型。'
        ],
        [
          '1. 以被保险人死亡为给付保险金条件，且保险期间为终身的人寿保险；','2. 本分析报告只包含主险为终身寿险的产品，有普通型和分红型。'
        ],
        [
          '1. 既包含以被保险人死亡为给付保险金条件，又包含以被保险人生存为给付保险金条件的人寿保险；','2. 本分析报告所指的两全保险产品包含主险和附加险，有普通型和分红型。'
        ],
        [
          '1. 以被保险人生存为给付保险金条件，并按约定的时间间隔分期给付生存保险金的人身保险；','2. 本分析报告所指的年金保险产品包含主险和附加险，有普通型和分红型。'
        ],
        [
          '1. 以保险合同约定的医疗行为发生为给付保险金条件，按约定对被保险人接受诊疗期间的医疗费用支出提供保障的健康保险；','2. 合同中约定的医疗行为范围广，不只包含少数几种特定保障范围的产品；','3. 本分析报告所指的医疗保险产品只包含主险。'
        ],
        [
          '1. 以保险合同约定的医疗行为发生为给付保险金条件，按约定对被保险人接受诊疗期间的医疗费用支出提供保障的健康保险；','2. 报销范围有一定限制、并在条款中明确定义报销范围的产品；','3. 本分析报告所指的医疗保险产品只包含主险。'
        ],
        [
          '1. 以保险合同约定的疾病发生为给付保险金条件的健康保险；','2. 不包含单纯的特定疾病险产品，即必须包含保监会规定的6种重大疾病；','3. 本分析报告所指的重疾保险产品包含主险和附加险。'
        ],
        [
          '1.	以保险合同约定的癌症发生为给付保险金条件的健康保险；','2. 符合重疾险定义的产品除外；','3. 本分析报告所指的防癌保险产品包含主险和附加险。'
        ],
        [
          '1. 以保险合同约定的特定疾病的发生为给付保险金条件的健康保险；','2. 符合重疾险和防癌险定义的产品除外','3. 本分析报告所指的特定疾病保险产品包含主险和附加险。'
        ],
        [
          '1. 以被保险人因意外事故而导致身故、残疾或者发生保险合同约定的其他事故为给付保险金条件的人身保险；','2. 约定的保险事故发生的范围广，不只包含少数几种特定保障范围的产品；','3. 本分析报告所指的综合意外保险产品只包含主险。'
        ],
        [
          '1. 以被保险人因意外事故而导致身故、残疾或者发生保险合同约定的其他事故为给付保险金条件的人身保险；','2. 只包含少数几种特定事故的产品，符合综合意外险定义的产品除外；','3. 本分析报告所指的特定意外保险产品只包含主险。'
        ]
      ],
      changingTerm: [],
      term1: ['年龄', '职业类型', '保障期限', '缴费期限', '犹豫期', '等待期'],
      term2: ['年龄', '缴费期限', '犹豫期', '等待期'],
      term3: ['年龄','保障期限', '缴费期限', '犹豫期', '等待期', '产品结构'],
      term4: ['年龄', '保障期限', '缴费期限', '犹豫期', '等待期', '产品结构'],
      term5: ['年龄', '犹豫期', '等待期', '用药范围', '赔付比例', '免赔额', '住院津贴'],
      term6: ['产品内部占比'],
      term7: ['年龄', '职业类型', '保障期限', '缴费期限', '犹豫期', '等待期', '重疾责任', '轻症责任', '豁免责任', '产品结构'],
      term8: ['年龄', '职业类型', '保障期限', '缴费期限', '犹豫期', '等待期', '豁免责任', '产品结构'],
      term9: ['产品内部占比'],
      term10: ['年龄', '职业类型', '犹豫期', '交通工具额外赔付', '附加险'],
      term11: ['产品内部占比'],
      radioData: 0,
      checkboxData: [0],
      termEchart: [
        [
          {
            id: 1,
            caption: '投保年龄/承保年龄分析',
            info: '每个产品有投保、承保年龄范围的限制，以下图表的“投保年龄”线条展示了各个年龄可投保的产品数；“承保年龄”线条展示了各个年龄可能处于承保状态的产品数'
          },
          {
            id: 2,
            caption: '职业类型分析',
            info: '每个产品有投保职业类型的限制，以下图表展示了各个职业类型限制下的产品数'
          },
          {
            id: 3,
            caption: '保障期限分析',
            info: '每个产品有多个保障期限可供选择，以下图表展示了各个保障期限选项下的产品数'
          },
          {
            id: 4,
            caption: '缴费期限分析',
            info: '每个产品有多个缴费期间可供选择，以下图表展示了各个缴费期间选项下的产品数'
          },
          {
            id: 5,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 6,
            caption: '等待期分析',
            info: '每个产品的身故责任有一个等待期，以下图表展示了各个等待期天数的产品数占比'
          },
          {
            id: 7,
            caption: '全残责任分析',
            info: '每个产品确定是否包含全残责任，以下图表展示了有无全残责任的产品数占比'
          }
        ],
        [
          {
            id: 8,
            caption: '投保年龄/承保年龄分析',
            info: '每个产品有投保、承保年龄范围的限制，以下图表的“投保年龄”线条展示了各个年龄可投保的产品数；“承保年龄”线条展示了各个年龄可能处于承保状态的产品数'
          },
          {
            id: 9,
            caption: '缴费期限分析',
            info: '每个产品有多个缴费期间可供选择，以下图表展示了各个缴费期间选项下的产品数'
          },
          {
            id: 10,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 11,
            caption: '等待期分析',
            info: '每个产品的身故责任有一个等待期，以下图表展示了各个等待期天数的产品数占比'
          }
        ],
        [
          {
            id: 12,
            caption: '投保年龄/承保年龄分析',
            info: '每个产品有投保、承保年龄范围的限制，以下图表的“投保年龄”线条展示了各个年龄可投保的产品数；“承保年龄”线条展示了各个年龄可能处于承保状态的产品数'
          },
          {
            id: 13,
            caption: '保障期限分析',
            info: '每个产品有多个保障期限可供选择，以下图表展示了各个保障期限选项下的产品数'
          },
          {
            id: 14,
            caption: '缴费期限分析',
            info: '每个产品有多个缴费期间可供选择，以下图表展示了各个缴费期间选项下的产品数'
          },
          {
            id: 15,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 16,
            caption: '等待期分析',
            info: '每个产品的身故责任有一个等待期，以下图表展示了各个等待期天数的产品数占比'
          },
          {
            id: 17,
            caption: '产品结构分析',
            info: '两全保险可作为主险或附加险存在，以下图表展示了其分别作为主险、附加险的产品数占比'
          }
        ],
        [
          {
            id: 18,
            caption: '投保年龄/承保年龄分析',
            info: '每个产品有投保、承保年龄范围的限制，以下图表的“投保年龄”线条展示了各个年龄可投保的产品数；“承保年龄”线条展示了各个年龄可能处于承保状态的产品数'
          },
          {
            id: 19,
            caption: '保障期限分析',
            info: '每个产品有多个保障期限可供选择，以下图表展示了各个保障期限选项下的产品数'
          },
          {
            id: 20,
            caption: '缴费期限分析',
            info: '每个产品有多个缴费期间可供选择，以下图表展示了各个缴费期间选项下的产品数'
          },
          {
            id: 21,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 22,
            caption: '等待期分析',
            info: '每个产品的身故责任有一个等待期，以下图表展示了各个等待期天数的产品数占比'
          },
          {
            id: 23,
            caption: '产品结构分析',
            info: '年金保险可作为主险或附加险存在，以下图表展示了其分别作为主险、附加险的产品数占比'
          }
        ],
        [
          {
            id: 24,
            caption: '投保年龄分析',
            info: '每个产品有投保年龄范围的限制，以下图表展示了各个年龄可投保的产品数'
          },
          {
            id: 25,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 26,
            caption: '等待期分析',
            info: '每个产品的医疗责任有一个等待期，以下图表展示了各个等待期天数的产品数占比'
          },
          {
            id: 27,
            caption: '用药范围分析',
            info: '每个产品有用药范围的限制，以下图表展示了各个用药范围限制下的产品数'
          },
          {
            id: 28,
            caption: '赔付比例分析',
            info: '每个产品有赔付比例规定，以下图表展示了各个赔付比例规定下的产品数占比'
          },
          {
            id: 29,
            caption: '免赔额分析',
            info: '每个产品有一个免赔额，以下图表展示了各个免赔额下的产品数'
          },
          {
            id: 30,
            caption: '住院津贴分析',
            info: '针对包含住院津贴的产品，有每日津贴的金额以及每年赔付天数的限制，以下图表展示了各个每日赔付金额的产品数'
          }
        ],
        [
          {
            id: 31,
            caption: '特定医疗险分析',
            info: '以下图表展示特定医疗险种下各个医疗责任类型的产品数占比'
          }
        ],
        [
          {
            id: 32,
            caption: '投保年龄/承保年龄分析',
            info: '每个产品有投保、承保年龄范围的限制，以下图表的“投保年龄”线条展示了各个年龄可投保的产品数；“承保年龄”线条展示了各个年龄可能处于承保状态的产品数'
          },
          {
            id: 33,
            caption: '职业类型分析',
            info: '每个产品有投保职业类型的限制，以下图表展示了各个职业类型限制下的产品数'
          },
          {
            id: 34,
            caption: '保障期限分析',
            info: '每个产品有多个保障期限可供选择，以下图表展示了各个保障期限选项下的产品数'
          },
          {
            id: 35,
            caption: '缴费期限分析',
            info: '每个产品有多个缴费期间可供选择，以下图表展示了各个缴费期间选项下的产品数'
          },
          {
            id: 36,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 37,
            caption: '等待期分析',
            info: '每个产品的重疾责任有一个等待期，以下图表展示了各个等待期天数的产品数占比'
          },
          {
            id: 38,
            caption: '重疾责任分析',
            info: '每个产品保障的重疾种类不同，以下图表展示了各个重疾种类数目下的产品数'
          },
          {
            id: 39,
            caption: '轻症责任分析',
            info: '每个产品保障的轻症种类不同，以下图表展示了各个轻症种类数目下的产品数'
          },
          {
            id: 40,
            caption: '豁免责任分析',
            info: '部分产品包含了被保险人或投保人保费豁免责任，以下图表展示了在包含豁免责任的产品中各种豁免责任下的产品数'
          },
          {
            id: 41,
            caption: '产品结构分析',
            info: '重疾险可作为主险或附加险存在，以下图表展示了其分别作为主险、附加险的产品数占比'
          }
        ],
        [
          {
            id: 42,
            caption: '投保年龄/承保年龄分析',
            info: '每个产品有投保、承保年龄范围的限制，以下图表的“投保年龄”线条展示了各个年龄可投保的产品数；“承保年龄”线条展示了各个年龄可能处于承保状态的产品数'
          },
          {
            id: 43,
            caption: '职业类型分析',
            info: '每个产品有投保职业类型的限制，以下图表展示了各个职业类型限制下的产品数'
          },
          {
            id: 44,
            caption: '保障期限分析',
            info: '每个产品有多个保障期限可供选择，以下图表展示了各个保障期限选项下的产品数'
          },
          {
            id: 45,
            caption: '缴费期限分析',
            info: '每个产品有多个缴费期间可供选择，以下图表展示了各个缴费期间选项下的产品数'
          },
          {
            id: 46,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 47,
            caption: '等待期分析',
            info: '每个产品的癌症责任有一个等待期，以下图表展示了各个等待期天数的产品数占比'
          },
          {
            id: 48,
            caption: '豁免责任分析',
            info: '部分产品包含了被保险人或投保人保费豁免责任，以下图表展示了在包含豁免责任的产品中各种豁免责任下的产品数'
          },
          {
            id: 49,
            caption: '产品结构分析',
            info: '防癌险可作为主险或附加险存在，以下图表展示了其分别作为主险、附加险的产品数占比'
          }
        ],
        [
          {
            id: 50,
            caption: '特定疾病险分析',
            info: '以下图表展示了特定疾病险种下各类疾病的产品数占比'
          }
        ],
        [
          {
            id: 51,
            caption: '投保年龄/承保年龄分析',
            info: '每个产品有投保、承保年龄范围的限制，以下图表的“投保年龄”线条展示了各个年龄可投保的产品数；“承保年龄”线条展示了各个年龄可能处于承保状态的产品数'
          },
          {
            id: 52,
            caption: '职业类型分析',
            info: '每个产品有投保职业类型的限制，以下图表展示了各个职业类型限制下的产品数'
          },
          {
            id: 53,
            caption: '犹豫期分析',
            info: '每个产品有一个犹豫期，以下图表展示了各个犹豫期天数的产品数占比'
          },
          {
            id: 54,
            caption: '交通工具额外赔付分析',
            info: '针对有交通工具额外赔付的产品，以下图表展示了各类交通工具责任的产品数'
          },
          {
            id: 55,
            caption: '附加险分析',
            info: '针对有附加险的产品，以下图表展示了各类附加险种的产品数'
          }
        ],
        [
          {
            id: 56,
            caption: '特定意外险分析',
            info: '以下图表展示了特定意外险种下各类意外责任的产品数占比'
          }
        ]
      ],
      chartData: {
        title: '定期寿险',
        def: ['1. 以被保险人死亡为给付保险金条件，且保险期间为固定年限的人寿保险；',
              '2. 本分析报告只包含主险为定期寿险的产品，有普通型和分红型。'],
        temRadioData: 0,
        temCheckboxData: [0]
      }
    }
  },
  mounted () {
    this.changingTerm = this.term1
    this.run1()
    this.run2()
    this.run3()
    this.run4()
    this.run5()
    this.run6()
    this.run7()
    this.run8()
    this.run9()
    this.run10()
    this.run11()
  },
  methods: {
    screen (index) {
      if (this.chartData.temCheckboxData.indexOf(index) > -1) {
        return true
      }
    },
    start () {
      this.chartData.title = this.term[this.radioData]
      this.chartData.def = this.termDef[this.radioData]
      this.chartData.temRadioData = this.radioData
      this.chartData.temCheckboxData = this.checkboxData
      setTimeout(() => {
        for (var i = 1; i < 57; i++) {
          this['chart'+i].resize()
        }
      }, 200)
    },
    run1 () {
      // 折线2数据
      this.chart1 = echarts.init(this.$refs.echart1[0], 'walden')
      let option1 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97, 98, 99, 100, 101, 102, 103, 104, 105]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,6,6,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,36,31,31,31,31,31,30,30,30,30,30,19,19,19,19,19,9,9,9,9,9,1,1,1,1,1,0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,38,38,39,39,39,39,39,39,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,36,32,32,32,32,32,32,32,32,32,32,30,30,30,30,29,29,29,29,29,26,23,23,23,23,21,21,21,21,21,18,18,18,18,18,15,15,15,15,15,7,7,7,7,7,4,4,4,3,3,1,1,1,1,1,0]
            }
        ]
      }
      this.chart1.setOption(option1)

      // 折线1数据
      this.chart2 = echarts.init(this.$refs.echart2[0], 'walden')
      let option2 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [1,2,3,4,5,6]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'产品数',
                type:'line',
                areaStyle: {normal: {}},
                data: [11,11,11,8,2,2]
            }
        ]
      }
      this.chart2.setOption(option2)

      // 竖 柱形
      this.chart3 = echarts.init(this.$refs.echart3[0], 'walden')
      let option3 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['至60岁','10年','至70岁','20年','至50岁','至75岁','25年','至77岁','30岁','至80岁','1岁','至88岁','5岁','至55岁','至66岁','15岁','至25岁','至65岁'],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [14,10,11,15,1,1,1,1,15,3,11,1,3,3,1,2,1,4],
            type: 'bar'
        }]
      }
      this.chart3.setOption(option3)

      // 条形
      this.chart4 = echarts.init(this.$refs.echart4[0], 'walden')
      let option4 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['至60岁','10年','20年','至65岁','25年','30年','至15岁','终身','3年','5年','至55岁','15年'],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [1,25,26,1,1,11,1,20,1,13,1,3]
            }
        ]
      }
      this.chart4.setOption(option4)

      // 饼图
      this.chart5 = echarts.init(this.$refs.echart5[0], 'walden')
      let option5 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:13, name:'10天'},
                    {value:2, name:'20天'},
                    {value:3, name:'15天'},
                    {value:5, name:'21天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart5.setOption(option5)

      // 环形图
      this.chart6 = echarts.init(this.$refs.echart6[0], 'walden')
      let option6 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'等待期占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:'无'},
                    {value:1, name:'1年'},
                    {value:17, name:'90天'},
                    {value:13, name:'180天'}
                ]
            }
        ]
      }
      this.chart6.setOption(option6)

      this.chart7 = echarts.init(this.$refs.echart7[0], 'walden')
      let option7 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '全残责任',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:13, name:'10天'},
                    {value:2, name:'20天'},
                    {value:3, name:'15天'},
                    {value:5, name:'21天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart7.setOption(option7)
    },
    run2 () {
      this.chart8 = echarts.init(this.$refs.echart8[0], 'walden')
      let option8 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,6,6,37,37,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,36,31,31,31,31,31,30,30,30,30,30,19,19,19,19,19,9,9,9,9,9,1,1,1,1,1,0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,38,38,39,39,39,39,39,39,38,38,38,38,38,38,38,38,38,38,38,38,38,38,38,36,32,32,32,32,32,32,32,32,32,32,30,30,30,30,29,29,29,29,29,26,23,23,23,23,21,21,21,21,21,18,18,18,18,18,15,15,15,15,15,7,7,7,7,7,4,4,4,3,3,1,1,1,1,1,0]
            }
        ]
      }
      this.chart8.setOption(option8)

      this.chart9 = echarts.init(this.$refs.echart9[0], 'walden')
      let option9 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['至60岁','10年','至70岁','20年','至50岁','至75岁','25年','至77岁','30岁','至80岁','1岁','至88岁','5岁','至55岁','至66岁','15岁','至25岁','至65岁'],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [14,10,11,15,1,1,1,1,15,3,11,1,3,3,1,2,1,4],
            type: 'bar'
        }]
      }
      this.chart9.setOption(option9)

      this.chart10 = echarts.init(this.$refs.echart10[0], 'walden')
      let option10 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:16, name:'10天'},
                    {value:6, name:'20天'},
                    {value:7, name:'15天'},
                    {value:1, name:'30天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart10.setOption(option10)

      this.chart11 = echarts.init(this.$refs.echart11[0], 'walden')
      let option11 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'等待期占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:11, name:'90天'},
                    {value:6, name:'180天'}
                ]
            }
        ]
      }
      this.chart11.setOption(option11)
    },
    run3 () {
      this.chart12 = echarts.init(this.$refs.echart12[0], 'walden')
      let option12 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97, 98, 99, 100, 101, 102, 103, 104, 105]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data: [88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 86, 86, 85, 85, 85, 82, 82, 110, 110, 110, 110, 110, 110, 110, 110, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 109, 108, 108, 108, 108, 108, 107, 102, 102, 102, 102, 100, 81, 80, 80, 76, 74, 47, 46, 44, 44, 44, 18, 18, 18, 17, 17, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[88, 88, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 113, 113, 113, 113, 112, 112, 112, 112, 110, 110, 110, 109, 109, 108, 108, 108, 107, 107, 107, 107, 107, 107, 107, 106, 106, 106, 106, 106, 106, 106, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 99, 99, 99, 99, 99, 97, 97, 97, 97, 94, 81, 78, 78, 77, 77, 71, 71, 71, 71, 71, 46, 46, 46, 44, 44, 31, 31, 31, 28, 28, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 18, 18, 18, 18, 18]
            }
        ]
      }
      this.chart12.setOption(option12)

      this.chart13 = echarts.init(this.$refs.echart13[0], 'walden')
      let option13 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [-100, -88, -85, -80, -75, -70, -65, -60, -55, -30, -28, -25, -21, 0, 5, 6, 10, 15, 16, 20, 25, 30],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [2, 3, 1, 12, 3, 12, 4, 5, 1, 1, 1, 3, 1, 18, 7, 7, 8, 6, 1, 22, 3, 30],
            type: 'bar'
        }]
      }
      this.chart13.setOption(option13)

      this.chart14 = echarts.init(this.$refs.echart14[0], 'walden')
      let option14 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: [-60, -55, -18, 0, 3, 5, 6, 8, 10, 15, 19, 20, 30],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [3, 3, 1, 63, 34, 88, 1, 2, 105, 42, 3, 63, 3]
            }
        ]
      }
      this.chart14.setOption(option14)

      this.chart15 = echarts.init(this.$refs.echart15[0], 'walden')
      let option15 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:84, name:'10天'},
                    {value:8, name:'20天'},
                    {value:28, name:'15天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart15.setOption(option15)

      this.chart16 = echarts.init(this.$refs.echart16[0], 'walden')
      let option16 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'等待期占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:11, name:'1年'},
                    {value:24, name:'90天'},
                    {value:28, name:'180天'}
                ]
            }
        ]
      }
      this.chart16.setOption(option16)

      this.chart17 = echarts.init(this.$refs.echart17[0], 'walden')
      let option17 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '主附险占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:124, name:'主险'},
                    {value:40, name:'附加险'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart17.setOption(option17)
    },
    run4 () {
      this.chart18 = echarts.init(this.$refs.echart18[0], 'walden')
      let option18 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97, 98, 99, 100, 101, 102, 103, 104, 105]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 93, 92, 93, 93, 93, 93, 93, 93, 97, 99, 99, 99, 99, 99, 99, 99, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 95, 95, 95, 95, 95, 93, 93, 93, 93, 97, 92, 92, 92, 91, 83, 73, 73, 71, 71, 63, 44, 44, 44, 44, 39, 16, 16, 16, 16, 16, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[97, 97, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 78, 78, 78, 78, 78, 78, 82, 85, 85, 85, 85, 85, 85, 85, 82, 82, 82, 81, 81, 81, 81, 81, 81, 80, 80, 80, 80, 80, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 85, 86, 86, 86, 87, 87, 87, 87, 87, 87, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 86, 86, 86, 86, 86, 84, 84, 84, 84, 84, 82, 81, 81, 81, 81, 78, 78, 78, 76, 76, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 70, 70, 70, 70, 70]
            }
        ]
      }
      this.chart18.setOption(option18)

      this.chart19 = echarts.init(this.$refs.echart19[0], 'walden')
      let option19 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['至106岁','至105岁','至100岁','至88岁','至85岁','至81岁','至80岁','至70岁','至28岁','至25岁','终身','10年','13年','15年','20年','25年'],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [12, 1, 3, 2, 2, 1, 2, 1, 1, 3, 57, 2, 1, 1, 4, 2],
            type: 'bar'
        }]
      }
      this.chart19.setOption(option19)

      this.chart20 = echarts.init(this.$refs.echart20[0], 'walden')
      let option20 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['至69岁','至65岁','至64岁','至60岁','至59岁','至55岁','至50岁','至45岁','至40岁','终身','1年','3年','5年','8年','10年','15年','20年','30年'],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [1, 2, 1, 2, 2, 2, 2, 2, 2, 75, 1, 74, 104, 1, 91, 46, 54, 2]
            }
        ]
      }
      this.chart20.setOption(option20)

      this.chart21 = echarts.init(this.$refs.echart21[0], 'walden')
      let option21 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:63, name:'10天'},
                    {value:11, name:'20天'},
                    {value:21, name:'15天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart21.setOption(option21)

      this.chart22 = echarts.init(this.$refs.echart22[0], 'walden')
      let option22 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'等待期占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:'60天'},
                    {value:1, name:'1年'},
                    {value:1, name:'90天'},
                    {value:2, name:'180天'},
                    {value:2, name:'30天'}
                ]
            }
        ]
      }
      this.chart22.setOption(option22)

      this.chart23 = echarts.init(this.$refs.echart23[0], 'walden')
      let option23 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '主附险占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:113, name:'主险'},
                    {value:4, name:'附加险'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart23.setOption(option23)
    },
    run5 () {
      this.chart24 = echarts.init(this.$refs.echart24[0], 'walden')
      let option24 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97, 98, 99, 100, 101, 102, 103, 104, 105]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[150, 151, 151, 157, 157, 157, 156, 156, 156, 156, 160, 160, 160, 160, 160, 160, 160, 160, 179, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 163, 161, 161, 161, 161, 158, 158, 158, 158, 158, 155, 50, 50, 50, 50, 37, 14, 14, 14, 14, 14, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[150, 151, 151, 153, 153, 153, 153, 152, 152, 152, 156, 156, 156, 156, 156, 156, 156, 156, 195, 178, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 178, 166, 161, 161, 161, 161, 158, 158, 158, 158, 158, 155, 50, 50, 50, 50, 37, 14, 14, 14, 14, 14, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0]
            }
        ]
      }
      this.chart24.setOption(option24)

      this.chart25 = echarts.init(this.$refs.echart25[0], 'walden')
      let option25 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:1, name:'90天'},
                    {value:30, name:'10天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart25.setOption(option25)

      this.chart26 = echarts.init(this.$refs.echart26[0], 'walden')
      let option26 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'等待期占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:126, name:'30天'},
                    {value:60, name:'60天'},
                    {value:53, name:'90天'}
                ]
            }
        ]
      }
      this.chart26.setOption(option26)

      this.chart27 = echarts.init(this.$refs.echart27[0], 'walden')
      let option27 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['社保内','社保外'],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [112,102]
            }
        ]
      }
      this.chart27.setOption(option27)

      this.chart28 = echarts.init(this.$refs.echart28[0], 'walden')
      let option28 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:173, name:'100%'},
                    {value:15, name:'80%'},
                    {value:14, name:'90%'},
                    {value:1, name:'0%'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart28.setOption(option28)

      this.chart29 = echarts.init(this.$refs.echart29[0], 'walden')
      let option29 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [0, 1, 50, 100, 500, 1000, 5000, 6000, 10000, 20000, 30000],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [35, 3, 2, 57, 1, 3, 3, 2, 78, 6, 3],
            type: 'bar'
        }]
      }
      this.chart29.setOption(option29)

      this.chart30 = echarts.init(this.$refs.echart30[0], 'walden')
      let option30 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: [200,600,650,100,30,50,1200,500,100,1200,500,600],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [5,1,3,1,2,1,1,2,11,1,1,1]
            }
        ]
      }
      this.chart30.setOption(option30)
    },
    run6 () {
      this.chart31 = echarts.init(this.$refs.echart31[0], 'walden')
      let option31 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'各责任占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:5, name:'小额住院医疗'},
                    {value:3, name:'重大疾病医疗'},
                    {value:0, name:'意外伤害医疗'},
                    {value:4, name:'特定疾病医疗'},
                    {value:0, name:'手术医疗'},
                    {value:14, name:'其它医疗'},
                    {value:3, name:'母婴医疗'},
                    {value:6, name:'齿科医疗'},
                    {value:22, name:'癌症医疗'}
                ]
            }
        ]
      }
      this.chart31.setOption(option31)
    },
    run7 () {
      this.chart32 = echarts.init(this.$refs.echart32[0], 'walden')
      let option32 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97, 98, 99, 100, 101, 102, 103, 104, 105]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[144, 144, 144, 147, 148, 148, 148, 148, 148, 148, 148, 148, 151, 150, 150, 149, 147, 147, 155, 151, 151, 151, 151, 151, 151, 151, 151, 151, 152, 152, 152, 152, 152, 152, 152, 152, 149, 149, 149, 149, 150, 147, 147, 147, 147, 147, 137, 137, 137, 137, 140, 102, 102, 102, 102, 102, 71, 71, 71, 71, 68, 21, 21, 20, 20, 20, 7, 7, 7, 7, 7, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[144, 144, 143, 147, 147, 147, 148, 148, 147, 147, 147, 147, 150, 150, 150, 150, 150, 150, 188, 163, 159, 159, 159, 159, 159, 159, 156, 156, 157, 156, 156, 155, 155, 155, 155, 155, 154, 151, 150, 150, 151, 151, 150, 150, 150, 150, 149, 143, 138, 138, 142, 141, 131, 131, 131, 131, 131, 131, 131, 131, 131, 123, 120, 120, 120, 120, 119, 114, 114, 114, 114, 106, 106, 106, 106, 106, 101, 101, 100, 100, 100, 93, 93, 93, 93, 93, 90, 90, 90, 89, 89, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 85, 85, 85, 85, 85]
            }
        ]
      }
      this.chart32.setOption(option32)

      this.chart33 = echarts.init(this.$refs.echart33[0], 'walden')
      let option33 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'产品数',
                type:'line',
                areaStyle: {normal: {}},
                data: [1, 36, 36, 36, 31, 15, 15, 8, 7]
            }
        ]
      }
      this.chart33.setOption(option33)

      this.chart34 = echarts.init(this.$refs.echart34[0], 'walden')
      let option34 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['至105岁','至100岁','至88岁','至80岁','至77岁','至75岁','至70岁','至66岁','至65岁','至60岁','至30岁','至28岁','至25岁','终身','1年','5年','10年','20年','25年','30年'],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [1, 2, 1, 10, 1, 6, 14, 1, 2, 6, 1, 1, 3, 84, 63, 2, 3, 8, 3, 14],
            type: 'bar'
        }]
      }
      this.chart34.setOption(option34)

      this.chart35 = echarts.init(this.$refs.echart35[0], 'walden')
      let option35 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['至60岁','至55岁','至20岁','至18岁','终身','1年','3年','5年','8年','10年','15年','18年','19年','20年','25年','30年'],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [5, 2, 2, 1, 82, 12, 27, 102, 2, 130, 75, 1, 6, 124, 5, 34]
            }
        ]
      }
      this.chart35.setOption(option35)

      this.chart36 = echarts.init(this.$refs.echart36[0], 'walden')
      let option36 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:84, name:'10天'},
                    {value:1, name:'20天'},
                    {value:28, name:'15天'},
                    {value:10, name:'21天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart36.setOption(option36)

      this.chart37 = echarts.init(this.$refs.echart37[0], 'walden')
      let option37 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'等待期占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:7, name:'30天'},
                    {value:6, name:'60天'},
                    {value:2, name:'1年'},
                    {value:106, name:'90天'},
                    {value:81, name:'180天'}
                ]
            }
        ]
      }
      this.chart37.setOption(option37)

      this.chart38 = echarts.init(this.$refs.echart38[0], 'walden')
      let option38 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [1, 10, 12, 15, 17, 18, 20, 25, 30, 31, 32, 33, 38, 40, 41, 42, 45, 48, 50, 59, 60, 65, 66, 68, 69, 70, 77, 80, 81, 85, 88, 90, 95, 99, 100, 105, 110],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [5, 1, 1, 3, 1, 3, 3, 3, 6, 4, 6, 4, 2, 19, 1, 15, 2, 3, 22, 1, 20, 3, 2, 1, 1, 16, 1, 24, 5, 4, 1, 2, 2, 1, 6, 8, 1],
            type: 'bar'
        }]
      }
      this.chart38.setOption(option38)

      this.chart39 = echarts.init(this.$refs.echart39[0], 'walden')
      let option39 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: [1, 7, 10, 11, 12, 14, 15, 20, 22, 25, 28, 30, 33, 35, 38, 40, 41, 50, 55],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [7, 1, 16, 1, 3, 2, 15, 6, 2, 7, 2, 32, 3, 6, 2, 1, 1, 12, 1],
            type: 'bar'
        }]
      }
      this.chart39.setOption(option39)

      this.chart40 = echarts.init(this.$refs.echart40[0], 'walden')
      let option40 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['豁免','不豁免'],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [9,199]
            }
        ]
      }
      this.chart40.setOption(option40)

      this.chart41 = echarts.init(this.$refs.echart41[0], 'walden')
      let option41 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '主附险占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:208, name:'主险'},
                    {value:149, name:'附加险'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart41.setOption(option41)
    },
    run8 () {
      this.chart42 = echarts.init(this.$refs.echart42[0], 'walden')
      let option42 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97, 98, 99, 100, 101, 102, 103, 104, 105]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 49, 50, 50, 50, 50, 53, 55, 55, 55, 55, 71, 59, 59, 59, 59, 59, 54, 54, 54, 54, 50, 32, 32, 32, 32, 32, 27, 27, 27, 27, 27, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[31, 31, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 48, 45, 45, 45, 45, 48, 50, 50, 50, 50, 68, 67, 61, 61, 61, 61, 61, 60, 60, 60, 60, 56, 56, 56, 56, 56, 56, 55, 55, 55, 55, 51, 50, 50, 50, 50, 50, 50, 50, 50, 49, 36, 36, 36, 36, 36, 26, 26, 26, 26, 26, 20, 20, 20, 20, 20, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
            }
        ]
      }
      this.chart42.setOption(option42)

      // 折线1数据
      this.chart43 = echarts.init(this.$refs.echart43[0], 'walden')
      let option43 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [1,2,3,4,5,6,7,8]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'产品数',
                type:'line',
                areaStyle: {normal: {}},
                data: [10,10,10,9,2,2,2]
            }
        ]
      }
      this.chart43.setOption(option43)

      // 竖 柱形
      this.chart44 = echarts.init(this.$refs.echart44[0], 'walden')
      let option44 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['至85岁','至80岁','至77岁','至75岁','至70岁','至60岁','终身','1年','5年','10年','15年','20年','30年'],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [5, 8, 1, 1, 7, 3, 16, 19, 2, 11, 5, 13, 7],
            type: 'bar'
        }]
      }
      this.chart44.setOption(option44)

      // 条形
      this.chart45 = echarts.init(this.$refs.echart45[0], 'walden')
      let option45 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['至60岁','至55岁','终身','1年','3年','5年','10年','15年','20年','30年'],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [1, 1, 36, 11, 16, 52, 59, 25, 43, 6]
            }
        ]
      }
      this.chart45.setOption(option45)

      // 饼图
      this.chart46 = echarts.init(this.$refs.echart46[0], 'walden')
      let option46 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:37, name:'10天'},
                    {value:1, name:'20天'},
                    {value:18, name:'15天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart46.setOption(option46)

      // 环形图
      this.chart47 = echarts.init(this.$refs.echart47[0], 'walden')
      let option47 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'等待期占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1, name:'1年'},
                    {value:25, name:'90天'},
                    {value:45, name:'180天'}
                ]
            }
        ]
      }
      this.chart47.setOption(option47)

      this.chart48 = echarts.init(this.$refs.echart48[0], 'walden')
      let option48 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['豁免','不豁免'],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [1,79]
            }
        ]
      }
      this.chart48.setOption(option48)

      this.chart49 = echarts.init(this.$refs.echart49[0], 'walden')
      let option49 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '主附险占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:80, name:'主险'},
                    {value:16, name:'附加险'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart49.setOption(option49)
    },
    run9 () {
      this.chart50 = echarts.init(this.$refs.echart50[0], 'walden')
      let option50 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'各责任占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:29, name:'特定疾病保险'},
                    {value:7, name:'母婴疾病保险'},
                    {value:3, name:'轻症疾病保险'}
                ]
            }
        ]
      }
      this.chart50.setOption(option50)
    },
    run10 () {
      this.chart51 = echarts.init(this.$refs.echart51[0], 'walden')
      let option51 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97, 98, 99, 100, 101, 102, 103, 104, 105]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'投保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[98, 97, 102, 125, 124, 123, 132, 131, 131, 131, 150, 150, 150, 150, 149, 149, 162, 161, 277, 265, 266, 266, 266, 263, 263, 263, 263, 263, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 260, 260, 260, 260, 261, 258, 258, 258, 258, 251, 255, 255, 255, 255, 261, 253, 253, 253, 252, 258, 186, 186, 186, 186, 178, 49, 49, 49, 49, 48, 42, 42, 42, 42, 38, 25, 25, 25, 25, 25, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            },
            {
                name:'承保年龄',
                type:'line',
                areaStyle: {normal: {}},
                data:[98, 99, 93, 116, 115, 113, 123, 126, 119, 119, 139, 139, 138, 138, 138, 137, 150, 150, 316, 264, 253, 253, 253, 253, 250, 250, 250, 250, 250, 249, 249, 249, 249, 249, 249, 249, 255, 249, 249, 249, 249, 249, 247, 247, 247, 248, 254, 245, 245, 245, 249, 246, 244, 244, 244, 250, 253, 244, 244, 244, 250, 253, 182, 181, 180, 180, 180, 53, 53, 53, 53, 53, 46, 46, 46, 46, 41, 28, 28, 28, 28, 27, 10, 10, 10, 10, 8, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            }
        ]
      }
      this.chart51.setOption(option51)

      this.chart52 = echarts.init(this.$refs.echart52[0], 'walden')
      let option52 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'产品数',
                type:'line',
                areaStyle: {normal: {}},
                data: [6, 270, 270, 250, 116, 34, 34, 22, 19]
            }
        ]
      }
      this.chart52.setOption(option52)

      this.chart53 = echarts.init(this.$refs.echart53[0], 'walden')
      let option53 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '各犹豫期产品内部占比',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:7, name:'10天'},
                    {value:2, name:'30天'},
                    {value:2, name:'15天'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      }
      this.chart53.setOption(option53)

      this.chart54 = echarts.init(this.$refs.echart54[0], 'walden')
      let option54 = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['不包含','包含'],
            axisLabel: {
              interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [258,158],
            type: 'bar'
        }]
      }
      this.chart54.setOption(option54)

      this.chart55 = echarts.init(this.$refs.echart55[0], 'walden')
      let option55 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ["意外伤害医疗", "重大疾病", "交通工具意外", "定期寿险", "第三者责任", "住院补贴", "走失保险", "小额住院医疗", "驾乘意外", "交强险", "其它医疗", "电梯意外", "特定意外", "猝死保障", "资金安全", "流感保险", "特定疾病", "监护人责任", "重大疾病医疗", "其他意外", "轻症疾病", "一般意外", "护理保险", "急性肠胃炎", "母婴意外", "疫苗接种", "两全保险", "白血病"],
            axisLabel: {
              interval: 0
            }
        },
        series: [
            {
                name: '产品数',
                type: 'bar',
                data: [378, 78, 75, 55, 50, 39, 28, 23, 17, 7, 5, 5, 4, 4, 4, 4, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1]
            }
        ]
      }
      this.chart55.setOption(option55)
    },
    run11 () {
      this.chart56 = echarts.init(this.$refs.echart56[0], 'walden')
      let option56 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'各责任占比',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:194, name:'境外旅行'},
                    {value:81, name:'境内旅行'},
                    {value:60, name:'交通工具意外'},
                    {value:41, name:'驾乘意外'},
                    {value:27, name:'航空意外'},
                    {value:23, name:'高风险运动'},
                    {value:22, name:'申根签证国'},
                    {value:21, name:'户外拓展'},
                    {value:18, name:'留学意外'},
                    {value:18, name:'特定意外'},
                    {value:11, name:'电梯意外'},
                    {value:9, name:'职业意外'},
                    {value:9, name:'其他意外'},
                    {value:9, name:'赛事体育运动'},
                    {value:8, name:'疫苗接种'},
                    {value:5, name:'休闲体育运动'},
                    {value:4, name:'高铁意外'},
                    {value:4, name:'马拉松'},
                    {value:3, name:'健身意外'},
                    {value:1, name:'火车意外'},
                    {value:1, name:'驾驶培训'},
                    {value:1, name:'母婴意外'},
                    {value:0, name:'走失保险'},
                    {value:0, name:'团体活动'}
                ]
            }
        ]
      }
      this.chart56.setOption(option56)
    }
  },
  watch: {
    radioData (value) {
      let tem = value + 1
      this.changingTerm = this['term' + tem]
      this.checkboxData = []
    }
  }
}
</script>

<style scoped>
#analysis {
  height: calc(100% - 92px);
  width: 100%;
  background: #F7F7F7;
}

.mark {
  float: left;
  width: calc(100% - 360px);
  height: 100%;
}

.mark .topbar {
  color: #333333;
  font-size: 13px;
  height: 77px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mark .topbar span {
  display: flex;
}

.mark .topbar span a {
  text-decoration: none;
  color: #666;
}

.mark .topbar img {
  width: 12px;
  height: 15px;
  margin-top: 2px;
}

.mark .topbar span:nth-child(1) img:nth-child(1) {
  margin-left: 10px;
  margin-right: 10px;
}

.mark .topbar span:nth-child(1) img:nth-child(2) {
  margin-left: 10px;
  margin-right: 10px;
}

.mark .topbar span:nth-child(2) a img {
  margin-left: 10px;
  margin-bottom: -2px;
}

.mark .content {
  background: #fff;
  height: calc(100% - 97px);
  margin: 0 40px;
  overflow-y: scroll;
}

.menu {
  float: right;
  width: 360px;
  height: 100%;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
}

.menu .title {
  color: #393C40;
  font-size: 18px;
  margin: 21px 0 21px 25px;
}

.menu .row input {
  display: none;
}

.menu .row input[type=radio]:checked + label {
  background:linear-gradient(-135deg,rgba(163,137,212,1),rgba(137,158,212,1));
  color: #fff;
}

.menu .row {
  display: inline-block;
  margin: 0 0 25px 20px;
}

.menu .row:nth-child(3n + 1) {
  margin-left: 25px;
}

.menu .row label {
  display: block;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #9B9B9B;
  border-radius: 24px;
  text-align: center;
  color: #9B9B9B;
}

.menu .content2 {
  display: flex;
  flex-wrap: wrap;
  padding: 0 25px;
}

.menu .row2 {
  display: flex;
  min-width: 87px;
  margin-bottom: 25px;
}

.menu .row2:nth-child(3n + 2) {
  margin: 0 24px;
}

.menu .row2 input {
  display: none;
}

.menu .row2 input[type=checkbox] + label {
  /* display: inline-block; */
  width: 19px;
  height: 19px;
  border: 1px solid #EAEAEA;
  border-radius: 5px;
  margin-right: 10px;
}

.menu .row2 input[type=checkbox]:checked + label {
  /* display: inline-block; */
  width: 19px;
  height: 19px;
  border: 1px solid #fff;
  /* background:linear-gradient(-135deg,rgba(29,233,182,1),rgba(29,196,233,1)); */
  border-radius: 5px;
  margin-right: 10px;
  background-image: url(../assets/sure.png);
  background-repeat: no-repeat;
  background-size: 19px 19px;
}

.menu .row2 .label2 {
  /* display: inline-block; */
  color: #333;
  font-size: 14px;
}

.sure {
  width:270px;
  height:48px;
  line-height: 48px;
  text-align: center;
  color: #fff;
  background:linear-gradient(-135deg,rgba(29,233,182,1),rgba(29,196,233,1));
  border-radius: 24px;
  margin: 0 auto;
}

/* 报告内容 */
.report {
  padding: 0 40px;
}

.report .title {
  text-align: center;
  color: #393C40;
  font-size: 20px;
  font-weight: bold;
  margin: 32px 0;
}

.report .box {
  display: grid;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  grid-template-columns: 1fr 5fr;
}

.report .box > div {
  outline: 1px solid #D3D3D3;
  padding: 15px;
}

.report .box > div:nth-child(3) {
  /* grid-row: 2/5; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.report .box > div:nth-child(4) {

}

.report .box > div:nth-child(1),
.report .box > div:nth-child(3),
.report .box > div:nth-child(5) {
  font-size: 14px;
  color: #333;
  text-align: center;
  font-weight: bold;
}

.report .box > div:nth-child(2),
.report .box > div:nth-child(4),
.report .box > div:nth-child(6) {
  color: #666;
  font-size: 14px;
}

.report .box > div:nth-child(1),
.report .box > div:nth-child(2),
.report .box > div:nth-child(5),
.report .box > div:nth-child(6) {
  background: #E9F9FF;
}

.chartbox .title2 {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 30px 0;
}

.chartbox .info {
  font-size: 12px;
  color: #5F5F5F;
  margin: 0 20px 20px 20px;
}

.chart {
  /* width: 1100px; */
  width: 100%;
  height: 300px;
}
</style>
