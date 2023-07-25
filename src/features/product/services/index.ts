import { Service } from "../../../services/base";
import { IProduct } from "../models";
import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import { IPaginationResponse, IBaseExt, IOmitUpdate, IOmitCreate, IPickSearch, IBasePagination } from "../../../models";

export class ProductService extends Service.BaseApi implements Service.ICrud<IProduct> {
    constructor() {
        super("products")
    }
    Get(_id: string): AxiosResponseWrapper<IProduct> {
        return this._axios.get(this._urlSuffix + "/" + _id)
    }
    Create(_data: Partial<Omit<IProduct, keyof IBaseExt<string>>>): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Delete(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Restore(_id: string): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Update(_params: IOmitUpdate<IProduct>): AxiosResponseWrapper {
        throw new Error("Method not implemented.");
    }
    Search(params: IPickSearch<IProduct, "title">): AxiosResponseWrapper<IProduct[]> {
        return this._axios.get(this._urlSuffix, {params})
    }
   
}

export const productService = new ProductService();