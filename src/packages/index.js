let components = require.context('./', false, /\.vue$/);
components = components.keys().map(c => components(c).default);

function install(Vue) {
  components.forEach(C => {
    Vue.component(C.name, C);
  });
}

if (window && typeof window.Vue !== 'undefined') {
  install(window.Vue);
}

export default {
  install,
};
