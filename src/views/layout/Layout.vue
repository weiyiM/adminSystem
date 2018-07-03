<template>
  <div class="app-wrapper" >
    <!--<div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>-->
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <!--<tags-view></tags-view>-->
      <app-main></app-main>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import AppMain from './component/appMain.vue';
  import sidebar from './component/sidebar';
  import navbar from './component/Navbar';
    export default {
        data() {
            return {}
        },
      components: {
        AppMain,
        sidebar,
        navbar
      },
        methods: {},
        created() {

        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
.sidebar-container{
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 1.8rem !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: rgb(48, 65, 86);
  color: #e0e0e0;
}
  .main-container{
    min-height: 100%;
    -webkit-transition: margin-left .28s;
    transition: margin-left .28s;
    margin-left: 180px;
  }
</style>
