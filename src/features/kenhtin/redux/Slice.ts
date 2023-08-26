import { toast } from "react-toastify";
import createGenericSlice, { GenericState, ExtendedState } from "../../../lib/redux/GenericSlice";
import { AddKenhTin, DeleteKenhTin, GetKenhTin, SearchKenhTin, UpdateKenhTin } from "./Action";
import { IKenhTin } from "../models";
import type { DataNode } from 'antd/es/tree';
export interface IKenhTinState extends ExtendedState<IKenhTin> {
}

const initialState: IKenhTinState = {
    loading: false
}

const Slice = createGenericSlice({
    name: "kenhtin",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(SearchKenhTin.pending, (state) => {
                state.loading = true
            })
            .addCase(SearchKenhTin.fulfilled, (state, action) => {
                state.datas = action.payload.data
                state.count = action.payload.totalCount
                state.loading = false
            })
            .addCase(SearchKenhTin.rejected, (state, action) => {
                state.loading = false
                toast(action.payload?.message)
            })
            .addCase(GetKenhTin.pending, (state) => {
                state.loading = true
            })
            .addCase(GetKenhTin.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.loading = false
            })
            .addCase(GetKenhTin.rejected, (state, action) => {
                state.loading = false
                toast(action.payload?.message)
            })
            .addCase(AddKenhTin.fulfilled, () => {
                toast.success("Thêm thành công")
            })
            .addCase(AddKenhTin.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(UpdateKenhTin.fulfilled, () => {
                toast.success("Cập nhật thành công")
            })
            .addCase(UpdateKenhTin.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(DeleteKenhTin.fulfilled, () => {
                toast.success("Xóa thành công")
            })
            .addCase(DeleteKenhTin.rejected, (_, action) => {
                toast.error(action.error.message)
            })
          
    }
})


export default Slice.reducer

export const { resetData, resetDatas } = Slice.actions;