<template>
  <div class="sidebar-li1">
    <template  v-for="(item,index) in list">
      <div class="sidebar-one-content" @click="sidebarClick(index)">
        <span class="sidebar-icon "></span>
        <span v-text="item.name">item1</span>
        <!--<span class="sidebar-more" v-if="item.children.length >0"></span>-->
        <i class="el-icon-arrow-down el-icon--right sidebar-more"></i>
      </div>
      <ul v-if="item.children.length >0" v-show="item.opened" v-for="(child,i) in item.children">
        <li><router-link :to="child.url" v-text="child.name"></router-link> </li>
      </ul>
    </template>

  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'SidebarItem',
        data() {
            return {}
        },
      props: {
        list: {
          type: Array
        }
      },
        methods: {
          sidebarClick(v){
            this.$emit('sidebarClick',v)
          }
        },
        created() {
          console.log(this.list)
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../../common/css/_variate";
  .sidebar-li1{
    font-size: 0.14rem;
    .sidebar-one-content{
      padding: 0.2rem 0.2rem;
      position: relative;
      text-align: inherit;
      cursor: pointer;
      transition: border-color .3s,background-color .3s,color .3s;
      &:hover{
        background-color: #1f2d3d;
      }
      span{
        vertical-align: middle;
      }
      .sidebar-icon{
        display: inline-block;
        width: 0.15rem;
        height: 0.15rem;
        border: 1px solid #eee;
        margin-right: 0.1rem;
        background: url("../../../../common/images/edit.png");
      }
      .sidebar-more{
        display: inline-block;
        width: 0.10rem;
        height: 0.10rem;
        margin-top: 0.04rem;
        position: absolute;
        top: 0.2rem;
        right:0.2rem;
      }
      &:after{
        display: block;
        content:'';
        clear:both;
      }
    }

    ul{
      &:before{
        display: block;
        content:'';
        clear:both;
      }
      background-color: @sidebarChildColor;
      li{
        a{
          display: block;
          padding: 0.2rem 0;
          text-align: center;
          cursor: pointer;
          color: @sidebarFont;
          transition: border-color .3s,background-color .3s,color .3s;
          &:hover{
            background-color: #001528;
          }
          &.router-link-active{
            color: @sidebarActiveFont;
          }
        }
      }
    }
  }
</style>
