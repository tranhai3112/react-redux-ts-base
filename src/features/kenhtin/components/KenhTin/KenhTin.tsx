import { ZoomComponent } from "@/components/common"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"
import { SearchKenhTin } from "../../redux/Action"
import { useEffect, useState } from "react"
import { ISearchKenhTin } from "../../models"
import { PlusCircleOutlined } from "@ant-design/icons"
import { AntdDivider, AntdSpace, AntdTree } from "@/lib/antd/components"
import { useFolderContext } from "../../../../contexts/FolderContext"
import { ThemKenhTin } from "./modals/ThemKenhTin"
import { Input } from "antd"
import { SearchProps } from "antd/es/input"
import { KenhTinContextMenu } from "./KenhTinContextMenu"

const {Search} = Input
const {AntdDirectoryTree} = AntdTree

export const KenhTin = () => {
  const {datas: kenhTins} = useAppSelector(state => state.kenhtin)
  const [searchParams, setSearchParams] = useState<ISearchKenhTin>({reFetch:true})
  const folderContext = useFolderContext()
  const [folderSearchParams, setFolderSearchParams] = useState("")
  const [delayFolderSearch, setDelayFolderSearch] = useState("")
  const [themKenhTinModalVisible, setThemKenhTinModalVisible] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(SearchKenhTin(searchParams))
  }, [searchParams])

  useEffect(() => {
    const timeOutId = setTimeout(() => setFolderSearchParams(delayFolderSearch), 1500)
    return () => {
      clearTimeout(timeOutId)
    }
  }, [delayFolderSearch])
  const onChangeFolder: SearchProps["onChange"] = (e) => {
    setDelayFolderSearch(e.target.value)
  }
  const onSearchFolder: SearchProps["onSearch"] = (value) => {
    setFolderSearchParams(value)
  }
  return <ZoomComponent title={"Danh sách kênh tin"} onRefresh={() => setSearchParams((curr) => ({ ...curr, reFetch: true }))}>
  <Search style={{ marginBottom: 8 }} placeholder="Tìm kiếm thư mục" onChange={onChangeFolder} onSearch={onSearchFolder} />
  <AntdDivider />
  <AntdSpace onClick={() => setThemKenhTinModalVisible(true)} style={{cursor: "pointer"}}>
      <PlusCircleOutlined style={{fontSize: "18px"}} />
      Thêm thư mục gốc
  </AntdSpace>
  <AntdDivider />
  <AntdDirectoryTree 
    multiple={false}
    generateTree={{data: kenhTins, title: "tenKenhTin", parentId: "maKenhTinCha"}} 
    searchParams={folderSearchParams}
    onSelect={(value) => folderContext.setFolderId((value as string[])[0])}
    contextMenu={(setVisible, id, top, left) => {
      return <KenhTinContextMenu id={id} top={top} left={left} setVisible={setVisible}/>
    }}
  />
  {/* modals */}
  <ThemKenhTin visible={themKenhTinModalVisible} handlerClose={() => setThemKenhTinModalVisible(false)}/>
  {/* modals */}
</ZoomComponent>
}