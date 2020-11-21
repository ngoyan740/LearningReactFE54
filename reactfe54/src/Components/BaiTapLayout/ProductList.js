import React, { Component } from 'react'
import Laptop from './Laptop'
import SmartPhone from './SmartPhone'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container-fluid pt-5 pb-5">
                <div>
                    <h3 className="text-center text-white"> BEST SMARTPHONE</h3>
                    <div className="row">
                        <div className="col-3">
                            <SmartPhone />
                        </div>
                        <div className="col-3">
                            <SmartPhone />
                        </div>
                        <div className="col-3">
                            <SmartPhone />
                        </div>
                        <div className="col-3">
                            <SmartPhone />
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
