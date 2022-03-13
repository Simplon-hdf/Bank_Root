import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {formatDate} from "../../Utilities/methods";
import {typeTransactionDetails} from "../../Utilities/types";

export default function AccountDetail() {
	const {accountID} = useParams();
	const [items, setItems] = useState<typeTransactionDetails[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (accountID && typeof +accountID === "number") {
			fetch(`http://localhost:5000/accounts/${+accountID}/details`)
				.then((res) => res.json())
				.then((result) => {
					setItems(result);
					// console.log(accountID);
					// console.log(items);
				});
		}
	}, []);

	return (
		<section>
			<table>
				<thead>
					<tr>
						{/* <th colSpan={10} style={{borderBottom: "1px solid black"}}> */}
						<th colSpan={10} className="borderBot">
							Account Transactions
						</th>
					</tr>
					<tr>
						{/* <th className="borderRight">account id</th> */}
						<th className="borderRight">type</th>
						<th className="borderRight">amount</th>
						<th className="borderRight">status</th>
						<th className="">date</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							{/* <td className="borderRight">{item.account_id}</td> */}
							<td className="borderRight">{item.type}</td>
							<td className="borderRight">{item.amount} €</td>
							<td className="borderRight">{item.status_code ? "actived" : "deactivated"}</td>
							<td className="">{formatDate(item.createdAt)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
