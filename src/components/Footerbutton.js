import React from 'react';

const Footerbutton = ({children, onClick , disabled, data}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            data-type = {data}
        >{children}</button>
    );
};

export default Footerbutton;