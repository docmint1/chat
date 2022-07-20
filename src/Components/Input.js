import React, {Component} from "react";

export default class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
        };
    }

    handleTextChange = (e) => {
        this.setState({text: e.target.value});
    };

    handleSendMessage = (e) => {
        e.preventDefault();
        this.props.onSendMessage(this.state.text);
        this.setState({text: ""});
    };

   

    render(){
        return(
            <div className="Input">
                <form onSubmit={this.handleSendMessage}>
                    <input 
                    onChange={this.handleTextChange}
                    value={this.state.text}
                    type="text" 
                    placeholder="Unesi poruku i stisni ENTER">
                    </input>

                    <button className="button" type="submit">ENTER</button>


                </form>
            </div>
        );
    }
}

