import React, {useContext, useEffect, useState} from "react";
import {getRandNb} from "../../Utilities/methods";
import {typeClient} from "../../Utilities/types";
import {AccountsContext} from "./Accounts";

export default function AccountForm() {
	const [clients, setClients] = useState<typeClient[]>([]);
	const [clientId, setClientId] = useState(-1);
	const [isActive, setIsActive] = useState(false);
	const [balance, setBalance] = useState(100);
	const [accounts, setAccounts] = useContext(AccountsContext);

	useEffect(() => {
		fetch(`http://localhost:5000/clients`)
			.then((res) => res.json())
			.then((result) => {
				setClients(result);
				setClientId(result[0].client_id);
			});
	}, []);

	function handleSubmit() {
		if (balance <= 0) {
			console.log("Error, empty balance");
			return;
		}

		const newAccount = {
			client_id: clientId,
			account_number: getRandNb(1000, 9999),
			account_balance: balance,
			status_code: isActive,
		};
		// console.log(":::::::", newAccount);

		fetch(`http://localhost:5000/accounts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newAccount), // body data type must match "Content-Type" header
		})
			.then((res) => res.json())
			.then((result) => {
				// If error obj
				if (result.hasOwnProperty("code")) return;

				let arr = JSON.parse(JSON.stringify(accounts));
				arr.unshift(result); // Add items to the beginning
				// console.log(result);

				setAccounts(arr);
			});
	}

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
			<div>
				<label htmlFor="balance">Initial Balance: </label>
				<input
					name="balance"
					type="number"
					min="0"
					max="1000000"
					step="100"
					value={balance}
					onChange={(e) => {
						setBalance(+e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="activeAccount">Activate Account: </label>
				<input type="checkbox" onChange={(e) => setIsActive(e.target.checked)} name="activeAccount" />
			</div>

			<button type="button" onClick={handleSubmit}>
				New Account
			</button>
		</form>
	);
}
