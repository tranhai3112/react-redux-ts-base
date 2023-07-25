import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper"
import { ICredential, ILogin, IUser } from "../models"

export interface IAuthenticate{
    // GetUser(params: Pick<ICredential, "access_token">): AxiosResponseWrapper<IUser>
    GetToken(params: ILogin): AxiosResponseWrapper<ICredential>
}