<template>
  <div class="easy-dropdown fl">
    <div class="menu-item">
      <slot name="menuItem"></slot>
    </div>
    <div class="dropdown-list">
      <div class="dropdown-item">
        <svg-icon icon-class="example"></svg-icon>
        <span class="title">新模块</span>
      </div>

      <div class="dropdown-item">
        <svg-icon icon-class="example"></svg-icon>
        <span class="title">新模块2</span>
      </div>

      <div class="dropdown-item">
        <svg-icon icon-class="example"></svg-icon>
        <span class="title">新模块3</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/styles/mixin.scss";

$bg: rgba(74, 74, 74, 0.7);
.easy-dropdown {
  position: relative;
  cursor: pointer;

  .dropdown-list {
    position: absolute;
    top: 50px;
    right: 0;
    width: 140px;
    background-color: $bg;
    z-index: 1020;
    display: none;
    border-radius: 4px;
    .dropdown-item {
      @include divHeight(40px);
      color: $headerFontColor;
      user-select: none;
      padding: 0 20px;
      &:not(:last-child) {
        border-bottom: 1px solid #fff;
      }

      &:hover,
      &.active {
        color: $colorHeaderActive;
      }
    }
  }

  &:hover {
    .dropdown-list {
      display: block;
    }
  }
}
</style>
