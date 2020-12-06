import React, { Component } from 'react'
import {connect} from 'react-redux'


class SanPham extends Component { // xóa export default, viết phía dưới để kết nối với store state export

    render() {  
        console.log("Props san pham :", this.props);
        let { sanPham } = this.props;

        return (

            <div className="card rounded">
                <img height="350" className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{(sanPham.giaBan).toLocaleString()}</p>
                </div>
                <div className="card-footer"><button className="btn btn-success" onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm giỏ hàng</button></div>
            </div>


        )
    }
}

const mapDispatchToProps = (dispatch) => {
    // dispatch  là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
    return {
        themGioHang: (spClicked) => {

            // Gửi dữ liệu trên redux :
            // B1 : tạo action
            const action = {
                type: 'THEM_GIO_HANG', // type thuộc tính bắt buộc
                sanPhamClick: {...spClicked, soLuong: 1} // thuộc tinh thứ 2 là giá trị gửi lên redux
                
            }

            //B2: Sử dụng phương thức dispatch để đưa action lên redux (reducer)
            dispatch(action);

            // hàm nhận sản phẩm được click
            console.log("Sản phẩm đc click", spClicked);
        }

    }


}

//Kếtt nối component sản phẩm với store
// Tham số thứ 1 của connect : Là mapStateToProps (nếu ko lấy dữ liệu nào từ store thì về mặ định là null)
//Tham số thứ 2 của connect : là mapDispatchToProps hàm này sẽ tạo ra props là 1 function đưa dữ liệu lên store

export default connect(null, mapDispatchToProps)(SanPham)