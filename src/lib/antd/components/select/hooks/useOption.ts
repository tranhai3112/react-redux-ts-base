import { SelectProps } from 'antd'
import React, { useMemo } from 'react'
import { IBaseExt } from '@/models'
import { AntdSelectProps } from '../Select'

export const useOption = <IModel extends IBaseExt>({generateOptions}: {generateOptions: AntdSelectProps<IModel>["generateOptions"]}) => {
    const options = useMemo((): SelectProps["options"] => {
        if(generateOptions){
            const {model, label, value} = generateOptions
            return model?.map(x => ({label: x[label], value: x[value]}))
        }
        return undefined
    },[generateOptions?.model])
  return options
}
