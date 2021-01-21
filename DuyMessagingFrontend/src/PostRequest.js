import React, {useState, useEffect} from 'react'

export default function PostRequest(){

    const [name, setName] = useState('')
    const [parentName, setParentName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [grade, setGrade] = useState(12)
    // const endPoint = 'https://cloud/animals'
    const endPoint = 'http://localhost:8080/students'
    const save = () => {
        fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, parentName: parentName, address: address,phone: phone,email: email, grade: grade })
        }).then(data => data.json())
    }

    return(
        <div class="mpanel">
            NEW STUDENT INFORMATION:
            <fieldset>
                <form>
                    {/*Check Pattern Name with at least 2 characters and space in between*/}
                    Name:<input type="text" value={name} class="input-field" pattern="^[A-Za-z]+( [A-Za-z]+)+$" onChange={(e)=>setName(e.target.value)}/>
                    <br/>
                    {/*Check Pattern ParentName with at least 2 characters and space in between*/}
                    ParentName:<input type="text" value={parentName} class="input-field" pattern="^[A-Za-z]+( [A-Za-z]+)+$" onChange={(e)=>setParentName(e.target.value)}/>
                    <br/>
                    {/*Check Pattern Address with 10-20 characters*/}
                    Address:<input type="text" value={address} class="input-field" pattern="^[A-Za-z0-9]{10,20}$"onChange={(e)=>setAddress(e.target.value)}/>
                    <br/>
                    {/*Check Pattern Phone with at least 10-20 digits*/}
                    Phone:<input type="text" value={phone} className="input-field" pattern="^[0-9]{10,20}$"
                                   onChange={(e) => setPhone(e.target.value)}/>
                    <br/>
                    {/*Email validation by INPUT TYPE = EMAIL - POP UP will alert if email has no @ */}
                    Email:<input type="email" value={email} className="input-field"
                                   onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <label htmlFor="grades">GRADE:</label>
                    <select name="grade" id="grades" onChange={(e)=>setGrade(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <br/>
                    <button onClick={()=> save()}>Save</button>
                </form>
            </fieldset>

        </div>

    )
}
