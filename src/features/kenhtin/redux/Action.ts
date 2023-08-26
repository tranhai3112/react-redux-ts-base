import { createAsyncThunk } from "@reduxjs/toolkit";
import { kenhTinService, } from "../services";
import { IError, IPaginationResponse, IPickSearch, IOmitUpdate, IResult, ISoftDelete } from "../../../models";
import { IKenhTin, ISearchKenhTin } from "../models";


export const SearchKenhTin = createAsyncThunk
    <IPaginationResponse<IKenhTin[]>, IPickSearch<IKenhTin, "tenKenhTin">, { rejectValue: IError }>("SearchKenhTin", async (params, thunkApi) => {
        try {
            const res = await kenhTinService.Search(params)
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as IError)
        }
    })

export const GetKenhTin = createAsyncThunk<IResult<IKenhTin>, string, { rejectValue: IError }>("GetKenhTin", async (id, thunkApi) => {
    try {
        const res = await kenhTinService.Get(id)
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error as IError)
    }
})

export const UpdateKenhTin = createAsyncThunk("UpdateKenhTin", async (data: IOmitUpdate<IKenhTin>, thunkApi) => {
    try {
        const res = await kenhTinService.Update(data)
        if (res.status == 200) {
            thunkApi.dispatch(SearchKenhTin({ reFetch: true }))
            thunkApi.dispatch(GetKenhTin(data.id as string))
        }
        return res.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})


export const AddKenhTin = createAsyncThunk("AddKenhTin", async (data: IKenhTin, thunkApi) => {
    try {
        const res = await kenhTinService.Create(data)
        if (res.status == 201) {
            thunkApi.dispatch(SearchKenhTin({ reFetch: true }))
        }
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error as IError)
    }
})
export const DeleteKenhTin = createAsyncThunk("DeleteKenhTin", async (params: ISoftDelete, thunkApi) => {
    try {
        const res = await kenhTinService.Delete(params)
        if (res.status === 200) {
            thunkApi.dispatch(SearchKenhTin({ reFetch: true }))
        }
        return res.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})