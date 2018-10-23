import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, updateTodo, updateTodoText } from '../actions'
import { bindActionCreators } from 'redux';
import { getVisibleItems } from '../reducers/'

class Todolist extends Component {
    onChange(e) {
        console.log("called");
        let id = parseInt(e.target.id);
        this.props.toggleTodo(id);
    }
    onItemDelete(e) {
        let id = parseInt(e.target.id);
        this.props.deleteTodo(id);
    }
    onUpdateClick(e) {
        let id = parseInt(e.target.id);
        this.props.updateTodo(id);
    }
    onUpdate(e) {
        let id = parseInt(e.target.id);
        let text = e.target.value;
        this.props.updateTodoText(id, text);
    }
    render() {
        console.log("rendered",this.props.items);
        let renderList = this.props.items.map((item,index) => (
            <li key={index}>
                <div className="list-title">
                    <input type="checkbox" id={item.id} onChange={(e) => this.onChange(e)} checked={item.completed} />
                    {!item.update ? <label htmlFor={item.id} style={item.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{item.text}</label> : <input type="text" value={item.text} id={item.id} onChange={(e) => this.onUpdate(e)} />}
                </div>
                <div>
                    <span id={item.id} onClick={(e) => this.onItemDelete(e)}>&#10006;</span>
                    <span id={item.id} onClick={(e) => this.onUpdateClick(e)}>{!item.update ? "Update" : "Save"}</span>
                </div>
            </li>
        ));
        return (
            <ul>
                {renderList}
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state, state.filter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleTodo, deleteTodo, updateTodo, updateTodoText }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);