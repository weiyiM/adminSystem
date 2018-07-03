<template>
  <div class="navbar" >
      <div @click="sidebar">logo</div>
    <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    个人中心
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

export default {
  components: {

  },
  computed: {

  },
  methods: {
    sidebar(){

    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../../../common/css/_variate";
.navbar{
  height: 0.5rem;
  border: 1px solid @borderColor;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
}
</style>
