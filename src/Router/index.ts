import {createRouter, createWebHistory} from 'vue-router';
import LoginUser from "@/components/LoginUser.vue";

const routes = [
    {
        path: '/',
        name: 'LoginUser',
        component: LoginUser,
    },
    // {
    //     path: '/MyKnowledge',
    //     name: 'MyKnowledge',
    //     component: MyKnowledge,
    // },
    // {
    //     path: '/CreateHexagram',
    //     name: 'CreateHexagram',
    //     component: CreateHexagram,
    // },
    // {
    //     path: '/StoresHexagram',
    //     name: 'StoresHexagram',
    //     component: StoresHexagram,
    // },
]

export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});