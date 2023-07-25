import { IBaseExt, IPaginationResponse, IOmitCreate, IOmitUpdate, IPickSearch, ICredential, IUser, IBasePagination } from "../models"
import {AxiosResponseWrapper} from '../lib/axios/typeHelper'
import axiosInstance from "../lib/axios";
import { API_VERSION } from "../data/constant";
export namespace Service {
    export type IUpdateService<TObj> = IOmitUpdate<TObj> & {id : string}
    // weakly typed
    export interface ICrud<TObj extends IBaseExt> { 
        Search(_params: IPickSearch<TObj >): AxiosResponseWrapper<TObj[]>
        Get(_id: string): AxiosResponseWrapper<TObj>
        Create(_data: IOmitCreate<TObj>): AxiosResponseWrapper
        Delete(_id: string): AxiosResponseWrapper
        Restore(_id: string): AxiosResponseWrapper
        Update(_params: IOmitUpdate<TObj>): AxiosResponseWrapper
    }
    export type AppEndpoint = "products" |  "auth/login" | "auth/profile"
    export class BaseApi {
        public readonly _urlSuffix : AppEndpoint 
        public readonly _axios = axiosInstance
        constructor(endpoint: AppEndpoint) {
            this._urlSuffix = endpoint
        }
    }
}


