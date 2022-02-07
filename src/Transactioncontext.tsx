import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode,
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
export const TransactionContext = createContext<Transaction[]>([]);
export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
} 

