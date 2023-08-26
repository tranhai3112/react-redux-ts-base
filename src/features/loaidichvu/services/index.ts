import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import { IPickSearch, IPaginationResponse, IBaseExt, IOmitUpdate, IResult, ISoftDelete } from "../../../models";
import { Service } from "../../../services";
import { ILoaiDichVu } from "../models";

class LoaiDichVuService extends Service.BaseApi implements Service.ICrud<ILoaiDichVu>{
    constructor() {
        super("loaidichvus")
    }
    Search(_params: IPickSearch<ILoaiDichVu, "tenLoaiDichVu">): AxiosResponseWrapper<IPaginationResponse<ILoaiDichVu[]>> {
        return this._axios.get(this._urlSuffix, {params: _params})
    }
    Get(_id: string): AxiosResponseWrapper<IResult<ILoaiDichVu>> {
        return this._axios.get(this._urlSuffix + "/" + _id)
    }
    Create(_data: Partial<Omit<ILoaiDichVu, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        return this._axios.post(this._urlSuffix, _data)
    }
    Delete(_params: ISoftDelete): AxiosResponseWrapper {
        return this._axios.delete(this._urlSuffix + "/" + _params.id, {data: {forceDelete: _params.forceDelete}})
    }
    Restore(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Update(_params: IOmitUpdate<ILoaiDichVu>): AxiosResponseWrapper {
        return this._axios.put(this._urlSuffix + "/" + _params.id, _params.data)
    }

}

export const loaiDichVuApi = new LoaiDichVuService()