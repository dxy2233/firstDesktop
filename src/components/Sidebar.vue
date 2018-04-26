<template>
  <div id="sidebar">
    <div class="top">
      <img src="../assets/icon6.png" alt="">
      <span>TALLY</span>
    </div>
    <div class="menu">
      <div class="row" @click="link('首页')">
        <img src="../assets/icon7.png" alt="">
        <span>首页</span>
      </div>
      <div class="row" @click="link('产品对接管理')">
        <img src="../assets/link.png" alt="">
        <span>产品对接管理</span>
        <span></span>
      </div>
      <div class="row">
        <img src="../assets/icon2.png" alt="">
        <span>保险产品管理</span>
      </div>
      <div class="row">
        <img src="../assets/icon3.png" alt="">
        <span>客户信息管理</span>
      </div>
      <div class="row">
        <img src="../assets/users.png" alt="">
        <span>子账号管理</span>
      </div>
      <div class="row" @click="link('保单管理')">
        <img src="../assets/user2.png" alt="">
        <span>保单管理</span>
      </div>
      <div class="row">
        <img src="../assets/menu.png" alt="">
        <span>订单管理</span>
      </div>
      <div class="row" @click="custom = !custom">
        <img src="../assets/pencil.png" alt="">
        <span>方案定制</span>
        <span class="arrow" :class="{ arrow2: custom }"></span>
      </div>
        <div class="row2" v-if="custom">
          <span>方案定制</span>
          <span>已保存方案</span>
        </div>
      <div class="row" @click="test = !test">
        <img src="../assets/icon4.png" alt="">
        <span>横向测评</span>
        <span class="arrow" :class="{ arrow2: test }"></span>
      </div>
        <div class="row2" v-if="test">
          <span @click="link('产品对比')">产品对比</span>
          <span>已保存方案</span>
        </div>
      <div class="row">
        <img src="../assets/change.png" alt="">
        <span>交互平台</span>
      </div>
      <div class="row" @click="link('数据库分析')">
        <img src="../assets/bar.png" alt="">
        <span>数据库分析</span>
      </div>
      <div class="row">
        <img src="../assets/build.png" alt="">
        <span>SDK开发包</span>
      </div>
      <div class="row" @click="link('配置销售平台')">
        <img src="../assets/icon5.png" alt="">
        <span>配置销售平台</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      custom: false,
      test: false
    }
  },
  methods: {
    link (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style scoped>
#sidebar {
  width: 270px;
  min-width: 270px;
  height: 100%;
  border-right: 2px solid #EBEBEB;
}

#sidebar .top {
  width: 100%;
  height: 90px;
  line-height: 90px;
  background: #fff;
  border-bottom: 2px solid #EBEBEB;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  display: flex;
}

#sidebar .top img {
  display: block;
  margin: 35px 30px 0 30px;
  width: 20px;
  height: 18px;
}

#sidebar .menu {
  width: 100%;
  height: calc(100% - 92px);
  background: #F7F7F7;
}

#sidebar .menu .row {
  padding-left: 30px;
  display: flex;
  font-size: 13px;
  color: #808080;
  height: 40px;
}

#sidebar .menu .row:hover,
#sidebar .menu .row:hover > .arrow,
#sidebar .menu .row2 span:hover {
  color: #0078FF;
  cursor: pointer;
}

#sidebar .menu .row2 span {
  display: block;
  font-size: 13px;
  color: #808080;
  height: 40px;
  padding-left: 80px;
}

#sidebar .menu .row:nth-child(1) {
  padding-top: 20px;
}

#sidebar .menu .row img {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 30px;
}

#sidebar .menu .row .arrow {
  margin: 8px 0 10px 110px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  width: 6px;
  height: 6px;
  transform: rotate(-135deg);
  opacity: 0.6;
  color: #4A4A4A;
}

#sidebar .menu .row .arrow2 {
  margin: 8px 0 10px 110px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  width: 6px;
  height: 6px;
  transform: rotate(45deg);
  opacity: 0.6;
  color: #4A4A4A;
}
</style>
