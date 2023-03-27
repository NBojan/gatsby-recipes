import React from "react";

const FormRow = ({type, name}) => {
    return (  
        <div className="form-row">
            <label htmlFor={name}>your {name}</label>
            <input type={type} id={name} name={name} required />
        </div>
    );
}
 
export default FormRow;