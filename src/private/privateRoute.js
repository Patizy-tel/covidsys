import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const  privateRoute = ({ component: Component, roles ,auth, ...rest }) => (

    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem('access_token');
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/'}} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)


export default privateRoute