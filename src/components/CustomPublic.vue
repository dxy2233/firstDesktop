<template>
  <div class="custom">
    <div class="custom-nav">
      <span :class="{'current':current==0}" @click="changeTab(0)">自定义界面</span>
      <span :class="{'current':current==1}" @click="changeTab(1)">自定义产品</span>
    </div>
    <div v-if="current==0">
      <div class="plate">
        <span class="name-txt">板块名称修改</span>
        <div class="plate-name">
          <label>严选<input type="text" maxlength="4" @change="setPlateName1" /></label>
          <label>保库<input type="text" maxlength="4" @change="setPlateName2" /></label>
          <label>比价<input type="text" maxlength="4" @change="setPlateName3" /></label>
          <label>定制<input type="text" maxlength="4" @change="setPlateName4" /></label>
        </div>
      </div>
      <div class="title-txt">严选</div>
      <div class="plate">
        <div class="original-img original-img1">
          <img id="original-one" src="../assets/banner.jpg" />
        </div>
        <div class="con-txt con-txt1">替换为</div>
        <div class="replace-img replace-img1" id="replace-one">
          <div class="add-icon">
            <input type="file" @change="selectImg1">
          </div>
          <img class="space-img" src="../assets/space-one.jpg">
          <div class="tip-txt">尺寸1080*500</div>
          <img class="new-img" :src="imgUrl1" :class="{'selected':imgUrl1}" />
        </div>
      </div>
      <div class="title-txt">定制首页图</div>
      <div class="plate">
        <div class="original-img original-img2">
          <img id="original-two" src="../assets/decision-bg.jpg" />
        </div>
        <div class="con-txt con-txt2">替换为</div>
        <div class="replace-img replace-img2" id="replace-two">
          <div class="add-icon">
            <input type="file" @change="selectImg2">
          </div>
          <img class="space-img" src="../assets/space-two.jpg">
          <div class="tip-txt">尺寸1080*1920</div>
          <img class="new-img" :src="imgUrl2" :class="{'selected':imgUrl2}" />
        </div>
      </div>
      <button class="submit-btn" @click="submitInterface">提交</button>
      <button class="submit-btn restore-btn" @click="restoreInterface">全部还原</button>
    </div>
    <div v-if="current==1">
      <div class="title-txt dingzhi-title">定制</div>
      <div class="plate custom-plate">
        <div class="product" v-for="(item, index) in productList" :key="index">
          <span class="name-txt">推荐产品{{index+1}}</span>
          <div class="plate-name">
            <label>
              推荐险种
              <select>
                <option v-for="(varietyItm, varietyIdx) in item.variety" :key="varietyIdx" :value="varietyItm">{{varietyItm}}</option>
              </select>
            </label>
            <label>
              产品计划
              <select class="pro-plan">
                <option v-for="(planItm, planIdx) in item.plans" :key="planIdx" :value="planItm">{{planItm}}</option>
              </select>
            </label>
            <label>
              优先级
              <select>
                <option v-for="(priorityItm, priorityIdx) in item.priority" :key="priorityIdx" :value="priorityItm">{{priorityItm}}</option>
              </select>
            </label>
          </div>
          <span v-if="index>0" class="delete-btn" @click="deletePro(index)">×</span>
        </div>
        <button class="add-btn" @click="addPro">添加产品</button>
      </div>
      <button class="submit-btn">保存</button>
    </div>
    <!-- <img :src="imgUrl" />
    <input type="file" @change="selectImg" /> -->
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'CustomPublic',
  data () {
    return {
      current: 0,
      imgData: {
          accept: 'image/gif, image/jpeg, image/png, image/jpg',
      },
      imgUrl1: "",
      imgUrl2: "",
      plateName: [],
      productOne: {variety: ["重大疾病", "一般意外", "人寿保险", "百万医疗", "小额医疗", "境内旅游", "境外旅游"], plans: ["弘康哆啦A保重大疾病保险","瑞泰瑞康重大疾病保险","瑞泰成长卫士青少年重大疾病保险","瑞泰成长卫士少儿重大疾病保险","昆仑健康树终身重大疾病保险","昆仑健康保重大疾病","百年康惠保重大疾病保险","和谐健康慧馨安少儿定期重大疾病保险"], priority: [1, 2, 3, 4, 5, 6, 7]},
      productList: [
        {variety: ["重大疾病", "一般意外", "人寿保险", "百万医疗", "小额医疗", "境内旅游", "境外旅游"], plans: ["弘康哆啦A保重大疾病保险","瑞泰瑞康重大疾病保险","瑞泰成长卫士青少年重大疾病保险","瑞泰成长卫士少儿重大疾病保险","昆仑健康树终身重大疾病保险","昆仑健康保重大疾病","百年康惠保重大疾病保险","和谐健康慧馨安少儿定期重大疾病保险"], priority: [1, 2, 3, 4, 5, 6, 7]}
      ],
      customProduct: []
    }
  },
  methods: {
    selectImg1(event){
      var that = this;
      var msg = event.target.files[0];
      if(msg){
        if(that.imgData.accept.indexOf(msg.type)==-1){
          alert("请选择jpg、jpeg、png、gif格式的图片");
          return;
        }
        if(msg.size>1048576){
          alert('请选择1M以内的图片');
          return;
        }
        var reader = new FileReader();
        reader.onload = (e)=>{
          var src = e.target.result;
          var img = new Image();
          img.src = src;
          img.onload = (ev)=>{
            if(ev.target.width!=1080&&ev.target.width!=500){
              alert('请选择1080*500尺寸的图片');
              return;
            }
            that.imgUrl1 = src;
          }
        }
        reader.readAsDataURL(msg);
      }
    },
    selectImg2(event){
      var that = this;
      var msg = event.target.files[0];
      if(msg){
        if(that.imgData.accept.indexOf(msg.type)==-1){
          alert("请选择jpg、jpeg、png、gif格式的图片");
          return;
        }
        if(msg.size>3145728){
          alert('请选择3M以内的图片');
          return;
        }
        var reader = new FileReader();
        reader.onload = (e)=>{
          var src = e.target.result;
          var img = new Image();
          img.src = src;
          img.onload = (ev)=>{
            if(ev.target.width!=1080&&ev.target.width!=1920){
              alert('请选择1080*1920尺寸的图片');
              return;
            }
            that.imgUrl2 = src;
          }
        }
        reader.readAsDataURL(msg);
      }
    },
    changeTab(index){
      this.current = index;
    },
    setPlateName1(event){
      var val = event.target.value;
      this.plateName[0] = val;
    },
    setPlateName2(event){
      var val = event.target.value;
      this.plateName[1] = val;
    },
    setPlateName3(event){
      var val = event.target.value;
      this.plateName[2] = val;
    },
    setPlateName4(event){
      var val = event.target.value;
      this.plateName[3] = val;
    },
    submitInterface(){
      if(this.plateName.length<4){
        alert("请填写板块名称");
        return;
      }
      else{
        for(var i=0;i<this.plateName.length;i++){
          if(!this.plateName[i]){
            alert("请填写板块名称");
            return;
          }
        }
      }
      if(!this.imgUrl1){
        alert("请选择严选图");
        return;
      }
      if(!this.imgUrl2){
        alert("请选择定制首页图");
        return;
      }
      // console.log(this.plateName);
      // console.log(this.imgUrl1);
      // console.log(this.imgUrl2);
      var result = {"yanxName":this.plateName[0],"baokName":this.plateName[1],"bijName":this.plateName[2],"dingzName":this.plateName[3],"yanxImg":this.imgUrl1,"dingzImg":this.imgUrl2};
      this.axios.get("https://wx.aibaodata.com/settemplateid?id=2").then(res=>{
        // console.log(res);
        if(res.status==200){
          alert("替换成功");
        }
      });
    },
    addPro(){
      this.productList.push(this.productOne);
    },
    deletePro(index){
      this.productList.splice(index, 1);
    },
    restoreInterface(){
      this.axios.get("https://wx.aibaodata.com/settemplateid?id=1").then(res=>{
        // console.log(res);
        if(res.status==200){
          alert("还原成功");
        }
      });
    }
  }
}
</script>
<style scoped>
.custom{
  box-sizing: border-box;
  padding: 40px;
  height: calc(100% - 92px);
  overflow-y: scroll;
  width: 100%;
}
.custom-nav{
  overflow: hidden;
}
.custom-nav span{
  float: left;
  width: 140px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  color: #8f8f8f;
  border: 1px solid #d7d9dd;
  cursor: pointer;
}
.custom-nav span:first-child{
  border-right: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.custom-nav span:last-child{
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.custom-nav span:hover, .custom-nav span:active, .custom-nav span.current{
  color: #fff;
  background:linear-gradient(-135deg,rgba(163,137,212,1),rgba(137,158,212,1));
}
.plate{
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 40px;
  margin: 30px 0;
}
.name-txt{
  font-size: 14px;
  color: #333;
  vertical-align: middle;
  font-weight: 600;
  margin-right: 60px;
}
.plate-name{
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  color: #8a8a8a;
}
.plate-name label{
  /* margin-left: 40px; */
  display: inline-block;
  margin: 15px 10px;
}
.plate-name input[type="text"], .plate-name select{
  width: 120px;
  height: 40px;
  border: 1px solid #c6c9cf;
  border-radius: 5px;
  margin-left: 20px;
  font-size: 14px;
  text-align: center;
}
.plate-name input[type="text"]:focus, .plate-name select:focus{
  outline: none;
  border: 1px solid #69c;
}
.plate-name .pro-plan{
  width: 320px;
}
.title-txt{
  font-size: 18px;
  color: #333;
  font-weight: 600;
}
.original-img{
  display: inline-block;
  vertical-align: middle;
  width: 40%;
}
/* .original-img1{
  height: 200px;
} */
.original-img img{
  width: 100%;
}
.con-txt{
  display: inline-block;
  vertical-align: middle;
  margin: 0 30px;
}
.con-txt1{
  height: 200px;
  line-height: 200px;
}
.replace-img{
  display: inline-block;
  width: 40%;
  border: 1px dashed #979797;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
}
/* .replace-img1{
  height: 200px;
} */
.add-icon{
  width: 40px;
  height: 40px;
  /* background: url(../assets/Combined Shape.png) no-repeat; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.add-icon input[type="file"]{
  width: 40px;
  height: 40px;
  opacity: 0;
}
.tip-txt{
  font-size: 14px;
  color: #ccc;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.original-img2{
  height: auto;
}
.con-txt2{
  height: 500px;
  line-height: 500px;
}
/* .replace-img2{
  height: 762px;
} */
.space-img{
  width: 100%;
}
.submit-btn{
  width:191px;
  height:48px;
  background:linear-gradient(-135deg,rgba(29,233,182,1),rgba(29,196,233,1));
  border-radius: 24px ;
  border: none;
  font-size: 16px;
  color: #fff;
  float: right;
  margin-bottom: 40px;
  cursor: pointer;
}
.submit-btn:focus, .add-btn:focus{
  outline: none;
}
.add-btn{
  width:120px;
  height:40px;
  background:linear-gradient(-135deg,rgba(163,137,212,1),rgba(137,158,212,1));
  border-radius: 20px ;
  font-size: 14px;
  color: #fff;
  border: none;
  margin-top: 30px;
  float: right;
}
.custom-plate{
  padding-bottom: 110px;
}
.new-img{
  position: absolute;
  top: 0;
  left: 0;
}
.replace-img .new-img.selected{
  width: 100%;
  /* height: 100%; */
}
.product{
  /* margin: 15px 0; */
}
.dingzhi-title{
  margin-top: 30px;
}
.delete-btn{
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 16px;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
  font-size: 18px;
  font-weight:800;
  cursor: pointer;
  margin-left: 20px;
}
.restore-btn{
  background:linear-gradient(-135deg,rgba(163,137,212,1),rgba(137,158,212,1));
  margin-right: 30px;
}
</style>
