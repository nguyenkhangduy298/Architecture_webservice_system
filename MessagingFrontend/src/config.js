import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "AutoBot",
  initialMessages: [createChatBotMessage("Hi, My name is AutoChat"),
                    createChatBotMessage("How may I assist you today?"),
                   ],
}

export default config