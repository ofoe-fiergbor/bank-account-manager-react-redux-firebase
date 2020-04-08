export const signIn = (email, password) => {

    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                })
            }).catch((err) => {
                dispatch({
                    type: 'LOGIN_ERR',
                    err
                })
            })
    }
}

export const signOut = () => {

    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: 'SIGN_OUT_SUCCESS' })
            })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirestore()
       
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(resp => {
                return firestore
                    .collection('users')
                    .doc(resp.user.uid)
                    .set({
                        firstName:newUser.firstName, 
                        lastName:newUser.lastName, 
                        email: newUser.email,
                        initials : newUser.firstName[0]+newUser.lastName[0]
                    })
            
            })
            .then(()=>{
                dispatch({type: 'SIGNUP_SUCCESS'})
            })
            .catch(
                (err)=>{dispatch({type:'SIGNUP_FAIL', err})}
            )
    }
}
export const authenticateWithGoogle=()=>{
    return (dispatch, getState, {getFirebase})=>{
        let firebase = getFirebase()
        const provider  = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((user)=>{
                console.log(user)
            })
            .catch((e)=>{
                console.log(e)
            })
    }
}