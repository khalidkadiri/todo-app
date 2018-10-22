import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo,updateTodo,updateTodoText} from '../actions'
import { bindActionCreators } from 'redux';
import ListItems from './ListItems';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);
        this.onUpdate = this.onUpdate.bind(this);

    }
    onChange(e) {
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
        this.props.updateTodoText(id,text);
    }
    render() {
        let filterType = this.props.filter;
        let renderList = this.props.items.map((item, index) => {
            if(filterType === 'all') {
               return <ListItems onChange={this.onChange} onItemDelete={this.onItemDelete} onUpdateClick={this.onUpdateClick} onUpdate={this.onUpdate} index= {index} item = {item}/>
            } else if(filterType === 'active') {
                if(!item.completed) {
                    return <ListItems onChange={this.onChange} onItemDelete={this.onItemDelete} onUpdateClick={this.onUpdateClick} onUpdate={this.onUpdate} index= {index} item = {item}/>
                }
            } else {
                if(item.completed) {
                    return <ListItems onChange={this.onChange} onItemDelete={this.onItemDelete} onUpdateClick={this.onUpdateClick} onUpdate={this.onUpdate} index= {index} item = {item}/>
                }
            }
        });
        return (
            <ul>
                {renderList}
            </ul>
        );
    }
}
const mapStateToProps = (state,ownprops) => {
    return {
        items: state.items,
        filter: state.filter
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleTodo,deleteTodo,updateTodo,updateTodoText}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);