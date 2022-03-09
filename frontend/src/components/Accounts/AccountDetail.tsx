
import React, { useEffect, useState } from "react";
import { typeAccount } from "../../Utilities/types";

export default function AccountDetail() {
    const [accounts, setAccounts] = useState<typeAccount[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
        fetch("http://localhost:5000/accounts")
            .then( (res) => res.json())
            .then( (result) => {
                console.log(result);
                
                setAccounts(result)
            },

            (error) => setError(error));
    }, [])
    if (error) {
		return <section>ERROR: {JSON.stringify(error)}</section>;
	} else {
		return (
			<div>
				<h3> Account </h3>
				<table>
					<thead>
						<tr>
							<th>
								<b>Account Number </b>
							</th>
							<th>
								<b>Client Number </b>
							</th>
							<th>
								<b>Account Balance </b>
							</th>
							<th>
								<b>status code </b>
							</th>
							 
						</tr>
					</thead>
					<tbody>
						{accounts.map((account) => (
							<tr key={account.account_number}>
                                <td>{account.account_number}</td>
								<td>{account.client_id}</td>
								<td>{account.account_balance}</td>
								<td>{account.status_code ? "actived" : "deactivated"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
	 
} 