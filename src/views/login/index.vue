<template>
  <div class="login-status">
    <div class="login-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  >
        <el-form-item  prop="name">
          <i class="icon-name icon"></i>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item  prop="pwd">
          <span class="icon-pwd icon"></span>
          <el-input v-model="ruleForm.pwd"></el-input>
          <i class="icon-name icon-r"></i>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          pwd:''
        },
        rules: {
          name: [
            { required: true, message: '请输入账号名称', trigger: 'blur' }
          ],
          pwd:[
            { required: true, max: 5, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
.login-status{
  position: fixed;
  background-color: #2d3a4b;
  width: 100%;
  height: 100%;
  .login-box{
    width: 5.2rem;
    height: 3.5rem;
    padding: 0.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-2.6rem,-1.75rem);
    -moz-transform:translate(-2.6rem,-1.75rem);
    transform: translate(-2.6rem,-1.75rem);
    .el-form-item{
      vertical-align: middle;
      position: relative;
      /*height: 0.4rem;*/
      .icon{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        display: inline-block;
        top:0.1rem;
        left: 0.1rem;
        z-index: 100;
      }
      .icon-r{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        display: inline-block;
        top:0.1rem;
        right: 0.1rem;
        z-index: 100;
      }
      .icon-name{
        background: url("../../common/images/edit.png");
      }
      .icon-pwd{
        background: url("../../common/images/edit.png");
      }
      button{
        width: 5.2rem;
        text-align: center;
      }
    }
  }
}

</style>
