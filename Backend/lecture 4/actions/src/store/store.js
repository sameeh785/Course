import { createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
let initialUserData = {
    currentUser: {}
}

function usersSection(state = initialUserData, action) {

    if (action.type == "USER_SIGNUP") {
        console.log("Data is going")

     
    } else if (action.type == "USER_DELETE") {
       
    } else if (action.type == "USER_LOGIN") {


        state.currentUser = action.user;
        // action.history1.push('/dashboard')
        // console.log(state.currentUser)
    
        // action.history.push('/dashboard')



} else if (action.type == "USER_LOGOUT") {
    state.currentUser = null;
    action.history.push('/login')
}

return state;

}



let allSections = combineReducers({ usersSection});


let myStore = createStore(allSections,{},applyMiddleware(thunk));

export default myStore;
