<template>
  <div class="form-container">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      :disabled="mode === 'read'"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item
            label="编码"
            prop="code"
          >
            <el-input v-model="form.code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item
            label="名称"
            prop="name"
          >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item
            label="排序"
            prop="rank"
          >
            <el-input v-model="form.rank"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row v-if="mode !== 'read'">
        <el-col :span="8">
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit('form')"
            >保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: this.$route.fullPath.split('?')[0].split('/').slice(-1)[0],
      rules: {
        code: [
          { required: true, message: '请输入编码', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        rank: [
          { required: true, message: '请输入排序', trigger: 'blur' }
        ]
      },
      form: {
        code: '',
        name: '',
        rank: ''
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 此处写提交逻辑
        } else {
          return false
        }
      })
    }
  },
  created() {
    console.log(this.mode)
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/mixin.scss";
</style>

