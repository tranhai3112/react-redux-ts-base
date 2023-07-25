import { useState, useRef, ComponentProps } from "react"
import { Modal } from "antd"
import { useAppDispatch, useAppSelector } from "../../../redux/Hooks"
import Draggable, { DraggableEventHandler } from "react-draggable"
import { hideModal } from "../../../redux/modal/Slice"
export interface IAntdModalProps extends Omit<ComponentProps<typeof Modal>, "open" | "title">{
    positionStyle?: React.CSSProperties
    handlerOk?: () => void,
}

export const AntdModal = (props: IAntdModalProps) => {
    const {children, positionStyle, handlerOk, ...rest} = props
    const [disable, setDisable] = useState(false)
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    })
    const dragRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const {visible, title} = useAppSelector(state => state.modal)
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
        dispatch(hideModal())
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