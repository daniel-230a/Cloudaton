import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Activate from './containers/Activate';
import Dashboard from './containers/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/reset-password' element={<ResetPassword/>} />
                    <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
                    <Route path='/activate/:uid/:token' element={<Activate/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                </Routes>
            </Layout>
        </Router>
    </Provider>

);

export default App;