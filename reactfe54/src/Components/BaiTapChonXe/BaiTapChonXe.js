import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: './img/car/products/red-car.jpg', //Giá trị mặc định ban đầu của State

    }

    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        {/* Hình ảnh của xe  */}
                        <img className="w-100" src={this.state.imgSrc}/>
                    </div>
                    <div className="col-6">
                        {/* button chọn màu xe  */}
                        <div className="card text-dark">
                            <div className="card-header bg-dark text-white">Exterior color</div>
                            <div className="card-body">
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <img style={{cursor:'pointer'}} onClick={() => {
                                           this.changeColor('black')
                                        }} src="./img/car/icons/icon-black.jpg" className="w-50" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Black Color</h3>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <img style={{cursor:'pointer'}} onClick={() => {
                                            this.changeColor('red')
                                        }} src="./img/car/icons/icon-red.jpg" className="w-50" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <img style={{cursor:"pointer"}} onClick={() => {
                                            this.changeColor('Silver')
                                        }} src="./img/car/icons/icon-silver.jpg" className="w-50" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-3">
                                    <div className="col-2">
                                        <img style={{cursor:'pointer'}} onClick={() => {
                                            this.changeColor('Steel')
                                        }} src="./img/car/icons/icon-steel.jpg" className="w-50" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}
