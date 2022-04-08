import gql from "graphql-tag";
import { createRouter, createWebHistory } from "vue-router";

import StudentCreate from './components/StudentCreate.vue';
import StudentList from './components/StudentList.vue'


const routes = [
    {
        path: '/student/create',
        name: "StudentCreate",
        component: StudentCreate
    },
    {
        path: '/student/ver',
        name: "StudentList",
        component: StudentList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;