import { ColumnsType } from "antd/es/table"
import { useMemo } from "react"
import { ILoaiDichVu } from "../models"
import { IBasePagination } from "../../../models"
import { useAppDispatch } from "../../../lib/redux/Hooks"
import { showModal } from "../../../lib/redux/modal/Slice"
import { Popconfirm, Space } from "antd"
import { DeleteLoaiDichVu } from "../redux/action"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

export const useColumn = (pagination: IBasePagination) => {
    const dispatch = useAppDispatch()
    const columns = useMemo((): ColumnsType<ILoaiDichVu> => {
        return [
            {
                title: "STT",
                width: "5%",
                align: "center",
                render: (text, record, index) => index + 1,
            },
            {
                title: "Tên loại dịch vụ",
                dataIndex: "tenLoaiDichVu",
                key: "tenLoaiDichVu"
            },
            {
                title: "Thao tác",
                dataIndex: '',
                width:"10%",
                align:'center',
                key: '',
                render: (_, record) => (
                    <Space direction="horizontal">
                        <EditOutlined style={{color:"cornflowerblue"}} title="Xem chi tiết/Sửa" onClick={() => dispatch(showModal({ title: "Chi tiết loại dịch vụ", data: record }))} />
                        <Popconfirm
                            title='Xoá?'
                            onConfirm={() => {
                                dispatch(DeleteLoaiDichVu({ id: record.id, forceDelete: false }))
                            } }
                            okText='Xoá'
                            cancelText='Huỷ'
                        >
                            <DeleteOutlined size={30} style={{color:"tomato"}}/>
                        </Popconfirm>

                    </Space>
                )
            }
        ]
    }, [pagination])
    return { columns }
} 