import React, { Component } from 'react'
import { connect } from 'react-redux'; // Import thư viện connect của redux và xóa export refault

export class GioHang extends Component {


    render() {
        console.log("props gio hang :", this.props);
        return (
            <div>
                <h1 className="text-center">Giỏ Hàng</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* <td>1</td>
                            <td>Iphone</td>
                            <td><img src="./img/sp_iphoneX.png" width="50" height="50" /></td>
                            <td>1</td>
                            <td>1,000</td>
                            <td>1,000</td>
                            <td><button className="btn btn-danger">Xóa</button></td> */}
                        {this.props.gioHang.map((sp, index) => {
                            return <tr key={index}>
                                <td>{sp.maSP}</td>
                                <td>{sp.tenSP}</td>
                                <td><img src={sp.hinhAnh} width="30" height="30" /></td>
                                <td>{sp.soLuong}</td>
                                <td>{sp.giaBan}</td>
                                <td>{sp.soLuong * sp.giaBan}</td>
                                <td><button className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

// Định nghĩa hàm lấy state từ redux về biến thành props của reactComponent

const mapStateToProps = (state) => { // state : đại diện cho rootReducer
    return {
        //return 1 props mới
        gioHang: state.stateGioHang.gioHang

    }

}

//Kết nối react componnent vối redux store tạo ra 1 componennt mới exprt ra ngoài
export default connect(mapStateToProps)(GioHang);
