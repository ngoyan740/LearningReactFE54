import React from 'react'

export default function DataBinding() {

    //Biding biến đối tượng
    const title = 'Cybersoft';
    const imgsrc = 'https://picsum.photos/200/200';

    const sinhVien = {
        maSv: '001',
        tenSinhVien: 'Nguyen Van A',
        hinhAnh: 'https://picsum.photos/200',
    }

    //Binding hàm
    const renderImg = () => {

        //Giá trị phải trả về 1 chuỗi, 1 số, jsx (1 đoạn code html đc bao phủ bởi 1 thẻ)
        return <div className="container">
            <h3> Hình ảnh</h3>
            <img src={imgsrc} width="200" height="400"/>
        </div>
    }

    return (
        <div>
            <div className="container">
                <h3>DataBinding</h3>
                <p id="title" className="display-4">{title}</p>

                <img src={sinhVien.imgsrc} width="200" height="200" alt="123.jpg" />

                <input className="form-control w-25" value={title} />

                <hr />
                <h3>Thoong tin sinh vien</h3>
                <div className="card text-white bg-primary"  style={{width: 200, height: 300}} >
                    <img className="card-img-top" src={sinhVien.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
                        <p className="card-text">Mã sinh viên : {sinhVien.maSv}</p>
                    </div>
                </div>

            </div>
            {renderImg()}
        </div>
    )
}
