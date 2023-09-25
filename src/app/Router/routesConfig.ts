import { RouteObject } from 'react-router-dom';

import Stories from '../screens/Stories';
import Unavailable from '../screens/Unavailable';
import NotFound from '../screens/NotFound';

export const ROUTES_CONFIG: RouteObject[] = [
    {
        path: '/schedule',
        Component: Unavailable,
    },
    {
        path: '/analytics',
        Component: Unavailable,
    },
    {
        path: '/stories',
        Component: Stories,
    },
    {
        path: '/engagement-units',
        Component: Unavailable,
    },
    {
        path: '/ads',
        Component: Unavailable,
    },
    {
        path: '/cms-users',
        Component: Unavailable,
    },
    {
        path: '/roles',
        Component: Unavailable,
    },
    {
        path: '/apps',
        Component: Unavailable,
    },
    {
        path: '/user-guide',
        Component: Unavailable,
    },
    {
        path: '/',
        Component: Unavailable,

    },
    {
        path: '*',
        Component: NotFound,
    }
];
