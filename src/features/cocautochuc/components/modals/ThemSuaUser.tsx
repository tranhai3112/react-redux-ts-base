import {  GetUserById } from "@/features/user/redux/Actions"
import { AntdButton, AntdModal, AntdSelect, AntdSpace, AntdTab, AntdUpLoad, IAntdTabsProps } from "@/lib/antd/components"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"
import { Col, Form, FormProps, Input, InputNumber, Row } from "antd"
import { useEffect } from "react"
import { useCoCauModalContext } from "../../contexts/CoCauModalContext"

const TABDATA: IAntdTabsProps["items"] = [
    {
        label: "Thông tin người dùng",
        key:"thong-tin-nguoi-dung",
        children:<Row gutter={[8, 8]}>
        <Col md={12} span={24}>
            <Form.Item
                label="Tên tài khoản"
                name="tenusers"
            >
                <Input />
            </Form.Item>
        </Col>
        <Col md={12} span={24}>
            <Form.Item
                label="Họ và tên"
                name="tomTat"
            >
                <Input />
            </Form.Item>
        </Col>
        <Col md={12} span={24}>
            <Form.Item
                label="Thứ tự"
                name="thuTu"
            >
                <InputNumber min={1} />
            </Form.Item>
        </Col>
    </Row>
    },
    {
        label:"Vai trò",
        key:"vai-tro",
        children:<Row gutter={[8, 8]}>
        <Col md={12} span={24}>
            <Form.Item
                label="Tên tài khoản"
                name="tenusers"
            >
                <Input />
            </Form.Item>
        </Col>
        <Col md={12} span={24}>
            <Form.Item
                label="Họ và tên"
                name="tomTat"
            >
                <Input />
            </Form.Item>
        </Col>
        <Col md={12} span={24}>
            <Form.Item
                label="Thứ tự"
                name="thuTu"
            >
                <InputNumber min={1} />
            </Form.Item>
        </Col>
    </Row>
    }
] 


export const ThemSuaUser = ({handlerClose, visible}: {handlerClose: () => void, visible: boolean}) => {
    const { data: user} = useAppSelector(state => state.user)
    const [form] = Form.useForm()
    const modalContext = useCoCauModalContext()
    const dispatch = useAppDispatch()
    const onFinish: FormProps["onFinish"] = (values) => {
        console.log(values);
    }
    const handleCancel = () => {
        form.resetFields()
        handlerClose()
    }

    useEffect(() => {
        if(modalContext.showModalUserCU.id){
            dispatch(GetUserById(modalContext.showModalUserCU.id))
        }
    },[modalContext.showModalUserCU.id])

    useEffect(() => {
        if(user){
            form.setFieldsValue(user)
        }
    }, [user])

    return (
        <AntdModal title="Thêm mới kênh tin gốc" handlerCancel={handleCancel} visible={visible} footer={null} 
        // xóa modal khỏi dom khi đóng modal thay vì ẩn (nên xóa khi xử lý nhiều form trên 1 trang)
        destroyOnClose>
            <Form name='users' layout="vertical" onFinish={onFinish} form={form} requiredMark={true} >
                <AntdTab items={TABDATA} >

                </AntdTab>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <AntdSpace >
                        <AntdButton type="primary" htmlType="submit">
                            Xác nhận
                        </AntdButton>
                        <AntdButton type="default" onClick={handleCancel}>
                            Đóng
                        </AntdButton>
                    </AntdSpace>
                </Form.Item>
            </Form>
        </AntdModal>
    )
}
