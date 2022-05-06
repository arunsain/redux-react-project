export const depositMoney = (amount) =>{

return (dispatch) =>{
    dispatch({
        type: "deposit",
        payload : amount
    })
}

}


export const withdrawlMoney = (amount) =>{

    return (dispatch) =>{
        dispatch({
            type: "withdrawl",
            payload : amount
        })
    }
    
    }