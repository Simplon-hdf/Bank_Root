import React, {useEffect, useState} from "react";
import {formatDate} from "../../Utilities/methods";
import {typeAccount} from "../../Utilities/types";

// affichage de "tout" les comptes
// on clique sur un compte on va vers son detail
export default function Accounts() {
	const [items, setItems] = useState<typeAccount[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:5000/accounts`)
			.then((res) => res.json())
			.then((result) => setItems(result));
	}, []);

	if (error) {
		return <section>Error: {JSON.stringify(error)}</section>;
	} else {
		return (
			<section>
				<table>
					<thead>
						<tr>
							{/* <th colSpan={10} style={{borderBottom: "1px solid black"}}> */}
							<th colSpan={10} className="borderBot">
								Accounts
							</th>
						</tr>
						<tr>
							<th className="borderRight">id</th>
							<th className="borderRight">client id</th>
							<th className="borderRight">account n°</th>
							<th className="borderRight">account balance</th>
							<th className="borderRight">status</th>
							<th className="borderRight">created</th>
							<th>last update</th>
						</tr>
					</thead>

					<tbody>
						{items.map((item) => (
							<tr key={item.account_id}>
								<td className="borderRight">{item.account_id}</td>
								<td className="borderRight">{item.client_id}</td>
								<td className="borderRight">{item.account_number}</td>
								<td className="borderRight">{item.account_balance} €</td>
								<td className="borderRight">{item.status_code ? "actived" : "deactivated"}</td>
								<td className="borderRight">{formatDate(item.createdAt)}</td>
								<td>{formatDate(item.updatedAt)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		);
	}
}
