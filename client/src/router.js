import Vue from 'vue';
import Router from 'vue-router';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/films",
            name: "films",
            component: () => import("./components/FilmsList")
        },
        {
            path: "/films/:id",
            name: "film-details",
            component: () => import("./components/Film")
        },
        {
            path: "/add",
            name: "add",
            component: () => import("./components/AddFilm")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/Login")
        },
        {
            path: '/register',
            component: Register
        }

    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/', '/films'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    const testAccount = localStorage.getItem('testToken')

    if (authRequired && !loggedIn && !testAccount) {
        next('/login');
    } else {
        next();
    }
});


