<template>
  <div class="m-user-index">
    <page-title :title="name" @freshClick="freshClick"></page-title>
  </div>

</template>
<script type="text/ecmascript-6">
  import pageTitle from '../../components/common/title';
    export default {
        data() {
            return {
              name:'工作模块管理'
            }
        },
        components:{
          pageTitle
        },
        methods: {
          freshClick(){
            console.log('fresh');
          }
        },
        created() {

        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>

</style>
