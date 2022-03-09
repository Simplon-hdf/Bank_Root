import React from "react";
import "./App.css";
import Accounts from "./components/Accounts/Accounts";
import Clients from "./components/Clients/Clients";
import Transactions from "./components/Transactions/Transactions";

function App() {
	return (
		<section className="App">
			"Admin" Panel:
			<Clients />
			<Accounts />
			<Transactions />
		</section>
	);
}

export default App;
