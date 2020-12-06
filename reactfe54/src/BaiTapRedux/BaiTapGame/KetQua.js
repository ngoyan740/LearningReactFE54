import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQua extends Component {



    render() {
        // let {datCuoc,soBanThang,soBanChoi} = this.props;

        return (
            <div className="container text-center mt-2">
                <h1 className="display-4">BẠN CHỌN : <span className="display-4 text-success">{this.props.datCuoc ? 'TÀI' : 'XỈU'}</span></h1>
                <h1 className="display-4">Số bàn thắng : <span className="display-4 text-success">{this.props.soBanThang}</span></h1>
                <h1 className="display-4">Số bàn chơi : <span className="display-4 text-success">{this.props.soBanChoi}</span></h1>

            
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        datCuoc: state.stateGameXucXac.datCuoc,
        soBanThang: state.stateGameXucXac.soBanThang,
        soBanChoi: state.stateGameXucXac.soBanChoi
    }
}

export default connect(mapStatetoProps)(KetQua);