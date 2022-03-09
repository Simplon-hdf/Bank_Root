import React, {useEffect, useState} from "react";
import {formatDate} from "../../Utilities/methods";
import {typeTransaction} from "../../Utilities/types";

// Affiche des transactions
// "sans details"
export default function Transactions() {
	const [items, setItems] = useState<typeTransaction[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:5000/transactions`)
			.then((res) => res.json())
			.then(
				(result) => {
					setItems(result);
				},
				(error) => setError(error),
			);
	}, []);

	if (error) {
		return <section>Error: {JSON.stringify(error)}</section>;
	} else {
		return (
			<section>
				<h3>Transactions</h3>

				<table>
					<thead>
						<tr>
							{/* <th colSpan={10} style={{borderBottom: "1px solid black"}}> */}
							<th colSpan={10} className="borderBot">
								Transactions
							</th>
						</tr>
						<tr>
							<th>id</th>
							<th className="sideBorder">from</th>
							<th>to</th>
							<th className="sideBorder">amount</th>
							<th>type</th>
							<th className="sideBorder">initiated by</th>
							<th>status</th>
							<th className="sideBorder">created at</th>
							<th>updated at</th>
						</tr>
					</thead>

					<tbody>
						{items.map((item) => (
							<tr key={item.transaction_id}>
								<td>{item.transaction_id}</td>
								<td className="sideBorder">{item.from_account_id}</td>
								<td>{item.to_account_id}</td>
								<td className="sideBorder">{item.amount}</td>
								<td>{item.type}</td>
								<td className="sideBorder">{item.initiated_by}</td>
								<td>{item.status_code ? "actived" : "deactivated"}</td>
								<td className="sideBorder">{formatDate(item.createdAt)}</td>
								<td>{formatDate(item.updatedAt)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		);
	}
}
