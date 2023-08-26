import { IBaseExt, IBaseSearch } from "@/models"
import { AntdDivider, AntdSpace, AntdTree, AntdTreeProps } from "@/lib/antd/components"
import React, { ElementRef, useEffect, useRef, useState } from "react"
import { SearchProps } from "antd/es/input"
import { Col, Divider, Input, Row, Space } from 'antd'
import { FullscreenExitOutlined, FullscreenOutlined, ReloadOutlined } from "@ant-design/icons"
import { ZoomComponent } from "../ZoomComponent"
const { Search } = Input


export interface FolderListProps<IModel, ISearch> {
  title?: React.ReactNode,
  onSearch: (params: ISearch) => void
  searchParams: ISearch,
  onSelect: (params: string) => void,
  setSearchParams: React.Dispatch<React.SetStateAction<ISearch>>,
  generateTree: AntdTreeProps<IModel>["generateTree"]
}

const { DirectoryTree } = AntdTree

export const FolderList = <IModel extends IBaseExt, ISearch extends IBaseSearch>(props: FolderListProps<IModel, ISearch>) => {
  const { onSearch, searchParams, setSearchParams, onSelect, title, generateTree, ...rest } = props
  const [folderSearchParams, setFolderSearchParams] = useState("")
  const [delayFolderSearch, setDelayFolderSearch] = useState("")
  useEffect(() => {
    onSearch(searchParams)
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

  return (
    <ZoomComponent>
      {(toggler, zoomed) => (
        <>
          <Row align="middle" justify="space-between">
            <Col>
              {title}
            </Col>
            <Col>
              <AntdSpace>
                <ReloadOutlined title="Tải lại" onClick={() => setSearchParams((curr) => ({ ...curr, reFetch: true }))} style={{ fontSize: '18px' }} />
                {zoomed ?
                  <FullscreenExitOutlined title="Thoát toàn màn hình" style={{ fontSize: "18px" }} onClick={() => toggler()} /> :
                  <FullscreenOutlined title="Toàn màn hình" onClick={() => toggler()} style={{ fontSize: '18px' }} />
                }
              </AntdSpace>
            </Col>
          </Row>
          <AntdDivider />
          <Search style={{ marginBottom: 8 }} placeholder="Tìm kiếm thư mục" onChange={onChangeFolder} onSearch={onSearchFolder} />
          <DirectoryTree multiple={false} generateTree={generateTree} searchParams={folderSearchParams} onSelect={(value) => onSelect((value as string[])[0])} {...rest}>
          </DirectoryTree></>
      )}
    </ZoomComponent>
  )
}
