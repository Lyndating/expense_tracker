import React, {useState, useEffect} from 'react';
import NewTransaction from './NewTransaction';
import Transactions from './Transactions';
import createRequest from '../../request';
import TransactionItem from './TransactionItem';

const TransactionsDisplay = () => {
    const [transactions, setTransactions] = useState([]);


    // const input = '/transactions.json';
    // useEffect(()=>{
    //     const fetchTransactions = async() => { 
    //         createRequest(input).then((data)=> {
    //             console.log(data);
    //             setTransactions(data);       
    //         })
    //     }   
    //     const timer = setTimeout(()=>{
    //         fetchTransactions();
    //     }, 1000);
    //     return () => clearTimeout(timer);    
    // }, [input]);

    useEffect(() => {
        const fetchTransactions = () => { 
            createRequest('/transactions.json')
            .then(result => {
                setTransactions(result); 
            })
        }   
        // const timer = setTimeout(()=>{
            fetchTransactions();
        // }, 1000);
        // return () => clearTimeout(timer);    
    }, []);

    const addTransactionHandler = (transaction) => {
        setTransactions((prevTransactions) => {
          return [transaction, ...prevTransactions];
        });
    };

    const deleteTransactionHandler = (deletedId) => {
        setTransactions((prevTransactions) => {
            const delelteTransaction = prevTransactions.filter(function (transaction) {
                return transaction.id != deletedId
            });
            return delelteTransaction
        });
    };

    return (
        <div >
            <NewTransaction onAddTransaction={addTransactionHandler}/>
            <Transactions items={transactions} onDeleteTransaction={deleteTransactionHandler}/>
        </div>
    )

}

export default TransactionsDisplay;