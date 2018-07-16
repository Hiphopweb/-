<template>
  <div id="main" :style="note" style="position:relative" v-loading="loading1" element-loading-text="正在加载"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="login" >

      <el-form :status-icon="true" ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules" class="form">

        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="psw">
          <el-input v-model="ruleForm.psw"></el-input>
        </el-form-item>

        <el-form-item class="login-btn">
          <el-button type="primary"  @click="onSubmit('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      note: {
        backgroundImage: 'url(' + require('./../../static/img/bgimg.jpg') + ')',
        backgroundSize: '100% 100%'
      },
      ruleForm: {
        name: '',
        psw: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'change'
          },{
            min:6,
            max:12,
            message:'用户名长度为6-12个字符',
            trigger:'change'
          }
        ],
        psw: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ]
      },
      // submitLoading: false,
      loading1:false
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;
          _this.submitLoading = true;
          _this.$http({
            url: './../../server/server.js',
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
              username: _this.ruleForm.name,
              password: _this.ruleForm.password
            }
          })
          .then(function(res){

            _this.submitLoading = false
          })
          .catch(function(error){
            console.log(error);
            _this.loading1 = true
          })
        } else {
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  height: 100%;
  width: 100%;
  /* position: absolute; */
}
.login {
  position: absolute;
  left: 40%;
  top: 40%;
}
.login-btn .el-button {
  width: 80px;
}
</style>
