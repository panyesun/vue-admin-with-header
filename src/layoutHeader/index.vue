<template>
  <div class="global-wrap">
    <div class="xy-header">
      <top-menu :global-modules="globalModules" :current-module="currentModule"></top-menu>
    </div>
    <div class="xy-main">
      <router-view :nodeRouter="sidebarRouters" />
    </div>
  </div>
</template>
<script>
import TopMenu from './components/TopMenu'
export default {
  components: { TopMenu },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    'globalModules'() {
      // 这里写权限判断
      return this.routerModules
    },
    'sidebarRouters'() {
      return this.moduleMap.get(this.currentModule)
    },
    'currentModule'() {
      return this.$store.state.app.currentModule
    }
  },
  methods: {
    updateCurrent(index) {
      this.currentModule = index
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.global-wrap {
  height: 100%;
  &::before,
  &::after {
    content: "";
    display: table;
  }
}
</style>
