<template>
  <div class='demo-date-picker'>
    <h3>Date Picker 日历</h3>
    <h4>选择日期</h4>
    <s-date-picker v-model='date'></s-date-picker>
  </div>
</template>

<script>
export default {
    name: 'form-date-picker',
    data() {
      return {
        date: ''
      }
    },
}
</script>

<style>

</style>