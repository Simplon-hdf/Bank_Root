import React, {useEffect, useState} from "react";
import {typeClient} from "../../Utilities/types";

// Affichage detail d'un client
// info, les comptes associés
// p-e aussi les transactions les plus récentes ?
export default function ClientDetail() {
	const [clients, setClients] = useState<typeClient[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("http://localhost:5000/clients")
			.then((res) => res.json())
			.then(
				(result) => {
					// console.log(result);

					setClients(result);
				},

				(error) => setError(error),
			);
	}, []);

	if (error) {
		return <section>ERROR: {JSON.stringify(error)}</section>;
	} else {
		return (
			<div>
				{/* <h3> Clients </h3> */}
				<table>
					<thead>
						<tr>
							{/* <th colSpan={10} style={{borderBottom: "1px solid black"}}> */}
							<th colSpan={100} className="borderBot">
								Clients
							</th>
						</tr>

						<tr>
							<th className="borderRight">
								<b>Gender :</b>
							</th>
							<th className="borderRight">
								<b>Last Name:</b>
							</th>
							<th className="borderRight">
								<b>First Name :</b>
							</th>
							<th className="borderRight">
								<b>Email :</b>
							</th>
							<th className="borderRight">
								<b>Adress :</b>
							</th>
							<th className="borderRight">
								<b>Phone :</b>
							</th>
							<th className="borderRight">
								<b>Login :</b>
							</th>
							<th className="borderRight">
								<b>Password :</b>
							</th>
						</tr>
					</thead>
					<tbody>
						{clients.map((client) => (
							<tr key={client.client_id}>
								<td className="borderRight">{client.title}</td>

								<td className="borderRight">{client.name}</td>
								<td className="borderRight">{client.surname}</td>
								<td className="borderRight">{client.email}</td>
								<td className="borderRight">{client.address}</td>

								<td className="borderRight">{client.telephone}</td>
								<td className="borderRight">{client.login}</td>

								<td>{client.password}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
