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
        console.log(gender);       
        console.log(name);
        console.log(surname);
        console.log(email);
        console.log(address);
        console.log(phone);
        console.log(login);
        console.log(password);
    }

    return (
        <form>
            <select defaultValue="Mr" onChange={(e) => setGender(e.target.value)}>
                <option value="Mr">Monsieur</option>
                <option value="Mme">Madame</option>
            </select>
            <input type="text" placeholder='Nom' onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder='Prénom' onChange={(e) => setSurname(e.target.value)}></input>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
            <input type="text" placeholder='Adresse' onChange={(e) => setAddress(e.target.value)}></input>
            <input type="text" placeholder='Téléphone' onChange={(e) => setPhone(e.target.value)}></input>
            <input type="text" placeholder='Login' onChange={(e) => setLogin(e.target.value)}></input>
            <input type="password" placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)}></input>
            <button type="button" onClick={sendForm}>Envoyer</button>
        </form>
    )
}





