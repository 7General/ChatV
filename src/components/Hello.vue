
<template>
    <h2>我是hello组件内容</h2>
    <h2>[]{{message}}[]</h2>
    <!-- <h2>[]{{mod}}</h2> -->
    <h2>[{{list}}]</h2>
</template>

<script>
export default {
    data(){
        return {
            a:10
        }
    },
    mounted (){
        console.log("======parent========")
        console.log(this.$parent)
        console.log("=======root=======")
        console.log(this.$root)
    },
    // props:['message','mod']
    props:{ //对象
        // 1:类型限制
        // message:String
        // 2：除了类型限制，还可以设置默认值,比传值选项
        message:{
            type:String,
            default:"我是一个默认值",
            required:true
        },
        list:{ //对象和数组的默认值必须从一个工厂函数返回
            type:Array,
            default(){
                return []
            }
        }

    }

    
}
</script>