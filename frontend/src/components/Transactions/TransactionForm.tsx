import {get} from "http";
import React, {useEffect, useState} from "react";
import {getTransacType} from "../../Utilities/methods";
import {typeAccount} from "../../Utilities/types";

export default function TransactionForm() {
	const [transacType, setTransacType] = useState(getTransacType()[0]);
	const [amount, setAmount] = useState(0);
	const [showFromAcc, setShowFromAcc] = useState(false);
	const [accounts, setAccounts] = useState<typeAccount[]>([]);
	const [toAccount, setToAccount] = useState(null);

	// useEffect(() => {
	// 	setShowFromAcc(transacType === "Debit" ? true : false);
	// }, [transacType]);

	function handleSubmit() {
		if (amount <= 0) return;
		console.log(amount);
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
					<select name="fromAcc">
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
				<select name="toAcc">
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
					onChange={(e) => setAmount(+e.target.value)}
				/>
			</div>

			<button type="button" onClick={handleSubmit}>
				Accept
			</button>
		</form>
	);
}
