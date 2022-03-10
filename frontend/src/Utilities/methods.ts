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
