import { useFolderContext } from "@/contexts/FolderContext"
import { GetCoCauToChuc } from "@/features/cocautochuc/redux/crud"
import { AntdButton, AntdModal, AntdSelect, AntdSpace,  } from "@/lib/antd/components"
import { useAppDispatch, useAppSelector } from "@/lib/redux/Hooks"
import { Col, Form, FormProps, Input, InputNumber, Row } from "antd"
import { useEffect } from "react"


export const ThemCoCauToChuc = ({handlerClose, visible}: {handlerClose: () => void, visible: boolean}) => {
    const {datas:coCauToChucs, data: coCauToChuc} = useAppSelector(state => state.cocautochuc)
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
            dispatch(GetCoCauToChuc(folderContext.folderId))
        }
    },[folderContext.folderId])

    useEffect(() => {
        if(coCauToChuc){
            form.setFieldsValue(coCauToChuc)
        }
    }, [coCauToChuc])

    return (
        <AntdModal title="Thêm mới cơ cấu tổ chức gốc" handlerCancel={handleCancel} visible={visible} footer={null} 
        // xóa modal khỏi dom khi đóng modal thay vì ẩn (nên xóa khi xử lý nhiều form trên 1 trang)
        destroyOnClose>
            <Form name='CoCauToChuc' layout="vertical" onFinish={onFinish} form={form} requiredMark={true} >
                <Row gutter={[8, 8]}>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Mã nhóm"
                            name="groupCode"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Tên nhóm"
                            name="groupName"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Mã nhóm cha"
                            name="maKenhTinCha"
                        >
                            <AntdSelect generateOptions={{model: coCauToChucs, label: "groupName", value:"id"}}/>
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Thứ tự"
                            name="groupOrder"
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Trạng thái"
                            name="active"
                        >
                            <AntdSelect options={[{label: "Sử dụng", value:true}, {label:"Không sử dụng", value:false}] as any}/>
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="ID người đại diện"
                            name='agent'
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} span={24}>
                        <Form.Item
                            label="Loại cơ cấu"
                            name='agent'
                        >
                            <AntdSelect options={[{label: "Đơn vị", value:'don-vi'}, {label:"Nhóm", value:'nhom'}]}/>
                        </Form.Item>
                    </Col>
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
