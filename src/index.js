import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'antd/dist/antd.css'
import 'animate.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'
import $ from 'jquery'
import { store } from './redux-toolkit'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

$('.dropdown-menu').on('click', (event) => {
  event.stopPropagation()
})

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
