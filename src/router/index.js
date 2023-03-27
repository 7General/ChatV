import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


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