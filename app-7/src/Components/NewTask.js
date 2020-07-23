import React, { Component } from 'react';

class NewTask extends Component {
    constructor(){
        super()

        this.state = {
            input: ''
        };



    }

    handleInputChange(value){
        this.setState({ input: value })
    }

    handleAdd(){
       this.props.add(this.state.input);
       this.setState({ input: '' })
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.input}
                    placeholder='Input things thats most get done'
                    onChange={event => this.handleInputChange(event.target.value)}
                    />
                    <button 
                    onClick={this.handleAdd}>
                        ADD
                    </button>
            </div>
        )
    }

}

export default NewTask