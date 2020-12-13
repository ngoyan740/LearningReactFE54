import React, { Component } from 'react'

export default class FormSinhVien extends Component {

    //tạo state chứa giá trị thay đổi khi người dùng nhập vào
    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        },
        error: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        }

    }

    handleChangeInput = (event) => {
        let { value, name } = event.target;
        let typeInput = event.target.getAttribute('typeInput') // attribute là thuộc tinh người dùng tự thêm trên thẻ
        console.log(typeInput);
        // this.setState({
        //     [name]: value
        // },
        //     // vì setState nó bất đồng bộ, cho nên phải gọi 1 function ngay tham số thứ 2 để log ra cùng thời điểm khi các setState phía trên thành công
        //     () => {
        //         console.log("stateSinhVien", this.state)
        //     }

        // )
        const newValues = { ...this.state.values }; // Lấy lại giá trị state cũ, các giá trị trước mà người dùng đã nhập
        newValues[name] = value; //Truy xuất thuộc tính người dùng đang nhập (thuộc tính "name" trong input)
        // Gán giá trị mới cho thuộc tính đang nhập

        // Xử lý lỗi
        const newError = {...this.state.error};
        newError[name] = value.trim() === '' ? name + ' không được bỏ trống !' : '';
        if (typeInput === 'email') {
           
                const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!regexEmail.test(value)) {
                    newError[name] = name + ' không đúng định dạng';
                }
            
        }

        if (typeInput === 'phone') {
            const regexPhone = /^[0-9]+$/;
            if(!regexPhone.test(value)) {
                newError[name] = name + ' không đúng định dạng';
            }
        }


        // setState lại
        this.setState({
            values: newValues,
            error: newError
        },
            () => {
                console.log("stateValue :", this.state)
            }
        )
    }

    handleSubmit = (event) => {
        // Chặn sự kiển sumit của trang : khi người dùng nhập vào 1 input xong nhấn enter thì sẽ reload trang như vậy ko đúng
        // dùng : event.preventDefault(); 
        event.preventDefault();

        // Kiểm tra dữ liệu người dùng hợp lệ mới cho sumit

        let valid = true;
        // dùng for in để duyệt tất cả thuộc tính của object

        for (let key in this.state.values) {
            if (this.state.values[key].trim() === '') {
                // key là : maSinhVien, tenSinhVien, email, sdt ..
                // quay cờ
                valid = false;
               

            }
        }

        for (let key in this.state.error) {
            if (this.state.error[key].trim() !== '') {
                valid = false;
                
            }
        }

        if (!valid) {
            alert('Dữ liệu không hợp lệ');
            return;
        } // Xử lý sumit lên api hoặc redx (dispatch)


    }


    render() {
        return (

            <form className="card text-left" onSubmit={this.handleSubmit}>
                <div className="card-header bg-dark text-white"><h2 className="text-center">THÔNG TIN SINH VIÊN</h2></div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <h3>Mã sinh viên</h3>
                                <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.maSinhVien}</p>
                            </div>
                            <div className="form-group">
                                <h3>Tên sinh viên</h3>
                                <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.tenSinhVien}</p>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h3>Email</h3>
                                <input typeInput="email" className="form-control" name="email" onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.email}</p>
                            </div>
                            <div className="form-group">
                                <h3>Số điện thoại</h3>
                                <input typeInput="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                <p className="text text-danger">{this.state.error.soDienThoai}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-success my-4" type="submit">Thêm sinh viên</button>
                </div>
            </form>

        )
    }
}
