import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Css/login.css"


export default function Login() {
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    const login = async () => {
        const userres = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        let userData = await userres.json();
        console.log(userData);
        if (userData) {
            localStorage.setItem("auth-token", userData);
            navigate('/');
        }
        else {
            alert("Unsuccessfull");
        }
    }

    const signup = async () => {
        const userres = await fetch('http://localhost:5000/api/auth/createuser', {
            method: "POST",
            headers: {
                // Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        let userData = await userres.json();
        console.log(userData);
        if (userData) {
            localStorage.setItem("auth-token", userData);
            navigate('/');
        }
        else {
            alert("unsuccessful");
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="wrapper">
                    <div className="card-switch">
                        <label className="switch">
                            <input type="checkbox" className="toggle" />
                            <span className="slider"></span>
                            <span className="card-side"></span>
                            <div className="flip-card__inner">
                                <div className="flip-card__front">
                                    <div className="title">Log in</div>
                                    <form className="flip-card__form" onSubmit={handlesubmit}>
                                        <input class="flip-card__input" value={formData.email} onChange={onChange} type="email" name="email" placeholder="Email" required="" />
                                        <input class="flip-card__input" type="password" value={formData.password} onChange={onChange} name="password" placeholder="Password" required="" />
                                        <button class="flip-card__btn" onClick={login}>Log in</button>
                                    </form>
                                </div>
                                <div className="flip-card__back">
                                    <div className="title">Sign up</div>
                                    <form className="flip-card__form" onSubmit={handlesubmit}>
                                        <input class="flip-card__input" type="text" value={formData.name} onChange={onChange} name="name" placeholder="Name" required="" />
                                        <input class="flip-card__input" type="email" value={formData.email} onChange={onChange} name="email" placeholder="Email" required="" />
                                        <input class="flip-card__input" type="password" value={formData.password} onChange={onChange} name="password" placeholder="Password" required="" />
                                        <button class="flip-card__btn" onClick={signup}>Register</button>
                                    </form>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
