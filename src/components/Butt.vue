<template>
  <div id="butt">
    <div class="top">
      <div class="pro">
        <span>选择产品</span>
        <select class="" name="">
          <option value ="1">弘康哆啦A保重大疾病保险</option>
          <option value ="2">瑞泰瑞康重大疾病保险</option>
          <option value ="3">瑞泰成长卫士青少年重大疾病保险</option>
          <option value ="4">瑞泰成长卫士少儿重大疾病保险</option>
          <option value ="5">昆仑健康树终身重大疾病保险</option>
          <option value ="6">昆仑健康保重大疾病</option>
          <option value ="7">百年康惠保重大疾病保险</option>
          <option value ="8">和谐健康慧馨安少儿定期重大疾病保险</option>
        </select>
      </div>
      <div class="people">
        <span>身份识别ID</span>
        <input type="text">
      </div>
    </div>

    <div class="main">
      <div class="lab">请先下载配置文件，修改后上传到此页面对应的位置</div>
      <div class="content">
        <div>配置文件</div>
        <div class="load">
          <div>
            <div>2_4kXTU6y</div>
            <span><a href="http://p7etb9o8b.bkt.clouddn.com/2_4kXTU6y.jsonx" download="2_4kXTU6y">下载文件</a></span>
          </div>
          <div>
            <div>1_KnEkVha</div>
            <span><a href="http://p7etb9o8b.bkt.clouddn.com/1_KnEkVha.json" download="1_KnEkVha">下载文件</a></span>
          </div>
          <div>
            <div>1_c7P12lu</div>
            <span><a href="http://p7etb9o8b.bkt.clouddn.com/1_c7P12lu.json" download="1_c7P12lu">下载文件</a></span>
          </div>
        </div>
        <div class="upload">
          <div>
            <div>{{ file1 }}</div>
            <input ref="upload1" type="file" @change="changeFile(1)">
            <span @click="add(1)" v-if="!file1">上传文件</span>
            <span @click="add(1)" v-else>重新上传</span>
          </div>
          <div>
            <div>{{ file2 }}</div>
            <input ref="upload2" type="file" @change="changeFile(2)">
            <span @click="add(2)" v-if="!file2">上传文件</span>
            <span @click="add(2)" v-else>重新上传</span>
          </div>
          <div>
            <div>{{ file3 }}</div>
            <input ref="upload3" type="file" @change="changeFile(3)">
            <span @click="add(3)" v-if="!file3">上传文件</span>
            <span @click="add(3)" v-else>重新上传</span>
          </div>
        </div>
      </div>
    </div>

    <div class="sure">
      <div>提交</div>
      <div>取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Butt',
  data () {
    return {
      file1: '',
      file2: '',
      file3: ''
    }
  },
  methods: {
    changeFile (num) {
      this['file' + num] = this.$refs['upload' + num].files[0].name
    },
    add (num) {
      this.$refs['upload' + num].click()
    }
  }
}
</script>

<style scoped>
#butt {
  height: calc(100% - 92px);
  width: 100%;
  background: #F7F7F7;
}

.top {
  display: flex;
  justify-content: space-between;
  padding: 33px 40px;
  height: 125px;
  font-size: 14px;
  color: #333333;
  font-weight: bold;
}

.top > div {
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 0 45px;
}

.top > div > span {
  margin-right: 31px;
}

.top .pro {
  flex: 3;
  margin-right: 30px;
}

.top .pro select {
  width: 75%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #C6C9CF;
}

.top .pro select:focus {
  outline: none;
}

.top .people {
  flex: 2;
}

.top .people input {
  width: 75%;
  text-align: center;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #C6C9CF;
}

.top .people input:focus {
  outline: none;
}

.main {
  margin: 0 40px;
  font-size: 14px;
  color: #333333;
  font-weight: bold;
  background: #fff;
}

.main .lab {
  color: #808080;
  padding: 25px 160px;
}

.main .content {
  padding: 0 45px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main .content > div:nth-child(1) {
  flex: 1;
}

.main .content > div:not(:nth-child(1)) {
  flex: 6;
  height: 150px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.main .content > div:not(:nth-child(1)) > div {
  display: flex;
  align-items: center;
}

.main .content .load a {
  text-decoration: none;
  color: #fff;
}

.main .content .upload input {
  display: none;
}

.main .content .load > div > div,
.main .content .upload > div > div {
  width: 70%;
  height:40px;
  line-height: 40px;
  border-radius: 5px;
  border: 1px solid #C6C9CF;
  margin-right: 30px;
  text-align: center;
}

.main .content span {
  background:linear-gradient(-135deg,rgba(163,137,212,1),rgba(137,158,212,1));
  border-radius: 8px;
  color: #fff;
  padding: 10px;
}

.main .content span:hover {
  cursor: pointer;
}

.sure {
  float: right;
  margin-top: 40px;
  margin-right: 45px;
  display: flex;
}

.sure div {
  width:191px;
  height:48px;
  line-height: 48px;
  text-align: center;
  border-radius: 24px ;
}

.sure div:nth-child(1) {
  background:linear-gradient(-135deg,rgba(29,233,182,1),rgba(29,196,233,1));
  color: #fff;
  margin-right: 30px;
}

.sure div:nth-child(2) {
  border: 1px solid #979797;
  color: #979797;
}
</style>
