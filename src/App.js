import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./utils/helpers/store";     
import Login from "./app/components/Auth/Login";
import PrivateRoute from "./private/privateRoute";

import AllKits from "./app/components/Admin/AllKits";
import axios from 'axios'



import PatientDashboard from "./app/components/Patient/PatientDashboard";
import Admin from './app/components/layout/Admin/Admin'
import Agent from "./app/components/layout/Agent/Agent";







// LocalstorageService

// Add a request interceptor
axios.interceptors.request.use(
   config => {
 
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`   
      }

       // config.headers['Content-Type'] = 'application/json';

       console.log(config)
       return config;
   },
   error => {
       Promise.reject(error)
   });



//Add a response interceptor

axios.interceptors.response.use((response) => {
   return response
}, function (error) {
   const originalRequest = error.config;

   if (error.response.status === 401 && originalRequest.url === 'http://45.76.141.84:8080/authenticate') {
    window.location.href = '/'
       return Promise.reject(error);
   }

   if (error.response.status === 401 && !originalRequest._retry) {

       originalRequest._retry = true;
       const refreshToken = localStorage.getItem('refresh_token');
       return axios.post('/auth/token',
           {
               "refresh_token": refreshToken
           })
           .then(res => {
               if (res.status === 201) {
                const token = localStorage.getItem('access_token');
                   
                   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                   return axios(originalRequest);
               }
           })
   }
   return Promise.reject(error);
});




function App() { 

  return (
    <Provider store={store} responsive>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard/"   component={Admin} />
          <PrivateRoute exact path="/dash"   component={AllKits} />
          <PrivateRoute excat path='/agent' component={Agent} />
          <PrivateRoute exact path="/patient" component={PatientDashboard}/>
          <PrivateRoute exact path="/adduser" component={Admin} />
          <PrivateRoute exact path="/allusers" component={Admin} />
          <PrivateRoute exact path="/addpatient" component={Agent} />
          <PrivateRoute exact path="/allpatients" component={Agent} />
          <PrivateRoute exact path="/patientDetails/:id" component={Agent} />
          <PrivateRoute excat path="/test/:id" component={Agent} />
          <PrivateRoute excat path='/onescreen/:id' component={Agent} />
          <PrivateRoute excat path='/mytests' component={Agent} />
          <PrivateRoute exact path="/allkits" component={Agent} />
          <PrivateRoute exact path="/newkit" component={Agent} />
          <PrivateRoute excat path='/patient' component={Agent} />
        
        
      
        </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;

