import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./lib/antd/scss/customAntdStyle.scss"
import "./assets/sass/styles.scss"
import 'react-toastify/dist/ReactToastify.css';
import {RouterProvider} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { router } from './pages/routers/admin.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './lib/redux/Store.ts';
import { AntdModal } from './lib/antd/components/modal/Modal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} future={{v7_startTransition: true}}/>
      </PersistGate>
    </Provider>
    <ToastContainer 
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
  </React.StrictMode>,
)
