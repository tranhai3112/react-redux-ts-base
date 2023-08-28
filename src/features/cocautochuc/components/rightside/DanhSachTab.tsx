import { AntdTab, IAntdTabsProps } from '@/lib/antd/components'
import { DanhSachNguoiDung } from './DanhSachNguoiDung'
const TINBAI_TABS : IAntdTabsProps["items"] = [{
  label: "Thông tin",
  key:"thong-tin",
  children: <DanhSachNguoiDung/>
}, {
  label: "Danh sách tin bài",
  key:"danh-sach-tin-bai",
  children: <DanhSachNguoiDung/>
}, {
  label: "Test formio builder",
  key:"test-formio-build",
  children: <DanhSachNguoiDung/>
}]

export const DanhSachTab = () => {
    return <AntdTab size='small' style={{ marginBottom: 32 }} type="card" items={TINBAI_TABS} />
}