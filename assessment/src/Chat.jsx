import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./App.css";

function Chat() {
  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "40px" ,display:"flex",position:"relative"}}>
        <div style={{ maxWidth: "100px", margin: "0 auto",position:"fixed" ,zIndex:100000,top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
