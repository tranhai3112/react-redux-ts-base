import React, { useState, useEffect } from 'react'
import { FormBuilder } from '@formio/react'
import { AntdButton, AntdSpace } from '@/lib/antd/components'
import { usePrompt } from '@/hooks/usePrompt'
import { useLocation} from 'react-router-dom'

// TODO: ghi đè lại khai báo ts của FormBuilder do nó sai (k có hàm onChange)
export const TestFormio = () => {
  const [formData, setFormData] = useState()
  const location = useLocation()
  usePrompt(formData?.components.length, location.pathname)
  return (
    <AntdSpace direction="vertical">
      {/* gửi dữ liệu formdata.components lên server */}
      <AntdButton onClick={() => console.log(JSON.stringify(formData))}>Xem JSON Formdata (consolelog)</AntdButton>
      <FormBuilder form={{display: 'form'}} onChange={(schema) => {
        console.log(schema);
        setFormData(schema)
      }} />
    </AntdSpace>
  )
}
