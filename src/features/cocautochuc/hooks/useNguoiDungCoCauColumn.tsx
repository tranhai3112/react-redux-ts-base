// import { useMemo } from 'react'
// import { ColumnsType } from 'antd/es/table'
// import { Popconfirm, Space } from 'antd'
// import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
// import { useAppDispatch } from '../../../lib/redux/Hooks'
// import { IBasePagination } from '../../../models'

// export const useCoCauUser = (pagination: IBasePagination) => {
//     const dispatch = useAppDispatch()
//     const columns = useMemo(() : ColumnsType<IDichVu> => {
//         return [
//             {
//                 title: "STT",
//                 width: "5%",
//                 align: "center",
//                 render: (text, record, index) => index + 1,
//             },
//             {
//                 title: "Tên dịch vụ",
//                 key: "tenDichVu",
//                 dataIndex: "tenDichVu",
//             },
//             {
//                 title: "Tóm tắt",
//                 key: "tomTat",
//                 dataIndex: "tomTat",
//             },
//             {
//                 title: "Loại dịch vụ",
//                 key: "loaiDichVu",
//                 render: (_, record) => {
//                     return <div>
//                         {record.loaiDichVu.tenLoaiDichVu}
//                     </div>
//                 }
//             },
//             {
//                 title: "Thao tác",
//                 dataIndex: '',
//                 width:"10%",
//                 align:'center',
//                 key: '',
//                 render: (_, record) => (
//                     <Space direction="horizontal">
//                         <EditOutlined style={{color:"cornflowerblue"}} title="Xem chi tiết/Sửa" onClick={() => {
//                             dichVuContext.setDichVuId(record.id)
//                             dichVuContext.setDichVuModalVisible(true)
//                         }} />
//                         <Popconfirm
//                             title='Xoá?'
//                             onConfirm={() => {
//                                 dispatch(DeleteDichVu({ id: record.id, forceDelete: false }))
//                             } }
//                             okText='Xoá'
//                             cancelText='Huỷ'
//                         >
//                             <DeleteOutlined style={{color:"tomato"}}/>
//                         </Popconfirm>
//                     </Space>
//                 )
//             }
//         ]
//     }, [pagination])
//     return {columns}
// }