import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router";
import "./App.css";
import Accounts from "./components/Accounts/Accounts";
import Clients from "./components/Clients/Clients";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Transactions from "./components/Transactions/Transactions";

import {typeAccount} from "./Utilities/types";

// const AppContext = React.createContext<typeAccount[]>([]);
export const AccountContext = React.createContext<typeAccount[]>([]);

function App() {
	const [accounts, setAccounts] = useState<typeAccount[]>([]);

	useEffect(() => {
		fetch(`http://localhost:5000/accounts`)
			.then((res) => res.json())
			.then((result) => setAccounts(result));
	}, []);

	return (
		<section className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/clients" element={<Clients />} />
				<Route path="/accounts" element={<Accounts />} />
				<Route
					path="/transactions"
					element={
						<AccountContext.Provider value={accounts}>
							<Transactions />
						</AccountContext.Provider>
					}
				/>
			</Routes>
		</section>
	);
}

export default App;
