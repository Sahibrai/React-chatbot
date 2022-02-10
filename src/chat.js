import React from "react";
import './App.css';
import Chatbot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function Chat() {
  return (

      <div id="ch" style={{maxWidth:"300px"}}>
      <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
    </div>
  );
}

export default Chat;