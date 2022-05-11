import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import { useAuth } from '../context/AuthContext';
import styles from "../styles/Login.module.css";

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    console.log("Called login");

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <Paper elevation={3} className={styles.container}>
          <div>
            <h1>Login</h1>
          </div>
          <div className={styles.elementContainer}>
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
              className={styles.textField}
            />
          </div>

          <div className={styles.elementContainer}>
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
              className={styles.textField}
            />
          </div>
          <div className={styles.elementContainer}>
              Don&apos;t have an account already? Sign Up
          </div>
          <div>
            <Button variant="outlined" onClick={() => handleLogin()}>
              Login
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Login