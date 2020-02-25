import styles from './index.css'
import { Input } from 'antd'
const { Search } = Input

export default function() {
    const render = (
        <div className={styles.content}>
            <Search
                className={styles.search}
                size="large"
                placeholder="Search For Good Resources"
                style={{ borderRadius: 0 }}
                allowClear
            />
        </div>
    )

    return render
}
