import { Col, Form, Input, InputNumber, Row, SelectProps, Space } from "antd"
import { useAppDispatch, useAppSelector } from "../../../lib/redux/Hooks"
import { ILoaiDichVu, ISearchLoaiDichVu } from "../models"
import { useEffect } from "react"
import { AntdButton, AntdSelect, UpLoadAntd } from "../../../lib/antd/components"
import { hideModal } from "../../../lib/redux/modal/Slice"
import { AddLoaiDichVu, GetLoaiDichVu, UpdateLoaiDichVu } from "../redux/action"

const LINKTYPE_OPTIONS :SelectProps["options"] = [{
    label: "Trang hiện tại",
    value: "hien-tai"
}, {
    label: "Trang chi tiết",
    value: "chi-tiet"
}]

export const LoaiDichVuDetail = () => {
    const dispatch = useAppDispatch()
    const { data: modalData } = useAppSelector(state => state.modal)
    const { data: loaiDichVus } = useAppSelector(state => state.loaidichvu)
    const [form] = Form.useForm<ILoaiDichVu>()
    const onFinish = async () => {
        const formData = form.getFieldsValue()
        if (modalData?.id) {
            dispatch(UpdateLoaiDichVu({ id: modalData.id, data: formData }))
        } else {
            dispatch(AddLoaiDichVu(formData))
        }
        form.resetFields()
        dispatch(hideModal())
    }
    const handleCancel = () => {
        form.resetFields();
        dispatch(hideModal())
    };
    useEffect(() => {
        if (modalData) {
            dispatch(GetLoaiDichVu(modalData.id))
        }
        return () => {
            form.resetFields()
        }
    }, [modalData])

    useEffect(() => {
        if (loaiDichVus) {
            form.setFieldsValue(loaiDichVus)
        }
    }, [loaiDichVus])

    return (
        <Form name='dichvu' layout="vertical" form={form}>
            <Row gutter={[8, 8]}>
                <Col span={18}>
                    <Form.Item
                        label="Tên loại dịch vụ"
                        name="tenLoaiDichVu"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Thứ tự"
                        name="thuTu"
                    >
                        <InputNumber min={1} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Liên kết tới"
                        name="linkTo"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Loại liên kết"
                        name="linkType"
                    >
                        <AntdSelect options={LINKTYPE_OPTIONS} defaultValue={"hien-tai"}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Ảnh"
                        name="imageUrl"
                    >
                        <UpLoadAntd formInstance={form} folderName="LoaiDichVu" fieldName="imageUrl" accept="image/png, image/jpeg" listType="picture"/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Space >
                    <AntdButton type="primary" onClick={onFinish} >
                        Xác nhận
                    </AntdButton>
                    <AntdButton type="default" onClick={handleCancel}>
                        Đóng
                    </AntdButton>
                </Space>
            </Form.Item>
        </Form>
    )
}