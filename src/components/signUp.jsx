import { useEffect, useState } from "react";
import "../styles/signUp.css";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
    
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user])

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }
    const navigate = useNavigate();
    function handleSubmit(e) {

        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
    }

    return(
        <>
            <section id="signup">

             <form onSubmit={handleSubmit} method="post">
                <h1>Create your account</h1>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={user.username}
                    onChange={handleChange}
                    required 
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={user.email}
                    onChange={handleChange}
                    required 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={user.password}
                    onChange={handleChange}
                    required 
                />
                <input type="submit" value="Sign Up" />
            </form>
            </section>
        </>
    )
}