import React, { Component } from 'react'
import ProductList from './ProductList'
import ModalPopUp from './ModalPopUp'

export default class PropsWithEvent extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-right">
                    {/* <ModalPopUp/> */}
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelId">GIỎ HÀNG (0)</button>
                </div>
                <h3 className="text-center my-4">Danh sách sản phẩm</h3>
                <ProductList/>
            </div>
        )
    }
}
