import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HelloWorldApp } from './HelloWorldApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp
      user={{ name: 'Juan', lastName: 'Alberto' }}
      id={1}
      title={'Screen Dealer'} />
  </React.StrictMode>,
)
