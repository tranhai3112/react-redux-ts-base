import { useCallback } from 'react'
import { Form, Input, Space } from 'antd'
import { ISearchProduct } from '../models'
import { AntdButton } from '../../../lib/antd/components/button/Button'
import { CollapseContent } from '../../../components/common/CollapseContent'
import { useAppDispatch } from '../../../lib/redux/Hooks'
import { showModal } from '../../../lib/redux/modal/Slice'
import { ProductDetail } from './ProductDetail'

export const Product = ({setSearchParams} : {setSearchParams:  React.Dispatch<React.SetStateAction<ISearchProduct>>}) => {
  const [form] = Form.useForm<ISearchProduct>()
  const dispatch = useAppDispatch()
  const onFinish = useCallback((values: ISearchProduct) => {
    setSearchParams(curr => ({...curr, ...values}))
  }, [])
  const resetSearchParams = useCallback(() => {
    setSearchParams({offset: 0, limit: 10})
    form.resetFields()
  }, [])
  return (
    <CollapseContent 
      extraButtons={[<AntdButton onClick={() => dispatch(showModal({title: "Chi tiết sản phẩm", data:null}))}>Thêm mới</AntdButton>]}
      modalItem={<ProductDetail/>}
      >
    <Form name='product' layout="vertical" onFinish={onFinish} form={form}>
      <Form.Item
        label="Tên sản phẩm"
        name="title"
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16}}>
        <Space >
        <AntdButton type="primary" htmlType="submit" >
          Xác nhận
        </AntdButton>
        <AntdButton type="default" onClick={resetSearchParams}>
          tải lại
        </AntdButton>
        </Space>
      </Form.Item>
    </Form>
    </CollapseContent>
  )
}
