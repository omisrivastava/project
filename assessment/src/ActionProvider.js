import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleQuery(query) {
    try {
      const response = await axios.post("http://localhost:5000/resume-query", {
        question: query,
      });

      const answer = response.data.answer;
      const botMessage = Array.isArray(answer)
        ? this.createChatBotMessage(answer.map(item => JSON.stringify(item)).join("\n"))
        : this.createChatBotMessage(answer);

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      const errorMessage = this.createChatBotMessage("Sorry, something went wrong. Please try again later.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
}

export default ActionProvider;
