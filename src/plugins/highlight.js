import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-light.css';


const install = function(Vue) {
    Vue.directive('highlight', {
        inserted(el) {
            let blocks = el.querySelectorAll('pre code');
            [...blocks].forEach(item => hljs.highlightBlock(item));
        },
    })
};

export default {
    install,
}