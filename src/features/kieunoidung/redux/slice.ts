import { toast } from "react-toastify";
import createGenericSlice, { GenericState, ExtendedState } from "../../../lib/redux/GenericSlice";
import { AddKieuNoiDung, DeleteKieuNoiDung, GetKieuNoiDung, SearchKieuNoiDung, UpdateKieuNoiDung } from "./action";
import { IKieuNoiDung } from "../models";
import type { DataNode } from 'antd/es/tree';
import { list_to_tree } from "../../../utils";
export interface IKieuNoiDungState extends ExtendedState<IKieuNoiDung> {
}

const initialState: IKieuNoiDungState = {
    loading: false
}

const Slice = createGenericSlice({
    name: "kieunoidung",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(SearchKieuNoiDung.pending, (state) => {
                state.loading = true
            })
            .addCase(SearchKieuNoiDung.fulfilled, (state, action) => {
                state.datas = action.payload.data
                state.count = action.payload.totalCount
                state.loading = false
            })
            .addCase(SearchKieuNoiDung.rejected, (state, action) => {
                state.loading = false
                toast(action.payload?.message)
            })
            .addCase(GetKieuNoiDung.pending, (state) => {
                state.loading = true
            })
            .addCase(GetKieuNoiDung.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.loading = false
            })
            .addCase(GetKieuNoiDung.rejected, (state, action) => {
                state.loading = false
                toast(action.payload?.message)
            })
            .addCase(AddKieuNoiDung.fulfilled, () => {
                toast.success("Thêm thành công")
            })
            .addCase(AddKieuNoiDung.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(UpdateKieuNoiDung.fulfilled, () => {
                toast.success("Cập nhật thành công")
            })
            .addCase(UpdateKieuNoiDung.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(DeleteKieuNoiDung.fulfilled, () => {
                toast.success("Xóa tạm thời thành công")
            })
            .addCase(DeleteKieuNoiDung.rejected, (_, action) => {
                toast.error(action.error.message)
            })
    }
})


export default Slice.reducer

export const { resetData, resetDatas } = Slice.actions;