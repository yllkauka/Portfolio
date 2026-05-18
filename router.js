// router.js
import { createRouter, createWebHashHistory } from 'vue-router';
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
import YuDesignStudio from './components/YuDesignStudio.vue';
import SwiftyGlobal from './components/SwiftyGlobal.vue';


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
    { path: '/yu', component: YuDesignStudio },
    { path: '/swifty', component: SwiftyGlobal },

    /* ONLY FOR TEMPLATE PREVIEW
    Comment for production */
    { path: '/project-template', component: ProjectTemplate },

];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, behavior: 'instant' };
    },
});

export default router;