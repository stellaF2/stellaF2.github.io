export default {
    name: 'clickOutside',
    bind(el, bindings, vnode) {
        el.handler = function (e) {
            if (!el.contains(e.target)) {
                const method = bindings.expression;
                vnode.context[method](e.target);
            }
        }
        document.addEventListener('click', el.handler);
    },
    unbind(el) {
        document.removeEventListener('click', el.handler);
    }
};
