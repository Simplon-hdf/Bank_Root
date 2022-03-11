import React, {useEffect, useState} from "react";
import {typeClient} from "../../Utilities/types";

export default function AccountForm() {
	const [clients, setClients] = useState<typeClient[]>([]);
	const [clientId, setClientId] = useState(-1);
	// const [accountNb, setAccountNb] = useState(-1);
	// const [balance, setBalance] = useState(0);

	useEffect(() => {
		fetch(`http://localhost:5000/clients`)
			.then((res) => res.json())
			.then((result) => {
				setClients(result);
				setClientId(result[0].client_id);
			});
	}, []);

	return (
		<form>
			<div>
				<label htmlFor="clientId">Client: </label>
				<select name="clientId" onChange={(e) => setClientId(+e.target.value)}>
					{clients.map((cl) => (
						<option key={cl.client_id} value={cl.client_id}>
							{/* {`${cl.title}. ${cl.name} (${cl.client_id})`} */}
							{`${cl.title}. ${cl.name}`}
						</option>
					))}
				</select>
			</div>
		</form>
	);
}
