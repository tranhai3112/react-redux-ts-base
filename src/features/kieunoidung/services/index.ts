import { Service } from "../../../services/base";
import {  IKieuNoiDung } from "../models";
import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import { IPaginationResponse, IBaseExt, IOmitUpdate, IOmitCreate, IPickSearch, IBasePagination, ISoftDelete, IResult } from "../../../models";

export class KieuNoiDungService extends Service.BaseApi implements Service.ICrud<IKieuNoiDung> {
    constructor() {
        super("kieunoidungs")
    }
    Get(_id: string): AxiosResponseWrapper<IResult<IKieuNoiDung>> {
        return this._axios.get(this._urlSuffix + "/" + _id)
    }
    Create(_data: Partial<Omit<IKieuNoiDung, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        return this._axios.post(this._urlSuffix, _data)
    }
    Delete(_params: ISoftDelete): AxiosResponseWrapper {
        return this._axios.delete(this._urlSuffix + "/" + _params.id, { data: { forceDelete: _params.forceDelete } })
    }
    Restore(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Update(_params: IOmitUpdate<IKieuNoiDung>): AxiosResponseWrapper {
        return this._axios.put(this._urlSuffix + "/" + _params.id, _params.data)
    }
    Search(params: IPickSearch<IKieuNoiDung, "tenNoiDung">): AxiosResponseWrapper<IPaginationResponse<IKieuNoiDung[]>> {
        return this._axios.get(this._urlSuffix, {params})
    }
   
}

export const kieuNoiDungService = new KieuNoiDungService();