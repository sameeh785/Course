import React from 'react';


export class Ad extends React.Component {

  state = {
    num: 20
  }

  purchase = () => {

    alert("A");
  }

  render() {
    return <div className="some" style={{ color: 'red' }}>
      <h1>{this.props.category} Range {this.props.range}</h1>
      <button onClick={this.purchase}>Purchase Item</button>
      <button onClick={() => {
        this.setState({
          num: ++this.state.num
        })
      }}>Purchase Item</button>
      <h1>some content in heasdasdasdre</h1>
    </div>
  }

}