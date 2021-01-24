import React, { useState, useEffect } from "react";
import LazyHero from 'react-lazy-hero';
import ChatbotHeroImg from './img/chatbot-hero-img.jpg'
import ChatbotWelcomeImg from './img/chatbot.png'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Chatbot from 'react-chatbot-kit'
import config from './config';
import { useHistory } from 'react-router-dom';


export default function ChatBot() {
    const [data, setData] = useState([]);
    const history = useHistory();
    const [keyword, setKeyword] = useState('')
    // const [messsage, setMessage] = useState('')
    const [res, setRes] = useState(0)
    var messages = ["Welcome", "My name is AutoChat", "How may i help you"]
    var responses = ["","No results returned, Please try Again!!!","Here is your book recommendation:"]
    var MessagesBubble = messages.map((obj, i = 0) => (
        <div className="bubbleContainer">
            <div key={i++} className="bubble">
                <div className="button">{obj}</div>
            </div>
        </div>
    ));
    var ResponseBubble = responses.map((obj, i = res) => (
        <div className="bubbleContainer">
            <div key={i++} className="bubble">
                <div className="button">{obj}</div>
            </div>
        </div>
    ));
    const endPoint = "http://localhost:9000/owners"

    const save = (message) => {
        message = message.toLowerCase()
        if (message.includes("book")) {
            fetch(endPoint)
                .then(response => response.json())
                .then(data => setData(data));
            setRes(2)
        }else setRes(1)
    }

    return (
        <div className="chatbot-main-div">
            <div className="chatbot-div">
                <LazyHero className="hero-img"
                    imageSrc={ChatbotHeroImg}
                    minHeight="100vh"
                    opacity={0.7}
                    parallaxOffset={100}
                    transitionDuration= {600}
                    transitionTimingFunction="ease-in-out"
                    color="#000"
                >
                    <button className="return-btn" onClick={() => history.push('/home')}> Return to Dashboard</button>
                    <button className="chatbot-btn"> Canvas &nbsp;Chatbot</button>
                    <p className="chatbot-hero-text"> Your smart companion along the way </p>
                </LazyHero>
            </div>

            <div className="bot-panel">
                <div className="welcome-panel">
                    <div className="image-panel">
                        <img src={ChatbotWelcomeImg}></img>
                    </div>

                    <div className="text-panel">
                      
                        <h1> AutoChat </h1> 
                        
                        <p> Hello there, fellow student! My name is AutoChat and I am here to assist you in finding information based on your desired query. </p>
                    </div>
                </div>
                <div className="chatbot-panel">
                    <Chatbot className="chatbot" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div>
            </div>
        </div>
    );
}
