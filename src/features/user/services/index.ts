import axios from "axios";
import { Service } from "../../../services/base";
import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import {IBaseExt, ICredential, ILogin, IOmitUpdate, IPaginationResponse, IPickSearch, IResult, ISoftDelete } from "../../../models";
import { IUser } from "../models";
class UserService extends Service.BaseApi implements Service.ICrud<IUser>{
    constructor() {
        super("personal/profile")
    }
    Search(params: IPickSearch<IUser>): AxiosResponseWrapper<IPaginationResponse<IUser[]>> {
        return this._axios.post("/api/users/search", params)
    }
    Get(id: string): AxiosResponseWrapper<IResult<IUser>> {
        return this._axios.get(this._urlSuffix + "/" + id)
    }
    Create(data: Partial<Omit<IUser, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        return this._axios.post(this._urlSuffix, data)
    }
    Delete(id: ISoftDelete): AxiosResponseWrapper {
        return this._axios.delete(this._urlSuffix + "/" + id)
    }
    Restore(id: string): AxiosResponseWrapper {
        return this._axios.patch(this._urlSuffix + "/" + id)
    }
    Update(params: IOmitUpdate<IUser>): AxiosResponseWrapper {
        return this._axios.put(this._urlSuffix + "/" + params.id, params.data)
    }
    GetUser(data: Pick<ICredential, "token">): AxiosResponseWrapper<IUser> {
        return this._axios.get(this._urlSuffix, {headers:{
            Authorization: `Bearer ${data.token}`
        }})
    }
}

export const userService = new UserService();