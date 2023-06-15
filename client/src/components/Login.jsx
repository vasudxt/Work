import {React, useState} from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
            await axios.post("http://localhost:8080/login",{
                username, password
            } )
            .then((response) => {
                if(response.status===200)
                {
                    window.location.href = 'http://localhost:3000/home';

                }
                else
                {
                    alert("wrong userid or password");
                window.location.href = 'http://localhost:3000';
                }


            }, (error) => {
                console.log(error);

            });
        
    }

    return (

        <div class="main">
            <div class="container">
                <div class="heading">
                <h1>Sign In</h1>
                <div class="formContainer text-center border border-primary ">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" value={username}
                        onChange={(event) =>setUsername(event.target.value)}  />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
                </form>

                </div>
                </div>
                
            </div>
            </div>
        
    )
}

export default Login