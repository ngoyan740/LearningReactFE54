import React, { Component } from 'react'
import {connect} from 'react-redux'


class XucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xx, index) => {
            return <img key={index} src={xx.hinhAnh} width="50" height="50" className="mr-2"/>
        })
    }

    render() {
        // console.log("Props Xúc Xắc :", this.props);
        

        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-success p-5 "><span className="display-4">Tài</span></button>
                    </div>
                    <div className="col-6 text-center">
                        {this.renderXucXac()}
                    </div>
                    <div className="col-3">
                    <button className="btn btn-success p-5 "><span className="display-4">Xỉu</span></button>
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