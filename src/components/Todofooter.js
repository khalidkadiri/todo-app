import React from 'react';
import Footerbutton from './Footerbutton';

const Todofooter = (props) => {
    return (
        <div>
            <div>
                <Footerbutton onClick={props.onClick} data="all" disabled={props.filter === 'all'}>All</Footerbutton>
                <Footerbutton onClick={props.onClick} data="active" disabled={props.filter === 'active'}>Not Done</Footerbutton>
                <Footerbutton onClick={props.onClick} data="completed" disabled={props.filter === 'completed'}>Done</Footerbutton>
            </div>
        </div>
    );
};
export default Todofooter;