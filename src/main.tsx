import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.ts'
import { ModalState } from './components/ModalContext/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalState>
        <App />
      </ModalState>
    </Provider>
  </React.StrictMode>
)
