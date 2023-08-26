import {combineReducers} from 'redux';
import authReducer from '../../features/auth/redux/Slice'
import userReducer from '../../features/user/redux/Slice'
import dichVuReducer from '../../features/dichvu/redux/slice'
import loaiDichVuReducer from '../../features/loaidichvu/redux/slice'
import kenhTinReducer from '../../features/kenhtin/redux/Slice'
import tinBaiReducer from '../../features/tinbai/redux/slice'
import modalReducer from './modal/Slice'

export const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    modal: modalReducer,
    dichvu: dichVuReducer,
    loaidichvu: loaiDichVuReducer,
    kenhtin: kenhTinReducer,
    tinbai: tinBaiReducer,
})
