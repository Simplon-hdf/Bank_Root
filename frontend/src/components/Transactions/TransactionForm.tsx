import {get} from "http";
import React, {useContext, useEffect, useState} from "react";
import {getTransacType} from "../../Utilities/methods";
import {typeAccount} from "../../Utilities/types";

export default function TransactionForm() {
	const [transacType, setTransacType] = useState(getTransacType()[0]);
	const [amount, setAmount] = useState(0);
	const [showFromAcc, setShowFromAcc] = useState(false);
	const [accounts, setAccounts] = useState<typeAccount[]>([]);
	const [toAccount, setToAccount] = useState(-1);
	const [fromAccount, setFromAccount] = useState(-1);
	const [initiator, setInitiator] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:5000/accounts`)
			.then((res) => res.json())
			.then((result) => {
				setAccounts(result);
				setFromAccount(result[0].account_id);
				setToAccount(result[0].account_id);
			});
	}, []);

	// useEffect(() => {
	// 	setShowFromAcc(transacType === "Debit" ? true : false);
	// }, [transacType]);

	function handleSelect() {
		console.log("handling");
	}

	function handleSubmit() {
		if (amount <= 0 || (transacType === "Transfer" && toAccount === fromAccount)) {
			// console.log("jhbekr");
			return;
		}
		// if(transacType === "Transfer" && toAccount === fromAccount)

		// console.log(":::::::", amount);
		// console.log(":::::::", fromAccount);
		// console.log(":::::::", toAccount);
		const transaction = {
			from_account_id: transacType === "Transfer" ? fromAccount : null,
			to_account_id: toAccount,
			amount: amount,
			type: transacType,
			initiated_by: initiator ? -1 : toAccount,
			status_code: true,
		};
		console.log(":::::::", transaction);
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

			{transacType === "Transfer" && (
				<div>
					<label htmlFor="fromAcc">From: </label>
					<select name="fromAcc" onChange={(e) => setFromAccount(+e.target.value)}>
						{/* <option>From Account</option> */}
						{accounts.map((acc) => (
							<option key={acc.account_id} value={acc.account_id}>
								{acc.account_id}
							</option>
						))}
					</select>
				</div>
			)}

			<div>
				<label htmlFor="toAcc">{transacType !== "Debit" ? "To:" : "From"} </label>
				<select name="toAcc" onChange={(e) => setToAccount(+e.target.value)}>
					{/* <option>To Account</option> */}
					{accounts.map((acc) => (
						<option key={acc.account_id} value={acc.account_id}>
							{acc.account_id}
						</option>
					))}
				</select>
			</div>

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
