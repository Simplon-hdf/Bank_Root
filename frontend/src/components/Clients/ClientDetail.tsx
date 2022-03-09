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
            {clients.map((client) => (
                <article key={client.client_id}>
                    {client.title}
                    {client.name}
                    {client.surname}
                    {client.email}
                    {client.address}
                    {client.telephone}
                    {client.login}
                    {client.password}
                </article>
            ))}
        </div>
    }
}
