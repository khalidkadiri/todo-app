import React, { Component } from 'react';
import Listitems from './Listitems';

class Todolist extends Component {
    render() {
        let filter = this.props.filter;
        return (
            <ul>
                {this.props.items.map((item, index) => {
                    if (filter === 'all') {
                        return (<Listitems key={item.id} item={item} index={index} onChange={this.props.onChange} onItemDelete={this.props.onItemDelete} onUpdateClick={this.props.onUpdateClick} onUpdate={this.props.onUpdate}/>)
                    } else if (filter === 'active') {
                        if (!item.completed) {
                            return (<Listitems key={item.id} item={item} index={index} onChange={this.props.onChange} onItemDelete={this.props.onItemDelete} onUpdateClick={this.props.onUpdateClick} onUpdate={this.props.onUpdate}/>)
                        }
                    } else {
                        if (item.completed) {
                            return (<Listitems key={item.id} item={item} index={index} onChange={this.props.onChange} onItemDelete={this.props.onItemDelete} onUpdateClick={this.props.onUpdateClick} onUpdate={this.props.onUpdate}/>)
                        }
                    }
                })}
            </ul>
        );
    }
}

export default Todolist;