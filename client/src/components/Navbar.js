import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        checkToken();
    }, []);

    const axiosJWT = axios.create();
    const checkToken = async () => {
        const response = await axiosJWT.get(process.env.REACT_APP_APILINK + 'checkToken', {});
        setToken(response.data);
    }

    const history = useNavigate();

    const Logout = async () => {
        try {
            await axios.delete(process.env.REACT_APP_APILINK + 'logout');
            setToken('');
            history("/");
        } catch (error) {
            console.log(error);
        }
    }

    const Login = () => ( history('/login') )
    const Register = () => ( history('/register') )

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
                    </a>

                    <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        {token
                        ? <><a href="/" className="navbar-item">Home</a><a href="/dashboard" className="navbar-item">Dashboard</a></>
                        : <></>
                        }
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {token
                                ? <button onClick={Logout} className="button is-light">Log Out</button>
                                : <><button onClick={Login} className="button is-light">Login</button><button onClick={Register} className="button is-light">Register</button></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar