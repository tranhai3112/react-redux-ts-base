import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'
import { Login, RequiredAuth } from '../../features/auth/components'
import React, { Suspense } from 'react'
import { MasterLayout } from '../../components/layout'
import { Service } from '@/services'
const DichVuLazy = React.lazy(() => import('../../features/dichvu/components/DichVuTable'))
const LoaiDichVuLazy = React.lazy(() => import('../../features/loaidichvu/components/LoaiDichVuTable'))
const CoCauToChucLazy = React.lazy(() => import('../../features/cocautochuc/components/CoCauToChucWrapper'))
const {apiEndpoints, primaryRoutes} = Service
export const adminRouters: RouteObject[] = [
    {
        path: primaryRoutes.admin,
        element:
        <Suspense fallback={<div>loading</div>}>
            <RequiredAuth>
                <MasterLayout />
            </RequiredAuth>
        </Suspense>,
        children: [
            {
                path: primaryRoutes.admin + apiEndpoints.dichvus,
                element: <DichVuLazy />
            },
            {
                path: primaryRoutes.admin + apiEndpoints.loaidichvus,
                element: <LoaiDichVuLazy />
            },
            {
                path: primaryRoutes.admin + apiEndpoints.cocautochucs,
                element: <CoCauToChucLazy />
            },
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