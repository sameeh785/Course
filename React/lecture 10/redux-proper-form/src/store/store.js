import { createStore, combineReducers } from 'redux';
let initialProductData = {
    user: [],
    show : 1
}
function users(state = initialProductData , action) {
    state = {...state}

    if(action.type == 'User-Add'){
        state.user.push(action.user);
        state.show = action.display;
    }else if(action.type == 'Find-User'){
        let User = state.user.find((item) =>{
                 if(item.name2 == action.userName && item.mail2 == action.userEmail){
                   return item
                 }
                })
              
                if(User){
                action.history.push('/dashboard/'+User.name2)
                }
                else{
                    alert('Access not guranted')
                }

    }

    return state;

}

let reducers = combineReducers({users})

let store = createStore(reducers);


export default store;


//we used combineReducer when we have more than one section or reducer in our store