import { Service } from "../../../services/base";
import { IKenhTin } from "../models";
import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import { IPaginationResponse, IBaseExt, IOmitUpdate, IOmitCreate, IPickSearch, IBasePagination, ISoftDelete, IResult } from "../../../models";

export class KenhTinService extends Service.BaseApi implements Service.ICrud<IKenhTin> {
    constructor() {
        super("kenhtins")
    }
    Get(_id: string): AxiosResponseWrapper<IResult<IKenhTin>> {
        return this._axios.get(this._urlSuffix + "/" + _id)
    }
    Create(_data: Partial<Omit<IKenhTin, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        return this._axios.post(this._urlSuffix, _data)
    }
    Delete(_params: ISoftDelete): AxiosResponseWrapper {
        return this._axios.delete(this._urlSuffix + "/" + _params.id, { data: { forceDelete: _params.forceDelete } })
    }
    Restore(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Update(_params: IOmitUpdate<IKenhTin>): AxiosResponseWrapper {
        return this._axios.put(this._urlSuffix + "/" + _params.id, _params.data)
    }
    Search(params: IPickSearch<IKenhTin, "tenKenhTin">): AxiosResponseWrapper<IPaginationResponse<IKenhTin[]>> {
        return this._axios.get(this._urlSuffix, { params })
    }

}

export const kenhTinService = new KenhTinService();