import React from 'react';
import Footerbutton from './Footerbutton';

const Todofooter = (props) => {
    return (
        <div>
            <p>{props.items.length} Todos</p>
            <div>
                <Footerbutton>All</Footerbutton>
                <Footerbutton>Not Done</Footerbutton>
                <Footerbutton>Done</Footerbutton>
            </div>
        </div>
    );
};

export default Todofooter;