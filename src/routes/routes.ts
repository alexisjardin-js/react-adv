import { lazy,LazyExoticComponent } from "react";
import { NOlazy } from "../01-lazyload/pages/Nolazy";

type JSXComponent = ()=> JSX.Element

interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name:string;

}

const LazyLayout = lazy(() => import(/*webpackChunkName: "Lazy layout"*/'../01-lazyload/layout/LazyLayout'))


export const routes:Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NOlazy,
        name: 'No Lazy'
    },

];