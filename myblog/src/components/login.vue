<template>
  <div id="main" :style="note" style="position:absolute">
    <div class="login">

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="form.psw"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
