<template>
  <div class="xy-filter-searchbar clearfix">
    <xy-btn @clickBtn="handleClick"></xy-btn>
    <xy-input
      class="fr"
      :tags="tags"
    ></xy-input>
    <xy-dropdown v-show="showDropdown"></xy-dropdown>
  </div>
</template>
<script>
import XyInput from './XyInput'
import XyBtn from './XyBtn'
import XyDropdown from './XyDropdown'
export default {
  components: { XyInput, XyBtn, XyDropdown },
  data() {
    return {
      tags: [],
      showDropdown: false,
      forceShow: false
    }
  },
  methods: {
    addTag() {
      this.tags.push(1)
    },
    destroyDropdown() {
      this.showDropdown = false
    },
    handleClick() {
      this.showDropdown = true
    }
  },
  mounted() {
    document.getElementById('app').addEventListener('click', this.destroyDropdown)
  },
  destroyed() {
    document.getElementById('app').removeEventListener('click', this.destroyDropdown)
  }
}
</script>
<style lang="scss" scoped>
.xy-filter-searchbar {
  width: 510px;
}
</style>
