import React, {useState} from 'react'


export default function SayHello(){

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    return(
        <div>
            <input type="date" value={name} onChange={(e)=>setName(e.target.value)}/>

            <div>{message}</div>

            <button onClick={()=> setMessage("Hello "+name)}>Send</button>

        </div>

    )
}
