import Vue from 'vue'
import Router from 'vue-router'
import Sign from './components/Sign.vue'
import Home from './components/Home.vue'
import Index from './components/Index.vue'
import Analysis from './components/Analysis.vue'
import Butt from './components/Butt.vue'
import Contrast from './components/Contrast.vue'
import Poil from './components/Poil.vue'
import CustomPublic from './components/CustomPublic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'index', name: '首页', component: Index },
        { path: 'analysis', name: '数据库分析', component: Analysis },
        { path: 'butt', name: '产品对接管理', component: Butt },
        { path: 'contrast', name: '产品对比', component: Contrast },
        { path: 'poil', name: '保单管理', component: Poil },
        { path: 'custompublic', name: '配置销售平台', component: CustomPublic }
      ]
    }
  ]
})
