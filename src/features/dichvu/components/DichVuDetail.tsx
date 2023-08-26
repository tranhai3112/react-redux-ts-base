import { Col, Form, Input, InputNumber, Row, SelectProps, Space, Upload } from "antd"
import { useAppDispatch, useAppSelector } from "../../../lib/redux/Hooks"
import { IDichVu } from "../models"
import { useEffect, useMemo, useRef } from "react"
import { AntdButton, AntdSelect, UpLoadAntd } from "../../../lib/antd/components"
import { hideModal } from "../../../lib/redux/modal/Slice"
import { UploadOutlined } from "@ant-design/icons"
import { SearchLoaiDichVu } from "../../loaidichvu/redux/action"
import { AddDichVu, GetDichVu, UpdateDichVu } from "../redux/action"

export const DichVuDetail = () => {
    const dispatch = useAppDispatch()
    const { data: modalData } = useAppSelector(state => state.modal)
    const { data: dichVu, datas: dichVus } = useAppSelector(state => state.dichvu)
    const { datas: loaiDichVus, loading } = useAppSelector(state => state.loaidichvu)
    const [form] = Form.useForm<IDichVu>()

    const onFinish = async () => {
        const formData = form.getFieldsValue()
        if (modalData?.id) {
            dispatch(UpdateDichVu({ id: modalData.id, data: { ...formData,} }))
        } else {
            dispatch(AddDichVu({ ...formData}))
        }
        dispatch(hideModal())
        form.resetFields()
    }
    const handleCancel = () => {
        form.resetFields();
        dispatch(hideModal())
    };
    useEffect(() => {
        if (modalData) {
            dispatch(GetDichVu(modalData.id))
        }
        return () => {
            form.resetFields()
        }
    }, [modalData])

    useEffect(() => {
        if (dichVu) {
            form.setFieldsValue({ ...dichVu, loaiDichVuId: dichVu.loaiDichVu.id })
        }
    }, [dichVu])

    useEffect(() => {
        if (!loaiDichVus?.length && !loading) {
            dispatch(SearchLoaiDichVu({}))
        }
    }, [])

    return (
        <Form name='dichvu' layout="vertical" onFinish={onFinish} form={form} requiredMark={modalData === null} initialValues={{ thuTu: 1 }}>
            <Row gutter={[8, 8]}>
                <Col md={12} span={24}>
                    <Form.Item
                        label="Tên dịch vụ"
                        name="tenDichVu"
                        rules={[{ required: true, message: 'Vui lòng nhập tên dịch vụ' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={12} span={24}>
                    <Form.Item
                        label="Tóm tắt"
                        name="tomTat"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={12} span={24}>
                    <Form.Item
                        label="Thứ tự hiển thị"
                        name="thuTu"
                        rules={[{ required: true, message: 'Vui lòng nhập thứ tự hiển thị' }]}
                    >
                        <InputNumber min={1} />
                    </Form.Item>
                </Col>
                <Col md={12} span={24}>
                    <Form.Item
                        label="Ảnh đại diện"
                        name="imageUrl"
                    >
                        <UpLoadAntd formInstance={form} folderName="DichVu" fieldName="imageUrl" accept="image/png, image/jpeg" listType="picture"/>
                    </Form.Item>
                </Col>
                <Col md={12} span={24}>
                    <Form.Item
                        label="Tên dịch vụ cha"
                        name="maDichVuCha"
                    >
                        <AntdSelect  generateOptions={{model:dichVus, label: "tenDichVu", value: "id"}}/>
                    </Form.Item>
                </Col>
                <Col md={12} span={24}>
                    <Form.Item
                        label="Loại dịch vụ"
                        name="loaiDichVuId"
                        rules={[{ required: true, message: 'Vui lòng chọn loại dịch vụ' }]}
                    >
                        <AntdSelect generateOptions={{model:loaiDichVus, label: "tenLoaiDichVu", value: "id"}}/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Space >
                    <AntdButton type="primary" onClick={onFinish}>
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