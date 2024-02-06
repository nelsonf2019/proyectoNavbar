import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeConfig } from './config/config.theme.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
      <App />
      </ThemeConfig>
    </Provider>
  </React.StrictMode>,
)
