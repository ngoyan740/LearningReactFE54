const stateDefault = {
    datCuoc: false, // True Tài, false xiu
    soBanThang: 10,
    soBanChoi: 5,
    mangXucXac: [
        {hinhAnh : './img/6.png', diem: 6},
        {hinhAnh : './img/5.png', diem: 5},
        {hinhAnh : './img/4.png', diem: 4},
    ]

}

export const BaiTapGameReducer = (state = stateDefault, action) => {

    return {...state};
}