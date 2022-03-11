import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

export default function RegisterForm() {
    const [gender, setGender] = useState("Mr");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function sendForm() {       
        if(
        !name ||
        !surname ||
        !email ||
        !address ||
        !phone ||
        !login ||
        !password 
        ) {
            alert("Please fill in the fields!");
            ;
        } else {
            const newClient = {
                title : gender,
                name : name,
                surname : surname,
                email : email,
                address : address,
                telephone : phone,
                login : login,
                password : password  
            }
            fetch("http://localhost:5000/clients", {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(newClient),
            })
            // .then((res) => res.json())
            // .then(
            //     (result) => {
            //         console.log(result);
                    
            //     }
            // )                         
        }
        
    }

    


    return (
        <form>
            <select defaultValue="Mr" onChange={(e) => setGender(e.target.value)}>
                <option value="Mr">Male</option>
                <option value="Ms">Female</option>
            </select>
            <input type="text" placeholder='Last Name' onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder='First Name' onChange={(e) => setSurname(e.target.value)}></input>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
            <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}></input>
            <input type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}></input>
            <input type="text" placeholder='Login' onChange={(e) => setLogin(e.target.value)}></input>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
            <button type="button" onClick={sendForm}>Submit</button>
        </form>
    )
}





