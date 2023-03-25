<template>
    <div>
       <h1>父组件 parent</h1> 
       <router-link to="/parent/styleone">样式一</router-link>
       <router-link to="/parent/styletwo">样式二</router-link>

       <router-view> </router-view>
    </div>
</template>