import React from "react";
import "../Buttin/buttin.css"

const Buttin = ({type, variant, className, id, onClick, children}) => {
    return  <button type={type ? type : "button"} variant={variant} className="buttin" id={id} onClick={onClick}>
                <h5 className="m-0 p-2">{children}</h5>
            </button>
};

export default Buttin;