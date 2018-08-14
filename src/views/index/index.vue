<template>
    <div>
      <div class="m-top">
        <search></search>
        <navbar></navbar>
      </div>

      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in items" :key="item.id">
          <a :href="item.href" rel="external nofollow" >
            <img :src="item.url" class="img"/>
            <span class="desc"></span>
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <div class="m-recommend">
        <span class="m-recommend-label">热文</span>
        <span>全新鞋面设计，阿迪新款首发，先到先得</span>
      </div>

      <div class="m-index-section">
        <ctx></ctx>
        <ctx></ctx>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">
  import navbar from '../../components/common/navbar';
  import search from '../../components/common/search';
  import ctx from './components/ctx';
    export default {
        data() {
            return {
                name: '',
              items: [{
                title: '你的名字',
                href: 'http://google.com',   url: 'http://www.baidu.com/img/bd_logo1.png'
              }, {
                title: '我的名字',
                href: 'http://baidu.com',   url: 'http://www.baidu.com/img/bd_logo1.png'
              }]
            }
        },
        components: {
          navbar,
          search,
          ctx
        },
        methods: {},
        created() {

        }
    }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/css/index";
  .mint-swipe {
    height: 280px;
    .img {
      width: 100%;
      height: 280px;
    }
  }
.m-top{
  padding: 0 18px;
}
  .m-recommend{
    width: 100%;
    background-color: #F9F9F9;
    height: 44px;
    line-height: 44px;
    font-size: 22px;
    .flex-row(center);
    .m-recommend-label{
      display: inline-block;
      padding: 0 10px;
      height: 27px;
      line-height: 27px;
      font-size: 20px;
      color: @mainColor;
      border: 1px solid @mainColor;
      border-radius: 4px;
      margin-right: 12px;
    }
  }
  .m-index-section{

  }
</style>
