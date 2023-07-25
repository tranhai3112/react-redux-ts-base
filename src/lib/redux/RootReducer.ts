import {combineReducers} from 'redux';
import productReducer from '../../features/product/redux/Slice'
import authReducer from '../../features/auth/redux/Slice'
import userReducer from '../../features/user/redux/Slice'
import modalReducer from './modal/Slice'

export const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    auth: authReducer,
    modal: modalReducer,
})
