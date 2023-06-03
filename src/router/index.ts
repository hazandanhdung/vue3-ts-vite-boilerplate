import {routes} from "./routes";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "is-active",
});

router.afterEach((to) => {
    const defaultDocumentTitle = "Marker Mobile";
    if (to.name) {
        document.title = `${String(to.name)} — ${defaultDocumentTitle}`;
    } else {
        document.title = defaultDocumentTitle;
    }
});

export default router;
