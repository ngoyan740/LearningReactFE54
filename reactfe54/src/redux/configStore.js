// File quản lý tất cả state của ứng dụng (Thay vì đặt tại component ta đặt state tại store)
import {combineReducers, createStore} from 'redux';
import { BaiTapGameReducer } from './BaiTapGameReducer';
import {GioHangReducer} from './GioHangReducer';


const rootReducer = combineReducers({
    // Các state sau này khai báo tại đây
    stateGioHang: GioHangReducer,
    // Sẽ thay đổi khi người dùng thao tác


    //Bài tập game
    stateGameXucXac: BaiTapGameReducer

})

// Tạo ra store chứa rootReduce (Xem như state tổng của ứng dụng)

export const store = createStore(rootReducer);
