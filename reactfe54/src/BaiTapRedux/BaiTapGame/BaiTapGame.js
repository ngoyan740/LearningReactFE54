import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import styleGame from './BaiTapGame.module.css'
import {connect} from 'react-redux'

class BaiTapGame extends Component {
    // Bỏ export default
    render() {
        

        return (
            // <div className={`${styleGame.bgGame}`}>
            <div className={`text-center + ${styleGame['bg-Game']}`}>
        {/* // <div style={{background:'url("./img/bgGame.png")'}}> */}

                 {/* Bước 1 : chia Component
                Bước 2: làm giao diện
                 */}
                 <h1 className="display-4 text-center my-5">BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac />
                <KetQua />
                <button className="btn btn-success p-3" onClick={()=> {
                    this.props.dispatch({
                        type: 'RANDOM_XUC_XAC',
                        
                    })

                }}>Play game</button>
            </div>
        )
    }
};

export default connect() (BaiTapGame);