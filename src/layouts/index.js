import styles from './index.css'
import Link from 'umi/link'
import router from 'umi/router'
import { Row, Col } from 'antd'

function BasicLayout(props) {
    return (
        <div className={styles.normal}>
            <div className={styles.title}>
                <div>
                    <Row>
                        <Col span={5} className="text-left padding-left-sm">
                            <Link to="/about">About</Link>
                        </Col>
                        <Col
                            onClick={() => {
                                router.replace('/')
                            }}
                            span={14}
                            className="text-center">
                            <div className={`${styles.logo} ${styles.google}`}>
                                <i className={'iconfont icon-Centreresources ' + styles.logo}>
                                    &nbsp;
                                </i>
                                <span>G</span>
                                <span>l</span>
                                <span>o</span>
                                <span>b</span>
                                <span>a</span>
                                <span>l</span>&nbsp;
                                <span>Resources</span>
                            </div>
                        </Col>
                        <Col span={5} className="text-right padding-right-sm">
                            <Link to="/login">My Resources</Link>
                        </Col>
                    </Row>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default BasicLayout
