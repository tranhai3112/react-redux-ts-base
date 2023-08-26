
import { ZoomComponent } from '@/components/common'
import { AntdDivider, AntdSpace } from '@/lib/antd/components'
import { FullscreenExitOutlined, FullscreenOutlined, ReloadOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import { TinBaiTab } from './TinBaiTab'

export const TinBaiWrapper = () => {
  // const [searchParams, setSearchParams] = useState<ISearchKenhTin>({reFetch:true})
  return (
    <ZoomComponent>
      {(toggler, zoomed) => (<section style={{marginLeft:12}}>
          <Row align="middle" justify="space-between">
            <Col>
              abcxyz
            </Col>
            <Col>
              <AntdSpace>
                <ReloadOutlined title="Tải lại" 
                // onClick={() => setSearchParams((curr) => ({ ...curr, reFetch: true }))}  hàm này reload lại hết search trong context?
                style={{ fontSize: '18px' }} />
                {zoomed ?
                  <FullscreenExitOutlined style={{ fontSize: "18px" }} onClick={() => toggler()} /> :
                  <FullscreenOutlined title="Toàn màn hình" onClick={() => toggler()} style={{ fontSize: '18px' }} />
                }
              </AntdSpace>
            </Col>
          </Row>
          <AntdDivider />
          <TinBaiTab/>
      </section>)}
    </ZoomComponent>
  )
}
