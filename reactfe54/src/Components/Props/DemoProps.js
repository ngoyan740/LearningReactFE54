import React, { Component } from 'react'
import ProductList from '../BaiTapLayout/ProductList'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                   <div className="col-3">
                        <ProductRFC name="Iphone" price="1000USD"/> 
                        {/* giá trị name khác nhau  */}
                   </div>
                   <div className="col-3">
                        <ProductRFC name="Nokia" price="500USD"/> 
                   </div>
                   <div className="col-3">
                        <ProductRFC name="Samsung" price="1200USD"/> 
                   </div>
                   <div className="col-3">
                        <ProductRFC name="Sony" price="1500USD"/> 
                   </div>
                </div>
            </div>
        )
    }
}
