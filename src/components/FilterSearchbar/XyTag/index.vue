<template>
  <div class="xy-tag">
    <span class="icon">
      <svg-icon icon-class="example" />
    </span>
    <span class="label">tagNametagNametagNametagName</span>
    <span
      class="close"
      @click="handleClose"
    >
      <i class="el-icon-close"></i>
    </span>
  </div>
</template>
<script>
export default {
  methods: {
    handleClose() {
      this.$emit('onClose')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
$lh: 24px;
$tag-br: 4px;
$label-color: #666;
.xy-tag {
  background-color: $menuText;
  line-height: $lh;
  padding-right: 10px;
  display: inline-block;
  border-radius: $tag-br;
  color: $label-color;
  margin-right: 5px;
  .icon {
    display: inline-block;
    background-color: $menuBg;
    border-radius: $tag-br;
    color: #fff;
    padding: 0 5px;
  }

  .close {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
    i {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

