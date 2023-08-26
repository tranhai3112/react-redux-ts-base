
import { IBaseExt } from '@/models'
import React, { useMemo } from 'react'
import { AntdTreeProps } from '../Tree'
import { listToTree } from '../ultis/renderTree'

export const useTreeData = <IModel extends IBaseExt>({generateTree} : {generateTree: AntdTreeProps<IModel>["generateTree"]}) => {
  const treeData = useMemo(() => {
    if(generateTree && generateTree.data){
        const {data, title, parentId} = generateTree
        return listToTree(data, title, parentId)
    }
    return undefined
}, [generateTree?.data])
  return treeData
}
