import React, { Component } from "react";
import Terminal from "./composants/terminal"
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { ModalAuth } from "./composants/modalAuth";
import { ListeChannels } from "./composants/listeChannels";
import { AlertChannel } from "./composants/alert";
import ChannelShow from  "./composants/Channel";
import { socketIOClient } from "socket.io";
import { io } from "socket.io-client";

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    try {
      document.getElementById("buttonGo").click();
    } catch (error) {
      try {
        document.getElementById("buttonEnter").click();
      } catch (error) {
        //no need to show the error
      }
    }
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = { modalShow: true, channels: ["test1", "test2", "test3"], currentChannel: undefined, commandAct:"", showAlert: false, pseudo: undefined, endpoint: "http://localhost:82" };
    this.onChangePseudo = this.onChangePseudo.bind(this);
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.deleteChan = this.deleteChan.bind(this);
    this.onChangeCommand = this.onChangeCommand.bind(this);
    this.command = this.command.bind(this);
    this.validatePseudo = this.validatePseudo.bind(this);
  }


  validatePseudo =  () => {
    var socket = io('http://localhost:82/');
    socket.emit("login_register", {
      pseudo: this.state.pseudo
      });
    socket.on("logged_in", function(pseudo){
        /* console.log(socket.rooms) */
        console.log(pseudo);
        this.setState({ modalShow: false});
        this.requestChannels();
    });
  }
  

  requestChannels = () => {
    var socket = socketIOClient(this.state.endpoint);
    socket.emit("listChannels")
    socket.on("listChannels", data => {
      this.setState({ channels : data.channels})
    });
  }

  onChangePseudo = (e) => {
    if (e !== this.state.pseudo) {
    this.setState({ pseudo: e});
    }
  }
  setShowAlert = (bool) => {
    this.setState({ showAlert: bool })
  }
  onChangeCommand = (e) => {
    if (e !== this.state.commandAct) {
    this.setState({ commandAct: e});
    }
  }
  setCurrentChannel(elem) {
    this.setState({ currentChannel: elem})
    this.setState({ messageChannel: [{ pseudo: "pseudo1", message: "message1"}, { pseudo: "pseudo22222", message: "message2"}]})
  }
  deleteChan = () => {
    this.setState({ currentChannel: undefined })
  }
  command = () => {
    if (this.state.commandAct.split(" "))
    if (this.state.currentChannel === undefined) {
      if (this.state.channels.includes(this.state.commandAct) > 0) {
      this.setCurrentChannel(this.state.commandAct);
      this.setState({ command: ""});
      } else {
        this.setShowAlert(true);
      }
    } else {
      var interm = this.state.messageChannel;
      if (interm[interm.length - 1].message !== this.state.commandAct) {
      interm.push({ pseudo: this.state.pseudo, message: this.state.commandAct});
      }
      this.setState({ messageChannel: interm });
    }
  }
  render() {
    return (
      <>
<Terminal pseudo={this.state.pseudo} deleteChan={this.deleteChan} onChangeCommand={this.onChangeCommand} command={this.command}/>
<AlertChannel showAlert={this.state.showAlert} setShowAlert={this.setShowAlert} />
{(this.state.currentChannel === undefined) ? <ListeChannels channels={this.state.channels} setCurrentChannel={this.setCurrentChannel}/> : <ChannelShow channel={this.state.currentChannel} messageChannel={this.state.messageChannel} />}
      <ModalAuth
        show={this.state.modalShow}
        validatePseudo={this.validatePseudo}
        onChangePseudo={this.onChangePseudo}
        pseudo={this.state.pseudo}
      />
      </>
    );
  }
}

export default App;
