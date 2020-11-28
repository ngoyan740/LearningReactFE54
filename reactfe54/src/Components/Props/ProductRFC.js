//React Function Component : type rfc

import React from 'react'

export default function ProductRFC(props) {

// React function component nhận props là tham số đầu vào của hàm component


    //Bóc tách phần tử
    // let name = props.name;
    // let price = props.price; //ES5

    //ES6
    let {name, price} = props;

    return (
        <div>
            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    {/* <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Price: {props.price}</p>
    <p className="card-text">Cách 2 : {props['price']}</p> */}
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Cách ES6 : {price}</p>
                </div>
            </div>
        </div>

    )
}
