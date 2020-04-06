const initialState = {
    accounts:[],
    isLoading: true
}
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'ADD_ACCOUNT':
        //     return [action.payload, ...state]

        // case 'EDIT_ACCOUNT':
        //     let newAccounts = state.map(item=>{
        //         if(item.id===action.payload.id){
        //             return action.payload;
        //         }else{
        //             return item;
        //         }
        //     });
        //     return newAccounts;
        // case 'DELETE_ACCOUNT':
        //     let accounts = state.filter(item=>{
        //         return item.id!==action.payload
        //     })
        //     return accounts;
        case 'UPDATE_ALL_ACCOUNTS':
            return{
                accounts: action.payload,
                isLoading: false
            }

        default:
            return state;
    }
}

export default accountReducer