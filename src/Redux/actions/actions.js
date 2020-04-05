

export const addAccount = account =>{
    return async(dispatch, getState,{getFirestore})=>{
        const firestore = getFirestore()
        try{
            await firestore.collection('accounts').add({...account, timestamp:firestore.FieldValue.serverTimestamp()})
        }
        catch(err) {
            console.log(err)
        }
    }
}

// export const addAccount = (account)=>{
//    return{
//     type: 'ADD_ACCOUNT',
//     payload:account
//    }
// }

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

export const getAllAccounts =()=>{
    return async(dispatch,getState,{getFirestore})=>{
        let firestore = getFirestore()
        await firestore
        .collection('accounts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot)=>{
            let accounts = snapshot.docs.map(
                (doc)=>{
                return{...doc.data(), id:doc.id}
            })
            dispatch({
                type:'UPDATE_ALL_ACCOUNTS', 
                payload:accounts
            })
        })
    }
}

