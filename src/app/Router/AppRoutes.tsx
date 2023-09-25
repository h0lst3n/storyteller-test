import {
    Route,
    Routes,
    RouteObject
} from 'react-router-dom';

import Layout from '../Layout';

import { ROUTES_CONFIG } from './routesConfig';

export const AppRoutes = () => {
    return (<Routes>
        {
            ROUTES_CONFIG.map((route: RouteObject, index) => {
                return <Route 
                    key={index} 
                    path={route.path} 
                    element={
                        <Layout>
                            <route.Component />
                        </Layout>
                    }
                />
            })
        }
    </Routes>);
};



