import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker()
console.log('hosted on https://github.com/zhuweiyou/zhuweiyou.com')
