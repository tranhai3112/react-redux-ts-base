
import { useState } from "react"
import { AntdTable } from "../../../lib/antd/components"
import { useColumn } from "../hooks/useColumn"
import { ISearchLoaiDichVu } from "../models"
import { useAppDispatch, useAppSelector } from "../../../lib/redux/Hooks"
import { SearchLoaiDichVu } from "../redux/action"
import { LoaiDichVuSearch } from "./LoaiDichVuSearch"

const LoaiDichVuTable = () => {
    const dispatch = useAppDispatch()
    const {datas: loaiDichVus, count} = useAppSelector(state => state.loaidichvu)
    const [searchParams, setSearchParams] = useState<ISearchLoaiDichVu>({pageNumber: 1, pageSize:10, reFetch: true})
    const {columns} = useColumn({pageNumber: searchParams.pageNumber, pageSize: searchParams.pageSize})
    return (
        <AntdTable 
            columns={columns}
            dataSource={loaiDichVus}
            pagination={{
                total: count
            }}
            searchParams={searchParams as ISearchLoaiDichVu}
            setSearchParams={setSearchParams}
            onSearch={(params) => dispatch(SearchLoaiDichVu(params))}
        />
                
    )
}
export default LoaiDichVuTable