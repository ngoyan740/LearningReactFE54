const stateGioHang = {
    gioHang: [
        // { maSP: 1, tenSP: "Iphone X", hinhAnh: './img/sp_iphoneX.png', giaBan: 1000, soLuong: 5 },
       
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    // console.log('action :', action); //Gửi lên tất cả các action lên store

    switch(action.type) { // dựa vào từng type của action được gửi đi từ component, dùng switch case để lọc ra action

        case 'THEM_GIO_HANG' : {
            //Xử lý cập nhật state.gioHang

            let gioHangCapNhat = [...state.gioHang];
            // tìm trong giỏ hàng có sản phẩm nào có mã bằng sản phẩm clicked hay ko

            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.sanPhamClick.maSP)
            if (spGH) {
                // Tìm thấy sp có mã sản phẩm === sp clicked
                spGH.soLuong += 1
            } else {
                gioHangCapNhat.push(action.sanPhamClick)
            }

            //Cập nhật lại state
            state.gioHang = gioHangCapNhat
            // console.log(state); // Immutable tính bất biến của redux: Giá trị state mới trả về phải khác state cũ
            return {...state};// Sao chép những giá trị bên trong state
        }

        case 'XOA_GIO_HANG' : {
            let gioHangCapNhat = [...state.gioHang];
            // let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSPdcXoa);

            // if (index !== -1) {
            //     gioHangCapNhat.splice(index, 1);
            // }

            // Tạo ra 1 nhóm mới ko có thành viên đó
           
            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== action.maSPdcXoa);

            // Cập nhật lại state giỏ hàng
            state.gioHang = gioHangCapNhat;

            

            return {...state}

        }

        case 'TANG_GIAM_SO_LUONG' : {
            const gioHangCapNhat = [...state.gioHang];

            //Tìm sp được clieck trong giỏ hàng
            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.maSPClicked)
            if(spGH) {
                if(action.soLuong === -1 && spGH.soLuong <= 1) {
                  return {...state};
                }
                spGH.soLuong += action.soLuong;
            }
            // Cập nhật lại state giỏ hàng
            if(spGH.soLuong >=0) {
                state.gioHang = gioHangCapNhat;
            }

            return {...state};

        }
    }

    return state;
}