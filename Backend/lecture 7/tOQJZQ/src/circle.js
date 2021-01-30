import React from 'react';


export default class Calcualtor extends React.Component {

    addNumbers = ()=>{

       this.refs.three.value =  +this.refs.two.value +  +this.refs.one.value;

    }

    render() {

        return <div>
            
            <input ref="one" />
            <input ref="two" />
            <input ref="three" />

            <button onClick={this.addNumbers}>SUM</button>
        </div>

    }


}


// import React from 'react';
// import './shape.css';

// export default class  Circle extends React.Component {


//     render() {

//         return <div className="shape">
//                 <img onClick={this.props.deleteCircle} src="circle.png" />
//         </div>

//     }


// }