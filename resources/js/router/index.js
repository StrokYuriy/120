import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/UserList.vue';
import EditUser from '../components/EditUser.vue';
import CreateUser from '../components/CreateUser.vue';

const routes = [
    {
        path: '/',
        component: UserList,
    },
    {
        path: '/users/create',
        component: CreateUser,
    },
    {
        path: '/users/:id/edit',
        component: EditUser,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
