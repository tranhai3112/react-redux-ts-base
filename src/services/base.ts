import { IBaseExt, IPaginationResponse, IOmitCreate, IOmitUpdate, IPickSearch, ICredential, IBasePagination, IResult, ISoftDelete } from "../models"
import {AxiosResponseWrapper} from '../lib/axios/typeHelper'
import { API_VERSION } from "../data/constant";
import axiosInstance from "../lib/axios";
export namespace Service {
    export type IUpdateService<TObj> = IOmitUpdate<TObj> & {id : string}
    // weakly typed
    export interface ICrud<TObj extends IBaseExt> { 
        Search(_params: IPickSearch<TObj>): AxiosResponseWrapper<IPaginationResponse<TObj[]>>
        Get(_id: string): AxiosResponseWrapper<IResult<TObj>>
        Create(_data: IOmitCreate<TObj>): AxiosResponseWrapper
        Delete(_id: ISoftDelete): AxiosResponseWrapper
        Restore(_id: string): AxiosResponseWrapper
        Update(_params: IOmitUpdate<TObj>): AxiosResponseWrapper
    }
    
    export const apiEndpoints = {
        dichvus: "dichvus",
        kenhtins: "kenhtins",
        loaidichvus: "loaidichvus",
        tokens: "tokens",
        tinbais: "tinbais",
        cocautochucs:"cocautochucs",
        "auth/profile":"auth/profile",
        "personal/profile": "personal/profile",
    } as const
    export const primaryRoutes = {
        admin: {
            root: "/admin/",
            quanTriNguoiDung: {
                root: "/admin/quan-tri-nguoi-dung",
                coCauToChuc: "/admin/quan-tri-nguoi-dung/co-cau-to-chuc",
                vaiTro: "/admin/quan-tri-nguoi-dung/vai-tro",
                nguoiDungDonVi: '/admin/quan-tri-nguoi-dung/nguoi-dung-don-vi',
                taiKhoanTuCSDLDanCu: '/admin/quan-tri-nguoi-dung/tk-csdl-dan-cu',
            }
        },
    }
    export type AppEndpoint = keyof typeof apiEndpoints
    export class BaseApi {
        public readonly _urlSuffix : string 
        public readonly _axios = axiosInstance
        constructor(endpoint: AppEndpoint, apiVersion: string = API_VERSION) {
            this._urlSuffix = apiVersion + endpoint
        }
    }
}
