import { IBaseExt } from "@/models"
import { Tree } from "antd"
import { DataNode, DirectoryTreeProps } from "antd/es/tree"
import { useTreeData } from "./hooks/useTreeData"
import { useEffect, useMemo, useState } from "react"
import { getParentKey } from "./ultis/renderTree"

export interface AntdDirectoryTreeProps<IModel> extends DirectoryTreeProps {
    generateTree?: {
        data: IModel[] | undefined,
        title: keyof IModel,
        parentId: keyof IModel,
    },
    searchParams: string
}
const { DirectoryTree } = Tree

export const AntdDirectoryTree = <IModel extends IBaseExt>(props: AntdDirectoryTreeProps<IModel>) => {
    const { generateTree, searchParams, ...rest } = props
    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const treeData = useTreeData({ generateTree })
    const onExpand = (newExpandedKeys: React.Key[]) => {
        setExpandedKeys(newExpandedKeys)
        setAutoExpandParent(false);
    };
    const [treeDataFiltered, expandedKeyFilters] = useMemo((): [DataNode[] | [], React.Key[]] => {
        if(treeData){
            const expandedKeys: React.Key[] = []
            const loop = (data: DataNode[]): DataNode[] =>
            data.map((item) => {
              const strTitle = item.title as string;
              const index = strTitle.indexOf(searchParams);
              const beforeStr = strTitle.substring(0, index);
              const afterStr = strTitle.slice(index + searchParams.length);
              if(index > -1 && searchParams != ""){
                expandedKeys.push(item.key)
              }
              const title =
                index > -1 ? (
                  <span>
                    {beforeStr}
                    <span style={{fontWeight:500, fontStyle: "italic", color:"red"}}>{searchParams}</span>
                    {afterStr}
                  </span>
                ) : (
                  <span>{strTitle}</span>
                );
              if (item.children) {
                return { title, key: item.key, children: loop(item.children) };
              }
              return {
                title,
                key: item.key,
              };
            });
            const filteredFolder = loop(treeData);
            
            return [filteredFolder, expandedKeys]
        }
        return [[],[]]
      }, [searchParams, treeData]);
      useEffect(() => {
        setExpandedKeys(expandedKeyFilters)
        setAutoExpandParent(true)
      },[expandedKeyFilters])
    return (
        <DirectoryTree showLine {...rest} treeData={treeDataFiltered} expandedKeys={expandedKeys} onExpand={onExpand} autoExpandParent={autoExpandParent}/>
    )
}
