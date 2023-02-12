import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("userData : ", userData);
    localStorage.setItem("userCredentials", userData);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const handleChange = (e) => {
    if (
      e.target.name === "userName" &&
      (e.target.value === "" || e.target.value !== "krishnaPatel9104")
    ) {
      setError("Opps! Wrong username!!!");
    } else if (
      e.target.name === "password" &&
      (e.target.value === "" || e.target.value !== "krishil9104")
    ) {
      setError("Opps! Wrong password!!!");
    } else {
      setError("");
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };
  console.log("user info : ", userData);
  return (
    <form>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "10%",
          gap: "20px",
        }}
      >
        {error && <Box sx={{ color: "red", fontSize: "22px" }}>{error}</Box>}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "40px",
            backgroundColor: "#EFEFEF",
            height: "500px",
            width: "30%",
            padding: "0 50px",
          }}
        >
          <TextField
            id="standard-number"
            label="User Name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            name="userName"
            variant="standard"
            placeholder="Enter username"
            sx={{
              fontSize: "22px",
              width: "100%",
              marginBottom: { xs: "50px", md: "0" },
              "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
                fontSize: "22px",
              },
              "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root": {
                marginTop: "30px !important",
              },
              "& .MuiFormHelperText-root": {
                color: "red",
              },
            }}
          />
          <TextField
            id="standard-number"
            label="Password"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            name="password"
            variant="standard"
            placeholder="Enter password"
            sx={{
              fontSize: "22px",
              width: "100%",
              marginBottom: { xs: "50px", md: "0" },
              "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
                fontSize: "22px",
              },
              "& label+.css-v4u5dn-MuiInputBase-root-MuiInput-root": {
                marginTop: "30px !important",
              },
              "& .MuiFormHelperText-root": {
                color: "red",
              },
            }}
          />
          <Button
            className="btn-success mt-2"
            id="login-btn"
            sx={{ backgroundColor: "lightgray", color: "black", width: "100%" }}
            onClick={(e) => handleClick(e)}
          >
            Login
          </Button>
        </Box>
      </Box>
    </form>
  );
};