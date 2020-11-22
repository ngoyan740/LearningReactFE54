import React, { Component } from 'react'

export default class DataBindingClassComponents extends Component {
    sinhVien = {
        ma: '0001',
        hoTen: 'Nguyen Van Teo',
        hinhAnh: 'https://picsum.photos/200',
    }

    renderPic = () => {
        return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt="123"/>
    }

    render() {

        const title = 'front-end54';
        const renderTitle = () => {
            return <p className="text-danger"> {title} </p>
        }
        return (
            <div className="container">
                <h3>React DataBinding Class Component</h3>
                <p>Tiêu đề : {title}</p>
                {renderTitle()}
                <h3>Thông tin sinh viên</h3>
                <ul className="list-unstyled">
                    <li>Mã sinh viên : {this.sinhVien.ma}</li>
                    <li>Tên sinh viên: {this.sinhVien.hoTen}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200" alt="123" /></li>
                    <li>{this.renderPic()}</li>
                </ul>
            </div>
        )
    }
}
