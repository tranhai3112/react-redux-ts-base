import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import { IPickSearch, IBaseExt, IOmitUpdate, IPaginationResponse, IResult, ISoftDelete } from "../../../models";
import { Service } from "../../../services";
import { IDichVu } from "../models";

class DichVuService extends Service.BaseApi implements Service.ICrud<IDichVu>{
    constructor(){
        super("dichvus")
    }
    Search(_params: IPickSearch<IDichVu, "tenDichVu" | "tomTat" | "loaiDichVuId">): AxiosResponseWrapper<IPaginationResponse<IDichVu[]>> {
        return this._axios.get(this._urlSuffix, {params: _params})
    }
    Get(_id: string): AxiosResponseWrapper<IResult<IDichVu>> {
        return this._axios.get(this._urlSuffix + "/" + _id);
    }
    Create(_data: Partial<Omit<IDichVu, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        return this._axios.post(this._urlSuffix, _data)
    }
    Delete(_params: ISoftDelete): AxiosResponseWrapper {
        return this._axios.delete(this._urlSuffix + "/" + _params.id, {data: {forceDelete: _params.forceDelete}})
    }
    Restore(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Update(_params: IOmitUpdate<IDichVu>): AxiosResponseWrapper {
        return this._axios.put(this._urlSuffix + "/" + _params.id, _params.data)
    }
}

export const dichVuApi = new DichVuService()