<template>
  <div class="xy-filter-searchbar clearfix">
    <xy-btn @clickBtn="handleClick"></xy-btn>
    <xy-input
      class="fr"
      :tags="tags"
      @close-tag="handleCloseTag"
    ></xy-input>
    <xy-dropdown
      v-show="showDropdown"
      :filter-options="filterOptions"
      :tags="tags"
      @commit-tags="commitTags"
      @toggle-select="handleToggleSelect"
    ></xy-dropdown>
  </div>
</template>
<script>
import XyInput from './XyInput'
import XyBtn from './XyBtn'
import XyDropdown from './XyDropdown'
export default {
  components: { XyInput, XyBtn, XyDropdown },
  props: {
    filterOptions: {
      type: Array,
      default: () => [
        {
          value: '选项1',
          label: '创建时间'
        }, {
          value: '选项2',
          label: '结束时间'
        }, {
          value: '选项3',
          label: '需我知晓'
        }, {
          value: '选项4',
          label: '由我发起'
        }
      ]
    },
    tags: Array
  },
  data() {
    return {
      showDropdown: false,
      forceShow: false
    }
  },
  methods: {
    destroyDropdown() {
      this.showDropdown = false
    },
    handleClick() {
      this.showDropdown = true
    },
    commitTags(data) {
      this.$emit('commit-tags', data)
    },
    handleToggleSelect(data) {
      this.$emit('toggle-select', data)
    },
    handleCloseTag(data) {
      this.$emit('close-tag', data)
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
