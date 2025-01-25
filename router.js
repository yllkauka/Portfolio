// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import ProjectTemplate from './components/ProjectTemplate.vue';
import ProjectConstructor from './components/ProjectConstructor.vue';
import ViviArk from './components/ViviArk.vue';
import YlbConcept from './components/YlbConcept.vue';
import AresTech from './components/AresTech.vue';
import VmCars from './components/VmCars.vue';
import PixelSnap from './components/PixelSnap.vue';
import Tifera from './components/Tifera.vue';
import DigitalNugget from './components/DigitalNugget.vue';
import ProjectNoimos from './components/ProjectNoimos.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/constructor', component: ProjectConstructor },
    { path: '/vivi', component: ViviArk },
    { path: '/ylb', component: YlbConcept },
    { path: '/vm', component: VmCars },
    { path: '/ares', component: AresTech },
    { path: '/pixel', component: PixelSnap },
    { path: '/tifera', component: Tifera },
    { path: '/digital', component: DigitalNugget },
    { path: '/noimos', component: ProjectNoimos },

    /* ONLY FOR TEMPLATE PREVIEW
    Comment for production */
    { path: '/project-template', component: ProjectTemplate },

];
ViviArk
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;