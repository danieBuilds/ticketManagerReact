import {useState, useEffect} from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(e) {
        const {name, value} = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && 
            storedUser.username === loginData.username && 
            storedUser.password === loginData.password) {

            navigate("/dashboard");
        } else {
        
            setError('Invalid username or password');
        }
    }

    return(
        <>
            <section id="login">
                <form action={handleSubmit} onSubmit={handleSubmit}>
                    <h1>Welcome!</h1>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <label htmlFor="username">username</label>
                    <input 
                        name="username" 
                        type="text" 
                        value={loginData.username}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                    <input type="submit" value="Login" />
                </form>
            </section>
        </>
    )
}