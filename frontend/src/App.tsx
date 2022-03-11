import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router";
import "./App.css";
import Accounts from "./components/Accounts/Accounts";
import Clients from "./components/Clients/Clients";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Transactions from "./components/Transactions/Transactions";

function App() {
	return (
		<section className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/clients" element={<Clients />} />
				<Route path="/accounts" element={<Accounts />} />
				<Route path="/transactions" element={<Transactions />} />
			</Routes>
		</section>
	);
}

export default App;
