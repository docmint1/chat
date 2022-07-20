import React from "react";
import {Component} from "react";

export default class ListOfMessages extends Component {
    renderMessage(message){
        const {member, text} = message;
        const {currentMember} = this.props;
        const messagesFromMe = member.id === currentMember.id;
        const className = messagesFromMe ? "message" : "message currentMember";

        return(
            <li className={className}>
                <span className="avatar"
                       style={{backgroundColor: member.clientData.color}}/>

            <div>
                <div className="username">
                {member.clientData.username}
                </div>
                <div className="text">
                {text}
                </div>
                </div>           
            </li>

        );


    }

    render() {
        const {messages} = this.props;
        return(
            <ul className="Messages-List">
                {messages.map((m) => this.renderMessage(m))}
            </ul>
        );
    }
}