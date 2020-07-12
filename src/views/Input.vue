<template>
<div class='demo-input'>
    <h3>Input 输入框</h3>
    <h4>基础用法</h4>
    <s-input v-model='input' placeholder='请输入内容'></s-input>
    <p>Input: {{ input }}</p>
    <h4>禁用状态</h4>
    <s-input 
        v-model='input' 
        placeholder='请输入内容'
        :disabled='true'
    ></s-input>
    <h4>可清空</h4>
    <s-input 
        v-model='input' 
        placeholder='请输入内容'
        clearable
    ></s-input>
    <h4>密码框</h4>
    <s-input 
        v-model='input' 
        type='password'
        placeholder='请输入密码'
        show-password
    ></s-input>
    <h4>带 icon 的输入框</h4>
    <s-input 
        class='demo-md-input'
        v-model='input' 
        type='password'
        placeholder='请输入密码'
        prefix-icon='addresslist'
    ></s-input>
    <s-input 
        class='demo-md-input'
        v-model='input' 
        type='password'
        placeholder='请输入密码'
        suffix-icon='addresslist'
    ></s-input>
</div>
</template>

<script>
export default {
    name:'form-input',
    data() {
        return {
            input: '',
        }
    },
}
</script>

<style lang='scss'>
@import '@/styles/_var.scss';

.demo-input {
    p {
        color: $font-grey;
        margin: 10px 0;
    }
}
.demo-md-input {
    width: 150px;
    &.s-input {
        margin: 0 0 10px 0;
    }
}
</style>