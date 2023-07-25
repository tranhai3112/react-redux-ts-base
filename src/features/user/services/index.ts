import axios from "axios";
import { Service } from "../../../services/base";
import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import {IBaseExt, ICredential, ILogin, IOmitUpdate, IPickSearch, IUser } from "../../../models";
class UserService extends Service.BaseApi implements Service.ICrud<IUser>{
    constructor() {
        super("auth/profile")
    }
    Search(_params: IPickSearch<IUser>): AxiosResponseWrapper<IUser[]> {
        throw new Error("Method not implemented.");
    }
    Get(_id: string): AxiosResponseWrapper<IUser> {
        throw new Error("Method not implemented.");
    }
    Create(_data: Partial<Omit<IUser, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Delete(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Restore(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Update(_params: IOmitUpdate<IUser>): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
   
    GetUser(data: Pick<ICredential, "access_token">): AxiosResponseWrapper<IUser> {
        return this._axios.get(this._urlSuffix, {headers:{
            Authorization: `Bearer ${data.access_token}`
        }})
    }
}

export const userService = new UserService();