import React from "react";

const AIMsg = ({ msg }) => {
    return(

        <div className="max-w-[75%] w-fit bg-linear-to-br from-[#D6C7FF]/15 to-[#AB8BFF]/25 backdrop-blur-md p-4 rounded-2xl rounded-tl-sm border border-light-100/15 shadow-lg">
            <p className="text-white text-sm wrap-break-word leading-relaxed">{msg}</p>
        </div>
    )
}

export default AIMsg;