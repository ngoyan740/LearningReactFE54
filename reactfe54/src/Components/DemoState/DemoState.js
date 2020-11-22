import React, { Component } from 'react'

export default class DemoState extends Component {

    //State : là thuộc tính có sẵn của component => dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi người dùng thao tác (Click, change, blur...)

    state = {
        isLogged: false,

    };

    // isLogged = false,
    userName = 'Mị';

    renderContent = () => {
        if (this.state.isLogged) {
            return <p>Hello ! {this.userName}</p>
        } return <button onClick={() => {
            this.handleLogin();
        }} className="btn btn-success">Đăng Nhập</button>
    }

    handleLogin = () => {
        //Không được thay đổi state trực tiếp mà phải thông qua phương thức this.setState/
        //setStade(): là phương thức có sẵn của lớp đối tượng component => dùng để thay đổi giá trị trong this.state đồng thời gọi lại hàm render
        // this.isLogged = true;
        // console.log('isLogged :', this.isLogged);

        // const newState = {
        //     isLogged: true,
        // }
        // this.setState(newState);
        
        this.setState({isLogged:true});
    }

    render() {
        return (
            <div className="container">
                <h3>If else statement</h3>

                {/* {this.isLogged === true ? <p>Hello {this.userName}</p> : <button>Đăng nhập</button>} */}
                {/* {this.isLogged ? <p>Hello {this.userName} !</p> : <button>Đăng Nhập</button>} */}

                {this.renderContent()}
            </div>
        )
    }
}
