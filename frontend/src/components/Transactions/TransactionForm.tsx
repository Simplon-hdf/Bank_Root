import React, {useEffect, useState} from "react";
import {getTransacType} from "../../Utilities/methods";
import {typeAccount} from "../../Utilities/types";
import {TransactionContext} from "./Transactions";

export default function TransactionForm() {
	const [transacType, setTransacType] = useState(getTransacType()[0]);
	const [amount, setAmount] = useState(0);
	const [accounts, setAccounts] = useState<typeAccount[]>([]);
	const [toAccount, setToAccount] = useState(-1);
	const [fromAccount, setFromAccount] = useState(-1);
	const [initiator, setInitiator] = useState(false);

	const [transactions, setTransactions] = React.useContext(TransactionContext);

	useEffect(() => {
		fetch(`http://localhost:5000/accounts`)
			.then((res) => res.json())
			.then((result) => {
				setAccounts(result);
				setFromAccount(result[0].account_id);
				setToAccount(result[0].account_id);
			});
	}, []);

	function handleSubmit() {
		if (amount <= 0 || (transacType === "Transfer" && fromAccount === toAccount)) {
			console.log("Error, verify amount or accounts, in case of transfer");
			return;
		}

		const clientInitiator = accounts.filter((x) => x.account_id === fromAccount)[0];
		const newTransaction = {
			from_account_id: fromAccount,
			to_account_id: transacType === "Transfer" ? toAccount : null,
			amount: amount,
			type: transacType,
			initiated_by: initiator ? -1 : clientInitiator.client_id,
			status_code: true,
		};
		// console.log(":::::::", newTransaction);

		fetch(`http://localhost:5000/transactions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTransaction), // body data type must match "Content-Type" header
		})
			.then((res) => res.json())
			.then((result) => {
				// If error obj
				if (result.hasOwnProperty("code")) return;

				let arr = JSON.parse(JSON.stringify(transactions));
				arr.unshift(result); // Add items to the beginning

				setTransactions(arr);
			});
	}

	return (
		<form>
			<div>
				<label htmlFor="transacType">Type of Transaction: </label>
				<select name="transacType" onChange={(e) => setTransacType(e.target.value)}>
					{getTransacType().map((type) => (
						<option key={type} value={type}>
							{type}
						</option>
					))}
				</select>
			</div>

			<div>
				<label htmlFor="fromAcc">{transacType === "Credit" ? "To: " : "From: "} </label>
				<select name="fromAcc" onChange={(e) => setFromAccount(+e.target.value)}>
					{accounts.map((acc) => (
						<option key={acc.account_id} value={acc.account_id}>
							{acc.account_id}
						</option>
					))}
				</select>
			</div>
			{transacType === "Transfer" && (
				<div>
					<label htmlFor="toAcc">To: </label>
					<select name="toAcc" onChange={(e) => setToAccount(+e.target.value)}>
						{accounts.map((acc) => (
							<option key={acc.account_id} value={acc.account_id}>
								{acc.account_id}
							</option>
						))}
					</select>
				</div>
			)}

			<div>
				<label htmlFor="amount">Amount: </label>
				<input
					name="amount"
					type="number"
					min="0"
					max="10000"
					step="5"
					value={amount}
					onChange={(e) => {
						setAmount(+e.target.value);
					}}
				/>
			</div>

			<div>
				<label htmlFor="initiator">Initiated By Bank: </label>
				<input type="checkbox" onChange={(e) => setInitiator(e.target.checked)} name="initiator" />
			</div>

			<button type="button" onClick={handleSubmit}>
				Accept
			</button>
		</form>
	);
}
