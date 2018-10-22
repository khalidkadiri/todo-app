import React from 'react';

const Footerbutton = ({ children, onClick, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
        >{children}</button>
    );
};

export default Footerbutton;