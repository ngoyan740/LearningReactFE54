const stateGioHang = {
    gioHang: [
        { maSP: 1, tenSP: "Iphone X", hinhAnh: './img/sp_iphoneX.png', giaBan: 1000, soLuong: 5 },
        { maSP: 2, tenSP: "Iphone XS", hinhAnh: './img/sp_iphoneX.png', giaBan: 1000, soLuong: 5 },
        { maSP: 3, tenSP: "Iphone Pro Max", hinhAnh: './img/sp_iphoneX.png', giaBan: 1000, soLuong: 5 }
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    return state;
}