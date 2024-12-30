import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "ResumeBot",
  initialMessages: [
    createChatBotMessage("Hi! I'm ResumeBot. Ask me about my work experience, skills, projects, or certifications."),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5D3FD3",
    },
    chatButton: {
      backgroundColor: "#5D3FD3",
    },
  },
};

export default config;

