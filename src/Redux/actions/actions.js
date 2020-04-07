

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


export const editAccount = account =>{
    return async(dispatch, getState,{getFirestore})=>{
        const firestore = getFirestore()
        try{
            await firestore.collection('accounts').doc(account.id).update(account)
        } catch (err){
            console.log(err)
        }
    }
}
export const deleteAccount = id =>{
   return async(dispatch, getState,{getFirestore})=>{
       const firestore = getFirestore()
       console.log(firestore)
       try{
           await firestore.collection('accounts').doc(id).delete()
       }catch (err){
           console.log(err)
       }
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


