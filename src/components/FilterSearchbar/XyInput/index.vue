<template>
  <div
    class="xy-input"
    :style="{height:height}"
  >
    <div
      class="inner"
      ref="kwds"
    >
      <xy-tag
        v-for="(item,index) in tags"
        :key="index"
      ></xy-tag>
      <input
        type="text"
        placeholder="请输入"
      >
    </div>
  </div>
</template>
<script>
import XyTag from '@/components/FilterSearchbar/XyTag'
export default {
  components: { XyTag },
  props: {
    tags: Array
  },
  data() {
    return {
      height: ''
    }
  },
  methods: {
    resizeHeight() {
      return this.$refs.kwds.getBoundingClientRect().height + 'px'
    }
  },
  watch: {
    '$parent.tags'() {
      this.$nextTick(() => {
        this.height = this.resizeHeight()
      })
    }
  },
  mounted() {
    this.height = this.resizeHeight()
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
// reset input styles
$lh: 30px;
$color-border: #ccc;
.xy-input {
  border: 2px solid $color-border;
  border-radius: 4px;
  width: 400px;
  padding: 0 10px;
  line-height: $lh;
  height: $lh;
  position: relative;

  // 真实容器
  .inner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    input {
      max-width: 360px;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
