'use client';

import { createContext, useContext, useState } from 'react';

const BillingContext = createContext(null);

export function BillingProvider({ children }) {
	const [isAnnual, setIsAnnual] = useState(false);

	return (
		<BillingContext.Provider value={{ isAnnual, setIsAnnual }}>
			{children}
		</BillingContext.Provider>
	);
}

export function useBilling() {
	const ctx = useContext(BillingContext);
	if (!ctx) throw new Error('useBilling must be used within BillingProvider');
	return ctx;
}
