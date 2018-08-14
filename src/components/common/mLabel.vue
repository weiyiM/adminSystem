<template>
  <div class="m-label">
    <span class="m-triangle"></span>
    <span class="m-text">新品</span>
  </div>
</template>

<script>
    export default {
        name: "m-label"
    }
</script>

<style lang="less" rel="stylesheet/less" >
  .m-label{
    position: absolute;
    top:0;
    right: 0;
    transform: rotate(40deg);
    width: 70px;
    height: 70px;
    .m-text{
      font-size: 14px;
    }
    /*.m-triangle{*/
    /*position: relative;*/
    /*width: 0;*/
    /*height: 0;*/
    /*border-width: 70px;*/
    /*border-style: solid;*/
    /*border-color: red transparent transparent transparent;*/
    /*z-index: 1;*/
    /*}*/
  }
</style>
