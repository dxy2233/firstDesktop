<template>
  <div id="home">
    <sidebar></sidebar>

    <div class="content">
      <div class="topbar">
        <div class="nav">
          <img src="../assets/icon.png" alt="">
          <span>{{ src }}</span>
        </div>
        <div class="user">
          <img src="../assets/info.png" alt="">
          <img src="../assets/photo.png" alt="">
          <span>admin</span>
        </div>
      </div>
      <!-- 主要内容 -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
export default {
  name: 'Home',
  components: {
    sidebar
  },
  data () {
    return {
      src: ''
    }
  },
  mounted () {
    this.src = this.$route.name
  },
  updated () {
    this.src = this.$route.name
  }
}
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
  display: flex;
}

.content {
  width: 100%;
}

.content .topbar {
  background: #fff;
  height: 90px;
  border-bottom: 2px solid #EBEBEB;
}

.content .topbar .nav {
  float: left;
  margin-left: 40px;
  margin-top: 30px;
}

.content .topbar .nav span {
  display: block;
  margin-left: 45px;
  margin-top: -30px;
  color: #808080;
}

.content .topbar .user {
  float: right;
  margin-right: 30px;
  margin-top: 30px;
  display: flex;
}

.content .topbar .user img:nth-child(1) {
  width: 24px;
  height: 30px;
}

.content .topbar .user img:nth-child(2) {
  margin-left: 30px;
  margin-right: 25px;
  margin-top: -5px;
  width: 40px;
  height: 40px;
}

.content .topbar .user span {
  margin-top: 5px;
  font-size: 13px;
  color: #999999;
}
</style>
