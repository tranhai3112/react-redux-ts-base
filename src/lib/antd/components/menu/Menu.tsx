
import React from 'react'
import { Menu, MenuProps } from 'antd'

export interface AntdMenuProps extends MenuProps{
  
} 

export const AntdMenu = (props: MenuProps) => {
  return (
    <Menu {...props}></Menu>
  )
}
