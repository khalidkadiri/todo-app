import React, { Component } from 'react';

class Todolist extends Component {
    render() {
        console.log(this.props.items);
        return (
            <ul>
                {this.props.items.map((item,index) => (
                    <li key = {item.id}>
                        <div className="list-title">
                            <input type="checkbox" id={index} onChange= {this.props.onChange}/>
                            {!item.update?<label htmlFor={index} style={item.completed?{textDecoration:'line-through'}:{textDecoration:'none'}}>{item.text}</label>:<input type="text" value={item.text} id={index} onChange={this.props.onUpdate}/>}
                        </div>
                        <div>
                            <span id={index} onClick = {this.props.onItemDelete}>&#10006;</span>
                            <span id={index} onClick={this.props.onUpdateClick}>{!item.update?"Update":"Save"}</span>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Todolist;