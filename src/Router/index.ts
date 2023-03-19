import {createRouter, createWebHistory} from 'vue-router';
import LoginUser from "@/components/LoginUser.vue";
import DashboardChat from "@/components/DashboardChat.vue";
import ChatContent from "@/components/ChatContent.vue";

const routes = [
    {
        path: '/',
        name: 'LoginUser',
        component: LoginUser,
    },
    {
        path: '/DashboardChat',
        name: 'DashboardChat',
        component: DashboardChat,
    },
    {
        path: '/ChatContent',
        name: 'ChatContent',
        component: ChatContent,
    },
]

export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});