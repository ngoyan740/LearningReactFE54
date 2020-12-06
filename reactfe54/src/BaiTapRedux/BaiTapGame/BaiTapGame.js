import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import styleGame from './BaiTapGame.module.css'

export default class BaiTapGame extends Component {
    render() {
        

        return (
            // <div className={`${styleGame.bgGame}`}>
            <div className={`${styleGame['bg-Game']}`}>
        {/* // <div style={{background:'url("./img/bgGame.png")'}}> */}

                 {/* Bước 1 : chia Component
                Bước 2: làm giao diện
                 */}
                 <h1 className="display-4 text-center my-5">BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac />
                <KetQua />
            </div>
        )
    }
}
