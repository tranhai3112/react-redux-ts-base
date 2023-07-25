import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBaseExt } from "../../../models";

export interface IModalState<IModel extends IBaseExt> {
    visible: boolean,
    data: IModel | null,
    title: string,
}

const initialState : IModalState<IBaseExt> = {
    data: null,
    visible: false,
    title: ""
}

const Slice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<Omit<IModalState<IBaseExt>, "visible">>) => {
            state.visible = true
            state.data = action.payload.data
            state.title = action.payload.title
        },
        hideModal: () => initialState
    }
})

export const {showModal, hideModal} = Slice.actions

export default Slice.reducer