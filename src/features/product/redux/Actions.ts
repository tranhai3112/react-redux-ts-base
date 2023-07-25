import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../services";
import { IError, IPaginationResponse, IPickSearch } from "../../../models";
import { IProduct } from "../models";


export const SearchProduct = createAsyncThunk
<IProduct[], IPickSearch<IProduct, "title">, {rejectValue: IError}>("SearchProduct", async (params, thunkApi) => {
    try {
        const res = await productService.Search(params)
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error as IError)
    }
})

export const GetProduct = createAsyncThunk
<IProduct, string, {rejectValue: IError}>("GetProduct", async (id, thunkApi) => {
    try {
        const res = await productService.Get(id)
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error as IError)
    }
})