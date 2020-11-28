import React, { Component } from 'react'


export default class ProductRCC extends Component {
    render() {
        // let {tenSP, img, price} = this.props;

        // this.props là thuộc tính có sẵn trong React Comonentn dùng để nhận giá trị từ component cha truyền vào 
        // this.props thuộc tính ko được gán lại giá trị mới
        // this.props.sanPham = {..} KHÔNG ĐƯỢC GÁN NHƯ VẬY
        // this.props chỉ biding dữ liệu thôi
        
        let {sanPham} = this.props;
        

        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.tenSP}/>
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                    </div>
                </div>

            </div>
        )
    }
}
