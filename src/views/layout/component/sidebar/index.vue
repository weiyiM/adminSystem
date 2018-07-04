<template>
      <el-menu  class="el-menu-vertical-demo"
                mode="vertical"
                :default-active="$route.path"
                :collapse="isCollapse"
                :show-timeout="0"
                :hide-timeout="0"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#409EFF"
                unique-opened
                @open="handleOpen"
                @close="handleClose">
        <sidebar-item :list="side_list" ></sidebar-item>
      </el-menu>

</template>

<script type="text/ecmascript-6">
  import SidebarItem from './SidebarItem';
  import sideList from '../../../../common/json/side';
  import store from '../../../../vuex/index';
    export default {
        data() {
            return {
              side_list:[]
            }
        },
      components:{
        SidebarItem
      },
        methods: {
          sidebarClick(v){
            console.log(v)
            this.side_list[v].opened = !this.side_list[v].opened;
            for(let i =0;i<this.side_list.length;i++){
              if(i != v){
                this.side_list[i].opened = false;
              }
            }
          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        created() {
            this.side_list = sideList.side;
        },
        computed:{
          isCollapse() {
            return store.state.isCollapse
          }
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>

</style>
