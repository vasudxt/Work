import {React, useState} from 'react';
import axios from 'axios';

const Signup = () => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
       await axios.post("http://localhost:8080/register", {
            name,
            username,
            password,

        })
        .then((response) => {
            if(response.status === 200)
            {
                alert("Signup Successfully... press OK to redirect to login page");
                window.location.href= 'http://localhost:3000';
            }
            if(response.status === 201)
            {
                alert("Username already exist");
                window.location.href= 'http://localhost:3000/signup';

            }
        }, (error) => {
            console.log(error)

        });
  

  }


  return (
    <div class="container">
                <div class="heading">
                    <h1>Sign Up</h1>
                    <div class= "formContainerSignup text-center border border-primary">
                <form>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" placeholder='Name' value={name}
                        onChange={(event) => setName(event.target.value) } />
        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder='Email' value={username}
                        onChange={(event) =>setUsername(event.target.value)} />
        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="pass" placeholder='Password' value={password}
                        onChange={(event) =>setPassword(event.target.value)}  />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                 
                </form>

                </div>

                </div>
                
            </div>
  )
}

export default Signup