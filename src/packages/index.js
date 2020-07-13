let components = require.context('./', true, /\.vue$/);
let directives = require.context('./directive', true, /\.js$/);
components = components.keys().map(c => components(c).default);
directives = directives.keys().map(d => directives(d).default);

function install(Vue) {
  /* register components */
  components.forEach(item => item.name && Vue.component(item.name, item) );
  /* register directive */
  directives.forEach(item => item.name && Vue.directive(item.name, item));
}

if (window && typeof window.Vue !== 'undefined') {
  install(window.Vue);
}

export default {
  install,
};
