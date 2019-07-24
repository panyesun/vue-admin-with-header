<template>
  <div class="top-menu">

    <div class="top-line clearfix">
      <div class="details fr clearfix">
        <div class="user fl">你好,admin</div>
        <div class="actions ml10 fl">
          <a
            href="javascript:;"
            @click="logout"
          >退出</a>
        </div>
      </div>
    </div>

    <div class="list fr clearfix">
      <div
        class="item"
        v-for="(item,index) in globalModules"
        :class="{active: currentModule == item.moduleName}"
        :key="index"
        @click="jumpTo(item)"
      >
        <div class="icon-container">
          <svg-icon icon-class="example" />
        </div>
        <span class="module-name">
          {{item.moduleName}}
        </span>
      </div>

      <easy-dropdown class="v-item">
        <div
          class="item"
          slot="menuItem"
        >
          <div class="icon-container">
            <svg-icon icon-class="example"></svg-icon>
          </div>
          <span class="module-name">
            <a>更多</a>
          </span>
        </div>
      </easy-dropdown>

    </div>
  </div>
</template>
<script>
import EasyDropdown from './EasyDropdown'
export default {
  components: { EasyDropdown },
  props: {
    globalModules: Array,
    currentModule: String
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      await this.$store.dispatch('app/logout')
      this.$router.push(`/login`)
    },
    jumpTo({ moduleName, path }) {
      this.$store.dispatch('app/switchModule', moduleName)
      this.$router.push(path)
    }
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

@mixin hoverbg {
  background: linear-gradient(to top, #{$menuBg}, #{$headerBg});
}

.top-menu {
  height: $headerHeight;
  background: $headerBg;
  color: $headerFontColor;
}

.details {
  height: 20px;
  padding-right: 20px;
}

.list {
  width: 520px;
  .item {
    cursor: pointer;
    float: left;
    height: 50px;
    width: 100px;
    padding: 0 5px;
    &:hover,
    &.active {
      @include hoverbg;
    }
    .icon-container {
      text-align: center;
      line-height: 30px;
    }
    .module-name {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: break-word;
      text-align: center;
    }
  }

  .v-item {
    &:hover {
      .item {
        @include hoverbg;
      }
    }
  }
}
</style>
