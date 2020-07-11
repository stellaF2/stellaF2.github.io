<template>
  <div>
    <h2>icon 图标</h2>
    <s-icon icon="delete"></s-icon>
    <s-icon icon="down"></s-icon>
    <s-icon icon="selection"></s-icon>
    <s-icon icon="save"></s-icon>
    <s-icon icon="collection"></s-icon>
    <s-icon icon="addresslist"></s-icon>
    <s-icon icon="close"></s-icon>
    <s-icon icon="search"></s-icon>
    <s-icon icon="menu"></s-icon>
    <s-icon icon="setting"></s-icon>
    <s-icon icon="loading"></s-icon>
    <s-button type="primary" icon="search" round>search</s-button>
    <s-button type="success" icon="search" round icon-right>collection</s-button>
  </div>
</template>

<script>
export default {
    name: 'basic-icon',
}
</script>

<style lang='scss' scoped>
.s-button {
  margin: 10px 10px 0 0;
}
</style>