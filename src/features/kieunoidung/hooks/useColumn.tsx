import { useMemo } from 'react'
import { IKieuNoiDung } from '../models'
import { ColumnsType } from 'antd/es/table'
import { Popconfirm, Space } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useAppDispatch } from '../../../lib/redux/Hooks'
import { DeleteKieuNoiDung } from '../redux/action'
import { IBasePagination } from '../../../models'

export const useColumn = (pagination: IBasePagination) => {
    const dispatch = useAppDispatch()
    const columns = useMemo((): ColumnsType<IKieuNoiDung> => {
        return [
            {
                title: "STT",
                width: "5%",
                align: "center",
                render: (text, record, index) => index + 1,
            },
            {
                title: "Tên nội dung",
                key: "tenNoiDung",
                dataIndex: "tenNoiDung",
            },
            {
                title: "Cho phép nhập nội dung",
                key: "choPhepNhapNoiDung",
                dataIndex: "choPhepNhapNoiDung",
                render: (text) => String(text),
            },
            {
                title: "Cho phép nhập loại liên kết",
                key: "choPhepNhapLoaiLienKet",
                dataIndex: "choPhepNhapLoaiLienKet",
                render: (text) => String(text),
            },
            {
                title: "Cho phép thêm tin bài",
                key: "choPhepThemTinBai",
                dataIndex: "choPhepThemTinBai",
                render: (text) => String(text),
            },
            {
                title: "Thao tác",
                dataIndex: '',
                width: "10%",
                align: 'center',
                key: '',
                render: (_, record) => (
                    <Space direction="horizontal">
                        <EditOutlined style={{ color: "cornflowerblue" }} title="Xem chi tiết/Sửa" onClick={() => {}} />
                        <Popconfirm
                            title='Xoá?'
                            onConfirm={() => {
                                dispatch(DeleteKieuNoiDung({ id: record.id, forceDelete: false }))
                            }}
                            okText='Xoá'
                            cancelText='Huỷ'
                        >
                            <DeleteOutlined style={{ color: "tomato" }} />
                        </Popconfirm>
                    </Space>
                )
            }
        ]
    }, [pagination])
    return { columns }
}