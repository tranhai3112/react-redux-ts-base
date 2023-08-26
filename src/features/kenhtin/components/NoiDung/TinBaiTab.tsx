import { AntdTab, IAntdTabsProps } from '@/lib/antd/components'
import React from 'react'
import { TinBaiTable } from './TinBaiTable'

const TINBAI_TABS : IAntdTabsProps["items"] = [{
  label: "Thông tin",
  key:"thong-tin",
  children: <>thông tin</>
}, {
  label: "Danh sách tin bài",
  key:"danh-sach-tin-bai",
  children: <TinBaiTable/>
}]

export const TinBaiTab = () => {
  return (
    <AntdTab size='small' style={{ marginBottom: 32 }} type="card" items={TINBAI_TABS}/>
  )
}
