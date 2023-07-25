import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../lib/redux/Hooks"
import { Form, Input, Space } from "antd"
import { IProduct } from "../models"
import { AntdButton } from "../../../lib/antd/components/button/Button"
import { hideModal } from "../../../lib/redux/modal/Slice"
import { GetProduct } from "../redux/Actions"

export const ProductDetail = () => {
    const dispatch = useAppDispatch()
    const {data: modalData} = useAppSelector(state => state.modal)
    const {data: product} = useAppSelector(state => state.product)
    const [form] = Form.useForm<IProduct>()
    const onFinish = (values : IProduct) => {
        console.log(values);
        //dispatch update, create
    }
    useEffect(() => {
        if(modalData){
            dispatch(GetProduct(modalData.id))
        }
        return () => {
            form.resetFields()
        }
    }, [modalData])

    useEffect(() => {
        if(product){
            form.setFieldsValue(product)
        }
    },[product])
    return (
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
        <AntdButton type="default" onClick={() => dispatch(hideModal())}>
          Đóng
        </AntdButton>
        </Space>
      </Form.Item>
    </Form>
    )
}