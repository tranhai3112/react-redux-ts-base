import React, { useEffect } from 'react'
import { useFolderContext } from '../../contexts/FolderContext'
import { useAppDispatch, useAppSelector } from '@/lib/redux/Hooks'
import { SearchTinBai } from '@/features/tinbai/redux/action'

export const TinBaiTable = () => {
    const dispatch = useAppDispatch()
    const {datas: tinBais} = useAppSelector(state => state.tinbai)
    const folderContext = useFolderContext()
    useEffect(() => {
        if(folderContext.folderId){
            dispatch(SearchTinBai({kenhTinId: folderContext.folderId, reFetch:true}))
        }
    }, [folderContext.folderId])
  return (
    <div>{JSON.stringify(tinBais)}</div>
  )
}
