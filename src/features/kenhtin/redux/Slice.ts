import { toast } from "react-toastify";
import createGenericSlice, { GenericState, ExtendedState } from "../../../lib/redux/GenericSlice";
import { AddKenhTin, DeleteKenhTin, GetKenhTin, SearchKenhTin, UpdateKenhTin } from "./Action";
import { IKenhTin } from "../models";
import type { DataNode } from 'antd/es/tree';
import { isPending, isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
export interface IKenhTinState extends ExtendedState<IKenhTin> {
}

const initialState: IKenhTinState = {
    loading: false,
}

const Slice = createGenericSlice({
    name: "kenhtin",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(SearchKenhTin.fulfilled, (state, action) => {
                state.datas = action.payload.data
                state.count = action.payload.totalCount
                state.loading = false
            })
            .addCase(GetKenhTin.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.loading = false
            })
            .addCase(AddKenhTin.fulfilled, () => {
                toast.success("Thêm thành công")
            })
            .addCase(UpdateKenhTin.fulfilled, () => {
                toast.success("Cập nhật thành công")
            })
            .addCase(DeleteKenhTin.fulfilled, () => {
                toast.success("Xóa thành công")
            })
            .addMatcher(isPending, (state) => {
                state.loading = true
            })
            .addMatcher(isRejectedWithValue, (state, action) => {
                toast.error(action.error.message)
                state.loading = false
            })
    }
})


export default Slice.reducer

export const { resetData, resetDatas } = Slice.actions;