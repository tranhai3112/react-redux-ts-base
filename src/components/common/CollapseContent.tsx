import { useState } from 'react'
import { IWithChildren } from '../../types'
import { AntdButton } from '../../lib/antd/components/button/Button'
import { Col, Row } from 'antd'
import { AntdModal } from '../../lib/antd/components'

export interface ICollapseContentProps extends IWithChildren{
  defaultVisible?: boolean,
  modalItem?: React.ReactNode,
  extraButtons?: React.ReactNode[],
}

export const CollapseContent = ({ children, modalItem, extraButtons, defaultVisible}: ICollapseContentProps) => {
  const [open, setOpen] = useState(defaultVisible)
  return (
    <div>
      <Row className='d-flex justify-content-center' justify="end">
        <Col>
          <AntdButton onClick={() => setOpen(curr => !curr)}>Tìm kiếm</AntdButton>
        </Col>
        {extraButtons?.length ? extraButtons.map(button => {
          return <Col>
          {button}
        </Col>
        }): null}
        
      </Row>
      <div className={`collapse-content-wrapper ${open ? `opened` : ``}`}>
        {children}
      </div>
      <AntdModal footer={null}>
        {modalItem}
      </AntdModal>
    </div>

  )
}
