import React from 'react';
import Todofooter from './TodoFooter';
import { filterType } from '../actions';

const Footerlink = () => {
    return (
        <div>
            <Todofooter filter={filterType.all}>All</Todofooter>
            <Todofooter filter={filterType.active}>Not Done</Todofooter>
            <Todofooter filter={filterType.completed}>Done</Todofooter>
        </div>
    );
};

export default Footerlink;