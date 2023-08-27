import { useState, useRef, ComponentProps } from "react"
import { Modal } from "antd"
import { useAppDispatch, useAppSelector } from "../../../redux/Hooks"
import Draggable, { DraggableEventHandler } from "react-draggable"
export interface IAntdModalProps extends Omit<ComponentProps<typeof Modal>, "open" | "title" | "onOk" | "onCancel">{
    positionStyle?: React.CSSProperties
    visible: boolean,
    title: React.ReactNode,
    handlerOk?: () => void,
    handlerCancel?: () => void,
}

export const AntdModal = (props: IAntdModalProps) => {
    const {children, positionStyle, handlerOk, visible, title, handlerCancel, ...rest} = props
    const [disable, setDisable] = useState(false)
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    })
    const dragRef = useRef<HTMLDivElement>(null)
    const onStart : DraggableEventHandler  = (_, uiData) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = dragRef.current?.getBoundingClientRect();
        if(targetRect){
            setBounds({
                left: -targetRect.left + uiData?.x,
                right: clientWidth - (targetRect.right - uiData?.x),
                top: -targetRect.top + uiData?.y,
                bottom: clientHeight - (targetRect.bottom - uiData?.y)
            })
        }
    }
    const onHandlerCancel = () => {
        handlerCancel ? handlerCancel() : null
    }
    const onHandlerOk = () => {
        handlerOk ? handlerOk() : null
    }
    return <Modal 
        open={visible}
        maskClosable={true}
        wrapClassName="modal-wrapper"
        style={{...positionStyle}}
        title={<div style={{width:'100%', cursor:"move"}} onMouseOver={() => disable ? setDisable(false) : null} onMouseOut={() => setDisable(true)}>
            {title}
        </div>}
        onCancel={onHandlerCancel}
        onOk={onHandlerOk}
        modalRender={(modal) => (
            <Draggable 
                disabled={disable}
                bounds={bounds}
                onStart={(event, uiData) => onStart(event, uiData)}
                nodeRef={dragRef}
                >
                <div ref={dragRef}>
                    {modal}
                </div>
            </Draggable>
        )}
        {...rest}
        >
        {children}
    </Modal>
}