import { createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
let initialUserData = {
    users : [],
    currentUser: {}
}

function usersSection(state = initialUserData, action) {

state = {...state}

    if (action.type == "USER_SIGNUP") {
        console.log("Data is going")

     
    } else if (action.type == "getUsers") {
        state.users = action.data;
       
    } else if (action.type == "USER_LOGIN") {


        state.currentUser = action.user;
        // action.history1.push('/dashboard')
        // console.log(state.currentUser)
    
        // action.history.push('/dashboard')



} else if (action.type == "USER_LOGOUT") {
    state.currentUser = null;
    action.history.push('/login')
} else if(action.type == 'updatedUser'){
    state.users.splice(action.arrayIndex,1);
    

} else if(action.type == "USER_UPDATED"){
    state.users[action.arrayIndex]= action.newData

}

return state;

}



let allSections = combineReducers({ usersSection});


let myStore = createStore(allSections,{},applyMiddleware(thunk));

export default myStore;
