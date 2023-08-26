import { FolderList } from "@/components/common"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"
import { SearchKenhTin } from "../../redux/Action"
import { useState } from "react"
import { ISearchKenhTin } from "../../models"
import { FolderOutlined } from "@ant-design/icons"
import { AntdSpace } from "@/lib/antd/components"
import { useFolderContext } from "../../contexts/FolderContext"

export interface IKenhTinWrapperProps {
} 

export const KenhTin = () => {
  const {datas: kenhTins} = useAppSelector(state => state.kenhtin)
  const [searchParams, setSearchParams] = useState<ISearchKenhTin>({reFetch:true})
  const folderContext = useFolderContext()
  const dispatch = useAppDispatch()
  
  console.log(folderContext.folderId);
  
  
  return (
    <section style={{marginRight:12}}>
      <FolderList 
        title={<AntdSpace>
          <FolderOutlined style={{fontSize: "18px"}}/>
          Danh sách kênh tin
        </AntdSpace>}
        onSelect={(value: string) => folderContext.setFolderId(value)}
        generateTree={{data: kenhTins, title: "tenKenhTin", parentId: "maKenhTinCha"}}
        onSearch={(params) => dispatch(SearchKenhTin(params))}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </section>
  )
}
