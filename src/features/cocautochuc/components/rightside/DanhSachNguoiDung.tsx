import { AntdTable } from "@/lib/antd/components"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"


export const DanhSachNguoiDung = () => {
    const {datas: users, count, loading} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    return <>danh sách người dùng</>
}  