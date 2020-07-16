# stella-ui
[![npm version](https://badge.fury.io/js/%40stella2%2Fstella-ui.svg)](https://badge.fury.io/js/%40stella2%2Fstella-ui)

## Install
```
npm install @stella2/stella-ui --save
```

## Usage

```js
import Vue from 'vue';
import '@stella2/stella-ui/dist/stella-ui.css';
import StellaUI from '@stella2/stella-ui';
import App from './App.vue';

Vue.use(StellaUI);

new Vue({
el: '#app',
render: h => h(App),
});
```
