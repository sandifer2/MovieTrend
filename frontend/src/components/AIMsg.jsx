import React from "react";

const AIMsg = ({ msg }) => {
    return(

        <div className="max-w-[75%] w-fit bg-gradient-to-br from-[#D6C7FF]/15 to-[#AB8BFF]/25 backdrop-blur-md p-4 rounded-2xl rounded-tl-sm border border-[#cecefb]/15 shadow-lg">
            <p className="text-white text-sm break-words leading-relaxed">{msg}</p>
        </div>
    )
}

export default AIMsg;