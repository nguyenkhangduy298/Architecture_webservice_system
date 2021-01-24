
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

        // const [resBook, setResBook] = useState(0)
        console.log(message);
        const endPoint = "http://localhost:8080/books";
        // const endPoint2 = "http://localhost:8080/book/name?name=Sabriya"
        const endPoint2 = "http://localhost:8080/book/title/Sabriya"
        // const redis = "http://localhost:10091/api/redis/employee"
        const redis = "http://localhost:10091/redis/book"

        var dict = [
            {name: "Harry Potter", price: 750},
            {name: "Naruto", price: 200}
        ];
        var counter = 0

        if (message.includes("book")) {
            if (message.includes("sabriya")){
                console.log("Custom Request")
                fetch(endPoint2)
                    .then(response => response.json())
                    .then(dataList => {
                        // do same thing as below but change dict -> dataList
                        var responseLength = Object.keys(dataList).length;

                        const numResponse = this.createChatBotMessage("[FOUND " + responseLength + " BOOK RECOMMENDATIONS]");
                        this.updateChatbotState(numResponse);

                        for (var i = 0; i < responseLength; i++) {
                            var bookNumber = i + 1;
                            var bookData = bookNumber + ". " + dataList[i]["title"] + ". " + dataList[i]["author"] + ". " + dataList[i]["url"];
                            // var bookData = bookNumber + ". " + dataList[i]["name"] + ". " + dataList[i]["field"] + ". " + dataList[i]["courseCode"];
                            // var bookData = bookNumber + ". " + dataList[i]["name"] + ". " + dataList[i]["age"] + ". " + dataList[i]["salary"];

                            const dataResponse = this.createChatBotMessage(bookData);
                            this.updateChatbotState(dataResponse);
                            console.log("Update Redis")
                            fetch(redis, {
                                crossDomain: true,
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({id: i,isbn: dataList[i]["isbn"] ,title: dataList[i]["title"],author: dataList[i]["author"], description: dataList[i]["url"]})
                            })
                        }

                    })
                    .catch(errors => {
                        console.log(errors)
                    })
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
                            var bookData = bookNumber + ". " + dataList[i]["title"] + ". " + dataList[i]["author"] + ". " + dataList[i]["url"];
                            // var bookData = bookNumber + ". " + dataList[i]["name"] + ". " + dataList[i]["field"] + ". " + dataList[i]["courseCode"];
                            // var bookData = bookNumber + ". " + dataList[i]["name"] + ". " + dataList[i]["age"] + ". " + dataList[i]["salary"];

                            const dataResponse = this.createChatBotMessage(bookData);
                            this.updateChatbotState(dataResponse);
                            console.log("Update Redis")
                            fetch(redis, {
                                crossDomain: true,
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({id: i,isbn: dataList[i]["isbn"] ,title: dataList[i]["title"],author: dataList[i]["author"], description: dataList[i]["url"]})
                            })
                        }

                    })
                    .catch(errors => {
                        console.log(errors)
                    })
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