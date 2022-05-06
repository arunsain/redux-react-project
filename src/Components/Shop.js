import React from 'react'
import { useDispatch } from 'react-redux'
//import { bindActionCreators } from 'redux';
import { actionCreators } from './../state/index';

export const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Deposit/Withdrawl Money</h1>
        <button className="btn btn-primary mx-2" onClick={ () => dispatch(actionCreators.withdrawlMoney(100)) } >-</button>
       Update Balance
        <button className="btn btn-primary mx-2" onClick={ () => dispatch(actionCreators.depositMoney(100)) }>+</button>

    </div>
  )
}
