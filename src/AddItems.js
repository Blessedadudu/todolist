import React, { Component } from 'react';

class AddItems extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({ 
            content: e.target.value.replace(/\s/y, '')
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItems(this.state);
        this.setState({
            content: ''
        })
    }
    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><h4>Add New Todo:</h4></label>
                    <input type="text" onChange={this.handleChange} value={this.state.content } required />
                </form>  
            </div>
        )
    }
}

export default AddItems;