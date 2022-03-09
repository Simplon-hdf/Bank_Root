import React, { useEffect, useState } from "react";


type cl = {
	client_id:	number;
    title: string;
    name: 	string;
    surname: string;
    email: string;
    address: string;
    telephone: string;
    login: string;
    password: string;
    type: boolean;
    status_code: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// Affichage detail d'un client
// info, les comptes associés
// p-e aussi les transactions les plus récentes ?
export default function ClientDetail() {
	const [clients, setClients] = useState<cl[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
        fetch("http://localhost:5000/clients")
            .then( (res) => res.json())
            .then( (result) => {
                console.log(result);
                
                setClients(result)
            },

            (error) => setError(error));
    }, [])


    if(error) {
        return <section>           
            ERROR: {JSON.stringify(error)}
        </section>
    } else {
        return <div>
            <h3> Clients </h3>
            {clients.map((client) => (
                <table key={client.client_id}>
                    <tr>
                        <td> 
                            <b>Civilité :</b> {client.title}
                        </td>
                    </tr>
                    <tr> 
                        <td>
                            <b>Nom :</b> {client.name}
                        </td>
                    </tr>    
                    <tr> 
                        <td>
                            <b>Prénom :</b> {client.surname}
                        </td>
                    </tr> 
                    <tr> 
                        <td>
                            <b>Email :</b> {client.email}
                        </td>
                    </tr> 
                    <tr> 
                        <td>
                            <b>Adresse :</b> {client.address}
                        </td>
                    </tr> 
                    <tr> 
                        <td>
                            <b>Téléphone :</b> {client.telephone}
                        </td>
                    </tr> 
                    <tr> 
                        <td>
                            <b>Login : </b>{client.login}
                        </td>
                    </tr> 
                    <tr> 
                        <td>
                            <b>Mot de passe :</b> {client.password}
                        </td>
                    </tr>                               
                </table>
            ))}
        </div>
    }
}
