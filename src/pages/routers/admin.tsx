import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'
import { Login, RequiredAuth } from '../../features/auth/components'
import React, { Suspense } from 'react'
import { MasterLayout } from '../../components/layout'
import { Service } from '@/services'
const DichVuLazy = React.lazy(() => import('../../features/dichvu/components/DichVuTable'))
const LoaiDichVuLazy = React.lazy(() => import('../../features/loaidichvu/components/LoaiDichVuTable'))
const KenhTinLazy = React.lazy(() => import('../../features/kenhtin/components/KenhTinWrapper'))
const CoCauToChucLazy = React.lazy(() => import('../../features/cocautochuc/components/CoCauToChucWrapper'))
const {apiEndpoints, primaryRoutes} = Service
export const adminRouters: RouteObject[] = [
    {
        path: primaryRoutes.admin.root,
        element:
        <Suspense fallback={<div>loading</div>}>
            <RequiredAuth>
                <MasterLayout />
            </RequiredAuth>
        </Suspense>,
        children: [
            {
                path: primaryRoutes.admin.quanTriNguoiDung.coCauToChuc,
                element: <CoCauToChucLazy/>
            },
            {
                path: primaryRoutes.admin.root + apiEndpoints.dichvus,
                element: <DichVuLazy />
            },
            {
                path: primaryRoutes.admin.root + apiEndpoints.loaidichvus,
                element: <LoaiDichVuLazy />
            },
            {
                path: primaryRoutes.admin.root + apiEndpoints.kenhtins,
                element: <KenhTinLazy/>
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