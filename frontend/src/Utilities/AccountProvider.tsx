import React, {createContext, useContext, useState} from "react";

export const AccountContext = React.createContext([{}, () => {}]);

export function AccountProvider(props: {children: React.ReactNode}) {
	const [accounts, setAccounts] = useState([]);

	return <AccountContext.Provider value={[accounts, setAccounts]}>{props.children}</AccountContext.Provider>;
}

// export default function AccountProvider() {
// 	return <div>AccountProvider</div>;
// }
