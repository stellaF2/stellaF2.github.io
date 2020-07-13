import Home from '@/views/Home.vue';
import Button from '@/views/Button.vue';
import Icon from '@/views/Icon.vue';
import Layout from '@/views/Layout.vue';
import Components from '@/views/Components.vue';
import Form from '@/views/Form.vue';
import Container from '@/views/Container.vue';
import Input from '@/views/Input.vue';
import Upload from '@/views/Upload.vue';
import Intro from '@/views/Intro.vue';

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/components',
    component: Components,
    children: [{
        path: 'intro',
        name: 'intro',
        component: Intro,
    },{
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
    }, {
        path: 'input',
        component: Input,
    }, {
        path: 'upload',
        component: Upload,
    }]
}];

export default routes;