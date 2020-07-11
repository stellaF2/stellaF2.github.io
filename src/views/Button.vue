<template>
  <div>
    <h3>Button 按钮</h3>
    <s-button>default</s-button>
    <s-button @click="handleClick" type="primary">primary</s-button>
    <s-button @click="handleClick" type="success">success</s-button>
    <s-button @click="handleClick" type="info">info</s-button>
    <s-button @click="handleClick" type="danger">danger</s-button>
    <s-button @click="handleClick" type="warning">warning</s-button>
    <s-button @click="handleClick" type="purple">purpleB</s-button>

    <div>
      <s-button round>default round</s-button>
      <s-button round type="primary">primary round</s-button>
      <s-button round type="success">success round</s-button>
      <s-button round type="info">info round</s-button>
      <s-button round type="danger">danger round</s-button>
      <s-button round type="warning">warning round</s-button>
      <s-button round type="purple">purple round</s-button>
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
    <s-button-group class='button-group'>
      <s-button icon='prev'></s-button>
      <s-button >current page</s-button>
      <s-button icon='next'></s-button>
    </s-button-group>
  </div>
</template>

<script>
export default {
  name: 'basic-button',
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
.button-group {
  button {
    margin: 0;
  }
}
</style>