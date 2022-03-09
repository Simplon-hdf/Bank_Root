import React, {useEffect, useState} from "react";

type transaction = {
	transaction_id: number;
	from_account_id: number;
	to_account_id: number;
	amount: number;
	type: string;
	initiated_by: number;
	status_code: boolean;
	createdAt: Date;
	updatedAt: Date;
};

// Affiche des transactions
// "sans details"
export default function Transactions() {
	const [items, setItems] = useState<transaction[]>([]);
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

	return (
		<section>
			<h3>Transactions</h3>

			<table>
				<tr>
					<th>transaction_id</th>
					<th>from_account_id</th>
					<th>to_account_id</th>
					<th>amount</th>
					<th>type</th>
					<th>initiated_by</th>
					<th>status_code</th>
					<th>createdAt</th>
					<th>updatedAt</th>
				</tr>

				{items.map((item) => (
					<tr key={item.transaction_id}>
						<td>{item.transaction_id}</td>
						<td>{item.from_account_id}</td>
						<td>{item.to_account_id}</td>
						<td>{item.amount}</td>
						<td>{item.type}</td>
						<td>{item.initiated_by}</td>
						<td>{item.status_code}</td>
						<td>{item.createdAt}</td>
						<td>{item.updatedAt}</td>
					</tr>
				))}
			</table>
		</section>
	);
}
