<template>
  <div class="side-bar">
    <aside class="sidebar-ul1">
      <sidebar-item :list="side_list" @sidebarClick="sidebarClick"></sidebar-item>
      <!--<sidebar-item></sidebar-item>-->
    </aside>
  </div>
</template>
<script type="text/ecmascript-6">
  import SidebarItem from './SidebarItem';
  import sideList from '../../../../common/json/side'
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
          }
        },
        created() {
            this.side_list = sideList.side;
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
.side-bar{
  .sidebar-ul1{
    font-size: 0.14rem;
  }
}
</style>
