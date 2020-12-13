const stateDefault = {
    datCuoc: false, // True Tài, false xiu
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/6.png', diem: 6 },
        { hinhAnh: './img/5.png', diem: 5 },
        { hinhAnh: './img/4.png', diem: 4 },
    ]

}

export const BaiTapGameReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'DAT_CUOC': {
            state.datCuoc = action.datCuoc;
            return { ...state }
        };
        case 'RANDOM_XUC_XAC': {
            console.log('action', action);
            //Xử lý random hoặc random trước rồi gửi lên state
            //Search random js trong w3school
            const randomMangXucXac = [];
            for (let i = 0; i < 3; i++) {
                const soRandom = Math.floor(Math.random() * 6) + 1;

                //Từ số ngẫu nhiên tạo ra object xúc xắc
                const xucXacNgauNhien = { hinhAnh: `./img/${soRandom}.png`, diem: soRandom };

                // Thêm xúc xắc ngẫu nhiên vào mảng xúc xắc ngẫu nhiên
                randomMangXucXac.push(xucXacNgauNhien);

            }
            // Gán lại state của mảng xúc xắc = randomMangXucXac
            state.mangXucXac = randomMangXucXac;

            // Cập nhật state.soBanThang và cập nhật state.soBanChoi
            const tongDiem = state.mangXucXac.reduce((tongDiem, xucXac, index) => {
                return tongDiem += xucXac.diem;

            },0);

            if ((state.datCuoc && tongDiem > 10) || (!state.datCuoc && tongDiem <= 10)) {
                // trường hợp thắng
                state.soBanThang += 1;
            } 
            
            state.soBanChoi += 1;



            return { ...state };

        }

    }
    return { ...state };
}