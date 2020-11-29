import React, { Component } from 'react'

export default class Product extends Component {
    

    render() {
        let {propsproduct, onViewDetail, onAddToCart} = this.props;



        return (
           
                 <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={propsproduct.hinhAnh} alt height="300" />
                    <div className="card-body">
                        <h4 className="card-title">{propsproduct.tenSP}</h4>
                        <p className="card-text">{propsproduct.giaBan}</p>
                        {/* onViewDetail : truyền dữ liệu cho lớp cha xử lý  */}
                        <button className="btn btn-info" onClick={()=>{onViewDetail(propsproduct)}}>Xem chi tiết</button>
                        <button className="btn btn-danger ml-2" onClick={()=>{onAddToCart(propsproduct)}}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>

           
        )};
    
}

