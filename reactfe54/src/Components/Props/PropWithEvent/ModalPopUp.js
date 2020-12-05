import React, { Component } from 'react'

export default class ModalPopUp extends Component {

    tinhTongTien = () => {
        let tongTien = this.props.cartProps.reduce((tt, spGH, index) => {return tt += spGH.soLuong * spGH.giaBan;}, 0)

        return tongTien.toLocaleString();

    }



    render() {
        return (
            <div>
                <div>
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <tr>
                                            <td>Mã sản phẩm</td>
                                            <td>Hình ảnh</td>
                                            <td>Tên sản phẩm</td>
                                            <td>Số lượng</td>
                                            <td>Đơn giá</td>
                                            <td>Thành tiền</td>
                                        </tr>
                                        {this.props.cartProps.map((obj, index) => {
                                            return <tr key={index}>
                                                <td>{obj.maSP}</td>
                                                <td>
                                                    <img src={obj.hinhAnh} width="30" height="30"/>
                                                    </td>
                                                <td>{obj.tenSP}</td>
                                                <td><button className="btn btn-info mr-1" onClick={() => {
                                                    // xử lý giảm
                                                    this.props.tangGiamSoLuong(obj.maSP,-1);
                                                }}>-</button>
                                                    {obj.soLuong}
                                                    <button className="btn btn-info ml-1" onClick={() => {
                                                        // xử lý tăng
                                                        this.props.tangGiamSoLuong(obj.maSP, 1);
                                                    }}>+</button>
                                                    </td>
                                                <td>{obj.giaBan.toLocaleString()}</td>
                                                <td>{(obj.giaBan * obj.soLuong).toLocaleString()}</td>
                                                {/* Nhận sự kiện deleteItem thông qua props tên deleteItem */}
                                                <td><button className="btn btn-danger" onClick={() => {this.props.deleteItem(obj.maSP)}}>Xóa</button></td>
                                            </tr>

                                        })}
                                        <tfoot>
                                            <tr>
                                                <td colSpan="4"></td>
                                                <td>Tổng tiền</td>
                                                <td>{this.tinhTongTien()}</td>
                                            </tr>
                                            
                                        </tfoot>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
