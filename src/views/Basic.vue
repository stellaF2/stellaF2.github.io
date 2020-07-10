<template>
  <div>
    <h2>button 按钮</h2>
    <s-button>default</s-button>
    <s-button @click="handleClick" type="primary">primary</s-button>
    <s-button @click="handleClick" type="success">success</s-button>
    <s-button @click="handleClick" type="info">info</s-button>
    <s-button @click="handleClick" type="danger">danger</s-button>
    <s-button @click="handleClick" type="warning">warning</s-button>
    <s-button @click="handleClick" type="purple">pink</s-button>

    <div>
      <s-button round>default round</s-button>
      <s-button round type="primary">primary round</s-button>
      <s-button round type="success">success round</s-button>
      <s-button round type="info">info round</s-button>
      <s-button round type="danger">danger round</s-button>
      <s-button round type="warning">warning round</s-button>
      <s-button round type="purple">pink round</s-button>
    </div>

    <div>
      <s-button icon="close" circle></s-button>
      <s-button type="primary" icon="delete" circle></s-button>
      <s-button type="success" icon="down" circle></s-button>
      <s-button type="info" icon="selection" circle></s-button>
      <s-button type="danger" icon="save" circle></s-button>
      <s-button type="warning" icon="collection" circle></s-button>
      <s-button type="purple" icon="addresslist" circle></s-button>
    </div>

    <div>
      <s-button icon="close" circle @click='handleClick' loading></s-button>
      <s-button type="primary" icon="delete" circle disabled></s-button>
      <s-button type="success" icon="loading" circle></s-button>
      <s-button type="info" icon="selection" circle></s-button>
      <s-button type="danger" icon="save" circle></s-button>
      <s-button type="warning" icon="collection" circle></s-button>
      <s-button type="purple" icon="addresslist" circle></s-button>
    </div>

    <h2>按钮组</h2>

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
  name: 'basic',
  methods: {
    handleClick(e) {
      console.log(e, 'e');
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin: 10px 10px 0 0;
}
</style>