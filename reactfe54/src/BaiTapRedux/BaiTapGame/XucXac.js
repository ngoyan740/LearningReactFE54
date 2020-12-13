import React, { Component } from 'react'
import {connect} from 'react-redux'


class XucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xx, index) => {
            return <img key={index} src={xx.hinhAnh} width="50" height="50" className="mr-2"/>
        })
    }

    hienThiTongDiem = () => {
        const tongDiem = this.props.mangXucXac.reduce((tongDiem, xucXac, index) => {
         return tongDiem += xucXac.diem;
        }, 0);
        return tongDiem > 10 ? `Tổng điểm : ${tongDiem} - Tài` : `Tổng điểm : ${tongDiem} - Xỉu`
    }

    render() {
        // console.log("Props Xúc Xắc :", this.props);
        

        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col-3">
                        <button  onClick={() => {
                            // Props này được sinh ra khi ta dùng hàm connect kết nối với component
                            this.props.dispatch(
                                {
                                    type: 'DAT_CUOC',
                                    datCuoc: true
                                }
                            );
                        }} className="btn btn-success p-5 "><span className="display-4">Tài</span></button>
                    </div>
                    <div className="col-6 text-center">
                        {this.renderXucXac()}
                        <div className="mt-5 text-warning"><h2   >
                        {this.hienThiTongDiem()}
                        </h2></div>
                    </div>
                    
                    <div className="col-3">
                    <button onClick={() => {
                        this.props.dispatch({
                            type: 'DAT_CUOC',
                            datCuoc: false
                        })
                    }} className="btn btn-danger p-5 "><span className="display-4" >Xỉu</span></button>
                    </div>

                </div>

            </div>
        )
    }
}

//Tạo hàm mapStateToProps lấy giá trị từ store về
const mapStateToProps = (state) => {
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac
    }
}

export default connect(mapStateToProps) (XucXac);