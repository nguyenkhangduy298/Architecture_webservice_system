import React, {useState, useEffect} from 'react'

export default function PostRequest(){

    const [name, setName] = useState('')
    const [parentName, setParentName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    // const endPoint = 'https://cloud/animals'
    const endPoint = 'http://localhost:9000/owners'
    const save = () => {
        fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName: name, lastName: parentName, address: address,city: email,telephone: phone})
        }).then(data => data.json())
    }

    return(
        <div class="mpanel">
            NEW BOOK INFORMATION:
            <fieldset>
                <form>
                    {/*Check Pattern Name with at least 2 characters and space in between*/}
                    Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <br/>
                    {/*Check Pattern ParentName with at least 2 characters and space in between*/}
                    lastName:<input type="text" value={parentName}  onChange={(e)=>setParentName(e.target.value)}/>
                    <br/>
                    {/*Check Pattern Address with 10-20 characters*/}
                    Address:<input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <br/>
                    {/*Email validation by INPUT TYPE = EMAIL - POP UP will alert if email has no @ */}
                    City:<input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    {/*Check Pattern Phone with at least 10-20 digits*/}
                    Phone:<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <br/>
                    <button onClick={()=> save()}>Save</button>
                </form>
            </fieldset>

        </div>

    )
}
