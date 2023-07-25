import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'
import { Login, RequiredAuth } from '../../features/auth/components'
import React, { Suspense } from 'react'
import { MasterLayout } from '../../components/layout'
const ProductLazy = React.lazy(() => import('../../features/product/components/ProductTable'))
export const adminRouters: RouteObject[] = [
    {
        path: "/admin",
        element:
            <RequiredAuth>
                <MasterLayout />
            </RequiredAuth>,
        children: [
            {
                path: '/admin/product',
                element: <Suspense fallback={<div>loading</div>}>
                    <ProductLazy />
                </Suspense>,
                //https://reactrouter.com/en/main/route/loader
                loader: async () => {// new stubs
                    console.log("???"); 
                    return null;
                }
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Navigate to={"/admin"}/>
    }
]
export const router = createBrowserRouter(adminRouters)