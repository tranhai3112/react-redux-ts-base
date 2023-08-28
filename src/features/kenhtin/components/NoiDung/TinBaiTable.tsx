import React, { useEffect, useState } from 'react'
import { useFolderContext } from '../../../../contexts/FolderContext'
import { useAppDispatch, useAppSelector } from '@/lib/redux/Hooks'
import { SearchTinBai } from '@/features/tinbai/redux/action'
import { useColumn } from '@/features/tinbai/hooks/useColumn'
import { ISearchTinBai } from '@/features/tinbai/models'
import { AntdTable } from '@/lib/antd/components'

export const TinBaiTable = () => {
    const dispatch = useAppDispatch()
    const {datas: tinBais, count} = useAppSelector(state => state.tinbai)
    const [searchParams, setSearchParams] = useState<ISearchTinBai>({ pageNumber: 1, pageSize:10, reFetch: true})
    const columns = useColumn({ pageNumber: searchParams.pageNumber, pageSize: searchParams.pageSize })
    const folderContext = useFolderContext()
    useEffect(() => {
      if(folderContext.folderId){
        setSearchParams((curr) => ({...curr, kenhTinId: folderContext.folderId}))
      }
    }, [folderContext.folderId])
  return (
    <AntdTable 
      columns={columns} 
      dataSource={tinBais} 
      pagination={{
        total: count
      }}
      onSearch={(params) => dispatch(SearchTinBai(params))}
      searchParams={searchParams}
      setSearchParams={setSearchParams}  
    />
  )
}
