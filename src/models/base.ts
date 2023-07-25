export interface IBaseExt<TId = string> {
    id: TId,
    creationAt: string,
    updatedAt: string,
    deletedOn: string,
}
type KeyOfIBaseExt = keyof IBaseExt
export type IPickSearch<TObj , TPick extends keyof TObj = never> = Partial<Pick<TObj, TPick>> & IBasePagination
export type IOmitSearch<TObj, TOmit extends keyof TObj = never> = Partial<Omit<TObj, TOmit>> 
export type IOmitUpdate<TObj, TOmit extends keyof Omit<TObj, KeyOfIBaseExt> = never> = {
    id: string
    data: Partial<Omit<TObj, TOmit | KeyOfIBaseExt>>
}
export type IOmitCreate<TObj, TOmit extends keyof Omit<TObj, KeyOfIBaseExt> = never> = Partial<Omit<TObj, TOmit | KeyOfIBaseExt>>
export interface IPaginationResponse<T> {
    data: T,
    count: number,
}
export interface IError{
    message: string
}

export interface IBasePagination {
    offset?: number,
    limit?:number
}