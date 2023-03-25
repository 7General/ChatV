import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import User from '../views/User.vue'
import NotFind from '../views/NotFind.vue'
import News from '../views/News.vue'
import Parents from '../views/Parents.vue'
import StyleOne from '../views/Styleone.vue'
import StyleTwo from '../views/StyleTwo.vue'
import Page from '../views/Page.vue'
import ShopTop from '../views/ShopTop.vue'
import ShopMain from '../views/ShopMain.vue'
import ShopFooter from '../views/ShopFooter.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 重定向
    {
      path:'/',
      // redirect:'/home'
      // 命名路由
      // redirect:{name:'home'}
      // 方法
      redirect:(to)=>{

        return {path:'/home'}
      }
    },
    {
      path: '/',
      name: 'home',
      // 区别名访问
      alias:'/father',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      // 每路守卫，路由独享
      beforeEnter:(to,from)=>{

      }
    },
    {
      // 动态路由 
      path: '/user/:id',
      component: User,
      props:true
    }, {
      // 动态路由参数校验
      // path: '/news/:id(\\d+)',
      // 有多个参数
      // path: '/news/:id+',
      // 参数可有可无
      path: '/news/:id*', //== path: '/news/:id?'该方式不能重复叠加
      // 去名字
      name:'news',
      component: News
    }, {
      //使用正则表达匹配
      path: '/:path(.*)',
      component: NotFind
    }, 

    {
      //使用正则表达匹配
      path: '/page',
      component: Page
    }, 
    {
      //使用正则表达匹配
      path: '/parent',
      component: Parents,
      children: [
        {
          path: "styleone",
          component: StyleOne,
        },
        {
          path: "styletwo",
          component: StyleTwo,
        },
      ]
    }
    ,{
      path:'/shop/:id',
      components:{
        default:ShopMain,
        ShopTop,
        ShopFooter
      },
      props :{
        default:true,ShopFooter:false,ShopTop:false
      }
    }

  ]
})

// 全局守卫
router.beforeEach((to,from,next)=>{


  next()
})

export default router
