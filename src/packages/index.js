let components = require.context('./', true, /\.vue$/);
components = components.keys().map(c => components(c).default);

function install(Vue) {
  components.forEach(C => {
    C.name && Vue.component(C.name, C);
  });
}

if (window && typeof window.Vue !== 'undefined') {
  install(window.Vue);
}

export default {
  install,
};
