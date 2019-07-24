<template>
  <div
    class="xy-dropdown"
    @click.stop
  >
    <div class="el-select-dropdown el-popper is-multiple dropdown">
      <el-scrollbar class="scroll">
        <!-- 自定义选项列表 -->
        <div
          class="tag-list"
          v-if="tags.length"
        >
          <div
            class="item"
            v-for="(item,index) in tags"
            :key="index"
            @click="toggleSelect(index)"
            :class="{active:item.isSelect}"
          >
            <span class="icon-container">
              <i
                class="el-icon-check"
                v-show="item.isSelect"
              ></i>
            </span>
            <span class="name">{{item.name}}</span>
          </div>
        </div>

        <div class="add-filter">
          <div class="title">
            <svg-icon icon-class="form" />
            <span class="txt">添加自定义筛选</span>
          </div>

          <div class="filter-list">
            <div
              class="filter-item"
              v-for="(filterItem,filterIndex) in personalFilter"
              :key="filterIndex"
            >
              <el-select
                v-model="personalFilter[filterIndex].value"
                placeholder="请选择"
                class="mb10"
              >
                <el-option
                  v-for="item in filterOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>

              <el-select
                v-model="personalFilter[filterIndex].actionValue"
                placeholder="请选择"
                class="mb10"
              >
                <el-option
                  v-for="item in actions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>

              <el-input v-model="personalFilter[filterIndex].range"></el-input>

            </div>
          </div>

          <div class="btn-group">
            <a
              href="javascript:;"
              class="commit"
              @click="commitTags"
            >应用</a>

            <a
              href="javascript:;"
              class="add fr"
              @click="addFilterItem"
            >添加选项</a>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    filterOptions: Array,
    tags: Array
  },
  data() {
    return {
      actions: [
        {
          value: '选项1',
          label: '大于'
        }, {
          value: '选项2',
          label: '小于'
        }, {
          value: '选项3',
          label: '等于'
        }, {
          value: '选项4',
          label: '包含'
        }
      ],
      personalFilter: []
    }
  },
  watch: {
    'personalFilter'() {
      if (!this.personalFilter.length) {
        this.personalFilter.push(this.generateFilterItem())
      }
    }
  },
  methods: {
    generateFilterItem() {
      return {
        value: '',
        actionValue: '',
        range: ''
      }
    },
    addFilterItem() {
      this.personalFilter.push(this.generateFilterItem())
    },
    commitTags() {
      if (!this.hasEmptyTag()) {
        this.$emit('commit-tags', this.personalFilter)
      } else {
        this.$message({
          message: '请将所有筛选信息填写完整！',
          type: 'error'
        })
      }
    },
    hasEmptyTag() {
      return this.personalFilter.some(item => { return !(item.value && item.actionValue && item.range) })
    },
    toggleSelect(index) {
      this.$emit('toggle-select', index)
    }
  },
  created() {
    if (!this.personalFilter.length) this.personalFilter.push(this.generateFilterItem())
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

$border-color: #c4c4c4;
$lh: 30px;

.xy-dropdown {
  cursor: pointer;
  .dropdown {
    width: 180px;
    min-height: 30px;
    height: 250px;

    .scroll {
      height: 100%;
    }

    .tag-list {
      line-height: 50px;
      .item {
        padding: 0 20px;
        border-bottom: 1px solid $border-color;
        &.active {
          font-weight: bold;
        }

        .icon-container {
          display: inline-block;
          width: 20px;
          height: 20px;
        }
      }
    }

    .add-filter {
      .title {
        text-align: center;
        line-height: 40px;
      }

      .filter-list {
        padding-bottom: 10px;

        .filter-item {
          padding: 0 20px;
          &:not(:last-child) {
            margin-bottom: 5px;
            padding-bottom: 5px;
            border-bottom: 1px dashed $border-color;
          }
        }
      }

      .btn-group {
        padding: 0 20px;
        padding-bottom: 10px;
        a {
          padding: 0 5px;
          border-radius: 4px;
          line-height: 30px;
          height: 30px;
          display: inline-block;
        }
        .commit {
          background-color: $menuBg;
          color: #fff;
        }
        .add {
          border: 1px solid $border-color;
        }
      }
    }
  }
}
</style>
