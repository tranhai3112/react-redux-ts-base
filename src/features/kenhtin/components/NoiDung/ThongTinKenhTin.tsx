import { useAppDispatch, useAppSelector } from '@/lib/redux/Hooks'
import React, { useEffect, useState } from 'react'
import { useFolderContext } from '../../../../contexts/FolderContext'
import { GetKenhTin } from '../../redux/Action'

export const ThongTinKenhTin = () => {
    const dispatch = useAppDispatch()
    const {data: kenhTin} = useAppSelector(state => state.kenhtin)
    const folderContext = useFolderContext()
    useEffect(() => {
      if(folderContext.folderId){
        dispatch(GetKenhTin(folderContext.folderId))
      }
    }, [folderContext.folderId])
  return (
    <div className='w-100'>{JSON.stringify(kenhTin)}</div>
  )
}
