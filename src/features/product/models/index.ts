import { IBaseExt, IBasePagination, IPickSearch} from "../../../models";
export interface IProduct extends IBaseExt{
    title: string,
    price: number,
    description: string,
    category: string,
    images: string[]
}

export interface ISearchProduct extends IBasePagination, IPickSearch<IProduct, "title">{
    
}
// export interface ISearchPost extends IPickSeach<IProduct, "name">{}
// export interface IUpdatePost extends IOmitUpdate<IProduct, "content">{}
// export interface ICreatePost extends IOmitCreate<IProduct>{}

// const a: IUpdatePost = {
// id:"s"
// }