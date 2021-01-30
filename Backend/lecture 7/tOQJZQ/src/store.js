

// Systemjs format
import { createStore, combineReducers } from 'redux';


// //commonJS format
// let sdsds = require('redux').createStore;


let initialUserData = {
    users: [
        {
            name: 'hamza'
        },
        {
            name: 'arslan'
        }
    ]
};

function userReducer(state = initialUserData, action) {

    state = JSON.parse(JSON.stringify(state));
    // state = { ...state };

    if (action.type == "DELETE_ITEM") {
        state.users.splice(action.cIndex, 1)
    }else if(action.type == "ADD_ITEM"){
        state.users.push({
            name:"BLAH BLAH"
        });
    }

    // state.users.push(action.newUser);

    return state;

}

function postReducer(state, action) {

    return 20;
}

let reducer = combineReducers({ userReducer, postReducer });

let store = createStore(reducer);

export default store;





// import { createStore, combineReducers } from 'redux';
// import { createStore, combineReducers } from 'redux';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web;

// let studentsData = {
//     users: []
// }




// function studentReducer(state = studentsData, action) {

//     state = JSON.parse(JSON.stringify(state));

//     if (action.type == "USER_SIGNUP") {
//         state.users.push(action.data);
//         console.log(state.users);
//     } else if(action.type == "DELETE_USER"){

//         state.users.splice(action.index, 1);

//     } else if(action.type == "persist/REHYDRATE"){

//         return state;

//         // return action.payload.studentReducer;

//     } else if (action.type == "USER_LOGIN") {

//         let userFound = state.users.find((user) => {

//             if (user.username == action.data.username && user.userPassword == action.data.userPassword) {
//                 return true;
//             }

//         });

//         if (userFound) {
//             alert("User found");
//             action.ctx.props.history.push('/dashboard');
//         } else {
//             alert("Not found");
//         }

//     }

//     return state;
// }

// function teacherReducer(state, action) {

//     return "FSD";

// }

// let reducer = combineReducers({ studentReducer, teacherReducer })

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// let store = createStore(persistedReducer);
// let persistor = persistStore(store)

// export {

//     store,
//     persistor
// }

// // export default store;
