
import React from 'react';
export class Student extends React.Component {

    render = () => {

        return <tr>
            <td>{JSON.stringify(this.props.name)}</td>
            <td>
                <button onClick={()=>{

                    this.props.abc(this.props.index)


                }}>Delete</button>
            </td>
        </tr>

    }

}