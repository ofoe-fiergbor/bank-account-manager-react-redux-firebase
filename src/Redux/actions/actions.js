export const addAccount = (account)=>{
   return{
    type: 'ADD_ACCOUNT',
    payload:account
   }
}

export const editAccount = account =>{
    return{
        type:'EDIT_ACCOUNT',
        payload:account
    }
}
export const deleteAccount = id =>{
    return{
        type:'DELETE_ACCOUNT',
        payload:id
    }
}

