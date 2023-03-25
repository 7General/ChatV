<template>
    <h1>我是shoopmain</h1>

</template>

<script>


export default{
    props:['id'],
    mounted(){
        console.log(this.id)
    }
}
</script>
