import React, {useEffect, useState} from "react";
import {Link, NavLink, Routes, Route} from "react-router-dom";
import {formatDate} from "../../Utilities/methods";
import {typeAccount} from "../../Utilities/types";
import AccountDetail from "./AccountDetail";
import AccountForm from "./AccountForm";

export const AccountsContext = React.createContext<any>([[], () => {}]);

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

	function deleteAccount(accountIdToDelete: number) {
		if (window.confirm("Confirm deletion ?")) {
			fetch(`http://localhost:5000/accounts/${accountIdToDelete}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((result) => {
					setItems(items.filter((x) => x.account_id !== result.account_id));
				});
		}
	}

	if (error) {
		return <section>Error: {JSON.stringify(error)}</section>;
	} else {
		return (
			<AccountsContext.Provider value={[items, setItems]}>
				<section>
					<AccountForm />
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
								<th className="borderRight">last update</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							{items.map((item) => (
								<tr key={item.account_id}>
									<td className="borderRight">{item.account_id}</td>
									<td className="borderRight">{item.client_id}</td>
									<td className="borderRight">
										<NavLink to={`${item.account_id}`} className="navItems">
											#{item.account_number}
										</NavLink>
									</td>
									<td className="borderRight">{item.account_balance} €</td>
									<td className="borderRight">{item.status_code ? "actived" : "deactivated"}</td>
									<td className="borderRight">{formatDate(item.createdAt)}</td>
									<td className="borderRight">{formatDate(item.updatedAt)}</td>
									<td>
										<button
											type="button"
											onClick={() => {
												deleteAccount(item.account_id);
											}}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
			</AccountsContext.Provider>
		);
	}
}
