import React, { useEffect, useState } from "react";


type cl = {
	client_id:	number;
    title: string;
    name: 	string;
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
}

// Affichage detail d'un client
// info, les comptes associés
// p-e aussi les transactions les plus récentes ?
export default function ClientDetail() {
	return <section>ClientDetail</section>;
}
