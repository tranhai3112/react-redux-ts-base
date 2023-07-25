import axios from "axios";
import { Service } from "../../../services/base";
import { AxiosResponseWrapper } from "../../../lib/axios/typeHelper";
import {ICredential, ILogin, IUser } from "../../../models";
import { IAuthenticate } from "./interface";
class AuthService extends Service.BaseApi implements IAuthenticate{
    constructor() {
        super("auth/login")
    }
    GetToken(data: ILogin): AxiosResponseWrapper<ICredential> {
        return this._axios.post(this._urlSuffix, data)
    }
}

export const authService = new AuthService();