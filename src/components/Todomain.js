import React, { Component } from 'react';
import Todolist from './Todolist';
import Todofooter from './Todofooter';

class Todomain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            items: [],
            filter:"all"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
        this.onItemUpdate = this.onItemUpdate.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);
        this.onFooterClick = this.onFooterClick.bind(this);
    }
    handleInputChange(e) {
        let value = e.target.value;
        this.setState({ text: value })
    }
    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.trim().length) {
            return
        }
        const strArray = this.state.text.split(",");
        const newItem = this.createNewItem(strArray);
        this.setState(prevState => ({
            items: [...prevState.items,...newItem],
            text: ''
        }));
    }
    createNewItem(arr) {
        return arr.map((text,index)=>{
            return {
                text: text,
                id: Date.now()+index,
                completed: false,
                update: false
            }
        })
    }
    handleChange(e) {
        let completed = e.target.checked;
        let id = parseInt(e.target.id);
        this.setState(prevState => ({
            items: prevState.items.map((item,index)=>index===id?{...item,completed:completed}:item)
        }))
    }
    onItemDelete(e) {
        let id = parseInt(e.target.id);
        this.setState(prevState => ({
            items: prevState.items.filter((item,index)=> index !== id)
        }))
    }
    onItemUpdate(e) {
        let id = parseInt(e.target.id);
        let text = e.target.value;
        this.setState(prevState => ({
            items: prevState.items.map((item,index)=>index===id?{...item,text:text}:item)
        }))
    }
    onUpdateClick(e) {
        let id = parseInt(e.target.id);
        this.setState(prevState => ({
            items: prevState.items.map((item,index)=>index===id?{...item,update:!item.update}:item)
        }))
    }
    onFooterClick(e) {
        let type = e.target.dataset.type;
        this.setState({filter:type})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="addbutton">
                    <input type="text" onChange={this.handleInputChange} value={this.state.text} placeholder="Enter a todo.."/>
                    <button>ADD</button>
                </form>
                <Todolist items={this.state.items} filter = {this.state.filter} onChange = {this.handleChange} onItemDelete = {this.onItemDelete} onUpdate = {this.onItemUpdate} onUpdateClick = {this.onUpdateClick}/>
                <Todofooter items={this.state.items} filter = {this.state.filter} onClick = {this.onFooterClick}/>
            </div>
        );
    }
}

export default Todomain;