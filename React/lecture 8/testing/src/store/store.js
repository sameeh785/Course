import {createStore, combineReducers} from 'redux';

function usersSection(){

    return [{name:"Khurram"}, {name:"rameez"}, {name:"umar"}];

}

function productsSection(){

    return {name:"Khurram"};

}

let allSections = combineReducers({usersSection, productsSection});


let myStore = createStore(allSections);

export default myStore;



// import { createStore, combineReducers } from "redux";
// let initData = {
//     users: []
// }

// function userSection(state = initData, action) {
//     // if(action.type == "USER_BANRAH"){
//     //     state.users.push(action.data)
//     // }
//     return state
// }
// let reducers = combineReducers({ userSection });

// let store = createStore(reducers);

// export default store;








