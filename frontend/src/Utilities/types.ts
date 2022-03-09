export type typeTransaction = {
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
