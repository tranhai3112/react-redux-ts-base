import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../services";
import { ICredential, IError, ILogin, IUser } from "../../../models";


export const GetUser = createAsyncThunk
<IUser, Pick<ICredential, "access_token">, {rejectValue : IError}>("GetUser", async (params, thunkApi) => {
    try {
        const res = await userService.GetUser(params)
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error as IError)
    }
})