import createGenericSlice, { ExtendedState } from "../../../lib/redux/GenericSlice";
import { ILoaiDichVu } from "../models";
import { AddLoaiDichVu, DeleteLoaiDichVu, GetLoaiDichVu, SearchLoaiDichVu, UpdateLoaiDichVu } from "./action";
import {toast} from 'react-toastify'

export interface ILoaiDichVuState extends ExtendedState<ILoaiDichVu>{

}

const initialState : ILoaiDichVuState = {
    loading: false
}

const Slice = createGenericSlice({
    name: "loaidichvu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SearchLoaiDichVu.pending, (state) => {
                state.loading = true
            })
            .addCase(SearchLoaiDichVu.fulfilled, (state, action) => {
                state.loading = false
                state.datas = action.payload.data
                state.count = action.payload.totalCount
            })
            .addCase(SearchLoaiDichVu.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(GetLoaiDichVu.pending, (state) => {
                state.loading = true
            })
            .addCase(GetLoaiDichVu.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
            .addCase(AddLoaiDichVu.fulfilled, () => {
                toast.success("Thêm thành công")
            })
            .addCase(AddLoaiDichVu.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(UpdateLoaiDichVu.fulfilled, () => {
                toast.success("Cập nhật thành công")
            })
            .addCase(UpdateLoaiDichVu.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(DeleteLoaiDichVu.fulfilled, () => {
                toast.success("Xóa tạm thời thành công")
            })
            .addCase(DeleteLoaiDichVu.rejected, (_, action) => {
                toast.error(action.error.message)
            })
    }
})

export const {resetData, resetDatas} = Slice.actions

export default Slice.reducer