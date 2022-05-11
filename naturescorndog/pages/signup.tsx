import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/SignUp.module.css";

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
    <div className={styles.main}>
      <div>
        <Paper elevation={3} className={styles.container}>
          <div>
            <h1>Signup</h1>
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

          <div>
            <Button variant="outlined" onClick={() => handleSignup()}>
              Sign Up
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Signup;
