import { toast } from "react-toastify";
import createGenericSlice, { ExtendedState } from "../../../lib/redux/GenericSlice";
import { IDichVu } from "../models";
import { AddDichVu, DeleteDichVu, GetDichVu, SearchDichVu, UpdateDichVu } from "./action";

export interface IDichVuState extends ExtendedState<IDichVu>{

}

const initialState : IDichVuState = {
    loading: false,
}

const Slice = createGenericSlice({
    name: "dichvu",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(SearchDichVu.pending, (state) => {
                state.loading = true
            })
            .addCase(SearchDichVu.fulfilled, (state, action) => {
                state.loading = false
                state.datas = action.payload.data
                state.count = action.payload.totalCount
            })
            .addCase(SearchDichVu.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(GetDichVu.pending, (state) => {
                state.loading = true
            })
            .addCase(GetDichVu.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
            .addCase(GetDichVu.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(AddDichVu.fulfilled, () => {
                toast.success("Thêm thành công")
            })
            .addCase(AddDichVu.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(UpdateDichVu.fulfilled, () => {
                toast.success("Cập nhật thành công")
            })
            .addCase(UpdateDichVu.rejected, (_, action) => {
                toast.error(action.error.message)
            })
            .addCase(DeleteDichVu.fulfilled, () => {
                toast.success("Xóa tạm thời thành công")
            })
            .addCase(DeleteDichVu.rejected, (_, action) => {
                toast.error(action.error.message)
            })
    }
})

export const {resetData, resetDatas} = Slice.actions

export default Slice.reducer