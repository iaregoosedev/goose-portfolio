import React from "react";
import "../Buttin/buttin.css"

const Buttin = ({type, variant, className, id, onClick, children}) => {
    return  <button type={type ? type : "button"} variant={variant} className="buttin" id={id} onClick={onClick}>
                <p className="m-0 p-2">{children}</p>
            </button>
};

export default Buttin;