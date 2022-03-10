import React from "react";
import ClientDetail from "./ClientDetail";
import RegisterForm from "./RegisterForm";

// Ici on affiche "tout" les clients
// on clique sur un client on va vers son detail
export default function Clients() {
	return <section>
		<ClientDetail />
		<RegisterForm />
	</section>;
}
