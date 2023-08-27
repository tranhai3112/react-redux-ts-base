import { FolderList } from "@/components/common"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"
import { SearchKenhTin } from "../../redux/Action"
import { useState } from "react"
import { ISearchKenhTin } from "../../models"
import { FolderOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { AntdSpace } from "@/lib/antd/components"
import { useFolderContext } from "../../contexts/FolderContext"
import { ThemKenhTin } from "./modals/ThemKenhTin"

export interface IKenhTinWrapperProps {
} 

export const KenhTin = () => {
  const {datas: kenhTins} = useAppSelector(state => state.kenhtin)
  const [searchParams, setSearchParams] = useState<ISearchKenhTin>({reFetch:true})
  const folderContext = useFolderContext()
  const [themKenhTinModalVisible, setThemKenhTinModalVisible] = useState(false)
  const dispatch = useAppDispatch()
  
  return (
    <section style={{marginRight:12}}>
      <FolderList 
        title={<AntdSpace>
          <FolderOutlined style={{fontSize: "18px"}}/>
          Danh sách kênh tin
        </AntdSpace>}
        addRootFolder={<AntdSpace onClick={() => setThemKenhTinModalVisible(true)} style={{cursor: "pointer"}}>
            <PlusCircleOutlined style={{fontSize: "18px"}} />
            Thêm thư mục gốc
        </AntdSpace>
        }
        onSelect={(value: string) => folderContext.setFolderId(value)}
        generateTree={{data: kenhTins, title: "tenKenhTin", parentId: "maKenhTinCha"}}
        onSearch={(params) => dispatch(SearchKenhTin(params))}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ThemKenhTin visible={themKenhTinModalVisible} handlerClose={() => setThemKenhTinModalVisible(false)}/>
      {/* thêm các modal khác ở đây */}
    </section>
  )
}
