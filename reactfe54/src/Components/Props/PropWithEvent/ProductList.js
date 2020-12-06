// file render ra sản phẩm 
import React, { Component } from 'react'
import productList from '../../../BaiTapRedux/BaiTapGioHangRedux/data/productList.json'
import ModalPopUp from './ModalPopUp'
import Product from './Product'

export default class ProductList extends Component {

    // Yếu tố Đặt state phải thỏa : cùng trên 1 giao diện chứa giỏ hàng & chứa nút xử lý (event: hover)
   
    state = {
        //state là 1 object sẽ được thay đổi khi setState
        productDetail: productList[0],
        //Lưu object chứa sản phẩm đầu tiên

        //Tổ chức mảng để thêm sản phẩm trong giỏ hàng
        cartObject : [
            {
                maSP: 1,
                tenSP: "VinSmart Live",
                giaBan: 5700000,
                hinhAnh: "./img/img-card/vsphone.jpg",
                soLuong: 1,
                // thanhTien : những gì liên quan đến tính toán thì ko lưu
            },
        ],

    }

    renderProductListHandler = () => {
        return productList.map((product, index) => {
            // truyền cho lớp con 1 function từ lớp cha onViewDetail là một function tham chiếu,
            return <Product onViewDetail={this.viewDetailHandler}  key={index} propsproduct={product} onAddToCart={this.addToCart}/>

        })
    }

    viewDetailHandler = (product) => {
        console.log('Product:', product);
        // this.setState({
        //     productDetail: product
        // })
    }


    //Function thêm giỏ hàng (tăng số)
    addToCart = (product) => {
        // console.log('Thêm giỏ hàng : ', product);
        const productUpdate = {...product, soLuong: 1};

        //FindIndex duyệt qua từng thành phần trong mảng
        const index = this.state.cartObject.findIndex(product => product.maSP === productUpdate.maSP) 

        if(index !== -1) {
            const newCart = [...this.state.cartObject];
            newCart[index].soLuong += 1;

            this.setState({
                cartObject: newCart
            })
        } else {
            this.setState({
                //ES 6 Copy mảng vừa có và copy thêm mảng khác vào
                cartObject: [...this.state.cartObject, productUpdate]
            })
        }


        
    }


    // Định nghĩa sự kiện xóa giỏ hàng tại nơi chưa state giỏ hàng
    deleteItem = (maSPClick) => {
        console.log(maSPClick);
        // Tạo 1 giỏ hàng mới giống giá trị giỏ hàng cũ, sau đó xử lý xóa trên giỡ hàng mới
        // Sau đó gán lại giỏ hàng cũ bằng giỏ hàng mới
        let gioHangCapNhat = [...this.state.cartObject];

        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSPClick) ;
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }
        // Gán lại giỏ hàng cũ bằng giở hàng mới
        this.setState({
            cartObject:gioHangCapNhat
        })
    }


    // Tăng giảm số lượng sản phẩm tại nơi chứa state
    //Định nghĩahàm thay đổi số lượng tại nơi chứa state số lwụog (số lượng nằm trong cart)
    tangGiamSoLuong = (maSPClicked, soLuong) => {
        // console.log('Mã sản phẩn :', maSPClicked, 'Số lượng :' ,soLuong);
        
        let gioHangCapNhat = [...this.state.cartObject];

        //Tìm trong giỏ hàng có sản phầm có mã == với ản phẩm đc click hay ko sau đó + hoặc - số lượng

        let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSPClicked);

        //Tìm thấy sp trong giỏ hàng
        if(spGioHang) {
            spGioHang.soLuong += soLuong;
        }
        this.setState({
            cartObject: gioHangCapNhat
        })
    
    
    }


    render() {

        //Bóc tách phần từ

        let {productDetail, cartObject} = this.state;
        

        return (
            <div>
                {/* Modal Popup khi nhấn vào giỏ hàng  */}
                <ModalPopUp cartProps={cartObject} deleteItem={this.deleteItem} tangGiamSoLuong={this.tangGiamSoLuong}/>

                <div className="row">
                    {this.renderProductListHandler()}
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <h5>{productDetail.tenSP}</h5>
                        <img src={productDetail.hinhAnh} width="300" />
                    </div>
                    <div className="col-6">
                        <h3 className="text-center">Thông số kỹ thuật</h3>
                        <table className="table">
                            <tr>
                                <th>Màn hình</th>
                                <td>{productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{productDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <td>{productDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <td>{productDetail.ram}</td>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <td>{productDetail.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>



        )
    }
}
