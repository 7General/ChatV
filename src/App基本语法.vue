<script>
export default {
  data() {
    return {
      num: 1,
      msg: "我是一个message",
      title: "我是一个title",
      html: "<h1>我是一个h1</h1>",
      id: "d1",
      url: "https://img10.360buyimg.com/babel/s320x320_jfs/t1/120921/10/8171/274287/5f214206E2f4cc0d9/dc161934a4559c17.jpg!cc_320x320",
      attributeName: "id",
      mouseevent: "click",
      message: "hellword",
      activeClass: "active",
      user: {
        name: "你好啊",
      },
      isclass: true,
      isActive: true,
      error: null,
      activeColor: "red",
      fontSize: "90px",
      bgcolor: "green",
      styleObj: {
        // 不允许获取data中的数据
        color: "blue",
        fontSize: "50px",
        "background-color": "green",
      },
      age: 18,
      sex: "man",
      persons: ["张三啊1", "张三啊2", "张三啊3", "张三啊4"],
      personObj: {
        张三啊1: "age",
        张三啊2: "name",
        张三啊3: "school",
        张三啊4: "addredd",
      },
      list: [1, 2, 3, 4, 5, 6],
      vMessage: "helloword",
      checked:'',
      fruits:["橘子"],
      vsex:"男",
      city:"张家界",
      citys:["张家界"],
      lazymsg:"d",
    };
  },
  computed: {
    //计算属性  计算属性讲基于他们的响应依赖关系缓存
    // reversermessage: function () {
    //   return this.message.split("").reverse().join("");
    // },
    // 每一个计算属性中都有一个gtter和setter,完整的写法
    reversermessage: {
      get: function () {
        return this.message.split("").reverse().join("");
      },
      set: function (newValue) {
        //在设置或者更改属性的时候设置
        console.log(newValue);
        this.message = newValue;
      },
    },
    classObjCom: function () {
      return {
        active: this.isActive && !this.error,
        hellow: this.error,
      };
    },
  },
  methods: {
    changUsername: function () {
      this.title = "那一天我伤害了你";
    },
    changecolor: function () {
      this.id = "d2";
    },
    reversermessagefun: function () {
      return this.message.split("").reverse().join("");
    },
    changUname: function () {
      this.user.name = "你大哥还是你大哥";
    },
    changeList: function () {
      // this.list[5] = 7;
      // push() 给数组末尾添加元素
      // pop()  给数组的末尾删除元素
      // shift() 给数据的第一位进行删除
      // unshit()给数据的第一位进行添加
      // splice() // 删除元素，插入元素。替换元素
      // 删除元素
      // 第一个参数，表示开始插入或者开始删除的元素的下标
      // 第二个参数，表示传入要删除的几个元素，如果没有传，就删除后面所有的元素

      // 插入元素
      // 第一个参数，表示开始插入或者开始删除的元素的下标
      // 第二个参数，传入0，并且后面接上我们插入的元素

      // 替换元素
      // 第一个参数，表示开始插入或者开始删除的元素的下标
      // 第二个参数，表示要替换几个元素,后面的参数表示用于替换前面的元素的
      this.list.splice(1, 3, 7, 8, 9, 10, 11, 12);
      // sort()
      // reverse()
    },
    divClick: function () {
      console.log("父元素的展示");
    },
    btnClick: function () {
      console.log("]btn元素的展示");
    },
    submitClick() {
      console.log("submitClicksubmitClick");
    },
    onceClick() {
      console.log("onceClickonceClick");
    },
    keyUp() {
      console.log("键盘被按下");
    },
    changeValue(e){
      console.log("changeValuechangeValue"+e);
      this.vMessage = e.target.value
    },
    dowmsg(){
      console.log("dowmsgdowmsgdowmsg");
    }
  },
  // 监听数据变化
  watch: {
    //监听数据变化
    // // 每当message发生变化的时候就会执行
    // message: function (newvalue, oldvalue) {
    //   console.log(newvalue, oldvalue);
    //   // 执行异步操作，或者复杂逻辑代码
    //   if(newvalue.length < 5 || newvalue.length > 20){
    //     console.log("输入框内容不能小于5")
    //   }
    // },

    message: {
      immediate: true, //初始化的时候就调用函数
      handler: function (newValue) {
        console.log(newValue);
        if (newValue.length < 5 || newValue.length > 20) {
          console.log("输入框内容不能小于5");
        }
      },
    },
    // 监听不到不对象的属性变化,需要使用深度监听
    // user:function(newValue){
    // }
    // user :{
    //   handler:function(newValue){
    //     console.log(newValue)
    //   },
    //   deep:true,//表示是否深度监听,监听器会一层一层的向下监听,给每个属性都加上监听
    // }
    // 使用字符串的形式进行优化，只会单独监听对象中的对应属性
    "user.name": {
      handler: function (newValue) {
        console.log(newValue);
      },
      deep: true, //表示是否深度监听,监听器会一层一层的向下监听,给每个属性都加上监听
    },
  },
};
</script>

