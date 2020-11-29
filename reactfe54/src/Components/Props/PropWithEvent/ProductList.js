// file render ra sản phẩm 
import React, { Component } from 'react'
import productList from '../data/productList.json'
import ModalPopUp from './ModalPopUp'
import Product from './Product'

export default class ProductList extends Component {

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


    render() {

        //Bóc tách phần từ

        let {productDetail, cartObject} = this.state;
        

        return (
            <div>
                {/* Modal Popup khi nhấn vào giỏ hàng  */}
                <ModalPopUp cartProps={cartObject}/>

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
