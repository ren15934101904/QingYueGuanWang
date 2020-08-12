import React from 'react';
import Loadable from 'react-loadable';
const Loading = () => <div style={{fontSize:"20px"}}>页面正在加载...</div>
const routes = [
    {
        path: '/',
        exact: true,
        component: () => import('../pages/index/index'),
    },
    {
        path: '/about',
        exact: true,
        component: () => import('../pages/about/About'),
    },
    {
        path: '/user',
        exact: true,
        component: () => import('../pages/user/User'),
    },
    {
        path: '/appPage',
        exact: true,
        component: () => import('../pages/appPage/appPage'),
    },
]

export default handleRoute(routes);

function handleRoute(routes) {
    if (Array.isArray(routes) && routes.length) {
        return routes.map((item) => {
            if (Array.isArray(item.children)) {
                return {
                    ...item,
                    component: Loadable({
                        loader: item.component,
                        loading: Loading,
                    }),
                    children: handleRoute(item.children)
                }
            }
            return {
                ...item,
                component: Loadable({
                    loader: item.component,
                    loading: Loading,
                })
            }
        })
    }
}