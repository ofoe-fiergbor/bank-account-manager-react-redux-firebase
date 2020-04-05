const initialState = [
    { accountName: 'Major Expense Account', accountNumber: '0087557890973', bankName: 'ABSA', bankBranch: 'High Street', id: '9876g' },
    { accountName: 'Minor Expense Account', accountNumber: '0085557890973', bankName: 'EcoBanl', bankBranch: 'Tesano', id: '9976g' },
    { accountName: 'Project Expense Account', accountNumber: '0087557890973', bankName: 'ABSA', bankBranch: 'High Street', id: '9556g' },
    { accountName: 'Fixed Expense Account', accountNumber: '0087557890973', bankName: 'Standard Chartered', bankBranch: 'James Town', id: '9126g' },
]

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return [action.payload, ...state]

        case 'EDIT_ACCOUNT':
            let newAccounts = state.map(item=>{
                if(item.id===action.payload.id){
                    return action.payload;
                }else{
                    return item;
                }
            });
            return newAccounts;
        case 'DELETE_ACCOUNT':
            let accounts = state.filter(item=>{
                return item.id!==action.payload
            })
            return accounts;

        default:
            return state;
    }
}

export default accountReducer