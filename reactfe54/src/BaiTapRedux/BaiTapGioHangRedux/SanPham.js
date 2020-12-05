import React, { Component } from 'react'

export default class SanPham extends Component {

    render() {

        let { sanPham } = this.props;

        return (

            <div className="card rounded">
                <img height="350" className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{(sanPham.giaBan).toLocaleString()}</p>
                </div>
                <div className="card-footer"><button className="btn btn-success">Thêm giỏ hàng</button></div>
            </div>


        )
    }
}
