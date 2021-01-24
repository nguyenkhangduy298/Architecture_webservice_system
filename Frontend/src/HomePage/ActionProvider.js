
import {Component} from "react";

class ActionProvider{
    
    constructor(createChatBotMessage, setStateFunc) {
    
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, my friend. Nice to meet you!")
      this.updateChatbotState(greetingMessage)
    }

    



    search(message) {
        console.log(message);
        const endPoint = "http://localhost:9000/owners";
        

        var dict = [
            {name: "Harry Potter", price: 750}, 
            {name: "Naruto", price: 200}
        ];

        if (message.includes("book")) {
            // fetch(endPoint)
            //     .then(response => response.json())
            //     .then(dataList => {
            //        // do same thing as below but change dict -> dataList
            //      })
                    // .catch(errors => {
                    //      console.log(errors));
                    // })
        
            var responseLength = Object.keys(dict).length;
            
            const numResponse = this.createChatBotMessage("[FOUND " + responseLength + " BOOK RECOMMENDATIONS]");
            this.updateChatbotState(numResponse);

            for (var i = 0; i < responseLength; i++) {
                var bookNumber = i + 1;
                var bookData = bookNumber + ". " + dict[i]["name"] ;
                const dataResponse = this.createChatBotMessage(bookData);
                this.updateChatbotState(dataResponse);
            }
            
        } else {
            const notFoundMessage = this.createChatBotMessage("No results found. Please try another one!")
            this.updateChatbotState(notFoundMessage)
        }

    }



    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider