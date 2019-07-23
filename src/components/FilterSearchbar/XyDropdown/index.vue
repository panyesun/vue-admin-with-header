<template>
  <div class="xy-dropdown" @click.stop>
    <div class="el-select-dropdown el-popper is-multiple dropdown">
      <!-- 自定义选项列表 -->
      <div class="list">
        <div class="item">
          <span class="name">创建时间</span>
        </div>
        <div class="item">
          <span class="name">结束日期</span>
        </div>
      </div>

      <div class="add-filter">
        <div class="title">
          <svg-icon icon-class="form" />
          <span class="txt">添加自定义筛选</span>
        </div>

        <div class="filter-list">
          <div class="filter-item">
            <el-select
              v-model="value"
              placeholder="请选择"
              class="mb10"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>

            <el-select
              v-model="actionValue"
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

            <el-input v-model="range"></el-input>

          </div>
        </div>

        <div class="btn-group">
          <a
            href="javascript:;"
            class="commit"
          >应用</a>

          <a
            href="javascript:;"
            class="add fr"
          >添加选项</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
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
      ],
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
      value: '',
      actionValue: '',
      range: '',
      arr: [
        {
          value: ''
        }
      ]
    }
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

    .list {
      line-height: 50px;
      .item {
        padding: 0 20px;
        &:not(:last-child) {
          border-bottom: 1px solid $border-color;
        }
      }
    }

    .add-filter {
      border-top: 1px solid $border-color;

      .title {
        text-align: center;
        line-height: 40px;
      }

      .filter-list {
        padding-bottom: 10px;

        .filter-item {
          padding: 0 20px;
          border-bottom: 1px das $border-color;
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
