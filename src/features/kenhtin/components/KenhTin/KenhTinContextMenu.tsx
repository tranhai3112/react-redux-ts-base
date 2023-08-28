import { useRef, useCallback, useState } from "react"
import { useClickOutSide } from "@/hooks/useClickOutSide"
import { useFolderContext } from "@/contexts/FolderContext"
import { AntdMenu, AntdMenuProps } from "@/lib/antd/components"
import { EditOutlined } from "@ant-design/icons"

const KENHTIN_CONTEXTMENU: AntdMenuProps["items"] = [{
    label: 'Sửa kênh tin',
    key: 'edit-kenh-tin',
    icon: <EditOutlined />,
  },]

export const KenhTinContextMenu = ({top, left, setVisible, id}: {top?:number, left?: number,id: string, setVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const ref = useRef<HTMLDivElement>(null)
    const onCleanUp = useCallback(() => {
        setVisible(false)
    },[])
    const [modalEditVisible, setModalEditVisible] = useState(false)
    useClickOutSide(ref, () => onCleanUp())
    const folderContext = useFolderContext()
    
    const onClick: AntdMenuProps['onClick'] = (e) => {
        console.log('click', e);
        if(e.key === 'edit-kenh-tin'){
            setModalEditVisible(true)
            // folderContext.setFolderId(id)
        }
        setVisible(false)
    };
    return <div ref={ref} style={{top, left}} className="context-menu-wrapper">
      <AntdMenu items={KENHTIN_CONTEXTMENU} mode="vertical" onClick={onClick}/>
        {/* thêm các modals ở đây modalEditVisible*/}
    </div>
}