<template>
  <div>
    {{ msg }}
    {{ title }}
    <p v-once>{{ title }}</p>
    <button @click="changUsername">改变名字</button>
    <!-- 让内容以 原始的html元素 -->
    <p v-html="html"></p>

    <p v-bind:id="id">我上海ii一个p</p>
    <img v-bind:src="url" alt="" />
    <button @click="changecolor">改变颜色</button>
    <button @click="id = 'd2'">改变颜色</button>
    <!-- 使用javasciptr表达式 -->
    <p>{{ num + 1 }}</p>

    <p>{{ title.split("").reverse().join("") }}</p>

    <p v-bind:id="id + 1">v-bind绑定</p>
    <!--bind语法糖 :id=''  -->
    <p :id="id">我上海ii一个p</p>
    <!-- 用于监听dom的事件 -->
    <button v-on:click="changecolor">改变颜色</button>
    <!-- v-on的语法糖 @ -->

    <!-- 动态参数 -->
    <p v-bind:[attributeName]="id">v-bind</p>

    <button @click="attributeName = 'class'">改变属性</button>

    <!-- 动态事件 -->
    <button @[mouseevent]="attributeName = 'class'">改变属性</button>
    <button @click="mouseevent = 'mouseover'">改变事件</button>
    <h1>计算属性</h1>
    <!-- 第一种  计算属性 -->
    <p>{{ message.split("").reverse().join("") }}</p>
    <!-- 第二种  计算属性 -->
    <p>{{ reversermessage }}</p>
    <!-- 第三种 -->
    <p>{{ reversermessagefun() }}</p>
    <button @click="message = '你好'">改变message</button>
    <button @click="reversermessage = '白日依山尽'">改变reverseMsg</button>

    <h1>监听数据变化</h1>
    <button @click="message = '黄河入海流'">监听message变化</button>
    <h1>数据的双向绑定</h1>
    <input type="text" v-model="message" />
    <h1>监听对象的属性变化</h1>
    <p>{{ user.name }}</p>
    <button @click="changUname">监听对象的属性</button>

    <p class="active">hello</p>
    <p :class="{ active: isclass }">动态绑定</p>
    <button @click="isclass = !isclass">改变</button>

    <p :class="classObjCom">工期</p>
    <h1>类名的数组使用方式</h1>
    <p :class="[message, activeClass]">类名的数组使用方式</p>
    <h1>类名的数组和对象结合使用方式</h1>
    <p :class="[message, { active: isclass }]">类名的数组和对象结合使用方式</p>

    <h1>style样式的多种操作</h1>
    <!-- 第一种  放置字符串 -->
    <p style="color: red">style样式的多种操作第一种 放置字符串</p>
    <!-- 第二种  放置对象 -->
    <p
      :style="{
        color: activeColor,
        fontSize: fontSize,
        'background-color': bgcolor,
      }"
    >
      styl e样式的多种操作第二种 放置对象
    </p>
    <p :style="styleObj">简写 style样式的多种操作第二种 放置对象</p>
    <p :style="[styleObj, { fontSize: '30px' }]">
      数组语法 style样式的多种操作第二种 放置对象
    </p>

    <h1>v-if</h1>
    <p v-if="age >= 18">我是一个成年人</p>
    <p v-if="false">我是一个小朋友</p>
    <!-- v-if  v-else -->
    <p v-if="age >= 18">我是一个成年人</p>
    <p v-else>我是一个小朋友</p>
    <!-- v-if  v-else-if -->
    <p v-if="age > 18">我是一个成年人</p>
    <p v-else-if="age == 18">我今天刚好18岁</p>
    <p v-else>我是一个小朋友</p>
    <h1>在template元素上使用v-if条件渲染分组</h1>
    <template v-if="age >= 18">
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
    </template>
    <h1>v-show:简单的切换对象的display</h1>
    <p v-show="sex == 'man'">man</p>
    <p>woman</p>
    <p>
      v-if:只要为false，对应的元素以及子元素都不会被渲染，控制dom元素的创建和销毁
    </p>

    <h1>列表渲染</h1>
    <ul>
      <li v-for="item in persons" :key="item">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in persons" :key="index">
        {{ item }}--{{ index }}
      </li>
    </ul>

    <ul>
      <li v-for="(item, index) of persons" :key="index">
        {{ item }}--{{ index }}
      </li>
    </ul>
    <h1>v-for 使用对象</h1>
    <p>
      为了给vue一个提示，以便他能跟踪每个节点的身份，从而重用和重新排序现有元素
    </p>
    <p>key 是唯一表示</p>
    <p>快速找到节点，减少渲染次数，提升渲染性能</p>
    <ul>
      <!-- item表示的value  -->
      <li v-for="item in personObj" :key="item">{{ item }}</li>
    </ul>

    <ul>
      <!-- item表示的value  ke-->
      <li v-for="(item, key) in personObj" :key="key">
        {{ item }}-->{{ key }}
      </li>
    </ul>

    <ul>
      <!-- item表示的value  ke-->
      <li v-for="(item, key, index) in personObj" :key="key">
        {{ index }}-->{{ key }}-->{{ item }}
      </li>
    </ul>

    <h1>数组更新检测</h1>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="changeList">改变数组</button>

    <h1>事件修饰符</h1>
    <!-- .stop -->
    <div @click="divClick">
      <button @click.stop="btnClick">按钮了</button>
    </div>
    <h1>.prevent 阻止默认行为</h1>
    <form action="">
      <input type="submit" value="提交" @click.prevent="submitClick" />
    </form>
    <h1>.once 只触发一次</h1>
    <button @click.once="onceClick">只触发一次</button>
    <h1>按键修饰符，监听键盘的某个键帽</h1>
    <input type="text" @keyup.enter="keyUp" />

    <h1>表单输入绑定</h1>

    <input type="text" v-model="vMessage" />{{vMessage}}
    <!-- 原理 -->
    <p>本质是两个操作，1：v-model绑定一个value属性2：v-on  给当前元素添加一个input事件</p>
    <input type="text" :value="vMessage" @input="changeValue">

    <h1>复选框</h1> 
    <p>单选框，v-model为布尔值</p>
    <input type="checkbox" v-model="checked">单选框
    {{checked}}
    <p>多个 选框，v-model为布尔值</p>
    <input type="checkbox" v-model="fruits" value="苹果">苹果
    <input type="checkbox" v-model="fruits" value="橘子">橘子
    <input type="checkbox" v-model="fruits" value="香蕉">香蕉
    <input type="checkbox" v-model="fruits" value="哈密瓜">哈密瓜
    <h2>喜欢的水果[{{fruits}}]</h2>
    <h2>单选框</h2>
    <input type="radio" v-model="vsex" value="男">男
    <input type="radio" v-model="vsex" value="女">女
    <h2>{{vsex}}</h2>

    <h1>选项框</h1>
    <!-- 单选框 -->
    <h2>单选框</h2>
    <select name="" id="" v-model="city">
      <option value="张家界">张家界</option>
      <option value="信阳">信阳</option>
      <option value="北京">北京</option>
    </select>
    <h2>{{city}}</h2>

    <!-- 多选框 -->
    <h2>多选框</h2>
    <select name="" id="" v-model="citys" multiple>
      <option value="张家界">张家界</option>
      <option value="信阳">信阳</option>
      <option value="北京">北京</option>
    </select>
    <h2>{{citys}}</h2>

    <h1>修饰符使用</h1>
    <h2>.lazy 当输入框失去焦点之后，在去同步数据</h2>
    <input type="text" v-model.lazy="lazymsg">
    {{lazymsg}}

    <h1>trim 自动过滤用户输入的首尾空白字符</h1>
    <input type="text" v-model.trim="lazymsg" @keydown="dowmsg">
    [{{lazymsg}}]
  </div>
</template>

<style>
.hellword {
  font-size: 25px;
  color: green;
}
.active {
  font-size: 35px;
}
#d1 {
  font-size: 35px;
  color: red;
}

#d2 {
  font-size: 55px;
  color: green;
}

.d1 {
  font-size: 60px;
  color: blue;
}
</style>
 