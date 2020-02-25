import styles from './login.css'
import Card from '../../components/Card/Card'
import Link from 'umi/link'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const login = ({ loginModel, form }) => {
    const data = loginModel
    const { getFieldDecorator } = form

    const handleSubmit = e => {
        e.preventDefault()
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }
    return (
        <div className={styles.content}>
            <Card className={styles.card}>
                <div className={styles.title}>
                    Sign In&nbsp;<i className={`iconfont icon-signin ${styles.iconfont}`}></i>
                </div>
                <Form onSubmit={handleSubmit} className={styles.loginForm}>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your username!' }, {}]
                        })(
                            <Input
                                size="large"
                                className={styles.loginInput}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="email"
                                placeholder="Email"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }]
                        })(
                            <Input
                                size="large"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(<Checkbox className={styles.loginFormCheckBox}>Remember me</Checkbox>)}
                        <Link className={styles.loginFormForgot} to="/register">
                            Forgot password
                        </Link>
                        <Button
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className={styles.loginFormButton}>
                            Log in
                        </Button>
                        Or <Link to="/register">register now!</Link>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

const loginForm = Form.create({ name: 'login-form' })(login)

export default connect(({ loginModel }) => ({ loginModel }))(loginForm)
