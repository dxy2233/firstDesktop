<template>
  <div id="sign">
    <div class="logo">
      <img src="../assets/logo2.png" alt="">
    </div>

    <div class="loader loader--style6" v-show="lazy">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="0" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="10" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="13" width="4" height="5" fill="#333">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>

    <div class="signbox" v-show="!lazy">
      <input type="text" v-model="user" placeholder="账户">
      <input type="password" v-model="pw" placeholder="密码">
      <button @click="link">登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sign',
  data () {
    return {
      user: '',
      pw: '',
      lazy: false
    }
  },
  methods: {
    link () {
      if (this.user === 'admin' && this.pw === 'admin') {
        this.lazy = true
        setTimeout(() => {
          this.$router.push({ path: '/home/index' })
        }, 1500)
      } else {
        alert('用户名/密码错误')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sign {
  width: 100%;
}

.logo {
}

.logo img {
  display: block;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  padding: 100px 0;
}

.signbox {
  width: 300px;
  margin: 0 auto;
}

.signbox > input {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 2px solid #eee;
}

.signbox > input:focus {
  outline: none;
}

.signbox input:nth-child(1) {
  background-image: url(../assets/user.png);
  background-repeat: no-repeat;
  background-position: 5% 50%;
}

.signbox input:nth-child(2) {
  background-image: url(../assets/pw.png);
  background-repeat: no-repeat;
  background-position: 5% 50%;
}

.signbox button {
  width: 50%;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  display: block;
  background:linear-gradient(-135deg,rgba(29,233,182,1),rgba(29,196,233,1));
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  border: none;
  color: #fff;
}

.signbox button:focus {
  outline: none;
}

svg path,
svg rect {
  fill: rgba(29,196,233,1);
}

.loader {
  text-align: center;
}
</style>
