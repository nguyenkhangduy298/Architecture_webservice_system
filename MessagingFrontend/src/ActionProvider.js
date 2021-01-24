
import {Component} from "react";

class ActionProvider{
    
    constructor(createChatBotMessage, setStateFunc) {
    
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;

        // this.state = {
        //     resBook: 0
        // }
        //
        // this.state.resBook
        // this.setState({
        //     resBook: ''
        // })
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, my friend. Nice to meet you!")
      this.updateChatbotState(greetingMessage)
    }

    



    search(message) {

        // const [resBook, setResBook] = useState(0)
        console.log(message);
        const endPoint = "http://localhost:8080/course";
        // const endPoint = "http://localhost:8080/book";
        const endPoint2 = "http://localhost:8080/course/name?name=Machine%20Learning"
        const redis = "http://localhost:10091/api/redis/employee"

        var dict = [
            {name: "Harry Potter", price: 750}, 
            {name: "Naruto", price: 200}
        ];

        if (message.includes("book")) {
            // setResBook(1)
            if (message.includes("machine learning")){
                console.log("Duy")
                fetch(endPoint2)
                    .then(response => response.json())
                    .then(dataList => {
                        // do same thing as below but change dict -> dataList
                        var responseLength = Object.keys(dataList).length;

                        const numResponse = this.createChatBotMessage("[FOUND " + responseLength + " BOOK RECOMMENDATIONS]");
                        this.updateChatbotState(numResponse);

                        for (var i = 0; i < responseLength; i++) {
                            var bookNumber = i + 1;
                            var bookData = bookNumber + ". " + dataList[i]["name"] + ". " + dataList[i]["field"] + ". " + dataList[i]["courseCode"];
                            const dataResponse = this.createChatBotMessage(bookData);
                            this.updateChatbotState(dataResponse);
                        }
                    })
                    .catch(errors => {
                        console.log(errors)
                    });
            }
            else {
                console.log("else")
                fetch(endPoint)
                    .then(response => response.json())
                    .then(dataList => {
                        // do same thing as below but change dict -> dataList
                        var responseLength = Object.keys(dataList).length;

                        const numResponse = this.createChatBotMessage("[FOUND " + responseLength + " BOOK RECOMMENDATIONS]");
                        this.updateChatbotState(numResponse);

                        for (var i = 0; i < responseLength; i++) {
                            var bookNumber = i + 1;
                            // var bookData = bookNumber + ". " + dataList[i]["title"] + ". " + dataList[i]["author"] + ". " + dataList[i]["isbn"];
                            var bookData = bookNumber + ". " + dataList[i]["name"] + ". " + dataList[i]["field"] + ". " + dataList[i]["courseCode"];
                            // var bookData = bookNumber + ". " + dataList[i]["name"] + ". " + dataList[i]["age"] + ". " + dataList[i]["salary"];

                            const dataResponse = this.createChatBotMessage(bookData);
                            this.updateChatbotState(dataResponse);
                            console.log("Redis")
                            fetch(redis, {
                                crossDomain: true,
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({id: i,name: dataList[i]["name"]})
                            })
                        }

                    })
                    .catch(errors => {
                        console.log(errors)
                    })
            }
        
            // var responseLength = Object.keys(dict).length;
            //
            // const numResponse = this.createChatBotMessage("[FOUND " + responseLength + " BOOK RECOMMENDATIONS]");
            // this.updateChatbotState(numResponse);
            //
            // for (var i = 0; i < responseLength; i++) {
            //     var bookNumber = i + 1;
            //     var bookData = bookNumber + ". " + dict[i]["name"] ;
            //     const dataResponse = this.createChatBotMessage(bookData);
            //     this.updateChatbotState(dataResponse);
            // }
            
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