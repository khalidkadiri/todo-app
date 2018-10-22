import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class Todomain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({ text: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.trim().length) {
            return
        }
        this.props.addTodo(this.state.text);
        this.setState({ text: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="addbutton">
                    <input type="text" onChange={this.handleInputChange} value={this.state.text} placeholder="Enter a todo.." />
                    <button>ADD</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo:(text) => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(Todomain);