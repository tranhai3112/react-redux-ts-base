import { toast } from "react-toastify";
import createGenericSlice, { GenericState, ExtendedState } from "../../../lib/redux/GenericSlice";
import { GetProduct, SearchProduct } from "./Actions";
import { IProduct } from "../models";

export interface IProductState extends ExtendedState<IProduct>{
}

const initialState: IProductState = {
    loading: false
}

const Slice = createGenericSlice({
    name: "post",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(SearchProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(SearchProduct.fulfilled, (state, action) => {
            state.datas = action.payload
            state.count =  200
            state.loading = false
        })
        .addCase(SearchProduct.rejected, (state, action) => {
            state.loading = false
            toast(action.payload?.message)
        })
        .addCase(GetProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(GetProduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        .addCase(GetProduct.rejected, (state, action) => {
            state.loading = false
            toast(action.payload?.message)
        })
    }
})


export default Slice.reducer

export const {resetData, resetDatas} = Slice.actions;