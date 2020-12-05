import React, { Component } from 'react'
import SanPham from './SanPham'
import dsSanPham from '../../Components/Props/data/productList.json';


export default class DanhSachSanPham extends Component {

    renderSanPham = () => {
        // Chạy vòng lặp lấy từng sản phẩm và xuất ra 1 card SanPham
        return dsSanPham.map((sp, index) => {
            return <div className="col-4" key={index}>
                <SanPham  sanPham={sp}/>
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Danh Sách Sản Phẩm</h1>

                <div className="row">
                    {/* <div className="col-4">
                        <SanPham/>
                    </div>
                    <div className="col-4">
                        <SanPham/>
                    </div>
                    <div className="col-4">
                        <SanPham/>
                    </div> */}
                    {this.renderSanPham()}
                </div>

            </div>
        )
    }
}
