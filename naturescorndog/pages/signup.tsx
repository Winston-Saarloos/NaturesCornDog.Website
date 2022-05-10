import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { user, signup } = useAuth();
  console.log(user);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      await signup(data.email, data.password);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1>Signup</h1>
      <TextField
        id="txtEmail"
        label="Email"
        variant="outlined"
        onChange={(e: any) =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
        value={data.email}
        type="email"
      />

      <TextField
        id="txtPassword"
        type="password"
        label="Password"
        variant="outlined"
        onChange={(e: any) =>
          setData({
            ...data,
            password: e.target.value,
          })
        }
        value={data.password}
      />

      <Button variant="outlined" onClick={() => handleSignup()}>Sign Up</Button>
    </div>
  );
};

export default Signup