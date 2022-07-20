import React, {Component} from "react";
import ListOfMessages from "./Components/ListOfMessages";
import './App.css';
import { randomColor, randomName } from "./Components/UserName";
import Input from "./Components/Input";
import Image from "./Components/image_talking.jpg"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      member: {
        username: randomName(),
        color: randomColor()
      }
    };

//SCALEDRONE INTEGRATION

  this.drone = new window.Scaledrone("Ybuynu2re0rjIhiR", {
    data: this.state.member
  });
  this.drone.on('open', error => {
    if (error) {
      return console.error(error);
    }
    const member = {...this.state.member};
    member.id = this.drone.clientId;
    this.setState({member});
  });

  const room = this.drone.subscribe("observable-room");
  room.on('data', (data, member) => {
    const messages = this.state.messages;
    messages.push({member, text: data});
    this.setState({messages});
  });
}

onSendMessage = (message) => {
this.drone.publish ({
  room: "observable-room",
  message});
};

    
  render(){
  return (
    <div className="App">
      <div className="App-header">
        <img className="image" src={Image} alt="chat logo"/>
        </div>
        <ListOfMessages
        messages={this.state.messages}
        currentMember={this.state.member}/>

        <Input
        onSendMessage={this.onSendMessage}/>
        
     
    </div>
  );
}

}
