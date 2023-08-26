import { Form, Input, Row, Space } from "antd"
import { CollapseContent } from "../../../components/common/CollapseContent"
import { AntdButton } from "../../../lib/antd/components"
import { useAppDispatch } from "../../../lib/redux/Hooks"
import { showModal } from "../../../lib/redux/modal/Slice"
import { ISearchLoaiDichVu } from "../models"
import { useCallback } from "react"
import { LoaiDichVuDetail } from "./LoaiDichVuDetail"

export const LoaiDichVuSearch = ({ setSearchParams }: { setSearchParams: React.Dispatch<React.SetStateAction<ISearchLoaiDichVu>> }) => {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()
  const onFinish = (values: ISearchLoaiDichVu) => {
    console.log(values);
  }
  const resetSearchParams = useCallback(() => {
    setSearchParams({ pageNumber: 1, pageSize: 10 })
    form.resetFields()
  }, [])
  return (
    <CollapseContent
      extraButtons={[<AntdButton onClick={() => dispatch(showModal({ title: "Thêm mới loại dịch vụ", data: null }))}>Thêm mới</AntdButton>]}
      modalItem={<LoaiDichVuDetail />}
    >
      <Form name='product' layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Tên loại dịch vụ"
          name="tenLoaiDichVu"
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Row justify="space-around">
            <Space size="large">
              <AntdButton type="primary" htmlType="submit" >
                Xác nhận
              </AntdButton>
              <AntdButton type="default" onClick={resetSearchParams}>
                tải lại
              </AntdButton>
            </Space>
          </Row>
        </Form.Item>
      </Form>
    </CollapseContent>
  )
}