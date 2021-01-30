import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class Dashboard extends React.Component {

    render = () => {

        return <div>
            <h1>this nis dashboared here</h1>
            <Link to="/">Home go</Link>
        </div>

    }
}