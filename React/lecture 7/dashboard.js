// import TransactionForm from './components/TransactionForm';
// import NewTransactions from './components/Transactions';
// import React from 'react';
// import { Provider, connect } from 'react-redux';
// import myStore from './store';

// class MyComponent extends React.Component {

//     componentWillUnmount = () => {

//         console.log(this.props.cItem);

//     }

//     render() {

//         return <li onClick={() => {

//             this.props.onDelete(this.props.index);

//         }}>{this.props.cItem}</li>;

//     }

// }


// class Dashboard extends React.Component {

//     state = {
//         data: ['FSD', "LHR", "KHU", "QTA"]
//     };

//     constructor() {
//         super();




//     }

//     componentDidUpdate = () => {

//         console.log(33);
//         console.log(window.$('#test').html())

//     }

//     componentDidMount = () => {

//         // window.$("#newCode").draggable();

//     }

//     onDelete = (index) => {

//         this.state.data.splice(index, 1);
//         this.setState(this.state);

//     }

//     render() {



//         return <div>

//             <button onClick={() => {

//                 Axios.get('/logout').then((resp) => {

//                     this.props.history.push("/login");

//                 })

//             }}>Logout</button>

//             <ul>
//                 {this.state.data.map((item, index) => {

//                     return <MyComponent index={index} onDelete={this.onDelete} cItem={item} />

//                 })}

//             </ul>

//             <button onClick={() => {

//                 this.setState({ name: "FSD" });
//                 console.log(window.$('#test').html())

//             }}>Click me</button>
//             <h1>Welcome to Gamica Bank of Pakistan, {this.props.abc.loggedUser.username}</h1>

//             <TransactionForm />

//             <NewTransactions />

//             <div style={{ width: '100px', height: '100px', backgroundColor: "green" }} id="newCode">
//             </div>

          
//         </div>

//     }


// }

// export default connect((store) => {
//     return {
//         city: 20,
//         abc: store.UserSection
//     }

// })(Dashboard)