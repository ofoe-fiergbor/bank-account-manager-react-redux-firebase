const initialState ={
    authError: null
}

 const authReducer=(state= initialState, action)=>{
    switch(action.type){
        case 'LOGIN_ERR':
            console.log('login fail')
            return {
                ...state,
                authError: 'Login Fail'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('sign out success')
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_FAIL':
            console.log('sign up fail')
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer