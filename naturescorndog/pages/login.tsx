import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async () => {
    console.log("Called login");

    console.log(user)
    try {
      await login(data.email, data.password);
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1>Login</h1>
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
      <Button variant="outlined" onClick={() => handleLogin()}>Login</Button>
    </div>
  );
}

export default Login