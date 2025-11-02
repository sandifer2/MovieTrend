import React from "react";


const UserMsg = ({ msg }) => {

    return(
        <div className="max-w-[75%] w-fit ml-auto bg-gradient-to-br from-[#8B9FFF]/20 to-[#6B7FFF]/30 backdrop-blur-md p-4 rounded-2xl rounded-tr-sm border border-[#9BA8FF]/20 shadow-lg">
            <p className="text-white text-sm break-words leading-relaxed">{msg}</p>
        </div>
    )



}

export default UserMsg;

