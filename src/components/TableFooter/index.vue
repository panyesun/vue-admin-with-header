<template>
  <div class="table-footer">
    <div class="left-tag">
      <slot name="desc">
      </slot>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, total, prev, pager, next"
      :total="1000"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage2: 5
    }
  },
  methods: {
    handleSizeChange(size) {
      this.$emit('size-change', size)
    },
    handleCurrentChange(currentPage) {
      this.$emit('current-change', currentPage)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/mixin.scss";
.table-footer {
  padding-left: 20px;
  @include clearfix;
  @include divHeight(50px);
  margin-top: 10px;
  .left-tag {
    float: left;
    line-height: 28px;
  }
  .pagination {
    float: right;
  }
}
</style>
