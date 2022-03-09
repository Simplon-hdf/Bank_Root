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

export type typeClient = {
	client_id: number;
	title: string;
	name: string;
	surname: string;
	email: string;
	address: string;
	telephone: string;
	login: string;
	password: string;
	type: boolean;
	status_code: boolean;
	createdAt: Date;
	updatedAt: Date;
};

export type typeAccount = {
	account_id:	number;
    client_id: string;
    account_number: 	string;
    account_balance: string;
    status_code: boolean;
    createdAt: Date;
    updatedAt: Date;
};
