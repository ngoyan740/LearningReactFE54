// xử lý sự kiện 

import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMess = () => {
        alert('hello me!');
    }

    showTitle = (info) => {
        alert(info);
    }

    render() {
        const title = 'Cybersoft'

        
        return (
            <div>
                <h3>Handle Event</h3>
                <button onClick={this.showMess}>Click me !</button>

                <button onClick={() => {
                    alert(`Hello me v.02 ${title}`);
                }}>Click me v0.2</button>

                {/* Dùng hàm trung gian gọi 1 hàm khác, cứ dùng Arrow function bọc bên ngoài  */}
                <button onClick={() => {this.showTitle('Hello FE54')}}>Show info text</button>

                {/* //Không dùng hàm trung gian  */}
                <button onClick={this.showTitle.bind(this, 'Hello FE54 v.2')}>Show info v.2</button>
            </div>
        )
    }
}
