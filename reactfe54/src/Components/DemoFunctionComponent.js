// react function component: rfc
import React from 'react'

// React function component (Thẻ <DemoFunctionComponent />)
export default function DemoFunctionComponent() {
    return ( // nội dung chứa trong lệnh return, lưu ý : Nội dung phải được bao bọc bởi 1 thẻ duy nhất

        <div className="container">
            <div className="display-4 p-5 bg-dark text-white">
                Component
            </div>
            <div className="p-2 pl-5">
                Nội dung component
            </div>


        </div>
    )
}
