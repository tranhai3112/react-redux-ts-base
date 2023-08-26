import { IBaseExt} from "../../../models/basemodel";
export interface IUser extends IBaseExt{
    name: string,
    age: number
}

export interface ICredential {
    access_token: string,
    refresh_token: string
}

export interface ILogin {
    username: string,
    password: string,
}

export interface IForgotPassword extends ILogin{
    confirmPassword: string,
}