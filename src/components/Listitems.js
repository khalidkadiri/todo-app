import React from 'react';

const Listitems = ({item, index, onChange, onItemDelete, onUpdateClick, onUpdate}) => {
    return (
        <li>
            <div className="list-title">
                <input type="checkbox" id={index} onChange={onChange} checked={item.completed}/>
                {!item.update ? <label htmlFor={index} style={item.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{item.text}</label> : <input type="text" value={item.text} id={index} onChange={onUpdate} />}
            </div>
            <div>
                <span id={index} onClick={onItemDelete}>&#10006;</span>
                <span id={index} onClick={onUpdateClick}>{!item.update ? "Update" : "Save"}</span>
            </div>
        </li>
    );
};

export default Listitems;