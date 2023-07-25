import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services";
import { ICredential, IError, ILogin, IUser } from "../../../models";
import { GetUser } from "../../user/redux/Actions";

export const GetToken = createAsyncThunk
<ICredential, ILogin, {rejectValue: IError}>("GetToken", async (params, thunkApi) => {
    try {
        const res = await authService.GetToken(params)
        if(res.status === 201 && res.data){ // fake api response with status 201
            thunkApi.dispatch(GetUser({access_token: res.data.access_token}))
        } 
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error as IError)
    }
})
