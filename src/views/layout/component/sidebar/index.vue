<template>
  <div>
    <router-link to="/index/userIndex" key="user">
        <h3 class="m-system-name">后台管理系统 </h3>
    </router-link>
    <el-menu  class="el-menu-vertical-demo m-sidebar"
              mode="vertical"
              :default-active="$route.path"
              :collapse="isCollapse"
              :show-timeout="0"
              :hide-timeout="0"
              text-color="#fff"
              active-text-color="#fff"
              unique-opened
              @open="handleOpen"
              @close="handleClose">
      <sidebar-item :list="side_list" ></sidebar-item>
    </el-menu>
    <!--<sidebar-item :list="side_list" ></sidebar-item>-->
  </div>


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
.m-system-name{
  font-size: 0.2rem;
  line-height: 0.4rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #e7eef1;
  margin: 0.2rem;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
</style>
