<template>
  <div class='container'>
      <div><img src="@/assets/logo.jpg" alt="logo" class='logo'></div>
      <div>
        <h1>Stella UI</h1>
        <p>A simple and elegant component library based on Vue 2.x</p>
        <router-link to='components/intro'>
          <s-button type='primary' round>Get Started</s-button>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import '@/styles/_var.scss';

#app .container {
    width:100vw;
    height: 100vh;
    background: 
    linear-gradient(-45deg, #C3E1EE, #A7DCF5 30%, #fff 40%, #F1EEB6,  #F1C7DC, #EE7AAF);
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 200px auto;
    grid-gap: 100px;
    text-align: center;
    margin: 0 auto;
    padding-top: 80px;
    opacity: .8;
    &:hover {
        opacity: 1;
    }
    .logo {
        height: 100%;
        border-radius: 50%;
    }
    h1 {
        text-shadow: 10px 10px rbga(0,0,0,.1);
        color: $primary;
    }
    p {
        line-height: 50px;
        font-style: italic;
    }
    a, h1 {
        border-bottom: 0;
        text-decoration: none;
    }
     a {
      text-decoration: none;
      padding: 10px 0 0;
      font-weight: bold;
      text-decoration: none;
      padding: 10px 20px;
      font-weight: 700;
      display: inline-block;
      border-radius: 40px;
      &:hover,
      &.router-link-active {
        opacity: 0.7;
      }
      &:active,
      &:visited {
        opacity: 1;
      }
    }
}
</style>