<template>
  <div>
      <h3>Container 容器</h3>
      <s-container class='demo-s-container'>
        <s-header>header</s-header>
        <s-main>main</s-main>
      </s-container>
      <s-container class='demo-s-container'>
        <s-header>header</s-header>
        <s-main>main</s-main>
        <s-footer>footer</s-footer>
      </s-container>
      <s-container class='demo-s-container'>
        <s-aside width='100px'>aside</s-aside>
        <s-main>main</s-main>
      </s-container>
      <s-container class='demo-s-container'>
        <s-header>header</s-header>
        <s-container>
          <s-aside width='100px'>aside</s-aside>
          <s-main>main</s-main>
        </s-container>
      </s-container>
      <s-container class='demo-s-container'>
        <s-header>header</s-header>
        <s-container>
          <s-aside width='100px'>aside</s-aside>
          <s-container>
            <s-main>main</s-main>
            <s-footer>footer</s-footer>
          </s-container>
        </s-container>
      </s-container>
      <s-container class='demo-s-container'>
        <s-aside width='100px'>aside</s-aside>
        <s-container>
          <s-header>header</s-header>
          <s-main>main</s-main>
          <s-footer>footer</s-footer>
        </s-container>
      </s-container>
  </div>
</template>

<script>
export default {
    name: 'basic-container'
}
</script>

<style lang='scss' scoped>
@import '@/styles/_var.scss';
.demo-s-container {
  text-align: center;
  margin: 0 0 10px;
}
.s-header, .s-footer, .s-aside, .s-main {
  background: $primary;
}
.s-header, .s-footer {
  opacity: .4;
  line-height: 60px;
}
.s-aside {
  opacity: .3;
  padding: 60px 0;
}
.s-main {
  opacity: .2;
  padding: 60px 0;
}
</style>