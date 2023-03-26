<script>
import Content from "./components/Content.vue";
import CSlot from "./components/ContentSlot.vue";

import parentprovide from "./components/ParentProvide.vue";

import steup from "./components/Setup.vue";
import steupprops from "./components/SetupProps.vue";
import SetupProvide from "./components/SetupProvide.vue";
import viewSetup from "./components/ViewSetup.vue";

import User from "./views/User.vue";

import store from "./store";

export default {
  data() {
    //让每一个组件都返回一个新的对象，不会造成污染
    return {
      chils: "",
      message: "北京欢迎你",
    };
  },
  components: {
    Content,
    CSlot,
    parentprovide,
    steup,
    steupprops,
    SetupProvide,
    viewSetup,
    User,
  },
  computed: {},
  
  methods: {
    getChildMsg(value) {
      const app_key = (import.meta.env.VUE_APP_API_URL || process.env.VUE_APP_API_URL || "");
      console.log("getChildMsggetChildMsg-",app_key);
      this.chils = value;
    },
    
  },
  // 监听数据变化
  watch: {},
  provide: {
    store,
  },
};
</script>

<template>
  <div>
    ---[{{ apiUrl }}]-----apiUrl;
    <!-- 拿到子组件content的数据，通过自定义事件 -->
    <!--  2:在父组件中，通过v-on监听子组件中自定义的事件 -->
    <button @click="appkeyclick">appkey</button>
    <Content @injectMsg="getChildMsg"></Content>
    <h1>子组件通过自定义事件向父组件传值</h1>
    <h1>子组件传过来的数据为[{{ chils }}]</h1>

    <h1>父子组件的访问方式</h1>
    <p>父组件去访问子组件.$refs</p>
    <p>子组件去访问父组件.$parent !!!在开发中经量少用</p>
    <p>子组件去访问根组件.$root</p>

    <h1>2插槽的基本使用</h1>
    <CSlot>
      <button>我是一个按钮</button>
    </CSlot>
    <CSlot>
      <input type="text" />
    </CSlot>

    <h1>3 具名插槽的基本使用</h1>
    <CSlot>
      <!-- v-slot 只能在 template 上-->
      <template v-slot:button
        ><button>我是一个按钮 {{ message }}</button></template
      >
      <template v-slot:input><input type="text" /></template>
      <template v-slot:h2><h2>我是一个h2 rrr</h2></template>
    </CSlot>
    <h1>4 插槽备用内容和作用于插槽的使用</h1>
    <p>作用域插槽 父组件替换插槽的标签，但是数据由子组件来提供</p>
    <h1>无序列表</h1>
    <CSlot>
      <template v-slot:default="slotProps">
        <!-- {{slotProps.list}}
 {{slotProps.message}} -->
        <ul>
          <li v-for="item in slotProps.list" :key="item">{{ item }}</li>
        </ul>
      </template>
    </CSlot>

    <h1>有序列表</h1>
    <CSlot>
      <template v-slot:default="slotProps">
        <ol>
          <li v-for="item in slotProps.list" :key="item">{{ item }}</li>
        </ol>
      </template>
    </CSlot>

    <h1>5 组件之间的跨级通信 Provide/Inject</h1>
    <p>
      这中情况，我们可以使用provide和inject，无论组件层次的结构有多深。
      父组件都可以作为其所有子组件的依赖提供者。
      父组件有一个provide选项来提供数据，子组件有一个inject选项来开始使用这些数据
    </p>

    <parentprovide></parentprovide>

    <steup></steup>
    <steupprops />
    <SetupProvide />
    <viewSetup />

    <h1>vue-router</h1>
    <!-- vue-router 是基于路由和组件的，路由是用来设定访问路径，将路径和组件映射起来 -->
    <p>
      <router-link to="/">go to home</router-link><br />
      <router-link to="/about">go to about</router-link><br />
      <router-link to="/user/123">go to user</router-link><br />
      <router-link to="/news/123">go to news</router-link><br />
      <router-link :to="{ name: 'news', params: { id: 345 } }"
        >go to news2</router-link
      ><br />
      <router-link to="/parent">go to parent</router-link><br />
      <router-link to="/page">go to page</router-link><br />
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染到这里 -->

    <router-view name="ShopTop"></router-view>
    <router-view></router-view>
    <router-view name="ShopFooter"></router-view>
  </div>
</template>

<style>
</style>
 