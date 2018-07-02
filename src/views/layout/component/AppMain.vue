<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade-transform" mode="out-in">
      <!--<keep-alive :include="cachedViews">-->
        <router-view ></router-view>
      <!--</keep-alive>-->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    // key() {
    //   return this.$route.fullPath
    // }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../common/css/_variate";
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
    background-color: @sidebarBgColor;
    color: @sidebarFont;
  }
</style>
