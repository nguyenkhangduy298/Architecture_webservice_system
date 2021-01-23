import React, { useState, useEffect } from "react";

export default function DataLoader() {
    const [data, setData] = useState([]);
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
    const endPoint = "http://localhost:10091/api/redis/employee/getall"

    const save = (message) => {
        message = message.toLowerCase()
        if (message.includes("book")) {
            fetch(endPoint, {
                crossDomain:true
            })
                .then(response => response.json())
                .then(data => setData(data));
            setRes(2)
        }else setRes(1)

    }
    return (
        <div class="mpanel">
            <div>{MessagesBubble}</div>

            <input placeholder="Enter your message and press ENTER" autofocus="true" type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
            <button onClick={()=> save(keyword)}>Save</button>
            <br/>
            Response:
            <br/>
            <br/>
            <div className=" bubble button">{responses[res]}</div>
            <ol>
                {data.map(el => (
                    // <li key={el.id}>{el.name}&nbsp;&nbsp;&nbsp;&nbsp;{el.grade}&nbsp;&nbsp;&nbsp;&nbsp;{el.parentName}
                    //     &nbsp;&nbsp;&nbsp;&nbsp;{el.address}&nbsp;&nbsp;&nbsp;&nbsp;{el.phone}&nbsp;&nbsp;&nbsp;&nbsp;{el.email}</li>
                    <li key={el.id}>{el.name}&nbsp;{el.salary}&nbsp;&nbsp;&nbsp;{el.age}</li>
                ))}
            </ol>

        </div>
    );
}
