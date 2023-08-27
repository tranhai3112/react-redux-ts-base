import { AntdTab, IAntdTabsProps } from '@/lib/antd/components'
import React from 'react'
import { TinBaiTable } from './TinBaiTable'
import { ThongTinKenhTin } from './ThongTinKenhTin'

// TODO: chuyển cái này vào TinBaiTab để xử lý ẩn hiện theo kiểu nội dung kênh tin
const TINBAI_TABS : IAntdTabsProps["items"] = [{
  label: "Thông tin",
  key:"thong-tin",
  children: <ThongTinKenhTin/>
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
