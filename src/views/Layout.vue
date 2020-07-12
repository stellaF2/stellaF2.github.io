<template>
  <div>
      <h3>Layout 布局</h3>
      <h4>基础布局</h4>
      <s-row>
        <s-col :span='24'><div></div></s-col>
      </s-row>
      <s-row>
        <s-col :span='12'><div></div></s-col>
        <s-col :span='12'><div></div></s-col>
      </s-row>
      <s-row>
        <s-col :span='8'><div></div></s-col>
        <s-col :span='8'><div></div></s-col>
        <s-col :span='8'><div></div></s-col>
      </s-row>
      <s-row>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>

      <h4>分栏布局</h4>
      <s-row :gutter='10'>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>

      <h4>分栏偏移</h4>
      <s-row>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6' :offset='12'><div></div></s-col>
      </s-row>
      <s-row>
        <s-col :span='6' :offset='6'><div></div></s-col>
        <s-col :span='6' :offset='6'><div></div></s-col>
      </s-row>
      <s-row>
        <s-col :span='12' :offset='12'><div></div></s-col>
      </s-row>

      <h4>对齐方式</h4>
      <s-row justify='start'>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>
      <s-row justify='center'>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>
      <s-row justify='end'>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>
      <s-row justify='space-between'>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>
      <s-row justify='space-around'>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>
      <s-row justify='space-evenly'>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
        <s-col :span='6'><div></div></s-col>
      </s-row>

      <h4>响应式</h4>
      <s-row>
        <s-col :xs='24' :sm='12' :md='6' :lg='1' :xl='11'><div></div></s-col>
        <s-col :xs='24' :sm='12' :md='6' :lg='11' :xl='1'><div></div></s-col>
        <s-col :xs='24' :sm='12' :md='6' :lg='11' :xl='1'><div></div></s-col>
        <s-col :xs='24' :sm='12' :md='6' :lg='1' :xl='11'><div></div></s-col>
      </s-row>

  </div>
</template>

<script>
export default {
    name:'basic-layout'
}
</script>

<style lang='scss'>
@import '@/styles/_var.scss';

h3, h4 {
  padding: 10px 0;
  color: #333;
  opacity: .7;
}
.s-col {
  div {
    margin: 0 0 10px;
    background: $primary;
    opacity: .5;
    border-radius: $border-radius;
    padding: 18px 0;
    text-align: center;
  }
  &:nth-child(even) {
    opacity: .4;
  }
}
</style>