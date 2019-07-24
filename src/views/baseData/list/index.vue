<template>
  <div>
    <!-- 搜索组件 -->
    <div class="search">
      <filter-searchbar
        class="fr mr10"
        :filter-options="filterOptions"
        :tags="tags"
        @commit-tags="handleCommitTags"
        @toggle-select="handleToggleSelect"
        @close-tag="handleCloseTag"
      ></filter-searchbar>
    </div>

    <!-- 工具栏 -->
    <div class="toolbar">
      <a
        class="btn add"
        href="javascript:;"
      >
        <i class="el-icon-circle-plus-outline" />
        <span class="txt">新增</span>
      </a>

      <a
        class="btn edit"
        href="javascript:;"
      >
        <i class="el-icon-zoom-in" />
        <span class="txt">编辑</span>
      </a>
      <a
        class="btn delete"
        href="javascript:;"
      >
        <i class="el-icon-circle-close" />
        <span class="txt">删除</span>
      </a>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="tableData"
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column width="55">
          <template slot-scope="scope">
            {{scope.$index + 1}}
          </template>
        </el-table-column>

        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="code"
          label="编码"
          width="180"
        />

        <el-table-column
          prop="name"
          label="名称"
        />

        <el-table-column
          prop="rank"
          label="排序"
          width="240"
        />

      </el-table>
    </div>
  </div>
</template>
<script>
import FilterSearchbar from '@/components/FilterSearchbar'
export default {
  components: { FilterSearchbar },
  data() {
    return {
      personalFilter: [],
      tags: [],
      tableData: [
        {
          code: 'xczf',
          name: '重要',
          rank: '1'
        }
      ],
      filterOptions: [
        {
          value: 'customerType',
          label: '客户类型'
        }, {
          value: 'providerType',
          label: '供货商类型'
        }, {
          value: 'sellingType',
          label: '销售订单类型'
        }, {
          value: 'buyingType',
          label: '采购订单类型'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleCommitTags(data) {
      this.personalFilter = data
      this.tags = this.generateTags()
      // then search
    },
    generateTags() {
      const tags = [], filters = this.personalFilter
      // filter to tags
      for (var key in filters) {
        var name = filters[key]['value']
        tags.push({ name, isSelect: true })
      }
      return tags
    },
    handleToggleSelect(index) {
      this.tags[index].isSelect = !this.tags[index].isSelect
    },
    handleCloseTag(index) {
      this.personalFilter.splice(index, 1)
      this.tags = this.generateTags()
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/mixin.scss";
$toolbarHeight: 50px;
$add: "add";
$color-add: #f34444;
$dolor: "$";

$colors: (
  add: #15dab6,
  edit: #15dab6,
  delete: #f34444
);
.search {
  min-height: 50px;
  padding-bottom: 20px;
  @include clearfix;
}

.toolbar {
  height: $toolbarHeight;
  background-color: #dbe5f7;
  padding: 0 20px;
  .btn {
    padding: 0 15px;
    line-height: $toolbarHeight;
    height: $toolbarHeight;
    font-size: 16px;
    //遍历写法
    @each $c in add, edit, delete {
      &.#{$c} {
        [class^="el-icon"] {
          color: map-get($colors, $c);
          font-weight: 600;
        }
      }
    }
  }
}
</style>
