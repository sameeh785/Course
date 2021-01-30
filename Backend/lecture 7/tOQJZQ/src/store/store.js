import { createStore, combineReducers, applyMiddleware } from 'redux';
import history from './../history';

import thunk from 'redux-thunk';

let initialUserData = {
    users: [],
    currentUser: {}
}

function usersSection(state = initialUserData, action) {

    if (action.type == "USER_ADDING") {
        state.users.push({ name: action.name })
    } else if (action.type == "USER_DELETE") {
        state.users.splice(action.xIndex, 1)
    } else if (action.type == "USER_LOGIN") {


        state.currentUser = action.user;
        // setTimeout(()=>{

          history.push('/dashboard')

        // })


} else if (action.type == "USER_LOGOUT") {
    state.currentUser = null;
    action.history.push('/login')
}

return state;

}

let initialProductData = {
    products: []
}

function productsSection(state, action) {



    return { name: "Khurram" };

}

let allSections = combineReducers({ usersSection, productsSection });


let myStore = createStore(allSections,{}, applyMiddleware(thunk));

export default myStore;
