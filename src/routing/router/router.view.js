import React from "react";
import {
    // BrowserRouter as Router, // for heroku
    HashRouter as Router, // for github pages
    Route,
} from "react-router-dom";
import Home from '../../views/home';
import routes from "../routes";
import {Helmet} from 'react-helmet-async';


export default class extends React.PureComponent {

    render() {
        const { title = "App"} = this.props;
        return (
            <>

                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Router basename='/'>
                    <Route exact path="/" component={Home}/>
                </Router>
            </>
        );
    }
}
