import React from 'react';

const ListItems = ({ onItemDelete, onChange, index, item, onUpdate, onUpdateClick }) => {
    console.log(onItemDelete);
    return (
        <li key={index}>
            <div className="list-title">
                <input type="checkbox" id={index} onChange={(e) => onChange(e)} checked={item.completed} />
                {!item.update ? <label htmlFor={index} style={item.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{item.text}</label> : <input type="text" value={item.text} id={index} onChange={(e) => onUpdate(e)} />}
            </div>
            <div>
                <span id={index} onClick={(e) => onItemDelete(e)}>&#10006;</span>
                <span id={index} onClick={(e) => onUpdateClick(e)}>{!item.update ? "Update" : "Save"}</span>
            </div>
        </li>
    );
};

export default ListItems;