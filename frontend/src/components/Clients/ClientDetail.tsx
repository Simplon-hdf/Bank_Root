import React, { useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";


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
                        <th><b>Civilité :</b></th>
                        <th><b>Nom :</b></th>
                        <th><b>Prénom :</b></th>
                        <th><b>Email :</b></th>
                        <th><b>Adresse :</b></th>
                        <th><b>Téléphone :</b></th>
                        <th><b>Login :</b></th>
                        <th><b>Mot de passe :</b></th>
                    </tr>
                    <tr>
                        <td> 
                            {client.title}
                        </td>
                    
                        <td>
                            {client.name}
                        </td>                 
                        <td>
                            {client.surname}
                        </td>                  
                        <td>
                            {client.email}
                        </td>                 
                        <td>
                            {client.address}
                        </td>
                
                        <td>
                            {client.telephone}
                        </td>                
                        <td>
                            {client.login}
                        </td>
                
                        <td>
                            {client.password}
                        </td>
                        
                    </tr>                               
                </table>
            ))}
        </div>
    }
}
