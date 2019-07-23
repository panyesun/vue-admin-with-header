<template>
  <a
    href="javascript:;"
    class="filter-btn"
    @click.stop="handleClick"
  >
    <span class="icon">
      <svg-icon icon-class="example" />
    </span>
    <span>筛选</span>
    <span>
      <i class="el-icon-arrow-down"></i>
    </span>
  </a>
</template>
<style lang="scss" scoped>
$lh: 30px;
$color-border: #ccc;
.filter-btn {
  padding-left: 10px;
  display: inline-block;
  width: 90px;
  line-height: ($lh - 4px);
  color: $color-border;
  border: 2px solid $color-border;
  border-radius: 4px;
}
</style>
<script>
export default {
  methods: {
    handleClick() {
      this.$emit('clickBtn')
    }
  }
}
</script>
