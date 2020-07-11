import Home from '@/views/Home.vue';
import Button from '@/views/Button.vue';
import Icon from '@/views/Icon.vue';
import Layout from '@/views/Layout.vue';
import Components from '@/views/Components.vue';
import Form from '@/views/Form.vue';
import Container from '@/views/Container.vue';

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/components',
    component: Components,
    children: [{
        path: 'button',
        name: 'button',
        component: Button,
    }, {
        path: 'icon',
        name: 'icon',
        component: Icon,
    }, {
        path: 'layout',
        name: 'layout',
        component: Layout,
    }, {
        path: 'form',
        component: Form,
    }, {
        path: 'container',
        component: Container,
    }]
}];

export default routes;