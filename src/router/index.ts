import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/chatt',
      name: 'ChatT',
      component: () => import('../views/ChatText.vue'),
    },
    {
      path: '/chati',
      name: 'ChatI',
      component: () => import('../views/ChatImg.vue'),
    }
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router