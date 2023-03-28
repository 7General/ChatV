import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ChatText from '../views/ChatText.vue'
import ChatImg from '../views/ChatImg.vue'


const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/chatt',
      name: 'ChatT',
      component: ChatText
    },
    {
      path: '/chati',
      name: 'ChatI',
      component: ChatImg
    }
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  // 全局守卫
  // router.beforeEach((to,from,next)=>{
  //   const isLogin = sessionStorage.getItem('token');
  //   if(isLogin){
  //     next();
  //   } else {
  //     console.log('用户没有登录')
  //     next('/about');
  //   }
  // });
  
  export default router