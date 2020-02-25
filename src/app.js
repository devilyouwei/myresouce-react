// 引入类库
import flexible from 'flexible.js'
flexible(1920)

export const dva = {
    config: {
        onError(err) {
            err.preventDefault()
            console.error(err.message)
        }
    }
}
