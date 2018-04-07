import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
console.log('hosted on https://github.com/zhuweiyou/zhuweiyou.com')
