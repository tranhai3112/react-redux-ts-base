import { Form, Input, Button } from 'antd'
import { ILogin } from '../models'
import { useAppDispatch } from '../../../lib/redux/Hooks'
import { GetToken } from '../redux/Actions'

export const Login = () => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm<ILogin>()
    const onFinish = async (formData: ILogin) => {
        dispatch(GetToken(formData))
    }
  return (
    <div>
        <Form form={form} name='login' onFinish={onFinish} initialValues={{email: "", password: ""}}>
            <Form.Item name="email" label={"email"}>
                <Input></Input>
            </Form.Item>
            <Form.Item name="password" label={"password"}>
                <Input></Input>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}
