import { useMemo } from 'react'
import type { ColumnsType } from 'antd/es/table'
import { IProduct } from '../models'

export const useColumn = () => {
    const columns = useMemo(() : ColumnsType<IProduct> => [
        {
            title: "Tên sản phẩm",
            key: "title",
            dataIndex: "title",
            filterSearch: true,
            onFilter: (value, record) => record.title.includes(value as string),
            sorter: (a, b) => a.title.localeCompare(b.title),
            render: (_, record) => {
                return <div>{record.title}</div>
            }
        },
        {
            title: "Giá",
            align: "center",
            key: "price",
            dataIndex: "price",
            sorter: (a, b) => a.price - b.price,
            render: (_, record) => {
                return <div>{record.price}</div>
            }
        },
        {
            title: "Mô tả",
            key: "description",
            dataIndex: "description",
        },
        {
            title: "Loại sản phẩm",
            align: "center",
            key: "category",
            dataIndex: "category",
        }
    ],[])
    return columns
}
