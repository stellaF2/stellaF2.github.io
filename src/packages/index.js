import Button from './Button.vue';
import Icon from './Icon.vue';

function install(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Icon.name, Icon);
}

if (window && typeof window.Vue !== 'undefined') {
  install(window.Vue);
}

export default {
  install,
};
