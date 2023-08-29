import { toast } from "react-toastify";
import createGenericSlice, { GenericState, ExtendedState } from "../../../lib/redux/GenericSlice";
import { ICredential } from "../../../models";
import { GetUser, GetUserById } from "./Actions";
import { IUser } from "../models";
import { isPending, isRejected } from "@reduxjs/toolkit";

export interface IAuthState extends ExtendedState<IUser>{
}

const initialState: IAuthState = {
    loading: false
}

const Slice = createGenericSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(GetUser.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        .addCase(GetUser.rejected, (state, action) => {
            state.error = action.payload?.message
            state.loading = false
        })
        .addCase(GetUserById.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
        .addMatcher(isPending, (state) => {
            state.loading = true
        })
        .addMatcher(isRejected, (state, action) => {
            state.loading = false
            toast.error(action.error.message)
        })
    }
})


export default Slice.reducer

export const {resetData} = Slice.actions;