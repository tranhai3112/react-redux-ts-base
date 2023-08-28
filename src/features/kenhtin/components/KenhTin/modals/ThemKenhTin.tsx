import { useFolderContext } from "@/contexts/FolderContext"
import { GetKenhTin } from "@/features/kenhtin/redux/Action"
import { AntdButton, AntdModal, AntdSelect, AntdSpace, AntdUpLoad } from "@/lib/antd/components"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"
import { Col, Form, FormProps, Input, InputNumber, Row } from "antd"
import { useEffect } from "react"


export const ThemKenhTin = ({handlerClose, visible}: {handlerClose: () => void, visible: boolean}) => {
    const {datas: kenhTins, data: kenhTin} = useAppSelector(state => state.kenhtin)
    const {datas: kieuNoiDungs} = useAppSelector(state => state.kieunoidung)
    const [form] = Form.useForm()
    const folderContext = useFolderContext()
    const dispatch = useAppDispatch()
    const onFinish: FormProps["onFinish"] = (values) => {
        console.log(values);
    }
    const handleCancel = () => {
        form.resetFields()
        handlerClose()
    }

    useEffect(() => {
        if(folderContext.folderId){
            dispatch(GetKenhTin(folderContext.folderId))
        }
    },[folderContext.folderId])

    useEffect(() => {
        if(kenhTin){
            form.setFieldsValue(kenhTin)
        }
    }, [kenhTin])

    return (
        <AntdModal title="Thêm mới kênh tin gốc" handlerCancel={handleCancel} visible={visible} footer={null} 
        // xóa modal khỏi dom khi đóng modal thay vì ẩn (nên xóa khi xử lý nhiều form trên 1 trang)
        destroyOnClose>
            <Form name='kenhtin' layout="vertical" onFinish={onFinish} form={form} requiredMark={true} >
                <Row gutter={[8, 8]}>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Tên kênh tin"
                            name="tenKenhTin"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Mã kênh tin cha"
                            name="maKenhTinCha"
                        >
                            <AntdSelect generateOptions={{model: kenhTins, label: "tenKenhTin", value:"id"}}/>
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
                            label="Thứ tự"
                            name="thuTu"
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Kiểu nội dung"
                            name='kieuNoiDungId'
                        >
                            <AntdSelect generateOptions={{model:kieuNoiDungs, label: "tenNoiDung", value:"id"}}/>
                        </Form.Item>
                    </Col>
                    {/* {hideLienKet ?
                        <>
                            <Col md={12} span={24}>
                                <Form.Item
                                    label="Loại mở liên kết"
                                    name="loaiMoLienKet"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col md={12} span={24}>
                                <Form.Item
                                    label="Liên kết ngoài"
                                    name="lienKetNgoai"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col md={12} span={24}>
                                <Form.Item
                                    label="Ảnh đại diện"
                                    name="imageUrl"
                                >
                                    <AntdUpLoad formInstance={form} folderName="KenhTin" fieldName="imageUrl" accept="image/png, image/jpeg" listType="picture" />
                                </Form.Item>
                            </Col>
                        </>
                        : <></>
                    } */}
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Hiển thị menu chính"
                            name="hienThiMenuChinh"
                        >
                            <AntdSelect defaultValue={true} options={[{label: "Hiển thị", value: true}, {label: "Không hiển thị", value:false}] as any}>
                            </AntdSelect>
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Hiển thị menu dọc"
                            name="hienThiMenuDoc"
                        >
                            <AntdSelect defaultValue={true} options={[{label: "Hiển thị", value: true}, {label: "Không hiển thị", value:false}] as any}>
                            </AntdSelect>
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Hiển thị menu phụ"
                            name="hienThiMenuPhu"
                        >
                            <AntdSelect defaultValue={true} options={[{label: "Hiển thị", value: true}, {label: "Không hiển thị", value:false}] as any}>
                            </AntdSelect>
                        </Form.Item>
                    </Col>
                    {/* {hideNoiDung ?
                        <Col span={24}>
                            <Form.Item
                                label="Nội dung"
                                name="noiDung"
                            >
                                <MyEditor ref={editorRef} initialValue={form.getFieldValue("noiDung")} />
                            </Form.Item>
                        </Col> : <></>
                    } */}
                </Row>
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
