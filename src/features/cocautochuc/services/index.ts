import { Service } from "@/services";
import { ICoCauToChuc } from "../models";
import { AxiosResponseWrapper } from "@/lib/axios/typeHelper";
import { IPickSearch, IPaginationResponse, IResult, IBaseExt, ISoftDelete, IOmitUpdate } from "@/models";

class CoCauToChucService extends Service.BaseApi implements Service.ICrud<ICoCauToChuc>{
    constructor() {
        super("cocautochucs")
    }
    Search(_params: IPickSearch<ICoCauToChuc, "groupCode" | "groupName" | "ofGroupCode" | "active">): AxiosResponseWrapper<IPaginationResponse<ICoCauToChuc[]>> {
        throw new Error("Method not implemented.");
    }
    Get(_id: string): AxiosResponseWrapper<IResult<ICoCauToChuc>> {
        throw new Error("Method not implemented.");
    }
    Create(_data: Partial<Omit<ICoCauToChuc, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Delete(_id: ISoftDelete): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Restore(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Update(_params: IOmitUpdate<ICoCauToChuc>): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
}

export const coCauToChucService= new CoCauToChucService()