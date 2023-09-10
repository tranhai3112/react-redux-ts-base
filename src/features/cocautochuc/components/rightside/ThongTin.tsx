import { AntdTable } from "@/lib/antd/components"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"
import { useCoCauUser } from "../../hooks/useNguoiDungCoCauColumn"
import { useEffect, useState } from "react"
import { ISearchUser } from "@/features/user/models"
import { SearchUser } from "@/features/user/redux/Actions"
import { useFolderContext } from "@/contexts/FolderContext"


 const ThongTin = () => {
    const { datas} = useAppSelector(state => state.cauhinhhethong)

    const folderContext = useFolderContext();
    console.log(folderContext);
    return <>Thông tin</>
}  
export  {ThongTin};