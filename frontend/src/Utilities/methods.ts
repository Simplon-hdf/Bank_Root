export function formatDate(date: Date) {
	const d = new Date(date);
	const day = d.getUTCDate();
	const month = d.getUTCMonth() + 1;
	const year = d.getUTCFullYear();

	// console.log(day, month, year);
	// console.log(d.toLocaleDateString("fr-FR"));
	return d.toLocaleDateString("fr-FR");
}

export function getNavLinks() {
	return [
		{page: "Home", path: "/"},
		{page: "Clients", path: "/clients"},
		{page: "Accounts", path: "/accounts"},
		{page: "Transactions", path: "/transactions"},
	];
}

export function getTransacType() {
	return ["Debit", "Credit", "Transfer"];
}

// Placeholder for "unique" randomly generated account number
export function getRandNb(a: number, b: number) {
	// const min = 1000;
	// const max = 9999;

	const min = a < b ? a : b;
	const max = a > b ? a : b;

	// console.log(Math.floor(Math.random() * (max - min + 1) + min));
	return Math.floor(Math.random() * (max - min + 1) + min);
}
