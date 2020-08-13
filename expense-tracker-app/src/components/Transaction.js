import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = props.transaction.amount < 0 ? '-' : '+';

    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {props.transaction.text} <span> {sign}Rp{Math.abs(props.transaction.amount)} </span> <button onClick={ () => deleteTransaction(props.transaction.id) }className="delete-btn">x</button>
        </li>
    )
}
