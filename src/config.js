import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import CakeOptions from "../src/components/CakeOptions/CakeOptions";

const config = {
    botName:"BakeBote",
  initialMessages: [createChatBotMessage(`Hello dear my name is BakeBot`, {
    widget: "options",
  })],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <CakeOptions {...props} />,
    },
  ],
  
  
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  
};


export default config;